import React from 'react'
import { Link } from 'react-router'

const FriendCard = ({ friend }) => {
    const selectStatus = {
        "on-track" : "bg-[#244D3F]",
        "overdue" : "bg-[#EF4444]",
        "almost due" : "bg-[#EFAD44]",
    }
    return (
        <Link to={`/details/${friend.id}`} key={friend.id} className=" bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col items-center">
            <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                <img
                    src={friend.picture}
                    className="w-full h-full object-cover"
                />
            </div>

            <h3 className="text-xl font-bold text-[#2d3748] mb-1">{friend.name}</h3>

            <p className="text-gray-400 text-sm mb-3">{friend.days_since_contact}d ago</p>

            <div className="flex flex-wrap items-center justify-center gap-2">
                {friend.tags.map((tag, index) => (
                    <span
                        key={index}
                        className="bg-green-100 text-green-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wide border border-green-200"
                    >
                        {tag}
                    </span>
                ))}
                <span className={`${selectStatus[friend.status]} text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wide border`}>{friend.status}</span>
            </div>
        </Link>
    )
}

export default FriendCard
