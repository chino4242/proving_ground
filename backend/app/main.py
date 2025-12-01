from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from mangum import Mangum
from app.api.endpoints import calculator

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

# --- FIX FOR 502 ERROR ---
# Explicitly disable lifespan to prevent Mangum timeouts
handler = Mangum(app, lifespan="off")