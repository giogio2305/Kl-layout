import React, {useState} from 'react'
import {  BellIcon, ChatIcon, InboxIcon, MailIcon, MenuIcon, OfficeBuildingIcon, QuestionMarkCircleIcon, ShoppingBagIcon, ShoppingCartIcon, UserAddIcon, UsersIcon} from '@heroicons/react/solid'
import {  BanIcon, ChatAlt2Icon, DotsVerticalIcon, LoginIcon, TrashIcon, UserCircleIcon, XIcon } from '@heroicons/react/outline'
import avatar from '../assets/user.png'
import Image from 'next/image'
import Link from 'next/link'
import ShopCart from './Navbar/ShopCart'
import OchatBar from './Navbar/OchatBar'
import NewFriends from './Navbar/NewFriends'
import KmailWidget from './Navbar/KmailWidget'
import MessengerCart from './Navbar/MessengerCart'
import NotificationsCart from './Navbar/NotificationsCart'
function NavBar() {
  const [chatOpen, setChatOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const [NfOpen, setNfOpen] = useState(false);
  const [kmailOpen, setKmailOpen] = useState(false);
  const [MsgOpen, setMsgOpen] = useState(false);
  const [NotifOpen, setNotifOpen] = useState(false);



  return (  
<nav class=" fixed w-[100%]   px-1 sm:px-4  py-3 bg-[#005b82] border border-x-0 border-t-0 border-b-[6px]  border-b-orange-500  z-30">
<div class="container flex flex-wrap justify-between items-center">
<a href="#" class="flex items-center pl-[108px]">
<span class="self-center text-sm font-black whitespace-nowrap dark:text-white">KLAPEERS ACTUALITÉS</span>
</a>


<div class="flex md:order-1">
<div class="hidden relative mr-3 md:mr-0 md:block">
<div class="form-control">
  <div class="input-group ">
    <input type="text" placeholder="Rechercher des personnes…" class="input input-bordered bg-white h-[35px] w-[244px] border-2 border-orange-500"/>
    <button class="h-[35px] w-[50px] bg-[#005b82] rounded-r-lg border-2 border-orange-500">
      <svg xmlns="http://www.w3.org/2000/svg" class="inline-flex items-center text-white h-5 w-5 mx-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
  </div>
</div></div>
<button data-collapse-toggle="mobile-menu-3" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-3" aria-expanded="false">
<span class="sr-only">Open main menu</span>
<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
<svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
</button>
</div>

<div class="hidden justify-between items-center  w-60 md:flex md:w-auto md:order-2" id="mobile-menu-3">
<ul class="flex flex-col mt-4 md:flex-row md:space-x-5 md:mt-0 md:text-sm md:font-medium">
<li  className={`ml-1   d-flex justify-center items-center text-center py-2.5 px-2 w-10 h-10 rounded-full ${shopOpen ? 'bg-gray-800':'bg-transparent'} hover:bg-gray-800 cursor-pointer`} onClick={()=>setShopOpen(!shopOpen)}>
<a href="#" class="block  text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page"><ShoppingCartIcon className="h-6 w-6 text-slate-100"/></a>
</li>
{shopOpen && <ShopCart setShopOpen={setShopOpen} shopOpen={shopOpen}/>}


<li className={`ml-1   d-flex justify-center items-center text-center py-2 px-2 w-10 h-10 rounded-full ${NfOpen ? 'bg-gray-800':'bg-transparent'} hover:bg-gray-800 cursor-pointer`} onClick={()=>setNfOpen(!NfOpen)}>
<a href="#" class="block text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"><UserAddIcon className="h-6 w-6 text-slate-100"/></a>
</li>
{NfOpen && <NewFriends setNfOpen={setNfOpen} NfOpen={NfOpen}/>}


<li className={`ml-1   d-flex justify-center items-center text-center py-2 px-2 w-10 h-10 rounded-full ${kmailOpen ? 'bg-gray-800':'bg-transparent'} hover:bg-gray-800 cursor-pointer`} onClick={()=>setKmailOpen(!kmailOpen)}>
<a href="#" class="block relative  text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
<span class="absolute bg-[#e60000] h-3.5 w-3.5 rounded-full -top-0.8 -right-1 border border-2 border-transparent text-[8px] text-white text-center flex items-center justify-center font-bold" >38</span>
 <MailIcon className="h-6 w-6 text-slate-100"/>
 </a>
</li>


<li className={`ml-1   d-flex justify-center items-center text-center py-2 px-2 w-10 h-10 rounded-full ${MsgOpen ? 'bg-gray-800':'bg-transparent'} hover:bg-gray-800 cursor-pointer`} onClick={()=>setMsgOpen(!MsgOpen)}>
<a href="#" class="block  text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"><ChatIcon className="h-6 w-6 text-slate-100"/></a>
</li>
{MsgOpen && <MessengerCart setMsgOpen={setMsgOpen} MsgOpen={MsgOpen}/>}


<li className={`ml-1   d-flex justify-center items-center text-center py-2 px-2 w-10 h-10 rounded-full ${NotifOpen ? 'bg-gray-800':'bg-transparent'} hover:bg-gray-800 cursor-pointer`} onClick={()=>setNotifOpen(!NotifOpen)}>
<a href="#" class="block  text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"><BellIcon className="h-6 w-6 text-slate-100"/></a>
</li>
{NotifOpen && <NotificationsCart setNotifOpen={setNotifOpen} NotifOpen={NotifOpen}/>}


</ul>
</div>

<div className='md:order-3 relative inline-flex items-center justify-center mr-[-40px] ' >
<label  tabindex="0" className='dropdown dropdown-end  d-flex justify-center items-center text-center py-2 w-10 h-10 rounded-full bg-orange-500 cursor-pointer'  >
<span className='text-white font-bold text-base '>MG</span>
<ul tabindex="0" class="menu dropdown-content p-2 shadow bg-white rounded-lg w-80 max-h-96 mt-4">

      <div className='inline-flex items-center justify-start w-full h-16 px-1 hover:bg-slate-50 mb-1 '>
      <div className='h-12 w-12 relative cursor-pointer '>
                                        <Image src={avatar} alt='avatar'   layout="fill" objectFit="cover" className='h-16 w-16' />
        </div>

          <div className='flex flex-col items-start justify-start ml-4'>
          <div className='mb-1 text-base text-slate-600 font-bold break-words cursor-pointer'>
              Mbakop Georges Alfred
          </div>

          <div className='text-xs text-slate-600 font-medium'>
                    Voir le profil
            </div>
          </div>

      </div>

      <div className='text-center text-sm text-slate-600 font-medium bg-gray-100 border-t-2 border-b-2 py-1 cursor-default'>
      Business Solutions
      </div>

      <div className='inline-flex items-center justify-start p-3 group'>
      <OfficeBuildingIcon className="h-6 w-6 text-slate-600 group-hover:text-[#005b82]"/>
      <div className='text-center text-sm text-slate-600 group-hover:text-[#005b82] font-semibold cursor-pointer ml-4'>
      Klapeers Dropshipping Center
      </div>
      </div>

      <div className='text-center text-sm text-slate-600 bg-gray-100 font-medium border-t-2 border-b-2 py-1 cursor-default'>
      Mon compte
      </div>

      <div className='inline-flex items-center justify-start p-3 group'>
      <ShoppingBagIcon className="h-6 w-6 text-slate-600 group-hover:text-[#005b82] "/>
      <div className='text-center text-sm text-slate-600 group-hover:text-[#005b82] font-semibold cursor-pointer ml-4'>
      Mon Klapeers 
      </div>
      </div>

      <div className='inline-flex items-center justify-start p-3 group'>
      <QuestionMarkCircleIcon className="h-6 w-6 text-slate-600 group-hover:text-[#005b82]"/>
      <div className='text-center text-sm text-slate-600 group-hover:text-[#005b82] font-semibold cursor-pointer ml-4'>
      Besoin d'aide
      </div>

      </div>
      <div className='inline-flex items-center justify-start p-3 group'>
      <LoginIcon className="h-6 w-6 text-red-600"/>
      <div className='text-center text-sm text-slate-600 group-hover:text-red-600 font-semibold cursor-pointer ml-4'>
      Déconnexion
      </div>
      </div>


      </ul>
</label>

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