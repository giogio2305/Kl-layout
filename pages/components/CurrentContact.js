import React from 'react'
import Meteo from './Meteo'
import avatar from '../assets/user.png'
import pub from '../assets/landing-bg.jpg'
import dim from '../assets/a2530054195_10.jpg'
import Link from 'next/link'
import Image from 'next/image'
import { PlusSmIcon } from '@heroicons/react/outline'
import SuggesPages from './SuggesPages'
import SuggesAmis from './SuggesAmis'
import { LinkIcon, NewspaperIcon, OfficeBuildingIcon, PencilIcon, PhotographIcon, UserGroupIcon, UserIcon, VideoCameraIcon } from '@heroicons/react/solid'
import Klap from './Klap'


function CurrentContact() {
  return (
    <div className='flex flex-row items-center justify-center mx-6 mt-4 mb-4 mr-24 '>

                {/* first side feed*/}
                <div className='flex flex-col items-center justify-start w-[640px] h-[397px] mx-[8px]'> 

            <div className='h-[396px] w-[536px]  rounded mt-1 ml-36'>
                <div className='w-[100%] h-[60px] rounded-t-lg display bg-white inline-flex items-center justify-between px-8'>
                    <div className='inline-flex items-center justify start'>
                    <OfficeBuildingIcon className="h-5 w-5 text-slate-400 mr-3"/>
                        <div className='text-base text-slate-600 font-semibold'>
                        Mes contacts professionnels
                        </div>
                    </div>

                    <div className='relative inline-flex items-center justify-center font-semibold text-[11px] text-white h-5 w-5 max-w-24 max-h-24 rounded bg-orange-500'>0</div>
                </div>

                <div class="grid grid-cols-3 gap-3 mt-4">
                        <div className='h-[278px] w-[172px] rounded shadow-lg bg-white '></div>
                        <div className='h-[278px] w-[172px] rounded shadow-lg bg-white '></div>
                        <div className='h-[278px] w-[172px] rounded shadow-lg bg-white '></div>
                        <div className='h-[278px] w-[172px] rounded shadow-lg bg-white '></div>
                        <div className='h-[278px] w-[172px] rounded shadow-lg bg-white '></div>
                        <div className='h-[278px] w-[172px] rounded shadow-lg bg-white '></div>
                    </div>
            </div>
            </div>
        {/* middle side feed*/}
        <div className='flex flex-col items-center justify-start w-[660px] h-[397px] mx-[2px]'> 

<div className='h-[396px] w-[536px]  rounded mt-1'>
    <div className='w-[100%] h-[60px] rounded-t-lg display bg-white inline-flex items-center justify-between px-8'>
        <div className='inline-flex items-center justify start'>
        <UserGroupIcon className="h-5 w-5 text-slate-400 mr-3"/>
            <div className='text-base text-slate-600 font-semibold'>
            Mes contacts sociaux
            </div>
        </div>

        <div className='relative inline-flex items-center justify-center font-semibold text-[11px] text-white h-5 w-5 max-w-24 max-h-24 rounded bg-orange-500'>0</div>
    </div>

    <div class="grid grid-cols-3 gap-3 mt-4">
            <div className='h-[278px] w-[172px] rounded shadow-lg bg-white '></div>
            <div className='h-[278px] w-[172px] rounded shadow-lg bg-white '></div>
            <div className='h-[278px] w-[172px] rounded shadow-lg bg-white '></div>
            <div className='h-[278px] w-[172px] rounded shadow-lg bg-white '></div>
            <div className='h-[278px] w-[172px] rounded shadow-lg bg-white '></div>
            <div className='h-[278px] w-[172px] rounded shadow-lg bg-white '></div>
        </div>
</div>
</div>
    </div>
  )
}

export default CurrentContact