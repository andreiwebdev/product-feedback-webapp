import express from "express";
import cors from "cors";
import "./loadEnvironment.mjs";
import "express-async-errors";
import feedbacks from "./routes/feedbacks.mjs";

const PORT = 3001;
const app = express();

app.use(cors());
app.use(express.json());

// Load the /feedbacks routes
app.use("/feedbacks", feedbacks);

// Global error handling
app.use((err, _req, res, next) => {
    res.status(500).send("Uh oh! An unexpected error occured.");
});

// start the Express server
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
