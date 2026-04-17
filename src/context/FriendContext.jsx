import React, { createContext, useEffect, useState } from 'react'

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
    const data ={
        friends
    }
    return (
        <FriendContext.Provider value={data}>
            {children}
        </FriendContext.Provider>
    )
}

export default FriendProvider
