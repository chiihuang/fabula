const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
  // res.sendfile('index.html');
});

io.on('connection', socket => {
  console.log('a user connected');
  socket.on('chat message', msg => {
    console.log('message: ' + msg);
    io.emit('chat message', msg);
  });
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});
