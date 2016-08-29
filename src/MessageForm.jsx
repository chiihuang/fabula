'use strict';

var socket = require('./socket');

var React = require('react');

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import ContentSend from 'material-ui/svg-icons/content/send';
import { Button } from 'react-toolbox/lib/button';

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
        <TextField hintText="Say hello!" onChange={this.handleTextChange} id="m" autoComplete="off" ref={(ref) => this.messageInputRef = ref}/>
        <Button label="Send"/>
      </form> 
    )
  }
});

module.exports = MessageForm;
