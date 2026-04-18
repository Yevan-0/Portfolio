'use client'
import { useState } from 'react'

const Navbar = () => {
    const [open, setOpen] = useState(false)

    const links = ['HOME', 'ABOUT ME', 'TECHNOLOGIES & SKILLS', 'GITHUB', 'CONTACT ME']

    return (
        <nav className='fixed w-full top-5 z-50 md:bg-strawberry'>
            <div className='w-full flex justify-end items-center pr-8'>

                <button
                    className='md:hidden text-white flex flex-col gap-1.5 p-2'
                    onClick={() => setOpen(!open)}
                >
                    <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
                    <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
                    <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
                </button>

                <ul className='hidden md:flex items-center font-poppins font-medium list-none space-x-8 py-4'>
                    {links.map((link) => (
                        <li key={link}>
                            <a href="#" className="text-white">{link}</a>
                        </li>
                    ))}
                </ul>
            </div>

            <div className={`md:hidden transition-all duration-300 overflow-hidden ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <ul className='flex flex-col font-poppins font-semibold list-none py-4 pr-8 items-end gap-4'>
                    {links.map((link) => (
                        <li key={link}>
                            <a href="#" className="text-white hover:text-strawberry transition-colors duration-200">{link}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar