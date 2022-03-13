import React from 'react'
import Meteo from './Meteo'
import avatar from '../assets/user.png'
import Link from 'next/link'
import Image from 'next/image'
import { PlusSmIcon } from '@heroicons/react/outline'
import SuggesPages from './SuggesPages'
import SuggesAmis from './SuggesAmis'
import { LinkIcon, NewspaperIcon, PencilIcon, PhotographIcon, UserIcon, VideoCameraIcon } from '@heroicons/react/solid'
import Klap from './Klap'

function CurrentFeed() {
  return (
    <div className='flex flex-row items-center justify-center m-6 '>
        {/* first side feed*/}
            <div className='flex flex-col items-center justify-start h-[1420px] max-h-[1420px]'>
            <Meteo/>
            <SuggesPages/>  
            </div>
        {/* middle side feed*/}
            <div className='flex flex-col items-center justify-start h-[1420px] max-h-[1420px]'>
            
            <Klap/>

            <div className='flex  items-center justify-start w-[524px] h-[60px] rounded shadow-lg bg-white mx-4'>
                <div className='h-full w-[68px] bg-blue-400 flex items-center justify-center rounded-l'><NewspaperIcon className="h-5 w-5 text-sky-800"/></div>
                <div className='flex  items-center justify-center text-center mx-12 text-base '>Aucune actualité disponible actuellement</div>
            </div>
            </div>
        {/* last side feed*/}
            <div className='flex flex-col items-center justify-start h-[1420px] max-h-[1420px]'> 
            <div className='w-[268px] h-[132px] rounded shadow-lg bg-white mx-4 my-3'>
            mes images
            </div>

            <div className='w-[268px] h-[132px] rounded shadow-lg bg-white mx-4 mb-4'>
            mes images
            </div>

            <div className='w-[268px] h-[264px] rounded shadow-lg bg-white mx-4 mb-4'>
            pub
            </div>

            <div className='w-[268px] h-[204px] rounded shadow-lg bg-white mx-4 mb-4'>
            mes contacts
            </div>

                <SuggesAmis/>
            </div>

    </div>
  )
}

export default CurrentFeed