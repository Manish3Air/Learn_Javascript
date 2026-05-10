const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const axios = require('axios');
const cors = require('cors');
const Groq = require("groq-sdk");



const app = express();

app.use(cors());

const server = http.createServer(app);

const wss = new WebSocket.Server({ server });



const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY
});

wss.on('connection', (ws) => {

    console.log('Client Connected');

    ws.on('message', async (message) => {

        const userMessage = message.toString();

        console.log('User:', userMessage);

        try {

            const result = await groq.chat.completions.create({
                model: "openai/gpt-oss-20b",
                messages: [
    {
        role: "system",
        content: `
        You are a professional AI assistant.

        Always:
        - use markdown formatting
        - use headings
        - use bullet points
        - use code blocks for code
        - keep responses clean and readable
        `
    },
    {
        role: "user",
        content: userMessage
    }
]
            });

            const response = result.choices[0].message.content;

            ws.send(response);

        } catch (error) {

            console.log('Error generating response:', error);

            ws.send('Error generating response');

        }

    });

    ws.on('close', () => {
        console.log('Client disconnected');
    });

});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});














































// const WebSocket = require('ws');

// const server = new WebSocket.Server({ port: 8080 });

// server.on('connection', (socket) => {
//   console.log('Client connected');
//     socket.on('message', (message) => {
//     console.log(`Received message: ${message}`);
//     // Echo the message back to the client
//     socket.send(`Hello I am server I received your message: ${message}`);
//   });

//   socket.on('close', () => {
//     console.log('Client disconnected');
//   });   

//     socket.on('error', (error) => {
//     console.error(`WebSocket error: ${error}`);
//   });
// });

// console.log('WebSocket server is running on ws://localhost:8080');