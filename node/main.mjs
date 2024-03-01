import { Channel, ChannelCredentials } from '@grpc/grpc-js';

const channel = new Channel('localhost:50051', new ChannelCredentials(), {});
