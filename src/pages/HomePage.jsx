import React from 'react'
import Button from '../components/Button'
import logo from '../assets/logo.jpg'
import img1 from '../assets/img1.jpg'
import Navbar from '../components/Navbar'
import speech from '../assets/speech-bubble.png'
import doubt from '../assets/doubt.png'
import beat from '../assets/beat.png'
import b1 from '../assets/b1.jpg'
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
function HomePage() {
  return (
    <div className='flex flex-col h-screen w-full'>
        <div className='bg-neutral-200 w-full'>
            <Navbar />
        </div>
        <div id='home' className=' flex flex-row items-center '>
            <div className='flex flex-col pl-10'>
                <div className='flex flex-col '>
                    <span className='text-6xl text-orange-600 font-extrabold w-2/3 mb-3'>WELCOME TO DOUBTUP</span>
                    <span className='text-2xl text-orange-600 '>Your Ultimate Doubt Solving Hub</span>
                </div>
                <div className='flex-1 flex-col justify-center'>
                    <Button className='border-orange-600 border-solid my-4 w-1/4' bgColor='bg-orange-200' textColor='text-orange-600'>Sign-Up</Button>
                    <Button className='border-orange-600 border-solid my-4 w-1/4' bgColor='bg-orange-200' textColor='text-orange-600'>Login</Button>
                </div>
            </div>
            <div className='flex-1'>
                <img src={logo} className='h-full' />
            </div>
        </div>
        
        <div id='about' className='flex flex-row h-screen w-full' >
            <div className='h-full'>
                <img src={img1} className='w-full h-screen object-cover' alt="" />
            </div>
            <div className='flex items-center text-center w-1/2'>
                <span className='text-6xl text-orange-600 font-bold'>It's not just a silly doubt, a bigger step towards problem solving.</span>    
            </div>
        </div>
        <div id='services' className='flex flex-col h-screen w-full p-8 pb-10'>
            <div className='m-4 p-5 '>
                <span className='text-6xl text-orange-600 font-bold w-full '>Our Services</span>
            </div>
            <div className='flex flex-row justify-center m-10'>
                <div className='flex flex-col items-center mx-6 '>
                    <img src={speech} className='my-4 w-48 scale-75' alt="" />
                    <div className='bg-orange-200 flex flex-col p-4 rounded-lg h-44 text-center items-center justify-center'>
                        <span className='text-orange-500 font-bold text-xl'>CHAT FEATURE</span>
                        <span className='text-orange-400 w-2/3 text-xl font-semibold'>Chat with students and make friends</span>
                    </div>
                </div>
                <div className='flex flex-col items-center mx-6'>
                    <img src={doubt} className='w-48 my-4' alt="" />
                    <div className='bg-orange-200 flex flex-col p-4 rounded-lg h-44 text-center items-center justify-center'>
                        <span className='text-orange-500 font-bold text-xl'>DOUBT SOLVING</span>
                        <span className='text-orange-400 w-2/3 text-xl font-semibold'>Now easily solve your doubts</span>
                    </div>
                </div>
                <div className='flex flex-col items-center mx-6'>
                    <img src={beat} className='my-4 w-48 scale-125' alt="" />
                    <div className='bg-orange-200 flex flex-col p-4 rounded-lg h-44 text-center items-center justify-center'>
                        <span className='text-orange-500 font-bold text-xl'>REVIEW AND RATE</span>
                        <span className='text-orange-400 w-2/3 text-xl font-semibold'>Solve more doubts to get stars and shine</span>
                    </div>
                </div>
                
            </div>
            <div className='p-4 gap-5'>
                    {' '}
                </div>
        </div>
        <div id='values' className='flex flex-row-reverse h-screen w-full'>
            <div className='h-screen'>
                <img src={b1} className='scale-0.50 w-full h-screen' alt="" />
            </div>
            <div className='flex flex-col h-screen text-center items-center my-4 w-1/2 p-4'>
                <div className='flex items-start justify-center my-3 p-3'>
                    <span className='text-6xl text-orange-600 font-bold w-2/3'>What We Promise You</span>
                </div>
                <div className='flex flex-col justify-center items-center mt-5 pt-4'>
                    <div className='bg-amber-300 rounded-full w-full p-4 my-3'>
                        <span className='text-xl text-orange-600 '>Connecting with batchmates</span>
                    </div>
                    <div className='bg-amber-300 rounded-full w-full p-4 my-3'>
                        <span className='p-2 text-xl text-orange-600'>Solve your doubts easily</span>
                    </div>
                    <div className='bg-amber-300 rounded-full w-full p-4 my-3'>
                        <span className='p-2 text-xl text-orange-600'>review your progress</span>
                    </div>
                </div>
            </div>
        </div>
        <div id='testimonial' className='flex flex-col m-auto p-4 h-screen'>
            <div className='flex w-2/3  p-6 m-4'>
                <span className='text-6xl text-orange-600 w-2/3 font-bold text-left'>Kind Words From Our Students</span>
            </div>
            <div className=' h-56 '>
                {' '}
            </div>
            <div className='flex flex-row justify-center text-orange-600 py-10 m-auto text-justify'>
                <div className='flex flex-col w-1/4 px-3 py-2 mx-3'>
                    <span className='mb-3 text-xl'>It is a perfect website for the students of the CSPIT where we can easily solve our doubts and get connected with students. </span>
                    <span className='font-bold text-xl p-2 pl-0'>Shivang</span>
                </div>
                <div className='flex flex-col w-1/4 px-3 py-2 mx-3'>
                    <span className='mb-3 text-xl'>It is a perfect website for the students of the CSPIT where we can easily solve our doubts and get connected with students. </span>
                    <span className='font-bold text-xl p-2 pl-0'>Jay</span>
                </div>
                <div className='flex flex-col w-1/4 px-3 py-2 mx-3'>
                    <span className='mb-3 text-xl'>It is a perfect website for the students of the CSPIT where we can easily solve our doubts and get connected with students. </span>
                    <span className='font-bold text-xl pl-0 p-2'>Yug</span>
                </div>
            </div>
            <div className='h-16'>
                {' '}
            </div>
        </div>
        <div id='contact' className='flex flex-col justify-start h-screen m-4 p-4'>
            <div className='w-2/5 p-6 m-4'>
                <span className='text-6xl text-orange-600 w-2/3 font-bold text-left'>We would love to hear from you!</span>
            </div> 
            <div className='flex justify-left flex-row '>
                <div className='flex flex-col p-8 text-orange-600 text-xl font-medium'>
                    <div className='p-4 rounded-full bg-amber-200 m-3'><span className='p-2'>Phone: 9106158720</span></div>
                    <div className='p-4 rounded-full bg-amber-200 m-3'><span className='p-2'>Email: 22ce079@charusat.edu.in</span></div>
                    <div className='p-4 rounded-full bg-amber-200 m-3'><span className='flex flex-row items-center'>Social Media Platforms: <span className='p-1'><FaLinkedin className='' /></span> <span className='p-1'><FaSquareXTwitter /></span><span className='p-1'><FaInstagram /></span></span></div>
                </div>
                
            </div> 
            <div className='h-36'>
                    {' '}
                </div>
        </div>
    </div>
  )
}

export default HomePage