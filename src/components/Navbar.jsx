import React, { useState } from 'react';
import { HiHome } from 'react-icons/hi2';
import { PiClockCounterClockwiseBold, PiChartLineBold } from 'react-icons/pi';
import { Link } from 'react-router';


const Navbar = () => {
  const [currentPage, setCurrentPage] = useState("home")
  return (
    <nav className="w-full bg-white border-b border-gray-100 px-8 py-3 flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center">
        <span className="text-2xl font-bold tracking-tight text-[#0f172a]">
          Keen<span className="text-[#2d5a4c]">Keeper</span>
        </span>
      </div>

      <div className="flex items-center space-x-6">
        <Link to="/">
          <button onClick={()=> setCurrentPage("home")} className={`flex items-center gap-2 ${currentPage === "home" ? "bg-[#244D3F] text-white": "text-[#64748b]"} px-4 py-2 rounded-md shadow-sm transition-all hover:bg-[#16352c]`}>
            <HiHome className="text-xl" />
            <span className="font-semibold text-sm">Home</span>
          </button>
        </Link>

        <Link to="/timeline">
          <button onClick={()=> setCurrentPage("timelnie")} className={`flex items-center gap-2 ${currentPage === "timeline" ? "bg-[#244D3F] text-white": "text-[#64748b]"} px-4 py-2 rounded-md shadow-sm transition-all hover:bg-[#16352c]`}>
            <PiClockCounterClockwiseBold className="text-xl" />
            <span className="font-semibold text-sm">Timeline</span>
          </button>
        </Link>
        <Link to="/stats">
          <button onClick={()=> setCurrentPage("stats")} className={`flex items-center gap-2 ${currentPage === "stats" ? "bg-[#244D3F] text-white": "text-[#64748b]"} px-4 py-2 rounded-md shadow-sm transition-all hover:bg-[#16352c]`}>
            <PiChartLineBold className="text-xl" />
            <span className="font-semibold text-sm">Stats</span>
          </button>
        </Link>
      </div>
    </nav >
  );
};

export default Navbar;