import grpc from '@grpc/grpc-js'
import busesProto from './grpcProtoLoader.js';
import { getAvailableBuses } from './grpcHandlers.js';


const server = new grpc.Server();

server.addService(busesProto.service, { GetAvailableBuses: getAvailableBuses });
server.bindAsync("0.0.0.0:50051", grpc.ServerCredentials.createInsecure(), () => {
    console.log("grpc: buses service is running at http://0.0.0.0:50051");
});
