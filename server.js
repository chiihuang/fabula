const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const Promise = require('bluebird');

const cassandra = require('cassandra-driver');

// Connect to the cluster
const client = Promise.promisifyAll(new cassandra.Client(
  { contactPoints: ['127.0.0.1'], keyspace: 'fabula' }
));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
  // res.sendfile('index.html');
});

io.on('connection', socket => {
  console.log('a user connected');
  socket.on('chat message', data => {
    console.log('username', data.username, 'message', data.message);
    data.timestamp = Date.now();
    const query = 'INSERT INTO messages (username, message, timestamp) VALUES (?, ?, ?)';
    const params = [data.username, data.message, data.timestamp];

    client.executeAsync(query, params, { prepare: true })
    .catch(err => {
      console.error(err);
    });
    io.emit('chat message', data);
  });
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});
