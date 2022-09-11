import { chatController } from '../controllers/chatController.js';

export function manejarSocket(socket, sockets) {
	socket.on('chatupd', chatController(socket, sockets));
}
