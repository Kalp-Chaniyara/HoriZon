import e from "express";
import { connectDB } from "./src/lib/db.js";
import dotenv from "dotenv";

dotenv.config();

const app = e();

app.listen(3000, () => {
     console.log("Server is running on port 3000");
     connectDB();
});