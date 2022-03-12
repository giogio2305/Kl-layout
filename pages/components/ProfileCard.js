import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import avatar from '../assets/user.png'

function ProfileCard() {
  return (
      <div className='flex flex-col items-center justify-start mx-12 mt-28 mb-4 shadow-lg z-100'>
          <div className='bg-white w-[1078px] h-[340px] rounded-t-lg  bg-gradient-to-r from-purple-500 to-pink-500'></div>
          
          <div className='z-2 relative bg-white w-[1078px] h-[97px] rounded-b-lg flex px-2 pl-4 items-center justify-between'>
             
              <ul className='inline-flex items-center justify-center'>
                  <li className='h-12 max-w-36 rounded hover:bg-gray-100 mx-1 p-4 flex items-center text-[#005b82] font-medium text-base'><Link href='#'>Activites</Link></li>
                  <li className='h-12 max-w-36 rounded hover:bg-gray-100 mx-1 p-4 flex items-center text-[#005b82] font-medium text-base'><Link href='#'>A propos</Link></li>
                  <li className='h-12 max-w-36 rounded hover:bg-gray-100 mx-1 p-4 flex items-center text-[#005b82] font-medium text-base'><Link href='#'>Mes Contacts</Link></li>
                </ul>

              <div className=' absolute left-[38%] top-[-106px] flex flex-col items-center justify-center  '>
              <div className='h-[132px] w-[132px]  rounded-full relative'> 
                <Image src={avatar} alt='avatar'   layout="fill" objectFit="cover" className='h-[132px] w-[132px]' />  
            </div>
            <div className='text-slate-600 font-semibold text-lg mt-2'>Mbakop Georges Alfred</div>
            <div className='text-slate-600 font-medium text-xs mt-0'>Douala, Cameroun</div>
              </div>

              <ul className='inline-flex items-center justify-center'>
                  <li className='h-12 max-w-36 rounded hover:bg-gray-100 mx-1 p-4 flex items-center text-[#005b82] font-medium text-base'><Link href='#'>Multimédias</Link></li>
                  <li className='h-12 max-w-36 rounded hover:bg-gray-100 mx-1 p-4 flex items-center text-[#005b82] font-medium text-base'><Link href='#'>Mes Evenements</Link></li>
                  <li className='h-12 max-w-36 rounded hover:bg-gray-100 mx-1 p-4 flex items-center text-[#005b82] font-medium text-base'><Link href='#'>Mes Groupes</Link></li>
                </ul>

          </div>
      </div>
    
  )
}

export default ProfileCard