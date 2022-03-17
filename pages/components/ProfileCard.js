import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import avatar from '../assets/user.png'

function ProfileCard() {
  return (
      <div className='flex flex-col items-center justify-start w-[1128px]  mx-3 mt-28 mb-0 shadow-lg z-100'>
          <div className='bg-white w-full h-[340px] rounded-t-lg  bg-gradient-to-r from-purple-500 to-pink-500'></div>
          
          <div className='z-2 relative bg-white w-full h-[97px] rounded-b-lg flex px-2 pl-6 items-center justify-between'>
             
              <ul className='inline-flex items-center justify-center pl-3'>
                  <li className='relative h-12 max-w-36 rounded hover:bg-gray-100 mx-1 p-4 flex items-center text-[#005b82] font-semibold text-base'><Link href='/about'>Activites</Link>
                  <div className='absolute -top-1 -right-1 inline-flex items-center justify-center font-semibold text-[11px] text-white h-5 w-5 max-w-24 max-h-24 rounded bg-orange-500'>0</div>
                  </li>
                  <li className='h-12 max-w-36 rounded hover:bg-gray-100 mx-1 p-4 flex items-center text-[#005b82] font-semibold text-base'><Link href='/appos'>A propos</Link></li>
                  <li className='relative h-12 max-w-36 rounded hover:bg-gray-100 mx-1 p-4 flex items-center text-[#005b82] font-semibold text-base'><Link href='/contact'>Mes Contacts</Link>
                  <div className='absolute -top-1 -right-1 inline-flex items-center justify-center font-semibold text-[11px] text-white h-5 w-5 max-w-24 max-h-24 rounded bg-orange-500'>0</div>
                  </li>
                </ul>

              <div className=' absolute left-[41%] top-[-106px] flex flex-col items-center justify-center  '>
              <div className='h-[132px] w-[132px]  rounded-full relative'> 
                <Image src={avatar} alt='avatar'   layout="fill" objectFit="cover" className='h-[132px] w-[132px]' />  
            </div>
            <div className='text-slate-600 font-semibold text-lg mt-2'>Mbakop Georges Alfred</div>
            <div className='text-slate-500 font-semibold text-xs mt-0'>Douala, Cameroun</div>
              </div>

              <ul className='inline-flex items-center justify-center pr-5'>
                  <li className='relative h-12 max-w-36 rounded hover:bg-gray-100 mr-2 p-4 flex items-center text-[#005b82] font-semibold text-base'><Link href='/multimedias'>Multimédias</Link>
                  <div className='absolute -top-1 -right-1 inline-flex items-center justify-center font-semibold text-[11px] text-white h-5 w-5 max-w-24 max-h-24 rounded bg-orange-500'>0</div>
                  </li>
                  <li className='relative h-12 max-w-36 rounded hover:bg-gray-100 mr-2 p-4 flex items-center text-[#005b82] font-semibold text-base'><Link href='/evenements'>Mes Evenements</Link>
                  <div className='absolute -top-1 -right-1 inline-flex items-center justify-center font-semibold text-[11px] text-white h-5 w-5 max-w-24 max-h-24 rounded bg-orange-500'>0</div>
                  </li>
                  <li className='relative h-12 max-w-36 rounded hover:bg-gray-100 ml-2 p-4 flex items-center text-[#005b82] font-semibold text-base'><Link href='/groupes'>Mes Groupes</Link>
                  <div className='absolute -top-1 -right-1 inline-flex items-center justify-center font-semibold text-[11px] text-white h-5 w-5 max-w-24 max-h-24 rounded bg-orange-500'>0</div>
                  </li>
                </ul>

          </div>
      </div>
    
  )
}

export default ProfileCard