from __future__ import print_function

import logging
import grpc

import matches_pb2
import matches_pb2_grpc

def run():
    with grpc.insecure_channel("localhost:50051") as channel:
        stub = matches_pb2_grpc.MatchesStub(channel)
        response = stub.GetMatchById(matches_pb2.GetMatchByIdRequest(id=7463))
    print(response)

if __name__ == "__main__":
    logging.basicConfig()
    run()
