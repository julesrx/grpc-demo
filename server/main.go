package main

import (
	"context"
	"flag"
	"fmt"
	"log"
	pb "main/matches"
	"net"

	"google.golang.org/grpc"
	"google.golang.org/protobuf/types/known/emptypb"
)

var (
	port = flag.Int("port", 50051, "The server port")
)

type server struct {
	pb.UnimplementedMatchesServer
}

func (s *server) CreateMatch(ctx context.Context, in *pb.CreateMatchRequest) (*pb.CreateMatchResponse, error) {
	log.Printf("Received: %v", in.GetName())
	return &pb.CreateMatchResponse{Id: 645}, nil
}

func (s *server) UpdateMatch(ctx context.Context, in *pb.UpdateMatchRequest) (*emptypb.Empty, error) {
	if in.Name == nil && in.CompetitionId == nil {
		return nil, fmt.Errorf("you must provide at least one parameter")
	}

	log.Printf("Received: %s %d", in.GetName(), in.GetCompetitionId())
	return &emptypb.Empty{}, nil
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
