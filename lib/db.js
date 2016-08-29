const Promise = require('bluebird');
const cassandra = require('cassandra-driver');

// Connect to the cluster
const client = Promise.promisifyAll(new cassandra.Client(
  { contactPoints: ['127.0.0.1'], keyspace: 'fabula' }
));

const db = {};

/**
 * @returns {Promise}
 */
db.insertMessage = (username, message, timestamp) => {
  const query = 'INSERT INTO messages (username, message, timestamp) VALUES (?, ?, ?)';
  const params = [username, message, timestamp];

  return client.executeAsync(query, params, { prepare: true });
};

/**
 */
db.getHistories = () => {
  const query = 'SELECT * FROM messages';
  const params = [];
  return client.executeAsync(query, params, { prepare: true })
  .then(result => result.rows);
};

module.exports = db;
