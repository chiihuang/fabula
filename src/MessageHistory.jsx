'use strict';

var socket = require('./socket');

var React = require('react');
var path = require('path');

import { List, ListItem, ListSubHeader, ListDivider, ListCheckbox } from 'react-toolbox/lib/list';
import Avatar from 'react-toolbox/lib/avatar';
import Chip from 'react-toolbox/lib/chip';

const style = {
  margin: 12,
};

var MessageHistory = React.createClass({
  getInitialState: function() {
    // pre-load history
    $.getJSON({
      url: document.URL + 'api/history',
      success: data => {
        this.setState({chats: data});
      }
    });
    return { chats: [] };
  },
  render: function() {
    var listItems = [];
    for(var i = 0; i < this.state.chats.length; i++){
      let chat = this.state.chats[i];
      listItems.push(
        <ListItem
          avatar={
            <Avatar title={(chat.username || 'Anonymous')[0]}/>
          }
          key={i}
          itemContent={
            <div style={{flex: 1}}>
              <strong>{chat.username}</strong><br/>{chat.message}
              <Chip style={{float: 'right'}}>
                <small>{(new Date(chat.timestamp)).toLocaleString()}</small>
              </Chip>
            </div>
          }
          rightIcon="message"
        >
        </ListItem>
      );
    }
    return (
      <List>
        {listItems}
        <ListDivider />
      </List> 
    )
  }
});

module.exports = MessageHistory;
