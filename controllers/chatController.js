import WebSocket, { WebSocketServer } from "ws";
import User from '../models/user.js';
import Message from '../models/message.js';

const wss = new WebSocketServer({
    port: 3000
});

const users = new Map();

wss.on('connection', (ws) => {
    let user = null;

    ws.on('message', (message) => {
        try {
            const { type, data } = JSON.parse(message);

            if (type === 'setName') {
                user = new User(data, ws);
                users.set(user.name, ws);
                console.log(`${user.name} has entered the chat!`);
                ws.send(JSON.stringify({ type: 'welcome', message: `Welcome, ${user.name}!` }));
            } else if (type === 'message') {
                const { recipient, text } = data;
                const recipientSocket = users.get(recipient);

                if (recipientSocket?.readyState === WebSocket.OPEN) {
                    const messageToSend = new Message(text, user.name);
                    recipientSocket.send(JSON.stringify({
                        type: 'message',
                        data: {
                            from: messageToSend.from,
                            content: messageToSend.content,
                            timestamp: messageToSend.timestamp
                        }
                    }));
                } else {
                    ws.send(JSON.stringify({ type: 'error', message: `User ${recipient} is not found or not connected.` }));
                }
            }
        } catch (err) {
            console.error("Error processing message:", err);
            ws.send(JSON.stringify({ type: 'error', message: "An error occurred while processing your message." }));
        }
    });

    ws.on('close', () => {
        if (user) {
            users.delete(user.name);
            console.log(`${user.name} has left the chat.`);
        }
    });

    ws.on('error', (err) => {
        console.error("WebSocket error:", err);
    });
});

export default wss;
