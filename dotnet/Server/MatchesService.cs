using Grpc.Core;

namespace Server;

public sealed class MatchesService : Matches.MatchesBase
{
    public override Task<GetMatchByIdResponse> GetMatchById(GetMatchByIdRequest request, ServerCallContext context)
    {
        var match = new GetMatchByIdResponse
        {
            Id = 7746,
            Name = "France - Belgique",
            CompetitionId = 57
        };

        return Task.FromResult(match);
    }
}