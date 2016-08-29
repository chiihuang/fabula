'use strict';

var React = require('react');
import Dialog from 'react-toolbox/lib/dialog';
import Input from 'react-toolbox/lib/input';
import {Button, IconButton} from 'react-toolbox/lib/button';

var LoginBox = React.createClass({
  getInitialState: function() {
    return { active: true, actions: [{ label: "Login", onClick: this.handleToggle }]};
  },
  handleToggle: function(){
    this.setState({active: !this.state.active});
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
        <Input label='Name' name='message'/>
      </Dialog>
    );
  }
});

module.exports = LoginBox;
