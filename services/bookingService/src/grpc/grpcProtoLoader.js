import grpc from "@grpc/grpc-js";
import protoLoader from "@grpc/proto-loader";

const packageDefinition = protoLoader.loadSync("../../protos/availableBus.proto", {});
const busesProto = grpc.loadPackageDefinition(packageDefinition).BusesService;

export default busesProto;
