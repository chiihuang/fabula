'use strict';

var React = require('react');

import {Button} from 'react-toolbox';

var user = require('./user');
var style = require('./style.scss');

var LogoutButton = React.createClass({
  getInitialState: function() {
    return { state: 1 };
  },

  handleLogout: function() {
    user.emit('logout');
  },

  render: function() {
    return (
      <Button {...this.props} label='Logout' onMouseUp={this.handleLogout}></Button>
    );
  }
});

module.exports = LogoutButton;
