package main

import (
	"context"
	"flag"
	"log"
	pb "main/matches"
	"time"

	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
)

var (
	addr = flag.String("addr", "localhost:50051", "the address to connect to")
)

func main() {
	flag.Parse()

	// Set up a connection to the server.
	cnn, err := grpc.Dial(*addr, grpc.WithTransportCredentials(insecure.NewCredentials()))
	if err != nil {
		log.Fatalf("did not connect: %v", err)
	}

	defer cnn.Close()

	client := pb.NewMatchesClient(cnn)

	// Contact the server and print out its response.
	ctx, cancel := context.WithTimeout(context.Background(), time.Second)
	defer cancel()

	res, err := client.CreateMatch(ctx, &pb.CreateMatchRequest{Name: "PSG - OM", CompetitionId: 5})
	if err != nil {
		log.Fatalf("could not greet: %v", err)
	}

	log.Printf("MatchId: %d", res.GetId())
}
