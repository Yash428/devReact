import React from 'react'
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
function Contact() {
  return (
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
  )
}

export default Contact