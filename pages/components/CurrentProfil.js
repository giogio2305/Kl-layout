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
import { LinkIcon, NewspaperIcon, PencilIcon, PhotographIcon, UserIcon, VideoCameraIcon } from '@heroicons/react/solid'
import Klap from './Klap'


function CurrentProfil() {
  return (
    <div className='flex flex-row items-center justify-center mx-6 mt-4 mb-4 '>

                {/* first side feed*/}
                <div className='flex flex-col items-center justify-start w-[325px] h-[735px] max-h-[735px] mx-[15px]'> 
            <div className='h-[300px] w-[275px] bg-white rounded mt-1 ml-32'></div>
            </div>
        {/* middle side feed*/}
            <div className='flex flex-col items-center justify-start w-[975px] h-[735px] max-h-[735px]'>
            <div className='h-[730px] w-[825px] bg-white rounded mt-1 mr-10'></div>
            </div>
    </div>
  )
}

export default CurrentProfil