import express from "express";
import db from "../db/conn.mjs";
import mongodb from "mongodb";

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

router.patch("/:id/vote", async (req, res) => {
    const { id } = req.params;
    const { vote } = req.body;

    try {
        const feedback = await db
            .collection("feedbacks")
            .findOneAndUpdate(
                { _id: new mongodb.ObjectId(id) },
                { $inc: { upvotes: vote } },
                { returnDocument: "after" }
            );

        if (!feedback) {
            return res.status(404).send({ message: "Feedback not found" });
        }

        res.json(feedback.upvotes);
    } catch (error) {
        console.error("Failed to update vote:", error);
        res.status(500).send({ message: "Failed to update vote" });
    }
});

// Get count of feedbacks
router.get("/count", async (req, res) => {
    let collection = await db.collection("feedbacks");
    let count = await collection.countDocuments();
    res.send({ count }).status(200);
});

// Get feedback count based on status
router.get("/status-count", async (req, res) => {
    try {
        let collection = await db.collection("feedbacks");
        const statusCounts = await collection
            .aggregate([{ $group: { _id: "$status", count: { $sum: 1 } } }])
            .toArray();

        res.json(statusCounts).status(200);
    } catch (error) {
        console.error("Failed to fetch feedback counts by status:", error);
        res.status(500).send({
            message: "Failed to fetch feedback counts by status",
        });
    }
});

export default router;
