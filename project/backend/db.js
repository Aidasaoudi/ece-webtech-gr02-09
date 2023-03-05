import { MongoClient } from "mongodb";
import { credentials } from "./config.js";
import indexes from "./db.json" assert { type: "json" };


export var db;

export async function init_db() {
	db = (await (new MongoClient(credentials.db)).connect()).db();

	for(const collection_name in indexes) {
		const collection = db.collection(collection_name);
		collection.createIndex(indexes[collection_name]);
	}
}