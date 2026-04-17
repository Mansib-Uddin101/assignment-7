import React from 'react'

const Hero = () => {
    return (
        <div className='flex flex-col items-center justify-center gap-8'>
            <div>
                <h1 className='text-6xl font-bold'>Friends to keep close in your life</h1>
                <p className='text-lg text-[#64748B] mt-4'>Your personal shelf of meaningful connections. Browse, tend, and nurture the
                    relationships that matter most.</p>
            </div>
            <div>
                <button className='bg-[#1e463a] p-2 text-white font-semibold active:scale-95 rounded-md transition-all'>+ Add a Friend</button>
            </div>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 text-center'>
                <div className='bg-white text-[#64748B] shadow-md p-8 rounded-md'>
                    <h3 className='font-bold text-2xl'>10</h3>
                    <p>Total Friends</p>
                </div>
                <div className='bg-white text-[#64748B] shadow-md p-8 rounded-md'>
                    <h3 className='font-bold text-2xl'>3</h3>
                    <p>On Track</p>
                </div>
                <div className='bg-white text-[#64748B] shadow-md p-8 rounded-md'>
                    <h3 className='font-bold text-2xl'>6</h3>
                    <p>Need Attention</p>
                </div>
                <div className='bg-white text-[#64748B] shadow-md p-8 rounded-md'>
                    <h3 className='font-bold text-2xl'>12</h3>
                    <p>Interactions this month</p>
                </div>
            </div>
            <div className="w-5/6 h-px bg-gray-200"></div>
        </div>
    )
}

export default Hero
