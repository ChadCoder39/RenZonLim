from pymongo import MongoClient

schema = {
        "bsonType": "object",
        "required": ["name", "number", "email", "message"],
        "properties": {
            "name": {
                "bsonType": "string",
                "description": "must be a string and is required"
            },
            "number": {
                "bsonType": "int",
                "description": "must be an integer"
            },
            "email": {
                "bsonType": "string",
                "pattern": "^.+@.+$",
                "description": "must be a valid email address and is required"
            },
            "message": {
                "bsonType": "string",
                "description": "must be a string and is required"
            }
        }
    }


