import io from 'socket.io-client';

const socket = io('http://localhost:81'); // Substitua pela URL do servidor WebSocket

export default socket;
