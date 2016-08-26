'use strict';

var socket = require('./socket');

var React = require('react');

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const style = {
  margin: 12,
};

var MessageForm = React.createClass({
  getInitialState: function() {
    return { text: '' };
  },
  handleTextChange: function(e) {
    this.setState({text: e.target.value});
  },
  handleSubmit: function(e){
    e.preventDefault();
    var msg = this.state.text.trim();
    socket.emit('chat message', { username: 'username', message: msg });
    this.messageInputRef.value = '';
    return false;
  },
  render: function() {
    return (
      <form action="" onSubmit={this.handleSubmit}>
        <TextField hintText="Say hello!" onChange={this.handleTextChange} id="m" autoComplete="off" ref={(ref) => this.messageInputRef = ref}/>
        <RaisedButton label="Send" primary={true} style={style}/>
      </form> 
    )
  }
});

module.exports = MessageForm;
