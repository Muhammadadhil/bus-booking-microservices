import mongoose from "mongoose";

const bookingSchema = mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        },
        busId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        },
        busName: {
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
            type: String,
            required: true,
        },
        seatNumbers: {
            type: [Number],
            required: true,
        },
        bookingDate: {
            type: Date,
            required: true,
        },
        status: {
            type: String,
            enum: ["pending", "confirmed", "canceled"],
            default: "pending",
        },
        paymentStatus: {
            type: String,
            enum: ["pending", "completed", "refunded"],
            default: "pending",
        },
    },
    { timestamps: true }
);

const Booking = mongoose.model("Bookings", bookingSchema);
export default Booking;
