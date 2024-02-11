import React from 'react'

function Testimonial() {
  return (
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
  )
}

export default Testimonial