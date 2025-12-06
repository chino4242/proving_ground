from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from mangum import Mangum
from app.api.endpoints import calculator
from app.db.benchmarks import MEN_STANDARDS, WOMEN_STANDARDS

app = FastAPI(
    title="Proving Ground Fitness API",
    version="0.1.0"
)

# --- CORS SETUP ---
origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(calculator.router, prefix="/api", tags=["Calculator"])

@app.get("/")
def read_root():
    return {"message": "Welcome to Proving Ground Fitness."}

@app.get("/health")
def health_check():
    return {"status": "healthy"}

@app.get("/exercises")
async def get_exercise_options():
    """
    Returns the metadata for all exercises.
    Frontend uses this to populate dropdowns and set input types (time vs weight).
    """
    exercise_list = []
    
    for key, data in MEN_STANDARDS.items():
        meta = data.get("meta", {})
        exercise_list.append({
            "id": key,
            "displayName": meta.get("displayName", "Unknown Exercise"),
            "unit": meta.get("unit", "xBW"),  # 'time', 'xBW', 'watts', etc.
            "scoring": meta.get("scoring", "higher_is_better")
        })
    
    return exercise_list
# --- FIX FOR 502 ERROR ---
# Explicitly disable lifespan to prevent Mangum timeouts
handler = Mangum(app, lifespan="off")