from pydantic import BaseModel
from typing import Optional

class User(BaseModel):
    name: str
    email: str

class Registration(BaseModel):
    name: str
    location: str
    email: str
    role: str  # judge | volunteer | member