import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/booking-busService";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(MONGODB_URI);
        console.log(`MongoDB Connected for bus-service: ${conn.connection.host} port:${conn.connection.port}`);
    } catch (error) {
        console.error(`MongoDB Connection Error:${error.message}`);
    }
};

export default connectDB;
