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
		log.Fatalf("could create match: %v", err)
	}

	matchId := res.GetId()
	log.Printf("MatchId: %d", matchId)

	newName := "Heyy boi"
	_, err = client.UpdateMatch(ctx, &pb.UpdateMatchRequest{Id: matchId, Name: &newName})
	if err != nil {
		log.Fatalf("could not update match: %v", err)
	}

	match, err := client.GetMatchById(ctx, &pb.GetMatchByIdRequest{Id: 77462})
	if err != nil {
		log.Fatalf("could not get match: %v", err)
	}

	log.Printf("%v", match)
}
