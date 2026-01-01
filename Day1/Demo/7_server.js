// Responding to HTTP Requests​
const http = require('node:http');	// Use NodeJS HTTP Library​

const server = http.createServer((req, res) => {	// Creates a Basic HTTP Server​

  res.writeHead(200, { 'Content-Type': 'text/html' });

  res.end('Hello World!\n');

  // Handling HTTP Requests
//   if (req.url == '/') {	// Handles “/” path
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.end('Hello World!\n');
    
//   } else if (req.url == '/check') { // Handles “/check” path
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.end('All OK!\n');

//   } else { // Handles unknown path
//     res.writeHead(404);
//     res.end('Not Found!');

//   }

});

server.listen(3000, '127.0.0.1', () => {		// Listen to HTTP Request​

  console.log('Listening on 127.0.0.1:3000');

});