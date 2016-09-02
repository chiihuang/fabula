const path = require('path');
const express = require('express');

const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const db = require('./lib/db');
const routes = require('./routes');

app.use(express.static(path.join(__dirname, '/public')));
app.use(routes);

io.on('connection', socket => {
  console.log('a user connected');
  socket.on('new-user', username => {
    console.log('new-user', username);
    socket.broadcast.emit('new-user', username);
  });
  socket.on('chat message', data => {
    console.log('username', data.username, 'message', data.message);
    data.timestamp = Date.now();
    db.insertMessage(data.username, data.message, data.timestamp)
    .catch(err => { console.error(err); });
    io.emit('chat message', data);
  });
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});
