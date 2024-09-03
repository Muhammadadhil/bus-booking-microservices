import grpc from "@grpc/grpc-js";
import busesProto from "./grpcProtoLoader.js";

const client = new busesProto("localhost:50051", grpc.credentials.createInsecure());

export const getAvailableBuses = async (from, to, date) => {
    return new Promise((resolve, reject) => {
        
        client.GetAvailableBuses({ from, to, date }, (err, response) => {
            if (err) {
                reject(err);
            } else {
                console.log("buses list:", response);
                resolve(response.buses)
                // return response.buses;
            }
        });
    });
};
