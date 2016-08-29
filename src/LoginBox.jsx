'use strict';

var React = require('react');
import Dialog from 'react-toolbox/lib/dialog';
import Input from 'react-toolbox/lib/input';
import {Button, IconButton} from 'react-toolbox/lib/button';

// global user profile
var user = require('./user');

var LoginBox = React.createClass({
  getInitialState: function() {
    return { active: true, actions: [{ label: "Login", onClick: this.handleToggle }]};
  },
  handleToggle: function(){
    user.username = this.state.username;
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
        onEscKeyDown={this.handleToggle}
        onOverlayClick={this.handleToggle}
      >
        <p>Welcome to FSE chat room!</p>
        <Input label='Name' name='message' onChange={this.handleTextChange} required maxLength={16 }/>
      </Dialog>
    );
  }
});

module.exports = LoginBox;
