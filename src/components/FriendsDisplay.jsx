import React, { useEffect, useState } from 'react'
import FriendCard from './FriendCard';

const FriendsDisplay = () => {
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


    return (
        <div className='pt-10'>
            <div className='text-2xl font-bold'>
                Your Friends
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                {friends.map((friend) => (
                    <FriendCard key={friend.id} friend={friend}/>
                ))}
            </div>
        </div>

    )

}

export default FriendsDisplay
