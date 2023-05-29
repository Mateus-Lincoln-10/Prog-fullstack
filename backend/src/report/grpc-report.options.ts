import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const grpcReportOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'report',
    protoPath: join(__dirname, 'report.proto'),
  },
};
