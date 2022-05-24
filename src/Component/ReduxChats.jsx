import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { chatSelector } from '../Redux/Reducers/ChatsReducer/selectors'

const ReduxChats = () => {
    const chats = useSelector(chatSelector)
  return (
    <div>
      {
          chats.map((chat) => (
              <NavLink key={chat.id} to={`/messages/${chat.id}`}>
                  {chat.name}
              </NavLink>
          ))
      }
    </div>
  )
}

export default ReduxChats
