'use strict';

var socket = require('./socket');

var React = require('react');

import Input from 'react-toolbox/lib/input';
import {Button, IconButton} from 'react-toolbox/lib/button';

const style = {
  margin: 12,
};

var MessageForm = React.createClass({
  getInitialState: function() {
    return { text: '', username: 'user-' + Math.round(Math.random() * 1000)};
  },
  handleTextChange: function(e) {
    this.setState({text: e.target.value});
  },
  handleSubmit: function(e){
    e.preventDefault();
    var msg = this.state.text.trim();
    socket.emit('chat message', { username: this.state.username, message: msg });
    this.messageInputRef.value = '';
    return false;
  },
  render: function() {
    return (
      <form action="" onSubmit={this.handleSubmit}>
        <Input label='Type your message' name='message' onChange={this.handleTextChange} id="m" autoComplete="off" ref={(ref) => this.messageInputRef = ref}/>
        <Button label="Send" icon="send" raised/>
      </form> 
    )
  }
});

module.exports = MessageForm;
