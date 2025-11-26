from fastapi import FastAPI
from app.api.endpoints import calculator

app = FastAPI(
    title="Proving Ground Fitness API",
    description="Backend logic for fitness benchmarking and tracking.",
    version="0.1.0"
)

@app.get("/")
def read_root():
    return {"message": "Welcome to the Proving Ground Fitness API. Systems are online."}

@app.get("/health")
def health_check():
    return {"status": "healthy"}

app.include_router(calculator.router, prefix="/api", tags=["Calculator"])
