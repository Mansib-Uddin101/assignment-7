import React, { useContext, useState } from 'react';
import { FriendContext } from '../context/FriendContext'; 
import callImg from "../assets/call.png"
import textImg from "../assets/text.png"
import videoImg from "../assets/video.png"

const TimelineEvent = ({ type, contact, date }) => {
    const selectType = {
        "call": callImg,
        "text": textImg,
        "video": videoImg
    }
    return (
        <div className="flex items-center gap-6 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm transition-all hover:shadow-md hover:border-[#3a6d59]/20">
            <div className="w-16 h-16 flex items-center justify-center bg-[#ecfdf5] rounded-full text-4xl">
            <img src={selectType[type]} alt="" />
            </div>
            <div className="flex-1">
                <h3 className="text-xl font-bold text-[#1a2e2a]">
                    {type} <span className="text-[#3a6d59] font-medium">with {contact}</span>
                </h3>
                <p className="text-[#64748b] text-sm">{date}</p>
            </div>
        </div>
    );
};

const TimelinePage = () => {
    const { contacts } = useContext(FriendContext);
    const [filter, setFilter] = useState('');
    const filteredTimeline = contacts.filter((event) => {
        if (!filter) return true;
        return event.type.toLowerCase() === filter.toLowerCase();
    });

    const displayTimeline = [...filteredTimeline].reverse();

    return (
        <div className="min-h-screen bg-[#f8fafc] p-10 md:p-16">
            <div className="max-w-7xl mx-auto">

                <div className="flex flex-col gap-6 mb-12">
                    <h1 className="text-6xl font-bold text-[#1e463a] tracking-tight">Timeline</h1>

                    <div className="relative max-w-sm">
                        <select
                            value={filter}
                            onChange={(e) => setFilter(e.target.value)}
                            className="w-full bg-white text-slate-500 border border-gray-200 pl-6 pr-12 py-3.5 rounded-xl font-medium appearance-none focus:ring-2 focus:ring-[#3a6d59] focus:border-[#3a6d59] shadow-sm cursor-pointer outline-none"
                        >
                            <option value="">All Activities</option>
                            <option value="Meetup">Meetups only</option>
                            <option value="Text">Texts only</option>
                            <option value="Call">Calls only</option>
                            <option value="Video">Video only</option>
                        </select>
                    </div>
                </div>

                <div className="space-y-6">
                    {displayTimeline.length > 0 ? (
                        displayTimeline.map((event, index) => (
                            <TimelineEvent
                                key={index}
                                type={event.type}
                                contact={event.name}
                                date={event.date}
                            />
                        ))
                    ) : (
                        <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-300">
                            <p className="text-slate-400 text-lg">No activities found in your timeline yet.</p>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};

export default TimelinePage;