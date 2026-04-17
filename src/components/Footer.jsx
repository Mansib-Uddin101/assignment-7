import React from 'react';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';
import { RiTwitterXFill } from 'react-icons/ri';

const Footer = () => {
  return (
    <footer className="w-full bg-[#1e463a] text-white py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
          KeenKeeper
        </h2>
        
        <p className="text-gray-300 max-w-2xl mb-8 text-sm md:text-base leading-relaxed">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        <div className="flex flex-col items-center gap-4 mb-12">
          <span className="text-lg font-medium">Social Links</span>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 flex items-center justify-center bg-white rounded-full text-[#1e463a] hover:bg-gray-200 transition-colors">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center bg-white rounded-full text-[#1e463a] hover:bg-gray-200 transition-colors">
              <FaFacebookF size={18} />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center bg-white rounded-full text-[#1e463a] hover:bg-gray-200 transition-colors">
              <RiTwitterXFill size={18} />
            </a>
          </div>
        </div>

        <div className="w-full border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;