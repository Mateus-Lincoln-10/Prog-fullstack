import { ClientOptions, Transport } from '@nestjs/microservices';

export const rmqReportOptions: ClientOptions = {
  transport: Transport.RMQ,
  options: {
    urls: ['amqp://admin:123456@localhost:5672'],
    queue: 'report_queue',
    queueOptions: {
      durable: false,
    },
  },
};
