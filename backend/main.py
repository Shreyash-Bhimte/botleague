from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes import users, events, registrations

app = FastAPI(title="BotLeague API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://botleague-rho.vercel.app", "http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(users.router)
app.include_router(events.router)
app.include_router(registrations.router)

@app.get("/")
def root():
    return {"message": "BotLeague API Running"}