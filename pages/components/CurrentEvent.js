import React from 'react'
import Meteo from './Meteo'
import avatar from '../assets/user.png'
import pub from '../assets/landing-bg.jpg'
import dim from '../assets/a2530054195_10.jpg'
import Link from 'next/link'
import Image from 'next/image'
import { CalendarIcon, PlusSmIcon } from '@heroicons/react/outline'
import SuggesPages from './SuggesPages'
import SuggesAmis from './SuggesAmis'
import {  LinkIcon, NewspaperIcon, PencilIcon, PhotographIcon, UserIcon, VideoCameraIcon } from '@heroicons/react/solid'
import Klap from './Klap'


function CurrentEvent() {
  return (
    <div className='flex flex-row items-center justify-center mx-6 mt-4 mb-4 '>

                {/* first side feed*/}
                <div className='flex flex-col items-center justify-start w-[325px] h-[735px] max-h-[735px] mx-[15px]'> 
            <div className='cursor-pointer h-[200px] w-[275px] bg-white rounded mt-1 ml-32 flex flex-col items-center justify-center  border-2 border-[#005b82] h-[132px] w-[422px] border-dashed rounded-lg'>
    <CalendarIcon className="h-16 w-16 text-[#005b82] group-hover:text-white mb-2 "/>
    <h3 class="mb-1 text-base font-semibold text-[#005b82]">Créer un Evenement</h3>
    <div class="text-xs font-medium text-[#005b82]">Une experience unique</div>
    </div>
            </div>
        {/* middle side feed*/}
            <div className='flex flex-col items-center justify-start w-[975px] h-[735px] max-h-[735px]'>
            <div className='h-[375px] w-[825px] bg-white rounded mt-1 mr-12'></div>
            </div>
    </div>
  )
}

export default CurrentEvent