import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const grpcVehicleOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'vehicle',
    protoPath: join(__dirname, '../vehicle/vehicle.proto'),
  },
};
