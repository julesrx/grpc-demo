#!/bin/sh

rm -rf ./*_pb2*

python -m grpc_tools.protoc \
    --python_out=. \
    --pyi_out=. \
    --grpc_python_out=. \
    --proto_path ../ \
    matches.proto