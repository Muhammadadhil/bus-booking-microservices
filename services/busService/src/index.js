import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/dbConfig.js";
import busRouter from "./routes/busRouter.js";

dotenv.config({ path: "../" });
const PORT = process.env.BUS_SERVICE_PORT || 3011;

const app = express();

connectDB();

app.use(express.json());

app.use("/", busRouter);

app.listen(PORT, () => console.log(`product service is running on ${PORT}`));
