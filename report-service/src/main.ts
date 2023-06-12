import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
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
  console.log('bootstrap');
}
bootstrap();
