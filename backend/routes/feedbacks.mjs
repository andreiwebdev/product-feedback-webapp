import express from "express";
import db from "../db/conn.mjs";
import mongodb from "mongodb";

const router = express.Router();

// Get a list of 50 feedbacks
router.get("/", async (req, res) => {
    const limit = 10;
    const offset = parseInt(req.query.offset) || 0;

    try {
        let collection = await db.collection("feedbacks");
        let results = await collection
            .find({})
            .sort({ upvotes: -1 }) // Sort by upvotes in descending order
            .skip(offset)
            .limit(limit)
            .toArray();

        res.send(results).status(200);
    } catch (error) {
        console.error("Failed to fetch feedbacks:", error);
        res.status(500).send({ message: "Failed to fetch feedbacks" });
    }
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
    try {
        const collection = await db.collection("feedbacks");

        // Get count of feedbacks
        const count = await collection.countDocuments();

        // Group feedbacks by status and count the number of features for each status
        const feedbacksByStatus = await collection
            .aggregate([
                {
                    $group: {
                        _id: "$status",
                        numberOfFeatures: { $sum: 1 },
                        features: {
                            $push: {
                                id: "$_id",
                                title: "$title",
                                description: "$description",
                                category: "$category",
                                upvotes: "$upvotes",
                                comments: { $size: "$comments" },
                                status: "$status",
                            },
                        },
                    },
                },
            ])
            .toArray();

        // Sort features within each status group by upvotes (from most to least voted)
        feedbacksByStatus.forEach((statusGroup) => {
            statusGroup.features.sort((a, b) => b.upvotes - a.upvotes);
        });

        // Sort feedbacks by status
        feedbacksByStatus.sort((a, b) => {
            const statusOrder = { Planned: 1, "In-Progress": 2, Live: 3 };
            return statusOrder[a._id] - statusOrder[b._id];
        });

        console.log(count, feedbacksByStatus);

        res.status(200).json({ count, feedbacksByStatus });
    } catch (error) {
        console.error("Failed to fetch feedbacks:", error);
        res.status(500).json({ message: "Failed to fetch feedbacks" });
    }
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

// Get a single feedback by ID
router.get("/:id", async (req, res) => {
    const feedbackId = req.params.id;

    try {
        const collection = await db.collection("feedbacks");
        const feedback = await collection.findOne({
            _id: new mongodb.ObjectId(feedbackId),
        });

        if (!feedback) {
            return res.status(404).json({ message: "Feedback not found" });
        }

        res.json(feedback).status(200);
    } catch (error) {
        console.error("Failed to fetch feedback:", error);
        res.status(500).json({ message: "Failed to fetch feedback" });
    }
});

// Add a comment to a feedback
router.post("/:id/comments", async (req, res) => {
    const feedbackId = req.params.id;
    const { comment } = req.body;

    try {
        const collection = await db.collection("feedbacks");
        const feedback = await collection.findOneAndUpdate(
            { _id: new mongodb.ObjectId(feedbackId) },
            { $push: { comments: comment } }, // Add the comment to the comments array
            { returnOriginal: false }
        );

        res.json(feedback.value).status(200);
    } catch (error) {
        console.error("Failed to add comment:", error);
        res.status(500).json({ message: "Failed to add comment" });
    }
});

export default router;
