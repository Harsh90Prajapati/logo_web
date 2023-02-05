import React, { useState } from 'react'
import {AiOutlineMenu , AiOutlineClose} from 'react-icons/ai'

const NavBar = () => {

    const [open , setOpen] = useState(true)

    const openMenu =()=>{
        setOpen(!open)
    }
  return (
    <div className='flex bg-white justify-center fixed z-20 items-center gap-10 w-full overflow-hidden px-8 text-black h-16 rounded-b-xl mt-0 shadow-lg '>
    <h1 className='w-full text-2xl font-semibold text-rose-400'>LOGO.</h1>
    <ul className='hidden sm:flex md:gap-4'>
        <li className='p-4 hover:border-b-2 border-b-gray-600 cursor-pointer'>Home</li>
        <li className='p-4 hover:border-b-2 border-b-gray-600 cursor-pointer'>About</li>
        <li className='p-4 hover:border-b-2 border-b-gray-600 cursor-pointer'>Contact</li>
        <li className='p-4 hover:border-b-2 border-b-gray-600 cursor-pointer'>Resourse</li>
        <li className='p-4 hover:border-b-2 border-b-gray-600 cursor-pointer'>Help</li>
    </ul>
    
    <div onClick={openMenu} className='block sm:hidden flex-1 '>
    {!open ? <AiOutlineClose/> : <AiOutlineMenu size={20}/>}
    </div>
    <div className={!open ? 'fixed z-10 bg-pink-50 text-indigo-900 left-0 top-0 w-full border-r mt-14 h-[48%] border-r-gray-400 ease-in-out duration-500 md:hidden rounded-b-lg shadow-md':'fixed z-10 top-[-100%] h-[50%] w-full duration-700'}>
    <ul className='uppercase p-4 cursor-pointer'>
        <li className='p-4 border-b border-b-rose-300 text-sm'>Home</li>
        <li className='p-4 border-b border-b-rose-300 text-sm'>About</li>
        <li className='p-4 border-b border-b-rose-300 text-sm'>Contact</li>
        <li className='p-4 border-b border-b-rose-300 text-sm'>Resourse</li>
        <li className='p-4 border-b border-b-rose-300 text-sm'>Help</li>
    </ul>
    <button className='bg-rose-500 w-[95%] mx-3 py-2 rounded-xl font-medium hover:bg-transparent hover:border-2 hover:border-rose-500'>Sign In</button>
    </div>

    <button className='px-3 ml-2 py-2 bg-rose-500 rounded-md text-white shadow-md sm:block hidden hover:bg-transparent hover:border hover:border-rose-500 hover:text-rose-500'>SignIn</button>
</div>
  )
}

export default NavBar