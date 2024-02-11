import React from 'react'
import speech from '../../assets/speech-bubble.png'
import doubt from '../../assets/doubt.png'
import beat from '../../assets/beat.png'
function Services() {
  return (
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
  )
}

export default Services