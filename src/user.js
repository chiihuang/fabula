const EventEmitter = require('events');

class UserProfile extends EventEmitter {}

const user = new UserProfile();

user.username = '';

module.exports = user;
