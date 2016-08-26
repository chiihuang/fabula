'use strict';

var io = require("socket.io-client");
var socket = io();
var username = (Math.random() * 1000).toFixed(4);
socket.on('chat message', function(data){
  $('#messages').append($('<li>').text(data.username + ': ' + data.message + ' , at ' + Date(data.timestamp).toString()));
});

module.exports = socket;
