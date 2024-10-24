import os
import pymongo
from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
from potential_customers_schema import schema

load_dotenv()

MONGO_URI = os.getenv("MONGO_URI")
DB_NAME = os.getenv("MONGO_DB_NAME")

DB_client = pymongo.MongoClient(MONGO_URI)
DB = DB_client[DB_NAME]

try:
    DB.create_collection("potential_customers", validator={"$jsonSchema": schema})
except:
    pass

collection = DB["potential_customers"]

app = Flask(__name__)

cors = CORS(app)
app.config["CORS_HEADERS"] = "Content-Type"


# get requests
@app.route("/get_request", methods = ["Get"])
def get_request():
    args = request.args
    pulled_data = collection.find_one({ 
        "name": args.get("name") 
    })
    return jsonify(pulled_data)

@app.route("/get_requests", methods = ["Get"])
def get_requests():
    pulled_data = collection.find()
    return jsonify(pulled_data)


# post requests
@app.route("/create_request", methods = ["Post"])
def create_request():
    content = request.get_json()
    collection.insert_one(content["data"])

    return jsonify({
        "done": True
    })

@app.route("/delete_request", methods = ["Post"])
def delete_request():
    content = request.get_json()
    collection.delete_one({ 
        "name": content["data"]["name"]
    })

    return jsonify({
        "done": True
    })

@app.route("/update_request", methods = ["Post"])
def update_request():
    content = request.get_json()
    values = {
        "$set": { 
            "score": content["data"]['score'] 
        }
    }
    collection.update_one({ 
        "name": content["data"]["name"] 
    }, values)

    return jsonify({
        "done": True
    })


if __name__ == "__main__":
    app.run()