import React, {useContext} from 'react'
import {ChatContext} from "../context/ChatContext"
import { AuthContext } from '../context/AuthContext';

function PotentialChat() {
    const {user} = useContext(AuthContext)
    const {potentialChat, createChat} = useContext(ChatContext);

  return (
    // <>
    //     <p className='potenrial-chat-header'>Start Chat With</p>
    //     <div className='all-user'>
    //         {potentialChat && potentialChat.map((u, index) => {
    //             return(
    //             <div className='single-user' key={index} onClick={() => createChat(user._id, u._id)}>
    //                 {u.name}
    //             </div>
    //             )
    //         })}
    //     </div>
    // </>
      <>
      <p className='potenrial-chat-header'>Start Chat With</p>
      <div className='all-user'>
              return(
              <div className='single-user'>
                  Bondlnw
              </div>
              <div className='single-user'>
                  BondKodlnw
              </div>
              )
      </div>
  </>
  )
}

export default PotentialChat