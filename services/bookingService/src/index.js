import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/dbConfig.js";
import bookingRouter from "./routes/bookingRouter.js";
import grpc from "@grpc/grpc-js";
import protoLoader from "@grpc/proto-loader";

const packageDefinition = protoLoader.loadSync("../../protos/availableBus.proto", {});
// console.log(packageDefinition);

const busesProto = grpc.loadPackageDefinition(packageDefinition).BusesService;
// console.log('busesProto:',busesProto);



const client = new busesProto("localhost:50051", grpc.credentials.createInsecure());


const getAvailableBuses = async (from, to, date) => {
    client.GetAvailableBuses({ from, to, date }, (err, response) => {
        if (err) {
            return err;
        } else {
            console.log('buses list:',response);
            // return response.buses;
        }
    });
};

getAvailableBuses("calicut", "banglore", "12-09-2024");


dotenv.config({ path: "../" });
const PORT = process.env.BOOKING_SERVICE_PORT || 3012;

const app = express();

connectDB();

app.use(express.json());

app.use("/", bookingRouter);

app.listen(PORT, () => console.log(`Booking service is running on ${PORT}`));
