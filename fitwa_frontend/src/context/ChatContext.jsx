import { createContext, useState, useEffect, useCallback } from "react";
import axios from "axios";

export const ChatContext = createContext();

export const ChatContextProvider = ({children, user}) => {
    const [userChats, setUserChats] = useState([]);
    const [isUserChatsLoading, setIsUserChatsLoading] = useState(false);
    const [userChatsError, setUserChatsError] = useState(null);
    const [potentialChat, setPotentialChat] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            const response = await axios.get("http://localhost:6969/user")
            if (response.error){
                return console.log("Error fetch all user",error)
            }
            const pChat = response?.data.filter((u) => {
                let chatCreated = false;
                if (user?._id === u?._id) return false;
                console.log("userchat = ",userChats)
                if(userChats){
                    chatCreated = userChats?.data.some((chat) => {
                        return chat.members[0] === u._id || chat.members[1] === u._id;
                    })
                }
                return !chatCreated
            });
            setPotentialChat(pChat)
        }

        getUsers();
    }, [userChats])

    useEffect(() => {
        console.log("ChatAPi", user?._id)
        const getUserChat = async() =>{
            if(user?._id){
                setIsUserChatsLoading(true);
                setUserChatsError(null);

                const response = await axios.get(`http://localhost:6969/chats/${user?._id}`)
                //setIsUserChatsLoading(false);
                //if (response.error){
                   // return setUserChatsError(response);
                //}
                setIsUserChatsLoading(false)
                setUserChats(response);
            }
        }
        getUserChat();
    }, [user])

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
            console.log("Error fetch create chat", response.error);
          } else {
            setUserChats((previousChats) => [...previousChats, response.data]);
          }
        } catch (error) {
          console.error("Error creating chat:", error);
        }
      }, []);

    return <ChatContext.Provider value={{ userChats, isUserChatsLoading, userChatsError, potentialChat, createChat}}>
        {children}
    </ChatContext.Provider>
}