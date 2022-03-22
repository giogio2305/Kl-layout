import React from 'react'
import {    BadgeCheckIcon, EmojiHappyIcon, FireIcon, FlagIcon, LightningBoltIcon, PuzzleIcon, SparklesIcon, StarIcon } from '@heroicons/react/solid'
import {   BeakerIcon, BookOpenIcon, FilmIcon, GlobeIcon, HandIcon, LibraryIcon, LightBulbIcon, MoonIcon, MusicNoteIcon, ReceiptTaxIcon } from '@heroicons/react/outline'
import avatar from '../assets/user.png'
import Link from 'next/link'
import Image from 'next/image'
import Klap from './Klap'
import FeedCart from './FeedCart'
function QuizzList() {
    const Quizz = [
        {
            icon: <i class="adk adk-nteasee mt-1"></i>,
            name: 'Culture Africaine',
        },
        {
            icon: <GlobeIcon className='h-9 w-9 text-[#005b82] group-hover:text-white'/>,
            name: 'Georgraphie',
        },
        {
            icon: <BeakerIcon className='h-9 w-9 text-[#005b82] group-hover:text-white'/>,
            name: 'Chimie',
        },
        {
            icon: <BookOpenIcon className='h-9 w-9 text-[#005b82] group-hover:text-white'/>,
            name: 'Litterature',
        },
        {
            icon: <FilmIcon className='h-9 w-9 text-[#005b82] group-hover:text-white'/>,
            name: 'Cinematographie',
        },
        {
            icon: <MoonIcon className='h-9 w-9 text-[#005b82] group-hover:text-white'/>,
            name: 'Astrologie',
        },
        {
            icon: <MusicNoteIcon className='h-9 w-9 text-[#005b82] group-hover:text-white'/>,
            name: 'Musique',
        },
        {
            icon: <ReceiptTaxIcon className='h-9 w-9 text-[#005b82] group-hover:text-white'/>,
            name: 'Finace',
        },
        {
            icon: <LibraryIcon className='h-9 w-9 text-[#005b82] group-hover:text-white'/>,
            name: 'Histoire',
        },
    ]
  return (
    <div className=' flex flex-row items-start justify-start mx-2 mt-3 mb-2 '>
        {/* first side feed*/}
            <div className='sticky flex flex-col items-center justify-start'>


                    <div className='flex flex-col items-center justify-start w-[268px] h-[292px] rounded-lg shadow-lg bg-white m-4 px-5'> 
                    <div className='h-20 w-20 rounded-full bg-[#005b82] flex items-center justify-center my-6 '>
                    <LightBulbIcon className="h-9 w-9 text-white "/>
                    </div>
                    <div className='text-lg mb-2   text-[#005b82] font-semibold text-center mb-5'>Vous avez des idees de quizz ??</div>
                    <button class="bg-[#005b82]/95  hover:bg-[#005b82] text-white font-bold py-2 px-4 rounded">Proposer un quizz</button>
                    </div>

                    <div className='flex flex-col items-center justify-start w-[268px] h-[384px] rounded-lg shadow-lg  m-4'> 
                    
                    <div className='w-full h-12 rounded-t-lg bg-[#005b82] flex items-center justify-center'>
                    <FlagIcon className="h-5 w-5 text-white "/>
                    <div className='text-white text-lg font semibold ml-2'>Niveaux</div>
                    </div>


                    <div className='w-full h-28 bg-white hover:bg-slate-100 border-b-2 flex items-center justify-start px-3 py-2 cursor-pointer'>
                    <div className='h-10 w-10 rounded-full bg-[#005b82] flex items-center justify-center mr-4'>
                    <SparklesIcon className="h-6 w-6 text-white "/>
                    </div>  

                    <div className='flex flex-col items-center justify-start'>
                    <div className={`text-base font-semibold text-[#005b82] text-left  w-[188px]`}>
                                                Facile
                                            </div>
                                            <div className={`text-[12px]  font-medium 'text-slate-600' text-left  w-[188px]`}>Les questions faciles sont de niveaux 1 ont pour credit de 10</div> 
                    
                    </div>
                    </div>


                    <div className='w-full h-28 bg-white hover:bg-slate-100 border-b-2 flex items-center justify-start px-3 py-2 cursor-pointer'>
                    <div className='h-10 w-10 rounded-full bg-[#005b82] flex items-center justify-center mr-4'>
                    <StarIcon className="h-6 w-6 text-white "/>
                    </div>  

                    <div className='flex flex-col items-center justify-start'>
                    <div className={`text-base font-semibold text-[#005b82] text-left  w-[188px]`}>
                                                Moyen
                                            </div>
                                            <div className={`text-[12px]  font-medium 'text-slate-600' text-left  w-[188px]`}>Les questions moyennes sont de niveaux 3 et 2/ ont pour credit de 30 et 20</div> 
                    
                    </div>
                    </div>


                    <div className='w-full h-28 bg-white hover:bg-slate-100 border-b-2 rounded-b-lg flex items-center justify-start px-3 py-2 cursor-pointer'>
                    <div className='h-10 w-10 rounded-full bg-[#005b82] flex items-center justify-center mr-4'>
                    <FireIcon className="h-6 w-6 text-white "/>
                    </div>  

                    <div className='flex flex-col items-center justify-start'>
                    <div className={`text-base font-semibold text-[#005b82] text-left  w-[188px]`}>
                    Difficile
                                            </div>
                                            <div className={`text-[12px]  font-medium 'text-slate-600' text-left  w-[188px]`}>Les questions difficiles sont de niveaux 4 et 5/ ont pour credit de 50 et 40</div> 
                    
                    </div>
                    </div>
                    
                    </div>
                    
            
            </div>
        {/* middle side feed*/}
            <div className=' sticky flex flex-col items-center justify-start '>

            <div className='w-[524px] h-[704px] bg-white rounded-lg shadow-lg m-4 max-h-[780px] '>

            <div className='w-full h-12 text-center p-3 mb-3 inline-flex items-center justify-center rounded-t-lg bg-[#005b82]'>
            <PuzzleIcon className='h-6 w-6 text-white'/>
            <div className='font-medium text-lg text-white mx-3'>
            Selectionnez une theme
            </div>
            </div>

            {/* Search bar  */}

            <div className='w-full h-10 p-1'>
            <div class="relative pt-2  mx-auto text-[#e86e04] px-4 ">
            <input class="border-2 border-[#e86e04] placeholder-[#005b82]/80 bg-white h-10 w-[95%] px-2 pr-16 rounded-lg text-sm focus:outline-none"
            type="search" name="search" placeholder="Culture Africaine, Histoire "/>
            <button type="submit" class="absolute  top-0  mt-5 -ml-9">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            </button>
            </div>
            </div>

            {/* cards */}


            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-2 lg:gap-8 p-5 mt-12">
                {
                    Quizz.map((item, index)=>{
                        return(
                            <div key={index} class="h-36 w-36 px-2 text-wrap flex flex-col items-center cursor-pointer group justify-center text-[#005b82] hover:text-white bg-white hover:bg-[#005b82] shadow-xl text-[28pt] font-bold text-center  rounded-lg">
                            {item.icon}
                            <div className='font-semibold text-base text-[#005b82] px-2 mt-3  group-hover:text-white'>
                            {item.name}
                            </div>
                            </div>
                        )
                    })
                }



            </div>


            </div>

            </div>


        {/* last side feed*/}
            <div className='flex flex-col items-center justify-start h-[1420px] max-h-[1420px]'> 
            
            <div className='flex flex-col items-center justify-start w-[268px] h-[292px] rounded-lg shadow-lg bg-white m-4 px-6'> 
                    <div className='h-20 w-20 rounded-full bg-[#005b82] flex items-center justify-center my-4 '>
                    <EmojiHappyIcon className="h-9 w-9 text-white "/>
                    </div>
                    <div className='text-lg mb-2   text-[#005b82] font-semibold text-center mb-5'>Jouez et découvrez vos scores en participant aux duels avec vos contacts !</div>
                    <button class="bg-[#005b82]/95  hover:bg-[#005b82] text-white font-bold py-2 px-4 rounded">Demarrer un duel</button>
                    </div>


                    <div className='flex flex-col items-center justify-start w-[268px] max-h-[384px] rounded-lg shadow-lg  m-4'> 
                    
                    <div className='w-full h-12 rounded-t-lg bg-[#005b82] flex items-center justify-center'>
                    <LightningBoltIcon className="h-5 w-5 text-white "/>
                    <div className='text-white text-lg font semibold ml-2'>Mes duels</div>
                    </div>


                    <div className='relative w-full h-20 bg-white hover:bg-slate-100 border-b-2 flex  items-center justify-start  py-2 cursor-pointer'>
                   
                    <div className='absolute left-[45%] border-[#e86e04] border-2 h-6 w-6 pt-1 pr-[2px] inline-flex text-center items-center justify-center rounded-full bg-[#005b82]'>
                        <div className='text-white text-[9px] font-semibold italic'>VS</div>
                    </div>

                    <div className='flex flex-col mr-2 items-start justify-end h-full w-[46%] pl-2 pt-1'>
                    <div className='text-[10px]  font-medium text-green-600 text-left inline-flex' >
                    <BadgeCheckIcon className="h-3 w-3 text-green-600 mr-1 "/>
                        Vainqueur</div>
                    <div className={`text-lg font-semibold text-[#005b82] text-left  `}>
                                                {('Cabraule Ketchanga').split(' ')[0]}
                    </div>
                    <div className='text-[10px]  font-semibold  text-slate-500  text-left '>Culture Africaine - 18/20</div>
                    </div>

                    <div className='flex flex-col items-end justify-end h-full w-[46%] border-l-2 border-slate-200 pl-2'>
                    <div className={`text-lg font-semibold text-[#005b82] text-left`}>
                                                {('Moi').split(' ')[0]}
                    </div>
                    <div className='text-[10px]  font-semibold  text-slate-500  text-left '>Culture Africaine - 12/20</div>
                    </div>

                    </div>

                    <div className='relative w-full h-20 bg-white hover:bg-slate-100 border-b-2 flex  items-center justify-start  py-2 cursor-pointer'>
                   
                   <div className='absolute left-[45%] border-[#e86e04] border-2 h-6 w-6 pt-1 pr-[2px] inline-flex text-center items-center justify-center rounded-full bg-[#005b82]'>
                       <div className='text-white text-[9px] font-semibold italic'>VS</div>
                   </div>

                   <div className='flex flex-col mr-2 items-start justify-end h-full w-[46%] pl-2 pt-1'>
                   <div className={`text-lg font-semibold text-[#005b82] text-left  `}>
                                               {('Aboubakar').split(' ')[0]}
                   </div>
                   <div className='text-[10px]  font-semibold  text-slate-500  text-left '>Finace - 18/20</div>
                   </div>

                   <div className='flex flex-col items-end justify-end h-full w-[46%] border-l-2 border-slate-200 pl-2'>
                   <div className={`text-lg font-semibold text-[#005b82] text-left`}>
                                               {('Moi').split(' ')[0]}
                   </div>
                   <div className='text-[10px]  font-semibold  text-slate-500  text-left '>Finace - 18/20</div>
                   </div>

                   </div>

                    <div className='relative w-full h-20 bg-white hover:bg-slate-100 border-b-2 flex rounded-b-lg items-center justify-start  py-2 cursor-pointer'>
                   
                   <div className='absolute border-[#e86e04] border-2 left-[45%] h-6 w-6 pt-1 pr-[2px] inline-flex text-center items-center justify-center rounded-full bg-[#005b82]'>
                       <div className='text-white text-[9px] font-semibold italic'>VS</div>
                   </div>

                   <div className='flex flex-col mr-2 items-start justify-end h-full w-[46%] pl-2 pt-1'>
                   <div className={`text-lg font-semibold text-[#005b82] text-left  `}>
                                               {('Russel Franck').split(' ')[0]}
                   </div>
                   <div className='text-[10px]  font-semibold  text-slate-500  text-left '>Chimie - 8/20</div>
                   </div>

                   <div className='flex flex-col items-end justify-end h-full w-[46%] border-l-2 border-slate-200 pl-2'>
                   <div className='text-[10px]  font-medium text-green-600 text-left inline-flex' >
                   <BadgeCheckIcon className="h-3 w-3 text-green-600 mr-1 "/>
                       Gagnant</div>
                   <div className={`text-lg font-semibold text-[#005b82] text-left`}>
                                               {('Moi').split(' ')[0]}
                   </div>
                   <div className='text-[10px]  font-semibold  text-slate-500  text-left '>Chimie - 15/20</div>
                   </div>

                   </div>



                    </div>

            </div>





    </div>
  )
}

export default QuizzList