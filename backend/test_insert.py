from database import users_collection

users_collection.insert_one({
    "name": "test",
    "email": "test@test.com"
})

print("Inserted Successfully")