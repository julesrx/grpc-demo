from concurrent import futures
import logging
import grpc

import matches_pb2
import matches_pb2_grpc

class Matches(matches_pb2_grpc.MatchesServicer):
    def GetMatchById(self, request, context):
        return matches_pb2.GetMatchByIdResponse(id=663, name="PSG - OM", competition_id=746)

def serve():
    port = "50051"
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    matches_pb2_grpc.add_MatchesServicer_to_server(Matches(), server)

    server.add_insecure_port("[::]:" + port)
    server.start()
    print("Server started, listening on " + port)
    server.wait_for_termination()

if __name__ == "__main__":
    logging.basicConfig()
    serve()