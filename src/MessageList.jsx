'use strict';

var socket = require('./socket');

var React = require('react');

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import ContentSend from 'material-ui/svg-icons/content/send';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

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
          key={i}
          leftAvatar={<Avatar>{(() => chat.username[0])()}</Avatar>}
          primaryText={chat.username}
          secondaryText={
            <p>
              {(() => chat.message + ' , at ' +
                Date(chat.timestamp).toString()
              )()}
            </p>
          }
        >

        </ListItem>
      );
    }
    return (
      <List>
        {listItems}
      </List> 
    )
  }
});

module.exports = MessageList;
