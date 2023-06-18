import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import * as fs from 'fs';

async function bootstrap() {
  const httpsOptions = {
    key: fs.readFileSync('../cert/private.key'),
    cert: fs.readFileSync('../cert/certificate.crt'),
  };
  const app = await NestFactory.create(AppModule, { httpsOptions });
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC,
    options: {
      package: 'report',
      protoPath: join(__dirname, './report/report.proto'),
      url: 'localhost:5001',
    },
  });

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      queue: 'report_queue',
      urls: ['amqp://admin:123456@localhost:5672'],
      queueOptions: {
        durable: false,
      },
    },
  });
  await app.startAllMicroservices();

  await app.listen(9003);
}
bootstrap();
