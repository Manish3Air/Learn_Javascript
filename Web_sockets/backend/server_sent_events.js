// Use this command curl -N http://localhost:3000/events in different terminal to see the server-sent events in action



const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/events') {
        // Set headers for Server-Sent Events
        res.writeHead(200, {
            'Content-Type': 'text/event-stream',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive'
        });

        const interval = setInterval(() => {
            // Send a message to the client every 5 seconds
            res.write(`data: The time is ${new Date().toLocaleTimeString()}\n\n`);
        }, 5000);

        // Keep the connection open
        req.on('close', () => {
            clearInterval(interval);
            res.end();
            console.log('Client disconnected but server is up and running');
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
