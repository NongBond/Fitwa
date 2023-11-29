import { createContext, useState, useEffect, useCallback } from "react";
import axios from "axios";

export const ChatContext = createContext();

export const ChatContextProvider = ({ children, user }) => {
  const [userChats, setUserChats] = useState([]);
  const [isUserChatsLoading, setIsUserChatsLoading] = useState(true);
  const [userChatsError, setUserChatsError] = useState(null);
  const [potentialChat, setPotentialChat] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [isMessagesLoading, setIsMessagesLoading] = useState(false);
  const [messagesError, setMessagesError] = useState(null);
  const [sendTextMessageError, setSendTextMessageError] = useState(null);
  const [newMessage, setNewMessage] = useState(null);

  useEffect(() => {
    const getUsers = async () => {
      const response = await axios.get("http://localhost:6969/user");
      if (response.error) {
        return console.log("Error fetch all user", error);
      }
      const pChat = response?.data.filter((u) => {
        let chatCreated = false;
        if (user?._id === u?._id) return false;
        if (userChats) {
          chatCreated = userChats?.data?.some((chat) => {
            return chat.members[0] === u._id || chat.members[1] === u._id;
          });
        }
        return !chatCreated;
      });
      setPotentialChat(pChat);
    };

    getUsers();
  }, [userChats]);

  useEffect(() => {
    const getUserChat = async () => {
      if (user?._id) {
        setIsUserChatsLoading(true);
        setUserChatsError(null);

        const response = await axios.get(
          `http://localhost:6969/chats/${user?._id}`
        );
        setIsUserChatsLoading(false);
        if (response.error) {
          return setUserChatsError(response);
        }
        setUserChats(response);
      }
    };
    getUserChat();
  }, [user, userChats]);

  useEffect(() => {
    const getMessages = async () => {
      setMessagesError(null);

      const response = await axios.get(
        `http://localhost:6969/messages/${currentChat?._id}`
      );
      if (response.error) {
        return setMessagesError(response);
      }
      setIsMessagesLoading(false);
      setMessages(response);
    };
    getMessages();
  }, [currentChat, messages]);

  const sendTextMessage = useCallback(
    async (textMessage, sender, currentChatId, setTextMessage) => {
      if (!textMessage) {
        console.log("You must type something!!");
        return;
      }

      try {
        const response = await axios.post("http://localhost:6969/messages", {
          chatId: currentChatId,
          senderId: sender._id,
          text: textMessage,
        });

        if (response.error) {
          console.log("Error sending text message", response.error);
          setSendTextMessageError(response.error);
        } else {
          setMessages((previousMessages) => {
            return [previousMessages, response.data];
          });

          setNewMessage(response.data);
          setTextMessage("");
        }
      } catch (error) {
        console.error("Error sending text message:", error);
        setSendTextMessageError(error);
      }
    },
    [messages]
  );

  const updateCurrentChat = useCallback(
    (chat) => {
      setCurrentChat(chat);
    },
    [user]
  );

  const deleteChat = async (chatId) => {
    try {
      await axios.delete(`http://localhost:6969/chats/delete/${chatId}`);
      setUserChats((prevChats) =>
        prevChats.filter((chat) => chat._id !== chatId)
      );
    } catch (error) {
      console.error("Error deleting chat:", error);
    }
  };

  const handleDeleteUser = async (userId) => {
    try {
      await axios.delete(`http://localhost:6969/user/delete/${userId}`);
      const chatToDelete = userChats.find((chat) =>
        chat.members.includes(userId)
      );
      if (chatToDelete) {
        deleteChat(chatToDelete._id);
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  // const createChat = useCallback(async(firstId, secondId) => {
  //     const response = await axios.post(`http://localhost:6969/chats`, JSON.stringify({firstId, secondId}))
  //     if (response.error){
  //         return console.log("Error fetch create user",err)
  //     }
  //     setUserChats((previouseChat) => [...previouseChat, response]);
  // }, [])
  const createChat = useCallback(async (firstId, secondId) => {
    try {
      const response = await axios.post(`http://localhost:6969/chats`, {
        firstId,
        secondId,
      });
      if (response.error) {
        return console.log("Error fetch create chat", response.error);
      } else {
        setUserChats((previousChats) => [previousChats, response.data]);
      }
    } catch (error) {
      console.error("Error creating chat:", error);
    }
  }, []);

  return (
    <ChatContext.Provider
      value={{
        userChats,
        isUserChatsLoading,
        userChatsError,
        potentialChat,
        createChat,
        updateCurrentChat,
        currentChat,
        messages,
        isMessagesLoading,
        messagesError,
        sendTextMessage,
        handleDeleteUser,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
