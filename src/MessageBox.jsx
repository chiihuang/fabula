'use strict';

var socket = require('./socket');

var React = require('react');

import { Layout, NavDrawer, Panel, Sidebar } from 'react-toolbox';

var MessageList = require('./MessageList.jsx');
var MessageForm = require('./MessageForm.jsx');

var MessageBox = React.createClass({
  render: () => (
    <Layout>
        <Panel>
            <div style={{ flex: 1, overflowY: 'auto', padding: '1.8rem' }}>
                <h1>Main Content</h1>
                <p>Main content goes here.</p>
              <MessageList/>
              <MessageForm/>
            </div>
        </Panel>
    </Layout>
  )
});

module.exports = MessageBox;
