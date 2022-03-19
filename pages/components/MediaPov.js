import React from 'react'

function MediaPov({setIsMediaon, isMediaon}) {
  return (
<div class="absolute flex items-center justify-center bg-[rgba(0,0,0,0.8)] h-screen inset-0 lg:w-[98.79vw] w-[99.8vw] z-[999] overflow-hidden">
    <div className='relative h-[68vh] w-[64vw]  bg-white rounded ml-16 flex items-center justify-start'>
    <label  class="btn btn-sm btn-circle bg-white hover:bg-gray-500 hover:text-white border-0 absolute right-2 top-2" onClick={()=> setIsMediaon(!isMediaon)}>✕</label>

    <div className='w-[60%] h-full bg-blue-200 rounded-l'></div>
    <div className='w-[40%] h-full bg-red-200 rounded-r flex flex-col items-center justify-start'>
    <div className='h-[32%] w-full bg-cyan-200'></div>
    <div className='h-[58%] w-full bg-cyan-300'></div>
    </div>

    </div>
</div>
  )
}

export default MediaPov