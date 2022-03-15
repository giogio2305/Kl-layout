import React, {useState} from 'react'
import avatar from '../../assets/user.png'
import Image from 'next/image'
import Link from 'next/link'
import {  BanIcon, ChatAlt2Icon, DotsVerticalIcon, TrashIcon, UserCircleIcon, XIcon } from '@heroicons/react/outline'
    
const OchatBar = ({chatOpen, setChatOpen}) => {
    const ChatItems = [
        {
            name: 'Cabraule Ketchanga',
            cover:  avatar,
            online : false,
            message: 20,
        },
        {
            name: 'random',
            cover:  avatar,
            online : true,
            message: 0,
        },
        {
            name: 'random',
            cover:  avatar,
            online : false,
            message: 0,
        },
        {
            name: 'random',
            cover:  avatar,
            online : false,
            message: 20,
        },
        {
            name: 'random',
            cover:  avatar,
            online : true,
            message: 0,
        },
        {
            name: 'random',
            cover:  avatar,
            online : false,
            message: 0,
        },
        {
            name: 'random',
            cover:  avatar,
            online : true,
            message: 135,
        },
        {
            name: 'random',
            cover:  avatar,
            online : false,
            message: 0,
        },
        {
            name: 'random',
            cover:  avatar,
            online : true,
            message: 0,
        },
        {
            name: 'random',
            cover:  avatar,
            online : false,
            message: 0,
        },
        {
            name: 'random',
            cover:  avatar,
            online : true,
            message: 0,
        },
        {
            name: 'random',
            cover:  avatar,
            online : true,
            message: 0,
        },
        {
            name: 'random',
            cover:  avatar,
            online : false,
            message: 0,
        },
        {
            name: 'random',
            cover:  avatar,
            online : true,
            message: 0,
        },

    ];
    const OptionsItems=[
        {
            name: 'Voir le profil',
            icon: <UserCircleIcon className="h-7 w-7 text-slate-600"/>,
        },
        {
            name: 'Ouvrir dans Messenger',
            icon: <ChatAlt2Icon className="h-7 w-7 text-slate-600"/>,
        },
        {
            name: 'Supprimer la discussion',
            icon: <TrashIcon className="h-7 w-7 text-slate-600"/>,
        },
        {
            name: 'Bloquer le profil',
            icon: <BanIcon className="h-7 w-7 text-slate-600"/>,
        },
    ]
  return (
    <div className='fixed top-[70px] -right-16 h-full w-[368px]  float-right  flex z-0'> 
    <div className='d-flex items-center justify-center  w-[328px] h-full'>

        <div className='w-[308px] h-[87%] overflow-hidden bg-white shadow-lg px-6   overflow-x-hidden'>
            <div className='inline-flex items-center justify-between m-3 w-[95%]'>
            <div className='text-slate-600 text-xl font-semibold'>Contacts</div>
            <XIcon className="h-6 w-6 text-slate-600 ml-3 cursor-pointer" onClick={()=>setChatOpen(!chatOpen)} />
            </div>

        <div class="pt-2 relative mx-auto text-slate-600 w-[100%]">
        <input class="border-2 border-gray-300 bg-white shadow-xs h-10 px-10 pr-12 rounded-lg text-[12.4px] focus:outline-none"
          type="search" name="search" placeholder="Rechercher vos contacts"/>
        <button type="submit" class="absolute right-0 top-0 mt-5 mr-9 ">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
</svg>
        </button>
      </div>

      <div class="tabs mt-3 w-[308px] px-4">
  <a class="tab tab-bordered tab-active text-slate-500">Pro</a> 
  <a class="tab tab-bordered ">Privés</a> 
  <a class="tab tab-bordered">Bloqués</a>
    </div>

    <div className='flex  flex-col items-start justify-start mt-1 w-[100%] h-[84%] no-scrollbar overflow-y-auto overflow-x-hidden'>
            

            {
                    ChatItems.map((item, index)=>{
                        return(
                            <div className='flex items-center justify-between m-1 py-2 pr-2 pl-1 w-[95%]'>

                            <div className='h-9 w-9 relative cursor-pointer'>
                            {item.online && <span class="absolute bg-[#21fc0d] h-2.5 w-2.5 rounded-full top-0 right-6 border border-2 border-slate-100 z-10" />} 
                            {item.message > 0  && <span class="absolute bg-[#e60000] h-6 w-6 max-w-8 rounded-full -bottom-2 -right-3 border border-2 border-slate-100 z-10 inline-flex items-center justify-center font-bold text-slate-50 text-[8px]">{item.message > 99 ? '+99' : item.message}</span>} 
                            <Image src={item.cover} alt='avatar'   layout="fill" objectFit="cover" className='h-16 w-16' />
                            </div>
                            
                            <div className='ml-3'>
                                <Link href={item.name}>
                                <div className='text-[13.6px] text-slate-600 font-bold truncate w-[148px]  cursor-pointer'>
                                {item.name}
                                </div>
                                </Link>

                                <div className='text-[9px] text-slate-600 font-medium '>
                                {item.online ? 'En ligne':'Hors-ligne'}
                                </div>
                            </div>
                            <div class="dropdown dropdown-end">
                            <DotsVerticalIcon tabindex="0" className="h-4 w-4 text-slate-600 ml-1 cursor-pointer"/>
                            <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-white rounded-xl w-48">
                                {
                                    OptionsItems.map((item, index)=>{
                                                return(
                                                    <li><a>
                                                        {item.icon} 
                                                        <div className='text-slate-600 text-[14px] font-semibold'>
                                                        {item.name}
                                                        </div>
                                                        
                                                        </a></li>
                                                );
                                    })

                                }
                            </ul>
                            </div>
                            

                            </div>
                            );
                    })
                }

            
    </div>

        </div>
        
        <div className='w-[308px] h-[6%]  max-h-[8%] bg-[#005b82] z-10  fixed  inline-flex items-center justify-center'>
                <div className="text-base  font-semibold text-[#ea7d1d]">
                    <Link href='#'>
                    Tout voir dans Contacts
                    </Link>
                    </div>
        </div>
    </div>
    </div>
    )
}

export default OchatBar