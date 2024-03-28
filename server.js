//server.js
import express from 'express';
import ViteExpress from 'vite-express';
import http from 'http';
import webSocket from 'socket.io';

const webSocketServer = webSocket.Server;
const app = express();
const server = http.createServer(app);
const io = new webSocketServer(server, {
  cors: {
    origin: '*',
  },
});

io.on('connection', (socket) => {
  console.log('we are connected');

  socket.on('chat', (chat) => {
    io.emit('chat', chat);
  });

  socket.on('disconnect', () => {
    console.log('disconnected');
  });
});

app.get('/message', (_, res) => res.send('Hello from express!'));

ViteExpress.listen(app, 3000, () => console.log('Server is listening...'));
