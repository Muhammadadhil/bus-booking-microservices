import mongoose from "mongoose";

const busInfoSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        from: {
            type: String,
            required: true,
        },
        to: {
            type: String,
            required: true,
        },
        departure: {
            type: Date,
            required: true,
        },
        duration:{
            type: Number,
        },
        status: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

const Bus = mongoose.model("Buses", busInfoSchema);
export default Bus;
