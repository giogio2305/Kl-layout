import React from 'react'
import avatar from '../../assets/user.png'
import Image from 'next/image'
import Link from 'next/link'
import { XIcon, PlusSmIcon, XCircleIcon } from '@heroicons/react/outline'
import { CheckIcon, FlagIcon, MinusIcon } from '@heroicons/react/solid'

function NotificationsCart({NotifOpen, setNotifOpen}) {
  const SuggesItems = [
    {
        name: 'arlaine meudje',
        cover:  avatar,
        demande: 'juste 3 jours que tu choisiras ton transport sera assuré',
        red: true,
    },
    {
        name: 'SIGNE',
        cover:  avatar,
        demande: 'Comment tu vas ?',
        red: false,
        online : true,
    },        
    {
        name: 'Towa Patrice',
        cover:  avatar,
        demande: 'autres',
        red: true,
    },        {
        name: 'KAMGA',
        cover:  avatar,
        demande: 'autres',
        red: false,
        online : true,
    },
    {
      name: 'SIGNE',
      cover:  avatar,
      demande: 'autres',
      red: false,
  },        
  {
      name: 'Towa Patrice',
      cover:  avatar,
      demande: 'autres',
      red: false,
      online : true,
  },    
  {
    name: 'Towa Patrice',
    cover:  avatar,
    demande: 'autres',
    red: false,

}, 
{
  name: 'arlaine meudje',
  cover:  avatar,
  demande: 'autres',
  red: true,
},
{
  name: 'SIGNE',
  cover:  avatar,
  demande: 'autres',
  red: false,
  online : true,
},        
{
  name: 'Towa Patrice',
  cover:  avatar,
  demande: 'autres',
  red: true,
},        {
  name: 'KAMGA',
  cover:  avatar,
  demande: 'autres',
  red: false,
},
];
  return (
    <div className='fixed  top-[60px] right-[412px]   flex'> 
    <div className='d-flex items-center justify-start text-blue-600 w-[368px]  mt-0'>

        <div className='w-[308px] h-[478px] overflow-hidden rounded-t-lg bg-white shadow-lg px-2  overflow-x-hidden'>
            <div className='inline-flex items-center justify-between m-3 w-[95%]'>
            <div className='text-slate-600 text-xl font-semibold'>Notifications</div>
            <XIcon className="h-6 w-6 text-slate-600 ml-3 cursor-pointer" onClick={()=> setNotifOpen(!NotifOpen)} />
            </div>


            <div className='flex flex-col items-start justify-start mt-3 w-[100%] h-[412px] overflow-y-scroll overflow-x-hidden no-scrollbar'>
            
            {
                    SuggesItems.map((item)=>{
                        return(
                            <div className='inline-flex items-center justify-start h-[72px] w-[300px] my-3 ml-2'>
                            <div className='h-10 w-10 relative cursor-pointer mr-3 ml-0'>
                                        <Image src={item.cover} alt='avatar'   layout="fill" objectFit="cover" className='h-16 w-16' />
                                </div>
                                <div>
                                            <div className={`text-[12.6px] font-bold ${item.red ? 'text-slate-600': 'text-[#005b82]'}  text-left  w-[188px]  cursor-pointer`}>
                                                {item.name} vient de publier un article sur Klapeers : 
                                            </div>
                                            <div className={`text-[12px] truncate font-bold ${item.red ? 'text-slate-600': 'text-[#005b82]'}  text-left  w-[188px]`}>Embauchée en 1955 en tant qu'ordinateur humain, la mathématicienne Annie Easley a mené une carrière de 34 ans à la NASA en développant du code logiciel pour de nombreux programmes</div> 
                    
                                            {/*<div className={`text-[11px]  w-[180px] truncate ${!item.red ? 'text-[#005b82]':'text-slate-600'} font-semibold`}>
                                            {!item.red ? 'vous: ' : null}{item.demande}
                        </div>*/}
                                </div>
{
    item.red ?
    null
    :

    <div  className='mx-4   d-flex justify-center items-center text-center  w-3 h-3 rounded-full bg-[#005b82] cursor-pointer' ></div>
}

        
                                
                            </div>
                    
                        );
                    })
                }
                    
            </div>

        </div>
        
        <div className='w-[308px] h-[28] p-2 bg-[#005b82] z-10 rounded-b-lg fixed  inline-flex items-center justify-center'>
                <div className="text-sm  font-semibold text-white">
                Liste de vos notifications
                    </div>
        </div>
    </div>
    </div>
  )
}

export default NotificationsCart