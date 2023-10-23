import React, {useState, useEffect} from 'react'
import axios from "axios"

function useFetchRecipient(chat, user) {
    const [recipientUser, setRecipientUser] = useState(null);
    const [error, setError] = useState(null);

    const recipientId = chat?.members.find((id) => id !== user?._id)

    useEffect(() => {
        const getUser = async() => {
            if (!recipientId) return null;

            const response = await axios.get(`http://localhost:6969/user/find/mongo/${recipientId}`);

            if (response.error) {
                return setError(error)
            }
            else{
                setRecipientUser(response.data);
            }
            
        }

        getUser();
    }, [recipientId]);

  return {recipientUser}
}

export default useFetchRecipient