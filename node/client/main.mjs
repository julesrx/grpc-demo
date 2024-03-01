import { credentials } from '@grpc/grpc-js';

import { MatchesClient } from '../matches/matches_grpc_pb.js';
import pb from '../matches/matches_pb.js';

const client = new MatchesClient(
    'localhost:50051',
    credentials.createInsecure()
);

const request = new pb.GetMatchByIdRequest();
request.setId(663);

client.getMatchById(request, (_, res) => console.log(res, res.toObject()));
