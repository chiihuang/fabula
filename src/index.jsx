'use strict'

// init socket ASAP
var socket = require('./socket');

var React = require('react');
var ReactDOM = require('react-dom');
var LoginBox = require('./LoginBox.jsx');
var MessageForm = require('./MessageForm.jsx');

// React.renderComponent(<Hello />, document.getElementById('content'))

ReactDOM.render(<LoginBox />, document.getElementById('login-box'));
ReactDOM.render(<MessageForm />, document.getElementById('message-form'));

