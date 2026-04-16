import React from 'react'

const Navbar = () => {
    return (
        <nav className=' bg-red fixed w-full top-5'>
            <div className='w-full flex flex-wrap justify-end items-center pr-8'>
                <ul className='flex  items-center font-poppins font-medium list-none flex-row space-x-8 py-4 '>
                    <li >
                        <a href="#" className="block py-2 px-3 text-white bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0" aria-current="page">HOME</a>
                    </li>
                    <li >
                        <a href="#" className="block py-2 px-3 text-white bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0" aria-current="page">ABOUT ME</a>
                    </li>
                    <li >
                        <a href="#" className="block py-2 px-3 text-white bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0" aria-current="page">TECHNOLOGIES & SKILLS</a>
                    </li>
                    <li >
                        <a href="#" className="block py-2 px-3 text-white bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0" aria-current="page">GIT HUB</a>
                    </li>
                    <li >
                        <a href="#" className="block py-2 px-3 text-white bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0" aria-current="page">CONTACT ME</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar