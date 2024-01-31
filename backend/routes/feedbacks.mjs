import express from "express";
import db from "../db/conn.mjs";

const router = express.Router();

// Get a list of 50 feedbacks
router.get("/", async (req, res) => {
    const limit = 10;
    const offset = parseInt(req.query.offset) || 0;

    let collection = await db.collection("feedbacks");
    let results = await collection.find({}).skip(offset).limit(limit).toArray();

    res.send(results).status(200);
});

// Add a new document to the collection
router.post("/", async (req, res) => {
    let collection = await db.collection("feedbacks");
    let newDocument = req.body;
    newDocument.date = new Date();
    let result = await collection.insertOne(newDocument);
    res.send(result).status(204);
});

export default router;
