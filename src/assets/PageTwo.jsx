import React from 'react'
import {BsCloudArrowDownFill , GoDatabase ,MdSecurity ,MdDashboard ,CiMobile3 } from 'react-icons/all'

const PagrTwo = () => {
  return (
    <div className='flex justify-center items-center max-w-[900px] mx-auto mt-[-60px]'>
      <div className='bg-white rounded-md m-4 w-full shadow-lg '>
          <div className='p-4  w-full sm:p-8 grid grid-cols-4 sm:grid-cols-4 md:grid-cols-5 gap-2 md:gap-0 font-mono '>
            <div className='flex items-center justify-center gap-1 cursor-pointer'>
              <BsCloudArrowDownFill size={18} className='text-rose-500'/>
              <p className='sm:text-sm text-[8px] font-thin'>Cloud App</p>
            </div>
            <div className='flex items-center justify-center cursor-pointer gap-1'>
              <GoDatabase size={18} className='text-rose-500'/>
              <p className='sm:text-sm text-[8px] font-thin'>Database</p>
            </div>
            <div className='flex items-center justify-center gap-1 cursor-pointer'>
              <MdSecurity size={18} className='text-rose-500'/>
              <p className='sm:text-sm text-[8px] text-[8px]font-thin'>Cloud Security</p>
            </div>
            <div className='flex items-center justify-center gap-1 cursor-pointer'>
              <MdDashboard size={18} className='text-rose-500'/>
              <p className='sm:text-sm text-[8px] font-thin'>Dashboard</p>
            </div>
            <div className='md:flex items-center hidden justify-center gap-2 cursor-pointer'>
              <CiMobile3 size={20} className='text-rose-500'/>
              <p className='sm:text-sm text-[8px] font-thin'>Mobile Friendly</p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default PagrTwo