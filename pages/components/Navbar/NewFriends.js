import React, {useState} from 'react'
import avatar from '../../assets/user.png'
import Image from 'next/image'
import Link from 'next/link'
import { XIcon, PlusSmIcon, XCircleIcon } from '@heroicons/react/outline'
import { CheckIcon, MinusIcon } from '@heroicons/react/solid'
  
function NewFriends({NfOpen, setNfOpen}) {
  const SuggesItems = [
    {
        name: 'arlaine meudje',
        cover:  avatar,
        demande: 'autres',
    },
    {
        name: 'SIGNE',
        cover:  avatar,
        demande: 'autres',
    },        
    {
        name: 'Towa Patrice',
        cover:  avatar,
        demande: 'autres',
    },        {
        name: 'KAMGA',
        cover:  avatar,
        demande: 'autres',
    },
    {
      name: 'SIGNE',
      cover:  avatar,
      demande: 'autres',
  },        
  {
      name: 'Towa Patrice',
      cover:  avatar,
      demande: 'autres',
  },    
  {
    name: 'Towa Patrice',
    cover:  avatar,
    demande: 'autres',
},        {
    name: 'KAMGA',
    cover:  avatar,
    demande: 'autres',
},
{
  name: 'SIGNE',
  cover:  avatar,
  demande: 'autres',
},        
{
  name: 'Towa Patrice',
  cover:  avatar,
  demande: 'autres',
},
{
  name: 'Towa Patrice',
  cover:  avatar,
  demande: 'autres',
},        {
  name: 'KAMGA',
  cover:  avatar,
  demande: 'autres',
},
{
name: 'SIGNE',
cover:  avatar,
demande: 'autres',
},        
{
name: 'Towa Patrice',
cover:  avatar,
demande: 'autres',
}, 
];
  return (
    <div className='fixed  top-[60px] right-[28%] 2xl:right-[32%]   flex'> 
    <div className='d-flex items-center justify-start text-blue-600 w-[368px]  mt-0'>

        <div className='w-[308px] h-[478px]  rounded-t-lg bg-white shadow-lg px-6  overflow-x-hidden'>
            <div className='inline-flex items-center justify-between m-3 w-[95%]'>
            <div className='text-slate-600 text-lg font-semibold'>Demandes</div>
            <XIcon className="h-6 w-6 text-slate-600 ml-3 cursor-pointer" onClick={()=> setNfOpen(!NfOpen)} />
            </div>


    <div className='flex flex-col items-start justify-start mt-3 w-[100%] h-[400px] overflow-y-scroll overflow-x-hidden no-scrollbar '>
            
    {
            SuggesItems.map((item)=>{
                return(
                    <div className='inline-flex items-center justify-start h-[72px] w-[100%] my-3 ml-2'>
                    <div className='h-10 w-10 relative cursor-pointer mr-2 ml-0'>
                                <Image src={item.cover} alt='avatar'   layout="fill" objectFit="cover" className='h-16 w-16' />
                        </div>
                        <div>
                                    <div className='text-[13.6px] text-slate-700 font-bold truncate w-[114px]  cursor-pointer'>
                                        {item.name}
                                    </div>
            
                                    <div className='text-[10px]  w-[88px] text-slate-600 font-medium '>
                                    Demande: {item.demande}
                                    </div>
                        </div>
                        <div  className='mx-2   d-flex justify-center items-center text-center py-1 px-1 w-7 h-7 rounded-full bg-transparent hover:bg-gray-200 cursor-pointer' >
                        <span className='text-white font-bold text-base '><CheckIcon className="h-5 w-5 text-slate-600"/></span>
                        </div>

                        <div  className='mx-2   d-flex justify-center items-center text-center py-1 px-1 w-7 h-7 rounded-full bg-transparent hover:bg-gray-200 cursor-pointer' >
                        <span className='text-white font-bold text-base '><MinusIcon className="h-5 w-5 text-slate-600"/></span>
                        </div>
                    </div>
            
                );
            })
        }
            
    </div>

        </div>
        
        <div className='w-[308px] h-[28] p-2 bg-[#005b82] z-10 rounded-b-lg fixed  inline-flex items-center justify-center'>
              
              <div className="text-sm  font-semibold text-white">
              <Link href='#'>
                    Liste de vos Demandes
                    </Link>
                    </div>
              
        </div>
    </div>
    </div>
  )
}


export default NewFriends