import React, { createContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify';

export const FriendContext = createContext()
const FriendProvider = ({ children }) => {
    const [friends, setFriends] = useState([]);
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await fetch("/data.json");
                const data = await res.json();
                setFriends(data);
                ;
            }
            catch (error) {
                console.log("Error fetching data", error);

            }
        };
        fetchProduct();
    }, []);


    const [contacts, setContacts] = useState([]);
    const handleContactBtn = (contactType, name) => {
        const today = new Date();
        const formattedDate = today.toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        });

        const newContact = {
            type: contactType,
            name: name,
            date: formattedDate
        }
        setContacts([...contacts, newContact])
        toast.success(`${contactType} with ${name} set to Timeline`);

    }
    

    const data = {
        friends, handleContactBtn, contacts
    }
    return (
        <FriendContext.Provider value={data}>
            {children}
        </FriendContext.Provider>
    )
}

export default FriendProvider
