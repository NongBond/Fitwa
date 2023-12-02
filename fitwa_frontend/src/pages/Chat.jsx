import React, { useContext } from "react";
import { ChatContext } from "../context/ChatContext";
import "../component/Chat.css";
import UserChat from "../component/UserChat";
import { AuthContext } from "../context/AuthContext";
import PotentialChat from "../component/PotentialChat";
import ChatBox from "../component/ChatBox";
import Navbar from "../component/Navbar";
function Chat() {
  const { user } = useContext(AuthContext);
  const { userChats, isUserChatsLoading, updateCurrentChat } =
    useContext(ChatContext);

  return (
    <div>
      <Navbar />
      <div className="left-right-container">
        <div className="left-chat">
          <PotentialChat />
          <div>
            {userChats?.length < 1 ? null : (
              <div className="chat-container">
                {/* {isUserChatsLoading && <p>Loading Chat</p>} */}
                {userChats?.data?.map((chat, index) => {
                  return (
                    <div key={index} onClick={() => updateCurrentChat(chat)}>
                      <UserChat chat={chat} user={user} />
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
        <div className="right-chat">
          <ChatBox />
        </div>
      </div>
    </div>
  );
}

export default Chat;
