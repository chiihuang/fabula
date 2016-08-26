'use strict';

var socket = require('./socket');

var React = require('react');

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
        <input onChange={this.handleTextChange} id="m" autoComplete="off" ref={(ref) => this.messageInputRef = ref}/><button>Send</button>
      </form> 
    )
  }
});

module.exports = MessageForm;
