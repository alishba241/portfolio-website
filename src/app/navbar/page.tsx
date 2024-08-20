import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className='flex flex-col md:flex-row items-center justify-between px-4 py-4 bg-[#20242d]'>
      <h1 className='text-xl md:text-2xl font-bold font-sans text-white md:ml-[70px] mt-5 md:mt-10'>Portfolio.</h1>
      <ul className='flex flex-col md:flex-row mt-6  font-bold text-sm items-center text-black md:mt-10 md:mr-12'>
        <li className='mb-2 md:mb-0 md:mr-[40px] shadow-sm shadow-cyan-700 bg-cyan-300 px-6 py-2 rounded-full hover:bg-white hover:text-black duration-500 ease-in'>
          <Link href={"/"}>Home</Link>
        </li>
        <li className='mb-2 md:mb-0 md:mr-[40px] shadow-sm shadow-cyan-700 bg-cyan-300 px-6 py-2 rounded-full hover:bg-white hover:text-black duration-500 ease-in'>
          <Link href={"/about"}>About</Link>
        </li>
        <li className='shadow-sm shadow-cyan-700 bg-cyan-300 px-6 py-2 rounded-full hover:bg-white hover:text-black duration-500 ease-in'>
          <Link href={"/contact"}>Contact</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar;
