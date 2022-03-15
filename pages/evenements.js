import React,  {useState} from 'react'
import Header from './components/Header'
import NavBar from './components/NavBar'
import Image from 'next/image'
import Link from 'next/link'
import {  MenuIcon,
NewspaperIcon, DesktopComputerIcon, ShoppingCartIcon,
 AcademicCapIcon, UserGroupIcon, GlobeIcon,
  IdentificationIcon, OfficeBuildingIcon,
HeartIcon, MusicNoteIcon, PhotographIcon,
 PuzzleIcon, CalendarIcon, QuestionMarkCircleIcon, 
 StatusOnlineIcon ,
 ArrowNarrowLeftIcon, BanIcon, ChatAlt2Icon, DotsHorizontalIcon,
  DotsVerticalIcon, MinusIcon, PlusIcon, TrashIcon, UserCircleIcon
} from '@heroicons/react/outline'
import img from './assets/favicon.png'
import { XIcon } from '@heroicons/react/solid'
import Content from './components/Content'
import ProfileCard from './components/ProfileCard'
import CurrentFeed from './components/CurrentFeed'
import OchatBar from './components/Navbar/OchatBar'
import ChatBar from './components/ChatBar'
import ChatBox from './components/ChatBox'
import CurrentProfil from './components/CurrentProfil'
import CurrentMedia from './components/CurrentMedia'

import CurrentEvent from './components/CurrentEvent';

function Evenements() {
    const [sideOpen, setSideOpen] = useState(false);
    const [chatOpen, setChatOpen] = useState(false);
   
   const OsideBar  = () => {
     const color = '#005b82';
     const SideItems = [
         {
             name: 'Actus',
             location: "about",
             icon: <NewspaperIcon className="h-7 w-7 text-[#005b82]  "/>,
         },
         {
             name: 'Ma page',
             location: "about",
             icon: <DesktopComputerIcon className="h-7 w-7 text-[#005b82]"/>,
         },
   
         {
             name: 'Shopping',
             location: "about",
             icon: <ShoppingCartIcon className="h-7 w-7 text-[#005b82]"/>,
         },
         {
             name: 'Education',
             location: "about",
             icon: <AcademicCapIcon className="h-7 w-7 text-[#005b82] "/>,
         },
         {
             name: 'Contact',
             location: "about",
             icon: <IdentificationIcon className="h-7 w-7 text-[#005b82] "/>,
         },
   
         {
             name: 'Travel',
             location: "about",
             icon: <GlobeIcon className="h-7 w-7 text-[#005b82] "/>,
         },
         {
             name: 'Groupes',
             location: "about",
             icon: <UserGroupIcon className="h-7 w-7 text-[#005b82] "/>,
         },
         {
             name: 'Live',
             location: "about",
             icon: <StatusOnlineIcon className="h-7 w-7 text-[#005b82] "/>,
         },
   
         {
             name: 'Entreprises',
             location: "about",
             icon: <OfficeBuildingIcon className="h-7 w-7 text-[#005b82]"/>,
         },
         {
             name: 'Evenement',
             location: "about",
             icon: <CalendarIcon className="h-7 w-7 text-[#005b82]"/>,
         },
         {
             name: 'Sante',
             location: "about",
             icon: <HeartIcon className="h-7 w-7 text-[#005b82]"/>,
         },
   
         {
             name: 'Music',
             location: "about",
             icon: <MusicNoteIcon className="h-7 w-7 text-[#005b82]"/>,
         },
         {
             name: 'Photo',
             location: "about",
             icon: <PhotographIcon className="h-7 w-7 text-[#005b82]"/>,
         },
         {
             name: 'Quizz',
             location: "about",
             icon: <PuzzleIcon className="h-7 w-7 text-[#005b82]"/>,
         },
     
     ]
   return (
     <div className='fixed  float-left min-h-screen z-[1000]'> 
     <div className='bg-white min-h-screen no-scrollbar w-56 shadow-lg overflow-y-auto overflow-x-hidden'>
         <div className=' bg-orange-500 h-20 w-56 inline-flex items-center py-4 px-3'>
         <div className="h-8 w-8 relative"> 
     <Image src={img} alt="Picture of the author" layout="fill" objectFit="cover" />
     </div>
     <div className='text-base font-bold  text-white ml-3'>
     KLAPEERS
     </div>
     <XIcon className="ml-10 h-6 w-7 text-white cursor-pointer" onClick={()=>setSideOpen(false)}/>,
         </div>
   
       <nav className='h-[408px]'>
         {
           SideItems.map((item, index)=>{
             return(
                 <>
                
                 <Link href={item.location}>
                 <div key={index} className='m-6 cursor-pointer hover:opacity-50'>
                     <div className='inline-flex items-center justify-center'>
                     {item.icon} <div className='ml-2.5 text-sm font-bold text-[#005b82]'>Klapeers {item.name}</div>
                     </div>
                   </div>
                   </Link>
                   
                   </>
             );
           })
   
         }
       </nav>
     </div>
   
     <div>
   
     </div>
   
     </div>
   )
   }
   const SideBar = () =>{
   
     const SideItems = [
         {
             name: 'Actus',
             location: "about",
             icon: <NewspaperIcon className="h-7 w-7 text-white hover:opacity-75 "/>,
         },
         {
             name: 'Ma page',
             location: "about",
             icon: <DesktopComputerIcon className="h-7 w-7 text-slate-100 hover:opacity-75"/>,
         },
   
         {
             name: 'Shopping',
             location: "about",
             icon: <ShoppingCartIcon className="h-7 w-7 text-slate-100 hover:opacity-75"/>,
         },
         {
             name: 'Education',
             location: "about",
             icon: <AcademicCapIcon className="h-7 w-7 text-slate-100 hover:opacity-75"/>,
         },
         {
             name: 'Contact',
             location: "about",
             icon: <IdentificationIcon className="h-7 w-7 text-slate-100 hover:opacity-75"/>,
         },
   
         {
             name: 'Travel',
             location: "about",
             icon: <GlobeIcon className="h-7 w-7 text-slate-100 hover:opacity-75"/>,
         },
         {
             name: 'Groupes',
             location: "about",
             icon: <UserGroupIcon className="h-7 w-7 text-slate-100 hover:opacity-75"/>,
         },
         {
             name: 'Live',
             location: "about",
             icon: <StatusOnlineIcon className="h-7 w-7 text-slate-100 hover:opacity-75"/>,
         },
   
         {
             name: 'Entreprises',
             location: "about",
             icon: <OfficeBuildingIcon className="h-7 w-7 text-slate-100"/>,
         },
         {
             name: 'Evenement',
             location: "about",
             icon: <CalendarIcon className="h-7 w-7 text-slate-100"/>,
         },
         {
             name: 'Sante',
             location: "about",
             icon: <HeartIcon className="h-7 w-7 text-slate-100"/>,
         },
   
         {
             name: 'Music',
             location: "about",
             icon: <MusicNoteIcon className="h-7 w-7 text-slate-100"/>,
         },
         {
             name: 'Photo',
             location: "about",
             icon: <PhotographIcon className="h-7 w-7 text-white"/>,
         },
         {
             name: 'Quizz',
             location: "about",
             icon: <PuzzleIcon className="h-7 w-7 text-slate-100"/>,
         },
     
     ]
   return (
     <div className='fixed float-left min-h-screen z-[1000]'> 
     <div className='bg-orange-500 text-blue-600 w-20 no-scrollbar min-h-screen  overflow-y-auto overflow-x-hidden '>
     <div className="h-8 w-8 relative m-6"> 
     <Image
         src={img}
         alt="Picture of the author"
         layout="fill" 
         objectFit="cover" 
       />
     </div>
       <nav className='h-[488px]'>
       <div  className='m-6 cursor-pointer' onClick={()=>setSideOpen(true)} data-tooltip-target={`tooltip-menu`} data-tooltip-trigger="hover" data-tooltip-placement="top"  >
                 <div class="tooltip tooltip-top" data-tip='menu'>
                 <MenuIcon className="h-7 w-7 text-white hover:opacity-75"/>
                   </div>
                   </div>
         {
           SideItems.map((item, index)=>{
             return(
                 <>
                
                 <Link href={item.location} >
                 <div key={index} className='m-6 cursor-pointer' data-tooltip-target={`tooltip-${item.name}`} data-tooltip-trigger="hover" data-tooltip-placement="top" >
                 <div class="tooltip tooltip-top" data-tip={item.name  }>
                   {item.icon}
                   </div>
                   </div>
                   </Link>
                   
                   </>
             );
           })
   
         }
       </nav>
     </div>
   
     <div>
   
     </div>
   
     </div>
   )
   }
  return (
    <div className='flex items-start justify-start overflow-y-hidden bg-slate-300'>
    <NavBar/>
     {
       sideOpen 
        ?
        <OsideBar />
       :
       <SideBar  />
 }
 
 
 
   <div className='flex flex-col items-center w-[100%] justify-start md:ml-8 overflow-y-auto  overflow-x-hidden '>
   <ProfileCard/>
   <CurrentEvent/>
   </div>
  
 
   {
       chatOpen 
        ?
        <OchatBar setChatOpen={setChatOpen} chatOpen={chatOpen}/>
       :
       <ChatBar  setChatOpen={setChatOpen} chatOpen={chatOpen} />
 }
   
   
 
 
     </div>
  )
}

export default Evenements