import React from 'react';
import { PiHandshakeBold, PiChatCenteredTextBold, PiVideoCameraBold, PiPhoneCallBold, PiCaretDownBold } from 'react-icons/pi';

const TimelineEvent = ({ type, contact, date }) => {
  const getIcon = () => {
    switch (type) {
      case 'Text': return <PiChatCenteredTextBold className="text-[#3a6d59]" />;
      case 'Video': return <PiVideoCameraBold className="text-[#3a6d59]" />;
      case 'Call': return <PiPhoneCallBold className="text-[#3a6d59]" />;
      default: return null;
    }
  };

  return (
    <div className="flex items-center gap-6 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
      <div className="w-16 h-16 flex items-center justify-center bg-[#ecfdf5] rounded-full text-4xl">
        {getIcon()}
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
  const timelineData = [
    { type: 'Text', contact: 'Sarah Chen', date: 'March 28, 2026' },
    { type: 'Video', contact: 'Aisha Patel', date: 'March 23, 2026' },
    { type: 'Call', contact: 'Marcus Johnson', date: 'March 19, 2026' },
    { type: 'Text', contact: 'Olivia Martinez', date: 'March 13, 2026' },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] p-10 md:p-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col gap-6 mb-12">
          <h1 className="text-6xl font-bold text-[#1e463a] tracking-tight">Timeline</h1>
          
          {/* Custom Filter Select */}
          <div className="relative max-w-sm">
            <select className="w-full bg-white text-slate-500 border border-gray-200 pl-6 pr-12 py-3.5 rounded-xl font-medium appearance-none focus:ring-2 focus:ring-[#3a6d59] focus:border-[#3a6d59] shadow-sm cursor-pointer">
              <option value="">Filter timeline</option>
              <option value="meetup">Meetups only</option>
              <option value="text">Texts only</option>
              <option value="call">Calls only</option>
              <option value="video">Video only</option>
            </select>
            <PiCaretDownBold className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 text-lg pointer-events-none" />
          </div>
        </div>

        {/* Timeline Events Feed */}
        <div className="space-y-6">
          {timelineData.map((event, index) => (
            <TimelineEvent 
              key={index} 
              type={event.type} 
              contact={event.contact} 
              date={event.date} 
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default TimelinePage;