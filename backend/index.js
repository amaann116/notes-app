import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from "cors"
import noteRoutes from "./routes/noteRoute.js"

const app = express();

dotenv.config();
const port = process.env.port || 4002


// Database Connection
try {
    mongoose.connect(process.env.MONGO_URL)
    console.log("Successfully connected to database");
} catch (error) {
    console.log("Error in database :", error);
}

app.use(express.json());
app.use(cors());
app.use("/notes-app", noteRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});