using System.Text.Json;
using Grpc.Net.Client;

using var channel = GrpcChannel.ForAddress("http://localhost:5255");
var client = new Matches.MatchesClient(channel);

var response = await client.GetMatchByIdAsync(new GetMatchByIdRequest { Id = 178471616 });

Console.WriteLine(JsonSerializer.Serialize(response));