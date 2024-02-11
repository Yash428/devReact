import React from 'react'
import b1 from '../../assets/b1.jpg'
function Values() {
  return (
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
  )
}

export default Values