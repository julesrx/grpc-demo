package main

import (
	"context"
	"flag"
	"fmt"
	"log"
	pb "main/matches"
	"net"

	"google.golang.org/grpc"
)

var (
	port = flag.Int("port", 50051, "The server port")
)

// server is used to implement helloworld.GreeterServer.
type server struct {
	pb.UnimplementedMatchesServer
}

// CreateMatch implements helloworld.GreeterServer
func (s *server) CreateMatch(ctx context.Context, in *pb.CreateMatchRequest) (*pb.CreateMatchResponse, error) {
	log.Printf("Received: %v", in.GetName())
	return &pb.CreateMatchResponse{Id: 645}, nil
}

func main() {
	flag.Parse()

	lis, err := net.Listen("tcp", fmt.Sprintf(":%d", *port))
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}

	s := grpc.NewServer()
	pb.RegisterMatchesServer(s, &server{})

	log.Printf("server listening at %v", lis.Addr())
	if err := s.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}
