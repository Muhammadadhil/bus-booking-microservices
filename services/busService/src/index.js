import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/dbConfig.js";
import busRouter from "./routes/busRouter.js";
import grpc from "@grpc/grpc-js";
import protoLoader from "@grpc/proto-loader";
import busModel from "./db/model/busModel.js";


const packageDefinition = protoLoader.loadSync("../../protos/availableBus.proto", {});
const busesProto = grpc.loadPackageDefinition(packageDefinition).BusesService;
console.log('busesproto:',busesProto);


dotenv.config({ path: "../" });
const PORT = process.env.BUS_SERVICE_PORT || 3011;

const app = express();

connectDB();

app.use(express.json());

app.use("/", busRouter);

// const buses = [{ busId: "1", busName: "Bus A", departureTime: "10:00 AM", arrivalTime: "1:00 PM", availableSeats: 10 }];


async function getAvailableBuses(call, callback) {
    const { from, to, date } = call.request;
    console.log('HERE IN FETCHING BUSSSSSSSS');
    
    const buses = await busModel.find({ from, to },{name:1,departure:1,status:1})
    const formattedBuses = buses.map((bus) => ({
        busId: bus.busId,
        busName: bus.busName,
        departureTime: bus.departureTime,
        availableSeats: bus.availableSeats,
    }));
    console.log('buses-db:',buses);
    callback(null, { buses: formattedBuses });
}

app.listen(PORT, () => console.log(`Bus service is running on ${PORT}`));

const server = new grpc.Server();

server.addService(busesProto.service, { GetAvailableBuses: getAvailableBuses });
server.bindAsync("0.0.0.0:50051", grpc.ServerCredentials.createInsecure(), () => {
    console.log("grpc: buses service is running at http://0.0.0.0:50051");
});
