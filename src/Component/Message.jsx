import React from 'react'
import { useSelector } from 'react-redux'
import { messageSelector } from '../Redux/Reducer/selector'

const Message = () => {
  const message = useSelector(messageSelector)
  return (
    <div>
      {message.title}
    </div>
  )
}

export default Message
