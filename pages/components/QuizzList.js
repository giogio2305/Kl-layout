import React from 'react'
import {    PuzzleIcon } from '@heroicons/react/solid'
import {   BeakerIcon, GlobeIcon } from '@heroicons/react/outline'
function QuizzList() {
    const Quizz = [
        {
            icon: <i class="adk adk-nteasee "></i>,
            name: 'Culture Africaine',
        },
        {
            icon: <GlobeIcon className='h-10 w-10 text-[#005b82] group-hover:text-white'/>,
            name: 'Georgraphie',
        },
        {
            icon: <BeakerIcon className='h-10 w-10 text-[#005b82] group-hover:text-white'/>,
            name: 'Chimie',
        },
    ]
  return (
    <div className='h-[72vh] w-[80%] bg-slate-50 my-16 rounded-lg flex flex-col items-start justify-start'>
<div className='w-full h-16 text-center p-3 mb-3 inline-flex items-center justify-center rounded-t-lg bg-[#005b82]'>
    <PuzzleIcon className='h-6 w-6 text-white'/>
<div className='font-semibold text-xl text-white mx-3'>
        Selectionnez une theme
    </div>
</div>     

<div className='w-full h-20 p-3'>
<div class="relative pt-2  mx-auto text-[#005b82] px-4 ">
<input class="border-2 border-[#005b82] placeholder-[#005b82]/80 bg-white h-10 w-[20vw] px-2 pr-16 rounded-lg text-sm focus:outline-none"
  type="search" name="search" placeholder="Culture Africaine, Histoire "/>
<button type="submit" class="absolute  top-0  mt-5 -ml-9">
<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
<path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
</svg>
</button>
</div>
</div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 gap-4 md:gap-2 lg:gap-8 p-5">
                {
                    Quizz.map((item, index)=>{
                        return(
                            <div key={index} class="flex flex-col items-center cursor-pointer group justify-center text-[#005b82] hover:text-white bg-white hover:bg-[#005b82] shadow-xl text-[32pt] font-bold text-center  px-16 py-6 2xl:py-10 2xl:px-[76px]  rounded-lg">
                            {item.icon}
                            <div className='font-semibold text-lg text-[#005b82] mx-3 mt-4 group-hover:text-white'>
                               {item.name}
                            </div>
                            </div>
                        )
                    })
                }



</div>
    </div>
  )
}

export default QuizzList