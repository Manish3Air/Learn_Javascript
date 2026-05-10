const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/poll') {
        // Simulate a long polling request
        setTimeout(() => {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ 
                message: `Data received at ${new Date().toISOString()}` 
            }));
        }, 5000); // Simulate 5-second delay
    } else{
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});

