'use strict';

var React = require('react');

import {Button, Snackbar} from 'react-toolbox';

var user = require('./user');
var style = require('./style.scss');

const socket = require('./socket');

var NewUserNotification = React.createClass({
  getInitialState: function() {
    socket.on('new-user', username => {
      console.log('new-user arrive', username);
      this.setState({ active: true, newUsername: username });
    });
    return { active: false, newUserName: '' };
  },

  handleHide: function() {
    this.setState({ active: false });
  },

  render: function() {
    return (
      <Snackbar
        action='Dismiss'
        active={this.state.active}
        icon='people_outline'
        label={this.state.newUsername + ' joins the FSE chat room!'}

        timeout={2000}
        onClick={this.handleHide}
        onTimeout={this.handleHide}
        type='cancel'
      />
    );
  }
});

module.exports = NewUserNotification;
