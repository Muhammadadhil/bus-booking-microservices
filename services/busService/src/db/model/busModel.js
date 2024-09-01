import mongoose from "mongoose";

const productSchema = mongoose.Schema(
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
        departureTime: {
            type: Date,
            required: true,
        },
        duration:{
            type: Number,
        },
        status: {
            type: Boolean,
            required: true,
        },
    },
    { timestamps: true }
);

const Product = mongoose.model("Products", productSchema);
export default Product;
