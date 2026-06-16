from fastapi import FastAPI
from models import User
from database import users_collection

app = FastAPI()


@app.get("/")
def root():
    return {"message": "BotLeague API Running"}


@app.post("/register")
def register(user: User):

    users_collection.insert_one({
        "name": user.name,
        "email": user.email
    })

    return {"message": "User registered successfully"}


@app.get("/users")
def get_users():

    users = []

    for user in users_collection.find():
        users.append({
            "name": user["name"],
            "email": user["email"]
        })

    return users