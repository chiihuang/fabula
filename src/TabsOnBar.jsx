'use strict';

var React = require('react');

import {Button} from 'react-toolbox';

var user = require('./user');

var TabsOnBar = React.createClass({
  getInitialState: function() {
    return { state: 1 };
  },

  handleLogout: function() {
    user.emit('logout');
    this.setState({index});
  },

  render: function() {
    return (
      <Button label='Logout' onMouseUp={this.handleLogout}></Button>
    );
  }
});

module.exports = TabsOnBar;
