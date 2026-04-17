import React from 'react'
import Hero from '../components/Hero'
import FriendsDisplay from '../components/FriendsDisplay'

const HomePage = () => {
    return (
        <section className='py-20 bg-[#F8FAFC]'>
            <div className='w-5/6 mx-auto'>
                <Hero />
                <FriendsDisplay />
            </div>
        </section>
    )
}

export default HomePage
