'use strict';

var socket = require('./socket');

var React = require('react');

import Paper from 'material-ui/Paper';

var MessageList = require('./MessageList.jsx');
var MessageForm = require('./MessageForm.jsx');

const style = {
  // height: '100%',
  // width: '100%',
  // margin: 20,
  // textAlign: 'center',
  // display: 'inline-block',
  display: 'flex',
  flexWrap: 'wrap',
  padding: 20,
  justifyContent: 'space-around',
};

var MessageBox = React.createClass({
  render: () => (
    <Paper style={style} zDepth={1}>
      <MessageList/>
      <MessageForm/>
    </Paper>
  )
});

module.exports = MessageBox;
