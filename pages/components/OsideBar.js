import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {  MenuIcon,
NewspaperIcon, DesktopComputerIcon, ShoppingCartIcon,
 AcademicCapIcon, UserGroupIcon, GlobeIcon,
  IdentificationIcon, OfficeBuildingIcon,
HeartIcon, MusicNoteIcon, PhotographIcon, PuzzleIcon, CalendarIcon, QuestionMarkCircleIcon, StatusOnlineIcon } from '@heroicons/react/outline'
import img from '../assets/favicon.png'
import { XIcon } from '@heroicons/react/solid'

const OsideBar  = (props) => {
    function handleOpen(value) {
        // Here, we invoke the callback with the new value
        props.onClick(value);
    }
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
            name: 'Support',
            location: "about",
            icon: <QuestionMarkCircleIcon className="h-7 w-7 text-[#005b82]"/>,
        },
        {
            name: 'Quizz',
            location: "about",
            icon: <PuzzleIcon className="h-7 w-7 text-[#005b82]"/>,
        },
    
    ]
  return (
    <div className='fixed  float-left min-h-screen'> 
    <div className='bg-white h-full w-56 shadow-lg'>
        <div className=' bg-orange-500 h-20 w-56 inline-flex items-center py-4 px-3'>
        <div className="h-8 w-8 relative"> 
    <Image src={img} alt="Picture of the author" layout="fill" objectFit="cover" />
    </div>
    <div className='text-base font-bold  text-white ml-3'>
    KLAPEERS
    </div>
    <XIcon className="ml-10 h-6 w-7 text-white cursor-pointer" onClick={()=>handleOpen(false)}/>,
        </div>

      <nav className='no-scrollbar'>
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

export default OsideBar