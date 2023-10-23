// import React, {useContext} from 'react'
// import {ChatContext} from "../context/ChatContext"
// import { AuthContext } from '../context/AuthContext';

// function PotentialChat() {
//     const {user} = useContext(AuthContext)
//     const {potentialChat, createChat} = useContext(ChatContext);

//   return (
//     <>
//         <p className='potenrial-chat-header'>Start Chat With</p>
//         <div className='all-user'>
//             {potentialChat && potentialChat.map((u, index) => {
//                 return(
//                 <div className='single-user' key={index} onClick={() => createChat(user._id, u._id)}>
//                     {u.name}
//                 </div>
//                 )
//             })}
//         </div>
//     </>

//   )
// }

// export default PotentialChat
import React, {useContext} from 'react'
import {ChatContext} from "../context/ChatContext"
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';


function PotentialChat() {
    const navigate = useNavigate();
    const {user} = useContext(AuthContext)
    const {potentialChat, createChat} = useContext(ChatContext);

  return (
    <div className='potential-container'>
        <p className='potenrial-chat-header'>Start Chat With</p>
        <div className='all-user'>
            {potentialChat && potentialChat.map((u, index) => {
                return(
                <div className='single-user' key={index} onClick={() => {createChat(user._id, u._id)}}>
                    {u.name}
                </div>
                )
            })}
        </div>
        <p className='history-text'>Chat History</p>
    </div>

  )
}

export default PotentialChat