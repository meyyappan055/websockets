import readline from "readline";
import WebSocket from "ws";

const ws = new WebSocket('ws://localhost:3000');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let userName = '';

ws.on('open', () => {
    rl.question('Enter your name: ', (name) => {
        userName = name;
        ws.send(JSON.stringify({ type: 'setName', data: userName }));
        rl.setPrompt(`${userName}: `);
        rl.prompt();
    });
});

rl.on('line', (input) => {
    const parts = input.split(': ');

    if (parts.length >= 2) {
        const recipient = parts[0];
        const message = parts.slice(1).join(': ');
        ws.send(JSON.stringify({ type: 'message', data: { recipient, text: message } }));
    } else {
        console.log("Please use the format 'recipient: message'.");
    }

    rl.prompt();
});

ws.on('message', (message) => {
    try {
        const parsedMessage = JSON.parse(message);
        if (parsedMessage.type === 'welcome') {
            console.log(parsedMessage.message);
        } else if (parsedMessage.type === 'message') {
            const { from, content, timestamp } = parsedMessage.data;
            process.stdout.clearLine();
            process.stdout.cursorTo(0);
            console.log(`Message received from ${from} at ${new Date(timestamp).toLocaleTimeString()}: ${content}`);
        }
    } catch (err) {
        console.error("Failed to parse message:", message);
    }
    rl.prompt();
});

ws.on('close', () => {
    console.log('Disconnected from the server.');
    rl.close();
});

ws.on('error', (err) => {
    console.error("WebSocket error:", err);
});
