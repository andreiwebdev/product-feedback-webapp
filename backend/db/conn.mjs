import { MongoClient } from "mongodb";

const connectionString = process.env.MONGO_URI;
const client = new MongoClient(connectionString);

let conn;
try {
    conn = await client.connect();
} catch (e) {
    console.error(e);
}

// let db = conn.db("sample_training");
let db = conn.db(process.env.MONGO_DB_NAME);
export default db;