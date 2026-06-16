from fastapi import APIRouter, HTTPException
from database import users_collection
from models import User

router = APIRouter()

@router.post("/register")
def register(user: User):
    existing = users_collection.find_one({"email": user.email})
    if existing:
        raise HTTPException(status_code=400, detail="Email already registered")
    users_collection.insert_one({"name": user.name, "email": user.email})
    return {"message": "User Registered Successfully"}

@router.get("/users")
def get_users():
    users = []
    for user in users_collection.find():
        users.append({"name": user["name"], "email": user["email"]})
    return users