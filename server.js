// Require necessary modules
const fs = require('fs');
const http = require('http');
const cors = require('cors');
const io = require('socket.io')(1010, {
  cors: {
    origin: '*',
  }
});

// Read the JSON file
const jsonData = JSON.parse(fs.readFileSync('FGData.json', 'utf-8'));

// Create a server
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Server is running');
});

// Wait for a connection
io.on('connection', (socket) => {
  console.log('A user connected');

  // Send JSON data to the connected client
  socket.emit('jsonData', jsonData);

  // Handle disconnection
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});
