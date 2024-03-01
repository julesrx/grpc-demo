#!/bin/sh

rm -rf ./matches/*.go

protoc \
    --go_out=./matches \
    --go-grpc_out=./matches \
    --go_opt=paths=source_relative \
    --go-grpc_opt=paths=source_relative \
    --experimental_allow_proto3_optional \
    --proto_path ../ \
    matches.proto