import React, { useContext } from 'react';
import {
    PiBellZBold,
    PiArchiveBold,
    PiTrashBold,
    PiPhoneBold,
    PiChatCenteredTextBold,
    PiVideoCameraBold
} from 'react-icons/pi';
import { useParams } from 'react-router';
import { FriendContext } from '../context/FriendContext';

const FriendDetails = () => {
    const params = useParams();
    const { friends, handleContactBtn } = useContext(FriendContext);
    const selectedFriend = friends.find((friend) => friend.id == params.id);

    if (!selectedFriend) {
        return <div className="p-8 text-center">Friend not found</div>;
    }

    return (
        <div className="p-8 bg-[#f8fafc] min-h-screen">
            <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12 md:col-span-4 lg:col-span-3 space-y-4">
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 flex flex-col items-center text-center">
                        <div className="w-24 h-24 rounded-full overflow-hidden mb-4 ring-4 ring-gray-50">
                            <img
                                src={selectedFriend.picture}
                                alt={selectedFriend.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h2 className="text-xl font-bold text-[#1a2e2a] mb-2">{selectedFriend.name}</h2>
                        <div className="flex flex-wrap justify-center gap-2 mb-4">
                            <span className={`text-white text-[10px] font-bold px-3 py-0.5 rounded-full uppercase ${selectedFriend.status === 'overdue' ? 'bg-[#ff5a5a]' : 'bg-green-500'}`}>
                                {selectedFriend.status}
                            </span>
                            {selectedFriend.tags.map((tag, index) => (
                                <span key={index} className="bg-[#dcfce7] text-[#166534] text-[10px] font-bold px-3 py-0.5 rounded-full uppercase">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <p className="text-[#64748b] italic text-sm mb-1">"{selectedFriend.bio}"</p>
                        <p className="text-gray-400 text-xs">Preferred: {selectedFriend.email}</p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <button className="flex items-center justify-center gap-3 bg-white border border-gray-100 py-3 rounded-lg text-[#1a2e2a] font-semibold text-sm hover:bg-gray-50 transition-colors shadow-sm">
                            <PiBellZBold className="text-lg" /> Snooze 2 Weeks
                        </button>
                        <button className="flex items-center justify-center gap-3 bg-white border border-gray-100 py-3 rounded-lg text-[#1a2e2a] font-semibold text-sm hover:bg-gray-50 transition-colors shadow-sm">
                            <PiArchiveBold className="text-lg" /> Archive
                        </button>
                        <button className="flex items-center justify-center gap-3 bg-white border border-gray-100 py-3 rounded-lg text-red-500 font-semibold text-sm hover:bg-red-50 transition-colors shadow-sm">
                            <PiTrashBold className="text-lg" /> Delete
                        </button>
                    </div>
                </div>

                <div className="col-span-12 md:col-span-8 lg:col-span-9 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                            { label: 'Days Since Contact', value: selectedFriend.days_since_contact },
                            { label: 'Goal (Days)', value: selectedFriend.goal },
                            { label: 'Next Due', value: selectedFriend.next_due_date, highlight: true },
                        ].map((stat, i) => (
                            <div key={i} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center">
                                <div className={`text-3xl font-bold mb-1 ${stat.highlight ? 'text-[#1e463a]' : 'text-slate-700'}`}>
                                    {stat.value}
                                </div>
                                <div className="text-slate-400 text-sm">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 flex justify-between items-center">
                        <div>
                            <h3 className="text-[#1e463a] font-bold text-lg mb-1">Relationship Goal</h3>
                            <p className="text-slate-500">Connect every <span className="text-slate-800 font-bold">{selectedFriend.goal} days</span></p>
                        </div>
                        <button className="bg-gray-50 text-slate-600 px-4 py-1.5 rounded-md text-sm font-medium border border-gray-200 hover:bg-gray-100 transition-colors">
                            Edit
                        </button>
                    </div>

                    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8">
                        <h3 className="text-[#1e463a] font-bold text-lg mb-6">Quick Check-In</h3>
                        <div className="grid grid-cols-3 gap-4">
                            <button onClick={()=> handleContactBtn("call", selectedFriend.name)} className="flex flex-col items-center justify-center gap-2 py-6 rounded-xl border border-gray-100 bg-slate-50/50 hover:bg-slate-100 transition-colors group">
                                <PiPhoneBold className="text-2xl text-slate-700" />
                                <span className="text-sm font-medium text-slate-600">Call</span>
                            </button>
                            <button onClick={()=> handleContactBtn("text", selectedFriend.name)} className="flex flex-col items-center justify-center gap-2 py-6 rounded-xl border border-gray-100 bg-slate-50/50 hover:bg-slate-100 transition-colors">
                                <PiChatCenteredTextBold className="text-2xl text-slate-700" />
                                <span className="text-sm font-medium text-slate-600">Text</span>
                            </button>
                            <button onClick={()=> handleContactBtn("video", selectedFriend.name)} className="flex flex-col items-center justify-center gap-2 py-6 rounded-xl border border-gray-100 bg-slate-50/50 hover:bg-slate-100 transition-colors">
                                <PiVideoCameraBold className="text-2xl text-slate-700" />
                                <span className="text-sm font-medium text-slate-600">Video</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendDetails;