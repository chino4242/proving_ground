from fastapi import FastAPI

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

