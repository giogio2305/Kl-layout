import React from 'react'
import group from '../assets/group.png'
import Image from 'next/image'

function Header({title}) {
  return (
    <div className='relative flex items-center justify-center w-[100%] h-[38vh] mt-16 bg-gradient-to-r from-cyan-500 to-blue-500 shadow-xl overflow-clip'>
            
            <div className='text-white text-5xl font-medium sm:mb-16'>
              {title}
            </div>

            <div className='absolute -bottom-2  min-w-screen'>
            <Image src={group} width='1000%' height='98%' />
            </div>
            
    </div>
  )
}

export default Header