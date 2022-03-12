import React from 'react'

function CurrentFeed() {
  return (
    <div className='flex flex-row items-center justify-center m-6'>
        {/* first side feed*/}
            <div className='flex flex-col items-center justify-start h-[1420px] max-h-[1420px]'>
            <div className='w-[268px] h-[492px] rounded shadow-lg bg-white m-4'>
            Meteo
            </div> 
            <div className='w-[268px] h-[492px] rounded shadow-lg bg-white'>
            Suggestions de pages
            </div>
            
               
            </div>
        {/* middle side feed*/}
            <div className='flex flex-col items-center justify-start h-[1420px] max-h-[1420px]'>
            <div className='w-[524px] h-[84px] rounded shadow-lg bg-white m-4'>
            Klap
            </div>

            <div className='w-[524px] h-[60px] rounded shadow-lg bg-white mx-4'>
            Actus
            </div>
            </div>
        {/* last side feed*/}
            <div className='flex flex-col items-center justify-start h-[1420px] max-h-[1420px]'> 
            <div className='w-[268px] h-[132px] rounded shadow-lg bg-white m-4'>
            mes images
            </div>

            <div className='w-[268px] h-[132px] rounded shadow-lg bg-white m-4'>
            mes images
            </div>

            <div className='w-[268px] h-[264px] rounded shadow-lg bg-white m-4'>
            pub
            </div>

            <div className='w-[268px] h-[204px] rounded shadow-lg bg-white m-4'>
            mes contacts
            </div>

            <div className='w-[268px] h-[492px] rounded shadow-lg bg-white m-4'>
            Suggestions de contacts
            </div>
            </div>

    </div>
  )
}

export default CurrentFeed