from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from app.core.logic import calculate_level

router = APIRouter()

class CalculationRequest(BaseModel):
    age: int
    sex: str
    current_bodyweight: float
    exercise_id: str
    raw_value: float

@router.post("/calculate")
def get_rank(request: CalculationRequest):
    result_level = calculate_level(
        sex = request.sex,
        age = request.age,
        current_bodyweight= request.current_bodyweight,
        exercise_id = request.exercise_id,
        raw_value= request.raw_value
    )
    
    if result_level == "test_not_found":
        raise HTTPException(status_code=404, detail="Exercise ID not found")
    
    return{"level": result_level}