import { List, ListItem } from '@mui/material';
import React, { useState } from "react";
import './ChatList.css';

const ChatList = () => {
  let chatId = Math.random()

  const [chatList] = useState([
    { id: {chatId}, name: 'Ivan' },
    { id: {chatId}, name: 'Andry' },
    { id: {chatId}, name: 'Alex' },
    { id: {chatId}, name: 'Filipp' },
  ]);




  


  return (
    <div>
        <List className='list'>
          {chatList.map((item) => {
            return(
              <ListItem className='list-item'>
                <span key={item.id}>{item.name}</span>
              </ListItem>
            )
          })}
        </List>
    </div>
  )
}

export default ChatList
