import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/config.js";
import userRoutes from "./routes/userRoutes.js";


const PORT = process.env.PORT || 3010;

const app = express();

dotenv.config({ path: "../../.env" });
connectDB();

app.use(express.json());

app.get("/", (req, res) => {
    res.send(" hey from userService ");
});

app.use("/", userRoutes);

console.log(process.env.JWT_SECRET);


app.listen(PORT, () => console.log(`User service is running on ${PORT}`));
