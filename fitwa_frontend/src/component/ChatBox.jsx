import React, { useContext, useState } from 'react'
import "./Chat.css"
import { AuthContext } from '../context/AuthContext'
import { ChatContext } from '../context/ChatContext';
import useFetchRecipient from '../hooks/useFetchRecipient';

const formatDate = (timestamp) => {
    const date = new Date(timestamp)
    return date.toLocaleString();
  };

function ChatBox() {
    const [textMessage, setTextMessage] = useState("");
    const {user} = useContext(AuthContext);
    const {currentChat, messages, isMessagesLoading, sendTextMessage} = useContext(ChatContext);
    const {recipientUser} = useFetchRecipient(currentChat, user)
    

    if (!recipientUser) 
    return (
        <p style={{textAlign:"center", width:"100%", color:"white"}}>No conversation selected</p>
        );

    if (isMessagesLoading) 
    return (
        <p style={{textAlign:"center", width:"100%", color:"white"}}>Loading chat</p>
        );


    return  <div className='chatbox'>
        <div className='message-box'>
            <div className='chat-header'>
                <strong>{recipientUser?.name}</strong>
            </div>
            {messages?.data?.map((message, index) => (
            <div key={index} className={`${message?.senderId === user?._id 
            ? "self-message"
            : "other-message"}`}>
                <span className='message'>{message.text}</span>
                <span className='message-date'>{formatDate(message.createdAt)}</span>
            </div>
            ))}
        </div>
        <div className='chat-footer'>
            <input type='text' name='text' value={textMessage} className='input-message' onChange={(e) => setTextMessage(e.target.value)}/>
            <button className='send-button' onClick={() => sendTextMessage(textMessage, user, currentChat._id, sendTextMessage)}>send</button>
        </div>
    </div>
        

}

export default ChatBox