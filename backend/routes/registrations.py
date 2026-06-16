from fastapi import APIRouter, HTTPException
from database import registrations_collection
from models import Registration

router = APIRouter()

VALID_ROLES = ["judge", "volunteer", "member"]

@router.post("/ecosystem/register")
def ecosystem_register(data: Registration):
    if data.role not in VALID_ROLES:
        raise HTTPException(status_code=400, detail="Invalid role")
    existing = registrations_collection.find_one({"email": data.email, "role": data.role})
    if existing:
        raise HTTPException(status_code=400, detail=f"Already registered as {data.role}")
    registrations_collection.insert_one({
        "name": data.name,
        "location": data.location,
        "email": data.email,
        "role": data.role
    })
    return {"message": f"Successfully registered as {data.role}"}