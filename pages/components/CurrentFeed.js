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


function CurrentFeed() {
  return (
    <div className='flex flex-row items-center justify-center mx-6 mt-2 mb-4 '>
        {/* first side feed*/}
            <div className='flex flex-col items-center justify-start h-[1420px] max-h-[1420px]'>
            <Meteo/>
            <SuggesPages/>  
            </div>
        {/* middle side feed*/}
            <div className='flex flex-col items-center justify-start h-[1420px] max-h-[1420px]'>
            
            <Klap/>

            <div className='flex  items-center justify-start w-[524px] h-[60px] rounded shadow-lg bg-white mx-4'>
                <div className='h-full w-[68px] bg-[#005b82] flex items-center justify-center rounded-l'><NewspaperIcon className="h-5 w-5 text-[#e86e04]"/></div>
                <div className='flex  items-center justify-center text-center mx-12 text-base '>Aucune actualité disponible actuellement</div>
            </div>
            </div>
        {/* last side feed*/}
            <div className='flex flex-col items-center justify-start h-[1420px] max-h-[1420px]'> 
            <div className='flex flex-col items-center justify-center w-[268px] h-[132px] rounded shadow-lg bg-white mx-4 my-3'>
            <div className='font-semibold text-sm text-slate-600'>
            Mes images
            </div>
            <div className='inline-flex items-center justify-start mb-8 mt-3'>
                
            <div className='w-[52px] h-[16px] rounded shadow-lg bg-white rounded-lg ml-2'>
            <Image src={dim} alt='avatar'    className='h-[100%] w-[100%] rounded-lg ' />
            </div>

            <div className='w-[52px] h-[16px] rounded shadow-lg bg-white rounded-lg mx-2'>
            <Image src={dim} alt='avatar'    className='h-[100%] w-[100%] rounded-lg ' />
            </div>            

            <div className='w-[52px] h-[16px] rounded shadow-lg bg-white rounded-lg mx-2'>
            <Image src={dim} alt='avatar'    className='h-[100%] w-[100%] rounded-lg ' />
            </div>

            <div className='w-[52px] h-[16px] rounded shadow-lg bg-white rounded-lg mr-2'>
            <Image src={dim} alt='avatar'    className='h-[100%] w-[100%] rounded-lg ' />
            </div>

            </div>




            </div>

            <div className=' flex flex-col items-center justify-center w-[268px] h-[132px] rounded shadow-lg bg-white mx-4 mb-4'>
            <div className='text-center font-semibold text-sm text-slate-600'>
            Mes vidéos
            </div>

            <div className='inline-flex items-center justify-start mb-8 mt-3'>
                
                <div className='w-[52px] h-[16px] rounded shadow-lg bg-white rounded-lg ml-2'>
                <Image src={dim} alt='avatar'    className='h-[100%] w-[100%] rounded-lg ' />
                </div>
    
                <div className='w-[52px] h-[16px] rounded shadow-lg bg-white rounded-lg mx-2'>
                <Image src={dim} alt='avatar'    className='h-[100%] w-[100%] rounded-lg ' />
                </div>            
    
                <div className='w-[52px] h-[16px] rounded shadow-lg bg-white rounded-lg mx-2'>
                <Image src={dim} alt='avatar'    className='h-[100%] w-[100%] rounded-lg ' />
                </div>
    
                <div className='w-[52px] h-[16px] rounded shadow-lg bg-white rounded-lg mr-2'>
                <Image src={dim} alt='avatar'    className='h-[100%] w-[100%] rounded-lg ' />
                </div>
    
                </div>
            </div>

            <div className='w-[268px] h-[264px] rounded shadow-lg bg-white mx-4 mb-10'>
            <Image src={pub} alt='avatar'    className='h-[100%] w-[100%]' />
            </div>

            <div className=' flex flex-col items-center justify-center w-[268px] h-[204px] rounded shadow-lg bg-white mx-4 mb-4'>
            <div className='font-semibold text-base text-slate-600 '>
            Mes contacts
            </div>

            <div className='inline-flex items-center justify-start m-5'>
            <div className='h-10 w-10 relative cursor-pointer mr-2 ml-1'>
                                <Image src={avatar} alt='avatar'   layout="fill" objectFit="cover" className='h-16 w-16' />
                        </div>
                        <div className='h-10 w-10 relative cursor-pointer mx-2'>
                                <Image src={avatar} alt='avatar'   layout="fill" objectFit="cover" className='h-16 w-16' />
                        </div>
                        <div className='h-10 w-10 relative cursor-pointer mx-2'>
                                <Image src={avatar} alt='avatar'   layout="fill" objectFit="cover" className='h-16 w-16' />
                        </div>
                        <div className='h-10 w-10 relative cursor-pointer mr-1 ml-2'>
                                <Image src={avatar} alt='avatar'   layout="fill" objectFit="cover" className='h-16 w-16' />
                        </div>
            </div>
            

            <div className='font-semibold text-base mt-2 text-[#e86e04]'>
        <Link href='/contacts'>
        Voir tout
        </Link>

    </div>
            </div>

                <SuggesAmis/>
            </div>





    </div>
  )
}

export default CurrentFeed