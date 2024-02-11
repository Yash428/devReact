import React from 'react'
import img1 from '../../assets/img1.jpg'
function About(
    {
        Id = "about",
        ...props
    }) {
  return (
    <div id='about' className='flex flex-row h-screen w-full' >
                <div className='h-full'>
                    <img src={img1} className='w-full h-screen object-cover' alt="" />
                </div>
                <div className='flex items-center text-center w-1/2'>
                    <span className='text-6xl text-orange-600 font-bold'>It's not just a silly doubt, a bigger step towards problem solving.</span>    
                </div>
            </div>
  )
}

export default About