import pymongo

from flask import Flask
from flask import request, jsonify
from flask_cors import CORS

DB_client = pymongo.MongoClient("mongodb://localhost:27017")
DB = DB_client["RenZomLim_DB"]
collection = DB["potential_customers"]

app = Flask(__name__)
cors = CORS(app)
app.config["CORS_HEADERS"] = "Content-Type"


# get requests
@app.route("/get_request", methods = ["Get"])
def get_request():
    content = request.get_json()
    collection.insert_one(content)
    #request.query_string()
    pulled_data = collection.find_one({"Name":content["Name"]})
    return jsonify(pulled_data)

@app.route("/get_requests", methods = ["Get"])
def get_requests():
    content = request.get_json()
    collection.insert_one(content)
    #request.query_string()
    pulled_data = collection.find()
    return jsonify(pulled_data)

# post requests
@app.route("/create_request", methods = ["Post"])
def create_request():
    content = request.get_json()
    collection.insert_one(content)
    return jsonify({"done": True})

@app.route("/delete_request", methods = ["Post"])
def delete_request():
    content = request.get_json()
    collection.delete_one({"Name":content["Name"]})
    return jsonify({"done": True})

@app.route("/update_request", methods = ["Post"])
def create_request():
    content = request.get_json()
    values = {"$set": {"Score": content['Score']}}
    collection.update_one({"Name":content["Name"]}, values)
    return jsonify({"done": True})



if __name__ == "__main__":
    app.run()