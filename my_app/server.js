const http = require('http');
const os = require('os');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`<h1>Hello from Kubernetes!</h1><p>Pod: ${os.hostname()}</p>`);
});

server.listen(8080, () => console.log('Server running on port 8080'));