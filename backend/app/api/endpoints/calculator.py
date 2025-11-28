# backend/app/api/endpoints/calculator.py
from fastapi import APIRouter
from pydantic import BaseModel # New Import!
from app.core.logic import calculate_rank

router = APIRouter()

# 1. Define the Shape of the Request (The JSON Body)
class CalculationRequest(BaseModel):
    test_id: str
    value: float
    age: int
    sex: str

# 2. Update the endpoint to use this Model
@router.post("/calculate")
def get_rank(request: CalculationRequest):
    """
    Endpoint to calculate fitness rank using a JSON Body.
    """
    # Note: We now access data via 'request.variable_name'
    result = calculate_rank(
        test_id=request.test_id, 
        value=request.value, 
        age=request.age, 
        sex=request.sex
    )
    return result