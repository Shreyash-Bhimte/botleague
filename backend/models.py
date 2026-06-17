from pydantic import BaseModel

class User(BaseModel):
    name: str
    email: str

class Registration(BaseModel):
    name: str
    location: str
    email: str
    role: str