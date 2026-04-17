import React, { useEffect, useState } from 'react'

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
    console.log(friends);


    return (
        <div className='pt-10'>
            <div className='text-2xl font-bold'>
                Your Friends
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                {friends.map((friend) => (

                    <div key={friend.id} className=" bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col items-center">
                        <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                            <img
                                src={friend.picture}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <h3 className="text-xl font-bold text-[#2d3748] mb-1">{friend.name}</h3>

                        <p className="text-gray-400 text-sm mb-3">62d ago</p>

                        <div className="flex flex-col items-center gap-2">
                            <span className="bg-[#dcfce7] text-[#166534] text-[10px] font-bold px-3 py-1 rounded-md uppercase tracking-wider">
                                Work
                            </span>

                            <span className="bg-[#f0ad4e] text-white text-xs font-medium px-4 py-1.5 rounded-full shadow-sm">
                                Almost Due
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )

}

export default FriendsDisplay
