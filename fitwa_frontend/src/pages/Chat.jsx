import React, { useContext } from 'react'
import { ChatContext } from '../context/ChatContext'
import "../component/Chat.css"
import UserChat from '../component/UserChat';
import { AuthContext } from '../context/AuthContext';
import PotentialChat from '../component/PotentialChat';
function Chat() {
    const {user} = useContext(AuthContext);
    const {userChats, isUserChatsLoading, userChatsError} = useContext(ChatContext);

    console.log("UserChats", userChats, "end")

  return (
    <div>
        <PotentialChat/>
    <div>{userChats?.length < 1 ? null :
    <div className='chat-container'>
        <div className='list-of-chat'>
            {isUserChatsLoading && <p>Loading Chat</p>}
            {console.log(userChats?.data)}
            {
                userChats?.data.map((chat, index) => {
                    return(
                        <div key={index}>
                            <UserChat chat={chat} user={user}/>
                        </div>
                    )
                })
            }
        </div>
        <div className='chat'>
            chat
        </div>
    </div>}
    </div>
    </div>
  )
}

export default Chat