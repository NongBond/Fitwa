import React, { useContext } from 'react'
import useFetchRecipient from "../hooks/useFetchRecipient"
import "./Chat.css"
import { ChatContext } from '../context/ChatContext';
function UserChat({chat, user}) {
    const {recipientUser} = useFetchRecipient(chat, user);
    const {updateCurrentChat} = useContext(ChatContext)
  return (
    <div className='all-user-chat-container'>
  <button onClick={() => updateCurrentChat(chat)}>

    <div className='user-chat-container'>
        <div className='user-name'>{recipientUser?.name} {recipientUser?.surname}</div>
        <div className='user-text'>Message</div>
    </div>
    </button>
    </div>
  )

// return (<button>
//     <div className='user-chat-container'>
//         <div className='user-name'>{"Sorawit"} {"Nunsatit"}</div>
//         <div className='user-text'>Message</div>
//     </div>
//     </button>
//   )
}

export default UserChat