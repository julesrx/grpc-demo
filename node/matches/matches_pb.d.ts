// package: 
// file: matches.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class CreateMatchRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): CreateMatchRequest;
    getCompetitionId(): number;
    setCompetitionId(value: number): CreateMatchRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateMatchRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateMatchRequest): CreateMatchRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateMatchRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateMatchRequest;
    static deserializeBinaryFromReader(message: CreateMatchRequest, reader: jspb.BinaryReader): CreateMatchRequest;
}

export namespace CreateMatchRequest {
    export type AsObject = {
        name: string,
        competitionId: number,
    }
}

export class UpdateMatchRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): UpdateMatchRequest;

    hasName(): boolean;
    clearName(): void;
    getName(): string | undefined;
    setName(value: string): UpdateMatchRequest;

    hasCompetitionId(): boolean;
    clearCompetitionId(): void;
    getCompetitionId(): number | undefined;
    setCompetitionId(value: number): UpdateMatchRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateMatchRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateMatchRequest): UpdateMatchRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateMatchRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateMatchRequest;
    static deserializeBinaryFromReader(message: UpdateMatchRequest, reader: jspb.BinaryReader): UpdateMatchRequest;
}

export namespace UpdateMatchRequest {
    export type AsObject = {
        id: number,
        name?: string,
        competitionId?: number,
    }
}

export class GetMatchByIdRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): GetMatchByIdRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetMatchByIdRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetMatchByIdRequest): GetMatchByIdRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetMatchByIdRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetMatchByIdRequest;
    static deserializeBinaryFromReader(message: GetMatchByIdRequest, reader: jspb.BinaryReader): GetMatchByIdRequest;
}

export namespace GetMatchByIdRequest {
    export type AsObject = {
        id: number,
    }
}

export class GetMatchesByIdsRequest extends jspb.Message { 
    clearIdsList(): void;
    getIdsList(): Array<number>;
    setIdsList(value: Array<number>): GetMatchesByIdsRequest;
    addIds(value: number, index?: number): number;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetMatchesByIdsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetMatchesByIdsRequest): GetMatchesByIdsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetMatchesByIdsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetMatchesByIdsRequest;
    static deserializeBinaryFromReader(message: GetMatchesByIdsRequest, reader: jspb.BinaryReader): GetMatchesByIdsRequest;
}

export namespace GetMatchesByIdsRequest {
    export type AsObject = {
        idsList: Array<number>,
    }
}

export class CreateMatchResponse extends jspb.Message { 
    getId(): number;
    setId(value: number): CreateMatchResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateMatchResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateMatchResponse): CreateMatchResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateMatchResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateMatchResponse;
    static deserializeBinaryFromReader(message: CreateMatchResponse, reader: jspb.BinaryReader): CreateMatchResponse;
}

export namespace CreateMatchResponse {
    export type AsObject = {
        id: number,
    }
}

export class GetMatchByIdResponse extends jspb.Message { 
    getId(): number;
    setId(value: number): GetMatchByIdResponse;
    getName(): string;
    setName(value: string): GetMatchByIdResponse;
    getCompetitionId(): number;
    setCompetitionId(value: number): GetMatchByIdResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetMatchByIdResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetMatchByIdResponse): GetMatchByIdResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetMatchByIdResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetMatchByIdResponse;
    static deserializeBinaryFromReader(message: GetMatchByIdResponse, reader: jspb.BinaryReader): GetMatchByIdResponse;
}

export namespace GetMatchByIdResponse {
    export type AsObject = {
        id: number,
        name: string,
        competitionId: number,
    }
}

export class GetMatchesByIdsResponse extends jspb.Message { 
    clearMatchesList(): void;
    getMatchesList(): Array<GetMatchByIdResponse>;
    setMatchesList(value: Array<GetMatchByIdResponse>): GetMatchesByIdsResponse;
    addMatches(value?: GetMatchByIdResponse, index?: number): GetMatchByIdResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetMatchesByIdsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetMatchesByIdsResponse): GetMatchesByIdsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetMatchesByIdsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetMatchesByIdsResponse;
    static deserializeBinaryFromReader(message: GetMatchesByIdsResponse, reader: jspb.BinaryReader): GetMatchesByIdsResponse;
}

export namespace GetMatchesByIdsResponse {
    export type AsObject = {
        matchesList: Array<GetMatchByIdResponse.AsObject>,
    }
}
