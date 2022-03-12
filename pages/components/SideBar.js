import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {  MenuIcon,
NewspaperIcon, DesktopComputerIcon, ShoppingCartIcon,
 AcademicCapIcon, UserGroupIcon, GlobeIcon,
  IdentificationIcon, OfficeBuildingIcon,
HeartIcon, MusicNoteIcon, PhotographIcon, PuzzleIcon, CalendarIcon, QuestionMarkCircleIcon, StatusOnlineIcon } from '@heroicons/react/outline'
import img from '../assets/favicon.png'

const SideBar = (props) =>{
    function handleOpen(value) {
        // Here, we invoke the callback with the new value
        props.onClick(value);
    }
    const SideItems = [
        {
            name: 'Menu',
            location: "#",
            icon: <MenuIcon className="h-7 w-7 text-white hover:opacity-75"/>,
        },
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
            icon: <PhotographIcon className="h-7 w-7 text-slate-100"/>,
        },
        {
            name: 'Support',
            location: "about",
            icon: <QuestionMarkCircleIcon className="h-7 w-7 text-slate-100"/>,
        },
        {
            name: 'Quizz',
            location: "about",
            icon: <PuzzleIcon className="h-7 w-7 text-slate-100"/>,
        },
    
    ]
  return (
    <div className='sticky  float-left min-h-screen flex'> 
    <div className='bg-orange-500 text-blue-600 w-20'>
    <div className="h-8 w-8 relative m-6"> 
    <Image
        src={img}
        alt="Picture of the author"
        layout="fill" 
        objectFit="cover" 
      />
    </div>
      <nav className='no-scrollbar'>
        {
          SideItems.map((item, index)=>{
            return(
                <>
               
                <Link href={item.location} onClick={handleOpen(true)}>
                <div key={index} className='m-6 cursor-pointer ' data-tooltip-target={`tooltip-${item.name}`} data-tooltip-trigger="hover" data-tooltip-placement="right"  >
                <div class="tooltip tooltip-right" data-tip={item.name}>
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

export default SideBar