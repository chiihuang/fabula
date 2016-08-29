'use strict';

var socket = require('./socket');

var React = require('react');

import { List, ListItem, ListSubHeader, ListDivider, ListCheckbox } from 'react-toolbox/lib/list';
import Avatar from 'react-toolbox/lib/avatar';

const style = {
  margin: 12,
};

var MessageList = React.createClass({
  getInitialState: function() {
    socket.on('chat message', data => {
      this.setState({chats: this.state.chats.concat([data])});
    });
    return { chats: [] };
  },
  render: function() {
    var listItems = [];
    for(var i = 0; i < this.state.chats.length; i++){
      let chat = this.state.chats[i];
      listItems.push(
        <ListItem
          caption={chat.username}
          legend={
            <p>
              {(() => chat.message + ' , at ' +
                Date(chat.timestamp).toString()
              )()}
            </p>
          }
          rightIcon="message"
        >
        <Avatar title={chat.username[0]}/>
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

module.exports = MessageList;
