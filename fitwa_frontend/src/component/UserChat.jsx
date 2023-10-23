import React from 'react'
import useFetchRecipient from '../hooks/useFetchRecipient'
import "./Chat.css"

function UserChat({chat, user}) {
    const {recipientUser} = useFetchRecipient(chat, user);
    console.log("recipient", recipientUser)
  return (<button>
    <div className='user-chat-container'>
        <div className='user-name'>{recipientUser?.name} {recipientUser?.surname}</div>
        <div className='user-text'>Message</div>
    </div>
    </button>
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