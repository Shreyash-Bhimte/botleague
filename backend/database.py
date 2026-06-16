from pymongo import MongoClient
from dotenv import load_dotenv
import os

load_dotenv()

client = MongoClient(os.getenv("MONGO_URI"))
db = client["botleague"]

users_collection = db["users"]
events_collection = db["events"]
registrations_collection = db["registrations"]