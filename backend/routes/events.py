from fastapi import APIRouter
from database import events_collection

router = APIRouter()

def seed_events():
    if events_collection.count_documents({}) == 0:
        events_collection.insert_many([
            {"name": "Bengaluru Regionals", "location": "Bengaluru", "date": "2025-01-15", "category": "Robo War", "status": "live"},
            {"name": "Event in Mumbai", "location": "Mumbai", "date": "2025-11-17", "category": "Robo Race", "status": "upcoming"},
            {"name": "Event in Delhi", "location": "Delhi", "date": "2025-11-17", "category": "Line Follower", "status": "upcoming"},
        ])

@router.get("/events")
def get_events():
    seed_events()   # ← only runs when endpoint is called
    events = []
    for event in events_collection.find():
        events.append({
            "name": event["name"],
            "location": event["location"],
            "date": event["date"],
            "category": event["category"],
            "status": event["status"]
        })
    return events

@router.get("/events/{status}")
def get_events_by_status(status: str):
    events = []
    for event in events_collection.find({"status": status}):
        events.append({
            "name": event["name"],
            "location": event["location"],
            "date": event["date"],
            "category": event["category"],
            "status": event["status"]
        })
    return events