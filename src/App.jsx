'use strict'

// init socket ASAP
var socket = require('./socket');

var React = require('react');
var ReactDOM = require('react-dom');
var LoginBox = require('./LoginBox.jsx');
var MessageBox = require('./MessageBox.jsx');
var TabsOnBar = require('./TabsOnBar.jsx');

import 'react-toolbox/lib/commons.scss';
import { Layout, NavDrawer, Panel, Sidebar, IconButton } from 'react-toolbox';
import AppBar from 'react-toolbox/lib/app_bar';
import style from './style';

var App = React.createClass({
  getInitialState: function() {
    return { drawerActive: false };
  },
  toggleDrawerActive: function(){
    this.setState({ drawerActive: !this.state.drawerActive });
  },
  render: function(){
    return (
      <Layout>
          <NavDrawer active={this.state.drawerActive}
            permanentAt='xxxl'
            onOverlayClick={ this.toggleDrawerActive }>
            <TabsOnBar/>
          </NavDrawer>
          <Panel>
              <AppBar>
                <IconButton icon='menu' inverse={ true } onClick={ this.toggleDrawerActive }/>
                2016 Fall FSE Chat Room
              </AppBar>
              <div  style={{ 'minWidth': '800px', 'maxWidth': '800px', margin: 'auto', }}>
                <LoginBox/>
                <MessageBox/>
              </div>
          </Panel>
      </Layout>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('app'));
