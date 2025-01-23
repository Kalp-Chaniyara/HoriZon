import e from "express";
import { connectDB } from "./src/lib/db.js";
import dotenv from "dotenv";
import cors from "cors";
import authRoute from "./src/routes/auth.route.js";
import channelRoute from "./src/routes/channel.route.js";

dotenv.config();

const app = e();

app.use(e.json()); // To parse JSON request bodies
app.use(e.urlencoded({ extended: true }));

app.use(cors({
     origin: "http://localhost:5173",
     credentials: true,
}))

//! Webhooks Endpoint
app.use('/api/webhooks/auth/', authRoute)
app.use('/api/channel/', channelRoute)


app.listen(3000, () => {
     console.log("Server is running on port 3000");
     connectDB();
});