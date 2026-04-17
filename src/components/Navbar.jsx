import React from 'react';
import { HiHome } from 'react-icons/hi2';
import { PiClockCounterClockwiseBold, PiChartLineBold } from 'react-icons/pi';

const Navbar = () => {
  return (
    <nav className="w-full bg-white border-b border-gray-100 px-8 py-3 flex items-center justify-between">
      <div className="flex items-center">
        <span className="text-2xl font-bold tracking-tight text-[#0f172a]">
          Keen<span className="text-[#2d5a4c]">Keeper</span>
        </span>
      </div>

      <div className="flex items-center space-x-6">
        <button className="flex items-center gap-2 bg-[#244D3F] text-white px-4 py-2 rounded-md shadow-sm transition-all hover:bg-[#16352c]">
          <HiHome className="text-xl" />
          <span className="font-semibold text-sm">Home</span>
        </button>

        <button className="flex items-center gap-2 text-[#64748b] hover:text-[#1e293b] transition-colors group">
          <PiClockCounterClockwiseBold className="text-xl" />
          <span className="font-semibold text-sm">Timeline</span>
        </button>

        <button className="flex items-center gap-2 text-[#64748b] hover:text-[#1e293b] transition-colors group">
          <PiChartLineBold className="text-xl" />
          <span className="font-semibold text-sm">Stats</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;