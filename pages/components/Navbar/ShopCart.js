import React, {useState} from 'react'
import avatar from '../../assets/user.png'
import Image from 'next/image'
import Link from 'next/link'
import {  BanIcon, ChatAlt2Icon, DotsVerticalIcon, TrashIcon, UserCircleIcon, XIcon } from '@heroicons/react/outline'
  
function ShopCart({setShopOpen, shopOpen}) {
  return (
    <div className='fixed  top-[60px] right-[32%] 2xl:right-[36%]  flex'> 
    <div className='d-flex items-center justify-start text-blue-600 w-[368px]  mt-0'>

        <div className='w-[308px] h-[478px] overflow-hidden rounded-t-lg bg-white shadow-lg px-6  overflow-x-hidden'>
            <div className='inline-flex items-center justify-between m-3 w-[95%]'>
            <div className='text-slate-600 text-lg font-semibold'>Panier</div>
            <XIcon className="h-6 w-6 text-slate-600 ml-3 cursor-pointer" onClick={()=> setShopOpen(!shopOpen)} />
            </div>


    <div className='flex flex-col items-start justify-start mt-1 w-[100%] h-[328px] no-scrollbar overflow-y-auto overflow-x-hidden'>
            

            
    </div>

        </div>
        
        <div className='w-[308px] h-[28] p-2 bg-[#005b82] z-10 rounded-b-lg fixed  inline-flex items-center justify-center'>
                <div className="text-sm  font-semibold text-white">
                    Tout voir dans Contacts
                    </div>
        </div>
    </div>
    </div>
  )
}

export default ShopCart