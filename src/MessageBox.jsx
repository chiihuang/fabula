'use strict';

var React = require('react');

var MessageHistory = require('./MessageHistory.jsx');
var MessageList = require('./MessageList.jsx');
var MessageForm = require('./MessageForm.jsx');

import Chip from 'react-toolbox/lib/chip';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';

var MessageBox = React.createClass({
  render: () => (
    <div>
      <Card style={{ flex: 1, overflowY: 'auto', padding: '1.8rem' }}>
        <MessageHistory/>
        <div style={{ justifyContent:'center', display: 'flex'}}>
          <Chip>
            ↑ <em>previous chats</em> ↑
          </Chip>
        </div>
        <MessageList/>
      </Card>
      <MessageForm/>
    </div>
  )
});

module.exports = MessageBox;
