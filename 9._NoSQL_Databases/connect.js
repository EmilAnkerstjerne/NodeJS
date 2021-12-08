import { MongoClient } from "mongodb";

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

const dbName = "fish";

await client.connect();

const db = client.db(dbName);

const collection = db.collection("species");

// await collection.insert({ type: "Trout" });

// collection.deleteOne({ type: "" });

const species = await collection.find().toArray();

console.log(species);