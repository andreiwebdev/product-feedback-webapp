import { MongoClient } from "mongodb";

const connectionString = process.env.MONGODB_URI;
const client = new MongoClient(connectionString);

let conn;
try {
    conn = await client.connect();
} catch (e) {
    console.error(e);
}

// let db = conn.db("sample_training");
let db = conn.db("product_feedback_db");
export default db;
