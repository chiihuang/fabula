'use strict';

var socket = require('./socket');

var React = require('react');

import Input from 'react-toolbox/lib/input';
import {Button, IconButton} from 'react-toolbox/lib/button';

var user = require('./user');;

var MessageForm = React.createClass({
  getInitialState: function() {
    return { text: '', username: 'user-' + Math.round(Math.random() * 1000)};
  },
  handleTextChange: function(value) {
    this.setState({text: value});
  },
  handleSubmit: function(e){
    e.preventDefault();
    var msg = this.state.text.trim();
    socket.emit('chat message', { username: user.username, message: msg });
    this.setState({text: ''});
    return false;
  },
  render: function() {
    return (
      <form action="" onSubmit={this.handleSubmit}>
        <Input label='Type your message' name='message' value={this.state.text} onChange={this.handleTextChange} id="m" autoComplete="off"></Input>
        <Button label="Send" icon="send" raised/>
      </form> 
    )
  }
});

module.exports = MessageForm;
