import React from 'react'

const navbar_links = [
    {
        key: "home",
        label: "Home",
        to: '#home'
    },
    {
        key: "about",
        label: "About Us",
        to: '#about'
    },
    {
        key: "services",
        label: "Services",
        to: '#services'
    },
    {
        key: 'values',
        label: 'Our Values',
        to: '#values'
    },
    {
        key: 'testimonial',
        label: 'Testimonials',
        to: '#testimonial'
    },
    {
        key: "contact",
        label: "Contact Us",
        to: '#contact'
    }
]
const className = 'px-2 py-1 text-neutral-600 text-md hover:text-neutral-900 font-semibold'
function Navbar() {
  return (
    <div className='fixed top-0 right-0 h-12 bg-neutral-100 w-full flex justify-end z-10 '>
        <ul className='flex flex-row items-center '>
            {
                navbar_links.map((item)=>(
                    <li key={item.key} className={className}>
                        <a href={item.to} >{item.label}</a>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default Navbar