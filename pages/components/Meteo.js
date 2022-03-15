import React from 'react'

function Meteo() {
  return (
    <div className=' flex flex-col items-center justify-center w-[268px] h-[492px] rounded shadow-lg bg-white m-4 px-4'>
    <div className='font-semibold text-lg text-slate-600'>
        Météo
    </div>
<div class="pt-2 relative mx-auto text-gray-600">
<input class="border-2 border-gray-300 bg-white h-10 px-2 pr-16 rounded-lg text-sm focus:outline-none"
  type="search" name="search" placeholder="Bafia, 24°C "/>
<button type="submit" class="absolute right-0 top-0 mt-5 mr-4">
<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
<path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
</svg>
</button>
</div>
<div className='flex flex-col items-center justify-center h-[360px] w-[98%] my-3'>
<div className='inline-flex items-center justify-between'>
    <div className='font-semibold text-lg text-slate-600'>Aujourd'hui</div>
    <div className='font-medium text-[10px] text-slate-600 ml-8'>Dim, 12 Mar. 2022</div>
</div>

<div className='inline-flex items-center justify-between mx-6 my-10'>
<div className='flex flex-col items-start justify-start'>
<div className='font-semibold text-4xl text-slate-600 mr-5'>24°C</div>
<div className='font-medium text-[10px] text-slate-600 mt-3'>Légers orages</div>
</div>
    
    <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" viewBox="0 0 20 20" fill="currentColor">
    <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
    </svg>
    </div>

    <div className='inline-flex items-center justify-between mb-8'>
    <div className='h-12 w-20 p-3 mr-6 flex flex-col items-center justify-center bg-gray-200 rounded'>
        <div className='font-medium text-[10px]  text-slate-600'>Humidité</div>
        <div className='font-semibold text-lg text-slate-600'>75%</div>
    </div>

    <div className='h-12 w-20 p-3 flex flex-col items-center justify-center bg-gray-200 rounded'>
        <div className='font-medium text-[10px]  text-slate-600'>Pression</div>
        <div className='font-semibold text-lg text-slate-600'>1007</div>
    </div>
    
</div>

<div className='inline-flex items-center justify-between'>
<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
<path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
</svg>
<div className='font-semibold text-lg text-slate-600 ml-3'>Douala, Cameroun</div>
</div>
</div>
    </div>
  )
}

export default Meteo