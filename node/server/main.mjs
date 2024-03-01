import { Server, ServerCredentials } from '@grpc/grpc-js';

import { MatchesService } from '../matches/matches_grpc_pb.js';
import pb from '../matches/matches_pb.js';

/** @type {import('../matches/matches_grpc_pb.js').IMatchesServer} */
const impl = {
    getMatchById: (_, callback) => {
        const response = new pb.GetMatchByIdResponse();
        response.setId(7636);
        response.setName('France - Belgique');
        response.setCompetitionId(6473);

        callback(null, response);
    },
};

const server = new Server();
server.addService(MatchesService, impl);

server.bindAsync(
    '127.0.0.1:50051',
    ServerCredentials.createInsecure(),
    (err, port) => {
        if (err) throw err;
        console.log(`Server started, listening: 127.0.0.1:${port}`);
    }
);
