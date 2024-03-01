#!/bin/sh

rm -rf ./matches/*.js

./node_modules/.bin/grpc_tools_node_protoc \
    --js_out=import_style=commonjs,binary:./matches \
    --grpc_out=grpc_js:./matches \
    --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` \
    --proto_path ../ \
    matches.proto

protoc \
    --experimental_allow_proto3_optional \
    --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
    --ts_out=grpc_js:./matches \
    --proto_path ../ \
    matches.proto
