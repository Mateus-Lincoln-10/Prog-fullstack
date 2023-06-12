import { Logger, OnModuleInit } from '@nestjs/common';
import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway(81, { transports: ['websocket'] })
export class ReportNotificationGateway implements OnModuleInit {
  @WebSocketServer()
  server: Server;

  onModuleInit() {
    this.server.on('connection', (socket) => {
      console.log(socket.id);
      console.log('socket connected');
    });
  }

  @SubscribeMessage('events')
  findAll() {
    console.log('event');
  }

  emitReportNotificationMessage(token: string) {
    this.server.emit(token, 'Report Generated successfully');
    Logger.log('message emmited');
  }
}
