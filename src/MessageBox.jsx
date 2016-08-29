'use strict';

var socket = require('./socket');

var React = require('react');

var MessageList = require('./MessageList.jsx');
var MessageForm = require('./MessageForm.jsx');

var MessageBox = React.createClass({
  render: () => (
    <div style={{ flex: 1, overflowY: 'auto', padding: '1.8rem' }}>
      <MessageList/>
      <MessageForm/>
    </div>
  )
});

module.exports = MessageBox;
