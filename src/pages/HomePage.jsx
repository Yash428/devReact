import React from 'react'
import Button from '../components/Button'
import logo from '../assets/logo.jpg'
import img1 from '../assets/img1.jpg'
import Navbar from '../components/Navbar'
import speech from '../assets/speech-bubble.png'
import doubt from '../assets/doubt.png'
import beat from '../assets/beat.png'
import b1 from '../assets/b1.jpg'

import Home from '../components/home/Home'
import About from '../components/home/About'
import Services from '../components/home/Services'
import Values from '../components/home/Values'
import Testimonial from '../components/home/Testimonial'
import Contact from '../components/home/Contact'
function HomePage() {
    return (
        <div className='flex flex-col h-screen w-full'>
            <div className='bg-neutral-200 h-12 w-full'>
                <Navbar />
            </div>
            <Home />
            <About />
            <Services />
            <Values />
            <Testimonial />
            <Contact />
            
        </div>
    )
}

export default HomePage