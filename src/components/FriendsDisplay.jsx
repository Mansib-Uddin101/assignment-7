import React, { useContext } from 'react'
import FriendCard from './FriendCard';
import { FriendContext } from '../context/FriendContext';

const FriendsDisplay = () => {
    const { friends, loading } = useContext(FriendContext);

    if (loading) {
        return (
            <div className='flex justify-center items-center min-h-100'>
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
            </div>
        );
    }

    return (
        <div className='pt-10'>
            <div className='text-2xl font-bold mb-6'>
                Your Friends
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                {friends.map((friend) => (
                    <FriendCard key={friend.id} friend={friend} />
                ))}
            </div>
        </div>
    );
}

export default FriendsDisplay