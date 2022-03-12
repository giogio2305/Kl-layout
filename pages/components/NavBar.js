import React, {useState} from 'react'
import {  BellIcon, ChatIcon, InboxIcon, MailIcon, MenuIcon, QuestionMarkCircleIcon, ShoppingBagIcon, ShoppingCartIcon, UserAddIcon, UsersIcon} from '@heroicons/react/solid'
import {  BanIcon, ChatAlt2Icon, DotsVerticalIcon, TrashIcon, UserCircleIcon, XIcon } from '@heroicons/react/outline'
import avatar from '../assets/user.png'
import Image from 'next/image'
import Link from 'next/link'
function NavBar() {
  const [chatOpen, setChatOpen] = useState(false);

  const OchatBar = () => {
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
    <div className='fixed  float-right top-[60px] right-[4px]   flex'> 
    <div className='d-flex items-center justify-start text-blue-600 w-[368px]  mt-0 '>

        <div className='w-[308px] h-[478px] overflow-hidden rounded-t-lg bg-white shadow-lg px-6  overflow-x-hidden'>
            <div className='inline-flex items-center justify-between m-3 w-[95%]'>
            <div className='text-slate-600 text-2xl font-semibold'>Contacts</div>
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

    <div className='flex flex-col items-start justify-start mt-1 w-[100%] h-[328px] no-scrollbar overflow-y-auto overflow-x-hidden'>
            

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
        
        <div className='w-[308px] h-[7%] max-h-[8%] bg-[#005b82] z-10 rounded-b-lg fixed  inline-flex items-center justify-center'>
                <div className="text-base  font-semibold text-[#ea7d1d]">
                    Tout voir dans Contacts
                    </div>
        </div>
    </div>
    </div>
    )
}

  return (  
<nav class=" fixed w-[100%]   px-1 sm:px-4 m-0 py-3 bg-[#005b82] border border-x-0 border-t-0 border-b-[6px]  border-b-orange-500 overflow-hidden z-50">
<div class="container flex flex-wrap justify-between items-center">
<a href="#" class="flex items-center pl-[108px]">
<span class="self-center text-sm font-bold whitespace-nowrap dark:text-white">KLAPEERS ACTUALITÉS</span>
</a>
<div class="flex md:order-1">
<div class="hidden relative mr-3 md:mr-0 md:block">
<div class="flex absolute inset-y-0 right-0 items-center pr-3 pointer-events-none">
<svg class="w-5 h-5 text-[#005b82]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
</div>
<input type="text" id="email-adress-icon" class="block p-2 pr-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-[#e86e04] sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-[#e86e04] dark:placeholder-gray-400 dark:text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Personnes, Entrprises"/>
</div>
<button data-collapse-toggle="mobile-menu-3" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-3" aria-expanded="false">
<span class="sr-only">Open main menu</span>
<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
<svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
</button>
</div>

<div class="hidden justify-between items-center  w-60 md:flex md:w-auto md:order-2" id="mobile-menu-3">
<ul class="flex flex-col mt-4 md:flex-row md:space-x-5 md:mt-0 md:text-sm md:font-medium">
<li>
<a href="#" class="block  text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page"><ShoppingCartIcon className="h-7 w-7 text-slate-100"/></a>
</li>
<li>
<a href="#" class="block text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"><UserAddIcon className="h-7 w-7 text-slate-100"/></a>
</li>
<li>
<a href="#" class="block relative  text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
<span class="absolute bg-[#e60000] h-3 w-3 rounded-full -top-0.8 -right-0.5 border border-2 border-[#005b82]" />
 <MailIcon className="h-7 w-7 text-slate-100"/>
 </a>
</li>
<li>
<a href="#" class="block  text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"><ChatIcon className="h-7 w-7 text-slate-100"/></a>
</li>
<li>
<a href="#" class="block  text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"><BellIcon className="h-7 w-7 text-slate-100"/></a>
</li>
</ul>
</div>

<div className='md:order-3 relative inline-flex items-center justify-center' >
<div  className='dropdown dropdown-end  d-flex justify-center items-center text-center py-2 w-10 h-10 rounded-full bg-orange-500 cursor-pointer'  >
<span tabindex="0"className='text-white font-bold text-base '>MG</span>
<ul tabindex="0" class="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4 z-50">
          <li><a>Item 1</a></li> 
          <li><a>Item 2</a></li>
        </ul>
</div>

<div  className={`ml-2   d-flex justify-center items-center text-center py-2 px-2 w-10 h-10 rounded-full ${chatOpen ? 'bg-gray-800':'bg-transparent'} hover:bg-gray-800 cursor-pointer`} onClick={()=>setChatOpen(!chatOpen)} >
<span className='text-white font-bold text-base '><UsersIcon className="h-6 w-6 text-slate-100"/></span>
</div>
<div  className='ml-2   d-flex justify-center items-center text-center py-2 px-2 w-10 h-10 rounded-full bg-transparent hover:bg-gray-800 cursor-pointer' >
<span className='text-white font-bold text-base '><QuestionMarkCircleIcon className="h-6 w-6 text-slate-100"/></span>
</div>
{chatOpen && <OchatBar setChatOpen={setChatOpen} chatOpen={chatOpen}/>}




</div>

</div>
</nav>


  )
}

export default NavBar