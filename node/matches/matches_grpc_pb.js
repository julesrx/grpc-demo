// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var matches_pb = require('./matches_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_CreateMatchRequest(arg) {
  if (!(arg instanceof matches_pb.CreateMatchRequest)) {
    throw new Error('Expected argument of type CreateMatchRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_CreateMatchRequest(buffer_arg) {
  return matches_pb.CreateMatchRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_CreateMatchResponse(arg) {
  if (!(arg instanceof matches_pb.CreateMatchResponse)) {
    throw new Error('Expected argument of type CreateMatchResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_CreateMatchResponse(buffer_arg) {
  return matches_pb.CreateMatchResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GetMatchByIdRequest(arg) {
  if (!(arg instanceof matches_pb.GetMatchByIdRequest)) {
    throw new Error('Expected argument of type GetMatchByIdRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GetMatchByIdRequest(buffer_arg) {
  return matches_pb.GetMatchByIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GetMatchByIdResponse(arg) {
  if (!(arg instanceof matches_pb.GetMatchByIdResponse)) {
    throw new Error('Expected argument of type GetMatchByIdResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GetMatchByIdResponse(buffer_arg) {
  return matches_pb.GetMatchByIdResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GetMatchesByIdsRequest(arg) {
  if (!(arg instanceof matches_pb.GetMatchesByIdsRequest)) {
    throw new Error('Expected argument of type GetMatchesByIdsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GetMatchesByIdsRequest(buffer_arg) {
  return matches_pb.GetMatchesByIdsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GetMatchesByIdsResponse(arg) {
  if (!(arg instanceof matches_pb.GetMatchesByIdsResponse)) {
    throw new Error('Expected argument of type GetMatchesByIdsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GetMatchesByIdsResponse(buffer_arg) {
  return matches_pb.GetMatchesByIdsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_UpdateMatchRequest(arg) {
  if (!(arg instanceof matches_pb.UpdateMatchRequest)) {
    throw new Error('Expected argument of type UpdateMatchRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_UpdateMatchRequest(buffer_arg) {
  return matches_pb.UpdateMatchRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}


// Service
var MatchesService = exports.MatchesService = {
  createMatch: {
    path: '/Matches/CreateMatch',
    requestStream: false,
    responseStream: false,
    requestType: matches_pb.CreateMatchRequest,
    responseType: matches_pb.CreateMatchResponse,
    requestSerialize: serialize_CreateMatchRequest,
    requestDeserialize: deserialize_CreateMatchRequest,
    responseSerialize: serialize_CreateMatchResponse,
    responseDeserialize: deserialize_CreateMatchResponse,
  },
  updateMatch: {
    path: '/Matches/UpdateMatch',
    requestStream: false,
    responseStream: false,
    requestType: matches_pb.UpdateMatchRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_UpdateMatchRequest,
    requestDeserialize: deserialize_UpdateMatchRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  getMatchById: {
    path: '/Matches/GetMatchById',
    requestStream: false,
    responseStream: false,
    requestType: matches_pb.GetMatchByIdRequest,
    responseType: matches_pb.GetMatchByIdResponse,
    requestSerialize: serialize_GetMatchByIdRequest,
    requestDeserialize: deserialize_GetMatchByIdRequest,
    responseSerialize: serialize_GetMatchByIdResponse,
    responseDeserialize: deserialize_GetMatchByIdResponse,
  },
  getMatchesByIds: {
    path: '/Matches/GetMatchesByIds',
    requestStream: false,
    responseStream: false,
    requestType: matches_pb.GetMatchesByIdsRequest,
    responseType: matches_pb.GetMatchesByIdsResponse,
    requestSerialize: serialize_GetMatchesByIdsRequest,
    requestDeserialize: deserialize_GetMatchesByIdsRequest,
    responseSerialize: serialize_GetMatchesByIdsResponse,
    responseDeserialize: deserialize_GetMatchesByIdsResponse,
  },
};

exports.MatchesClient = grpc.makeGenericClientConstructor(MatchesService);
