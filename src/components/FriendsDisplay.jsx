import React, { useContext} from 'react'
import FriendCard from './FriendCard';
import { FriendContext } from '../context/FriendContext';

const FriendsDisplay = () => {
    const { friends } = useContext(FriendContext);


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
