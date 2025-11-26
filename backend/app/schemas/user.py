from pydantic import BaseModel
from typing import List, Optional
from datetime import date

class PerformanceLogEntry(BaseModel):
    test_id: str
    date: date
    value: float
    unit: str
    bodyweight_at_time: float
    
class UserBase(BaseModel):
    username: str
    age: int
    sex: str
    current_bodyweight: float
    selected_theme: str

class UserData(UserBase):
    performance_log: List[PerformanceLogEntry] = []