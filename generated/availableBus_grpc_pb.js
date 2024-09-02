// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var availableBus_pb = require('./availableBus_pb.js');

function serialize_AvailableBusesRequest(arg) {
  if (!(arg instanceof availableBus_pb.AvailableBusesRequest)) {
    throw new Error('Expected argument of type AvailableBusesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_AvailableBusesRequest(buffer_arg) {
  return availableBus_pb.AvailableBusesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_AvailableBusesResponse(arg) {
  if (!(arg instanceof availableBus_pb.AvailableBusesResponse)) {
    throw new Error('Expected argument of type AvailableBusesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_AvailableBusesResponse(buffer_arg) {
  return availableBus_pb.AvailableBusesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var BusesServiceService = exports.BusesServiceService = {
  getAvailableBuses: {
    path: '/BusesService/GetAvailableBuses',
    requestStream: false,
    responseStream: false,
    requestType: availableBus_pb.AvailableBusesRequest,
    responseType: availableBus_pb.AvailableBusesResponse,
    requestSerialize: serialize_AvailableBusesRequest,
    requestDeserialize: deserialize_AvailableBusesRequest,
    responseSerialize: serialize_AvailableBusesResponse,
    responseDeserialize: deserialize_AvailableBusesResponse,
  },
};

exports.BusesServiceClient = grpc.makeGenericClientConstructor(BusesServiceService);
