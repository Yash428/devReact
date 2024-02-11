import React from 'react'
import Button from '../Button'
import logo from '../../assets/logo.jpg'
function Home({
    children,
    Id="home",
    ...props
    }) {
  return (
    <div id={Id} className=' flex flex-row items-center '>
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
  )
}

export default Home