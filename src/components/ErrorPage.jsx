import React from 'react';
import { PiWarningCircleBold, PiArrowLeftBold } from 'react-icons/pi';

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl border border-gray-100 p-10 text-center">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-[#fef3c7] rounded-full flex items-center justify-center text-[#d97706]">
            <PiWarningCircleBold size={48} />
          </div>
        </div>

        <h1 className="text-4xl font-bold text-[#1e463a] mb-2">Oops!</h1>
        <p className="text-[#64748b] font-medium mb-8">
          We couldn't find the page you're looking for. It might have been moved or doesn't exist.
        </p>

        <div className="flex flex-col gap-3">
          <button 
            onClick={() => window.history.back()}
            className="flex items-center justify-center gap-2 bg-[#1e463a] text-white px-6 py-3 rounded-xl font-semibold transition-all hover:bg-[#16352c] shadow-md active:scale-95"
          >
            <PiArrowLeftBold size={18} />
            Go Back
          </button>
          
          <button 
            onClick={() => window.location.href = '/'}
            className="text-[#1e463a] font-semibold py-3 hover:underline underline-offset-4"
          >
            Return to Dashboard
          </button>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-100">
          <span className="text-xl font-bold tracking-tight text-[#1a2e2a]">
            Keen<span className="text-[#2d5a4c]">Keeper</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;