import React, {useState} from 'react'
import Header from './components/Header'
import NavBar from './components/NavBar'
import Image from 'next/image'
import Link from 'next/link'
import {  MenuIcon,
NewspaperIcon, DesktopComputerIcon, ShoppingCartIcon,
 AcademicCapIcon, UserGroupIcon, GlobeIcon,
  IdentificationIcon, OfficeBuildingIcon,
HeartIcon, MusicNoteIcon, PhotographIcon,
 PuzzleIcon, CalendarIcon, PaperAirplaneIcon, 
 StatusOnlineIcon ,
 ArrowNarrowLeftIcon, BanIcon, ChatAlt2Icon, DotsHorizontalIcon,
  DotsVerticalIcon, MinusIcon, PlusIcon, TrashIcon, UserCircleIcon
} from '@heroicons/react/outline'
import img from './assets/favicon.png'
import { ArrowsExpandIcon, MicrophoneIcon, PhoneIcon, SwitchHorizontalIcon, UserAddIcon, VideoCameraIcon, VolumeUpIcon, XIcon } from '@heroicons/react/solid'
import Content from './components/Content'
import ProfileCard from './components/ProfileCard'
import CurrentFeed from './components/CurrentFeed'
import OchatBar from './components/Navbar/OchatBar'
import ChatBar from './components/ChatBar'
import ChatBox from './components/ChatBox'
import prince from './assets/prince-akachi-4Yv84VgQkRM-unsplash.jpg'
import bsg from './assets/andra-c-taylor-jr-ZMPcfusc_-k-unsplash.jpg'
import Kicon from './components/Kicon'

function About() {
    const [sideOpen, setSideOpen] = useState(false);
    const [chatOpen, setChatOpen] = useState(false);
    const [chatBox, setChatBox] = useState(true);
    const [chatReduce, setChatReduce] = useState(false);
   
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
    <div className='flex items-start justify-start overflow-y-hidden bg-[#edf2f6]'>
   <NavBar/>
    {
      sideOpen 
       ?
       <OsideBar />
      :
      <SideBar  />
}



  <div className='flex flex-col items-center w-[100%] justify-start  overflow-y-auto  overflow-x-hidden '>
    <ProfileCard/>
    <CurrentFeed/>
  </div>
 

  {
      chatOpen 
       ?
       <OchatBar setChatOpen={setChatOpen} chatOpen={chatOpen}/>
      :
      <ChatBar  setChatOpen={setChatOpen} chatOpen={chatOpen} />
}
  
  <ChatBox chatBox={chatBox} chatReduce={chatReduce} setChatBox={setChatBox} setChatReduce={setChatReduce}/>
  
  {/* <div className='absolute flex items-center justify-start top-60 left-[18%] h-[60vh] w-[64vw] rounded-lg'> 


    <div className='w-[68%] flex flex-col items-center justify-start h-full bg-white rounded-l'>

      <div className='flex items-center justify-center border-b-2   w-full h-[60px]'>
        <div className='flex  items-center justify-center pt-2'>
        <StatusOnlineIcon className="h-6 w-6 text-[#005b82]"/>
        <div className='text-lg text-[#005b82] ml-2 mr-1 font-semibold'>Cabraule Ketchanga</div>
        <div className="h-1 w-1 mx-1 rounded-full bg-[#005b82] "/>
        <div className='text-lg text-[#005b82] ml-1 font-semibold'>Moi</div>
        </div>
       
      </div>

      <div className=' relative h-[86%] w-[96%] flex flex-col items-center justify-between  rounded my-2 mt-2 ' >
      <Image src={prince} alt='avatar' objectFit='cover' objectPosition={'center 28%'}    className='h-[100%] w-[100%] rounded-lg ' />
      
      <div className='absolute flex items-center  justify-between  w-full h-16 '>
<div className=' h-6 w-20 max-w-28 inline-flex items-center justify-start bg-[rgba(0,0,0,0.4)] rounded-lg ml-10'>
<div  className='mx-2   d-flex justify-center items-center text-center  w-2 h-2 rounded-full bg-[#e80c00] cursor-pointer' ></div>
<div className='text-[14px] text-white font-semibold'>12:04</div>
</div>

<div className='h-[5vh] w-[5vw] rounded-lg shadow mt-4 mr-9'>
<Image src={bsg} alt='avatar' objectFit='cover' className='h-[100%] w-[100%] rounded-2xl shadow ' />
</div>


</div>


<div className='absolute flex items-center justify-start bottom-1  w-full h-16'>

<div className='h-10 w-10 max-w-28 flex items-center justify-center bg-[rgba(0,0,0,0.5)] mr-[7vw] ml-10 rounded-full'>
        <VolumeUpIcon className="h-5 w-5 text-white"/>
    </div>



    <div className='flex items-center justify-center'>
<div className='h-10 w-10 max-w-28 flex items-center justify-center bg-[rgba(0,0,0,0.4)] rounded-full cursor-pointer'>
        <MicrophoneIcon className="h-5 w-5 text-white"/>
</div>

<div className='h-10 w-10 mx-3 max-w-28 flex items-center justify-center bg-[rgba(0,0,0,0.4)] rounded-full cursor-pointer'>
        <VideoCameraIcon className="h-5 w-5 text-white"/>
</div>

<div className='h-12 w-12 max-w-28 mx-3 flex items-center justify-center bg-red-500 rounded-full cursor-pointer'>
        <PhoneIcon className="h-6 w-6 text-white rotate-[138deg] mt-[2px]"/>
</div>

<div className='h-10 w-10 max-w-28 flex items-center justify-center bg-[rgba(0,0,0,0.4)] rounded-full cursor-pointer'>
        <SwitchHorizontalIcon className="h-5 w-5 text-white"/>
</div>

<div className='h-10 w-10 mx-3 max-w-28 flex items-center justify-center bg-[rgba(0,0,0,0.4)] rounded-full cursor-pointer'>
        <UserAddIcon className="h-5 w-5 text-white"/>
</div>


</div>


</div>



      </div>
    </div>


    <div className='w-[32%] h-full bg-white  rounded-r-lg border-l-2'>
    <div className=' w-full h-[60px] text-center border-b-2 '>
      <div className='text-xl  p-5 text-[#005b82] font-semibold'>Discussion</div>
    </div>


    <div className='h-[420px] w-full'>

      </div>

    <div className='h-[60px] w-full  border-t-2 pt-1.5 inline-flex items-center justify-center'>
                    <div  className='ml-2   d-flex justify-center items-center text-center py-1.5 px-1.5 w-9 h-9 rounded-full bg-[#005b82] cursor-pointer ml-1' >
                    <span className='text-white font-bold text-base '><PlusIcon className="h-6 w-6 text-white"/></span>
                    </div>
                    <textarea class="textarea textarea-bordered h-[36px] w-[248px] bg-white mb-2 mx-2" placeholder="Votre message"></textarea>
                    <div  className='mr-2   d-flex justify-center items-center text-center py-[7px] px-[9px] w-9 h-9 rounded-full bg-[#005b82] cursor-pointer' >
                    <span className='text-white font-bold text-base '><PaperAirplaneIcon className="h-5 w-5 text-white rotate-45"/></span>
                    </div>
                    </div>
    </div>
 </div> */}

    </div>
  )
}

export default About