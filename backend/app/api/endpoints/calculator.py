# backend/app/api/endpoints/calculator.py
from fastapi import APIRouter
from pydantic import BaseModel
from app.core.logic import calculate_rank
from app.db.benchmarks import MEN_STANDARDS

router = APIRouter()

# 1. Define the Shape of the Request (The JSON Body)
class CalculationRequest(BaseModel):
    exercise_id: str
    value: float
    age: int
    sex: str
    bodyweight: float = 0

# 2. Update the endpoint to use this Model
@router.post("/calculate")
def get_rank(request: CalculationRequest):
    """
    Endpoint to calculate fitness rank using a JSON Body.
    """
    # Note: We now access data via 'request.variable_name'
    result = calculate_rank(
        exercise_id=request.exercise_id, 
        value=request.value, 
        age=request.age, 
        sex=request.sex,
        bodyweight= request.bodyweight
    )
    return result

@router.get("/exercises")
def get_exercises_meta():
    """Returns a list of supported exercises for the frontend dropdowns.
       Extracts ID, Display Name, and Unit from the python constants
    """
    exercises_list = []
    
    for key, data in MEN_STANDARDS.items():
        meta = data["meta"]
        exercises_list.append({
            "id": key,
            "displayName": meta["displayName"],
            "unit": meta["unit"], # 'time', 'xBW', 'watts', 'meters', etc.
            "scoring": meta["scoring"]
        })
        
    return exercises_list