import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway(81, { transports: ['websocket'] })
export class ReportGateway
  implements OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit
{
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('events')
  handleEvent(@MessageBody() data: string) {
    console.log(data);
    this.server.emit('events', data);
  }

  handleConnection() {
    console.log('User connected');
  }

  handleDisconnect() {
    console.log('User disconnected');
  }

  afterInit() {
    console.log('Socket is live');
  }

  sendNotification() {
    this.server.emit('report', 'Report generated successfully');
  }
}
