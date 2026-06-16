from pymongo import MongoClient

uri = "mongodb+srv://shreyashbhimte99_db_user:BotLeague123@botleague-cluster.tylpnok.mongodb.net/?retryWrites=true&w=majority&appName=botleague-cluster"

client = MongoClient(uri)

try:
    client.admin.command("ping")
    print("MongoDB Connected!")
except Exception as e:
    print(e)