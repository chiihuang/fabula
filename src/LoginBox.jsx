'use strict';

var React = require('react');
import Dialog from 'react-toolbox/lib/dialog';
import Input from 'react-toolbox/lib/input';
import {Button, IconButton} from 'react-toolbox/lib/button';

const socket = require('./socket');

// global user profile
var user = require('./user');

var LoginBox = React.createClass({
  getInitialState: function() {
    user.on('logout', () => { this.setState({active: true}); });
    return { active: true, actions: [{ label: "Login", onClick: this.handleSubmit }]};
  },
  handleSubmit: function(){
    if (this.state.username.length <= 0) return;
    user.username = this.state.username;
    socket.emit('new-user', user.username);
    this.setState({active: !this.state.active});
  },
  handleTextChange: function(value){
    this.setState({username: value});
  },
  render: function() {
    return (
      <Dialog
        title='Login'
        active={this.state.active}
        actions={this.state.actions}
      >
        <p>Welcome to FSE chat room!</p>
        <Input label='Name' name='message' onChange={this.handleTextChange} required maxLength={16 }/>
      </Dialog>
    );
  }
});

module.exports = LoginBox;
