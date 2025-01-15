const http = require('http');

const server = http.createServer((req, res) => {
  try {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
  } catch (error) {
    console.error('Request handling error:', error);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  }
});

server.on('error', (err) => {
  console.error('Server error:', err.stack); // Log the stack trace
  // Consider more sophisticated error handling: retry, alert monitoring, etc.
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
