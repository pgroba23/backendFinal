import ChatsRepo from '../persistencia/repositorio/ChatsRepo.js';
import {
	chatEntity,
	normalize,
	denormalize,
} from '../persistencia/entity/chatEntity.js';
import Chat from '../negocio/Chat.js';

const chatsRepo = new ChatsRepo();

export const sendBroadcast = async (socket) => {
	const chats = await chatsRepo.listarAll();
	socket.emit('chats', normalize(chats, [chatEntity]));
};

export const chatController = (socket, sockets) => async (chat) => {
	const chatDenormalized = denormalize(chat.result, chatEntity, chat.entities);
	const data = new Chat({
		...chatDenormalized,
		fecha: new Date().toLocaleString(),
	});
	await chatsRepo.guardar(data);
	const chats = await chatsRepo.listarAll();
	sockets.emit('chats', normalize(chats, [chatEntity]));
};
