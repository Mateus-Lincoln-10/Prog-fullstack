import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway(81, { transports: ['websocket', 'polling'], cors: true })
export class ReportGateway
  implements OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit
{
  @WebSocketServer()
  server: Server;

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
    this.server.emit('report', { message: 'Report generated successfully' });
    console.log('emited');
  }
}
