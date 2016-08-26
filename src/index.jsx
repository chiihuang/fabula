'use strict'

// init socket ASAP
var socket = require('./socket');

var React = require('react');
var ReactDOM = require('react-dom');
var LoginBox = require('./LoginBox.jsx');
var MessageBox = require('./MessageBox.jsx');
import {deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';

// Needed for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

var muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

var style = {
  textAlign: 'center',
  paddingTop: 20,
};

var App = React.createClass({
  render: function(){
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={style}>
          <AppBar title="Title" iconClassNameRight="muidocs-icon-navigation-expand-more"/>
          <Drawer open="true">
            <MenuItem>Menu Item</MenuItem>
            <MenuItem>Menu Item 2</MenuItem>
          </Drawer>
          <LoginBox/>
          <MessageBox/>
        </div>
      </MuiThemeProvider>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('login-box'));
