import React from 'react'
import avatar from '../assets/user.png'
import Image from 'next/image'
import {  ArrowNarrowLeftIcon, MinusIcon } from '@heroicons/react/outline'
    
const ChatBar = () => {
    const ChatItems = [
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
  return (
    <div className='fixed top-[70px] right-0 h-[100%] w-20  float-right  flex z-0'> 
    <div className='d-flex items-center justify-center bg-slate-100 text-blue-600 w-28 h-full'>
        <div className='w-20 h-[90%] bg-slate-100  overflow-hidden'>
            
                {
                    ChatItems.map((item, index)=>{
                        return(
                            <div className='h-10 w-10 relative  m-4 '>
                               {item.online && <span class="absolute bg-[#21fc0d] h-3 w-3 rounded-full top-0 right-7 border border-2 border-slate-100 z-10" />} 
                               {item.message > 0  && <span class="absolute bg-[#e60000] h-6 w-6 max-w-8 rounded-full -bottom-2 -right-3 border border-2 border-slate-100 z-10 inline-flex items-center justify-center font-bold text-slate-100 text-[8px]">{item.message > 99 ? '+99' : item.message}</span>} 
                <Image src={item.cover} alt='avatar'   layout="fill" objectFit="cover" className='h-16 w-16' />
            </div>);
                    })
                }
            
        </div>
        <div className='w-20 h-[8%] max-h-[8%] bg-[#005b82] z-10 fixed bottom-0 inline-flex items-center justify-center'>
                <MinusIcon className="h-10 w-19 text-[#e86e04]"/>
        </div>
    </div>
    </div>
    )
}

export default ChatBar