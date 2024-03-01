// package: 
// file: matches.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as matches_pb from "./matches_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface IMatchesService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createMatch: IMatchesService_ICreateMatch;
    updateMatch: IMatchesService_IUpdateMatch;
    getMatchById: IMatchesService_IGetMatchById;
    getMatchesByIds: IMatchesService_IGetMatchesByIds;
}

interface IMatchesService_ICreateMatch extends grpc.MethodDefinition<matches_pb.CreateMatchRequest, matches_pb.CreateMatchResponse> {
    path: "/Matches/CreateMatch";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<matches_pb.CreateMatchRequest>;
    requestDeserialize: grpc.deserialize<matches_pb.CreateMatchRequest>;
    responseSerialize: grpc.serialize<matches_pb.CreateMatchResponse>;
    responseDeserialize: grpc.deserialize<matches_pb.CreateMatchResponse>;
}
interface IMatchesService_IUpdateMatch extends grpc.MethodDefinition<matches_pb.UpdateMatchRequest, google_protobuf_empty_pb.Empty> {
    path: "/Matches/UpdateMatch";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<matches_pb.UpdateMatchRequest>;
    requestDeserialize: grpc.deserialize<matches_pb.UpdateMatchRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IMatchesService_IGetMatchById extends grpc.MethodDefinition<matches_pb.GetMatchByIdRequest, matches_pb.GetMatchByIdResponse> {
    path: "/Matches/GetMatchById";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<matches_pb.GetMatchByIdRequest>;
    requestDeserialize: grpc.deserialize<matches_pb.GetMatchByIdRequest>;
    responseSerialize: grpc.serialize<matches_pb.GetMatchByIdResponse>;
    responseDeserialize: grpc.deserialize<matches_pb.GetMatchByIdResponse>;
}
interface IMatchesService_IGetMatchesByIds extends grpc.MethodDefinition<matches_pb.GetMatchesByIdsRequest, matches_pb.GetMatchesByIdsResponse> {
    path: "/Matches/GetMatchesByIds";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<matches_pb.GetMatchesByIdsRequest>;
    requestDeserialize: grpc.deserialize<matches_pb.GetMatchesByIdsRequest>;
    responseSerialize: grpc.serialize<matches_pb.GetMatchesByIdsResponse>;
    responseDeserialize: grpc.deserialize<matches_pb.GetMatchesByIdsResponse>;
}

export const MatchesService: IMatchesService;

export interface IMatchesServer extends grpc.UntypedServiceImplementation {
    createMatch: grpc.handleUnaryCall<matches_pb.CreateMatchRequest, matches_pb.CreateMatchResponse>;
    updateMatch: grpc.handleUnaryCall<matches_pb.UpdateMatchRequest, google_protobuf_empty_pb.Empty>;
    getMatchById: grpc.handleUnaryCall<matches_pb.GetMatchByIdRequest, matches_pb.GetMatchByIdResponse>;
    getMatchesByIds: grpc.handleUnaryCall<matches_pb.GetMatchesByIdsRequest, matches_pb.GetMatchesByIdsResponse>;
}

export interface IMatchesClient {
    createMatch(request: matches_pb.CreateMatchRequest, callback: (error: grpc.ServiceError | null, response: matches_pb.CreateMatchResponse) => void): grpc.ClientUnaryCall;
    createMatch(request: matches_pb.CreateMatchRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: matches_pb.CreateMatchResponse) => void): grpc.ClientUnaryCall;
    createMatch(request: matches_pb.CreateMatchRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: matches_pb.CreateMatchResponse) => void): grpc.ClientUnaryCall;
    updateMatch(request: matches_pb.UpdateMatchRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    updateMatch(request: matches_pb.UpdateMatchRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    updateMatch(request: matches_pb.UpdateMatchRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    getMatchById(request: matches_pb.GetMatchByIdRequest, callback: (error: grpc.ServiceError | null, response: matches_pb.GetMatchByIdResponse) => void): grpc.ClientUnaryCall;
    getMatchById(request: matches_pb.GetMatchByIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: matches_pb.GetMatchByIdResponse) => void): grpc.ClientUnaryCall;
    getMatchById(request: matches_pb.GetMatchByIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: matches_pb.GetMatchByIdResponse) => void): grpc.ClientUnaryCall;
    getMatchesByIds(request: matches_pb.GetMatchesByIdsRequest, callback: (error: grpc.ServiceError | null, response: matches_pb.GetMatchesByIdsResponse) => void): grpc.ClientUnaryCall;
    getMatchesByIds(request: matches_pb.GetMatchesByIdsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: matches_pb.GetMatchesByIdsResponse) => void): grpc.ClientUnaryCall;
    getMatchesByIds(request: matches_pb.GetMatchesByIdsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: matches_pb.GetMatchesByIdsResponse) => void): grpc.ClientUnaryCall;
}

export class MatchesClient extends grpc.Client implements IMatchesClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public createMatch(request: matches_pb.CreateMatchRequest, callback: (error: grpc.ServiceError | null, response: matches_pb.CreateMatchResponse) => void): grpc.ClientUnaryCall;
    public createMatch(request: matches_pb.CreateMatchRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: matches_pb.CreateMatchResponse) => void): grpc.ClientUnaryCall;
    public createMatch(request: matches_pb.CreateMatchRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: matches_pb.CreateMatchResponse) => void): grpc.ClientUnaryCall;
    public updateMatch(request: matches_pb.UpdateMatchRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public updateMatch(request: matches_pb.UpdateMatchRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public updateMatch(request: matches_pb.UpdateMatchRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public getMatchById(request: matches_pb.GetMatchByIdRequest, callback: (error: grpc.ServiceError | null, response: matches_pb.GetMatchByIdResponse) => void): grpc.ClientUnaryCall;
    public getMatchById(request: matches_pb.GetMatchByIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: matches_pb.GetMatchByIdResponse) => void): grpc.ClientUnaryCall;
    public getMatchById(request: matches_pb.GetMatchByIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: matches_pb.GetMatchByIdResponse) => void): grpc.ClientUnaryCall;
    public getMatchesByIds(request: matches_pb.GetMatchesByIdsRequest, callback: (error: grpc.ServiceError | null, response: matches_pb.GetMatchesByIdsResponse) => void): grpc.ClientUnaryCall;
    public getMatchesByIds(request: matches_pb.GetMatchesByIdsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: matches_pb.GetMatchesByIdsResponse) => void): grpc.ClientUnaryCall;
    public getMatchesByIds(request: matches_pb.GetMatchesByIdsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: matches_pb.GetMatchesByIdsResponse) => void): grpc.ClientUnaryCall;
}
