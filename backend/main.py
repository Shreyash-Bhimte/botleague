from fastapi import FastAPI
from pydantic import BaseModel
from database import users_collection

app = FastAPI()


class User(BaseModel):
    name: str
    email: str


@app.get("/")
def root():
    return {"message": "BotLeague API Running"}


@app.post("/register")
def register(user: User):

    users_collection.insert_one(
        {
            "name": user.name,
            "email": user.email
        }
    )

    return {"message": "User Registered Successfully"}


@app.get("/users")
def get_users():

    users = []

    for user in users_collection.find():

        users.append(
            {
                "name": user["name"],
                "email": user["email"]
            }
        )

    return users