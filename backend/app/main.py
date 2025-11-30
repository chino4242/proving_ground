from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.endpoints import calculator
from mangum import Mangum

app = FastAPI(
    title="Proving Ground Fitness API",
    description="Backend logic for fitness benchmarking and tracking.",
    version="0.1.0"
)

origins = [
    "http://localhost:5173",  # The React App
    "http://127.0.0.1:5173",  # Alternative localhost URL
    "https://main.d5801cajcp02c.amplifyapp.com"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.get("/")
def read_root():
    return {"message": "Welcome to the Proving Ground Fitness API. Systems are online."}

@app.get("/health")
def health_check():
    return {"status": "healthy"}

app.include_router(calculator.router, prefix="/api", tags=["Calculator"])
handler = Mangum(app)