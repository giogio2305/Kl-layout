import React from 'react'
import { LinkIcon, PencilIcon, PhotographIcon, UserIcon, VideoCameraIcon } from '@heroicons/react/solid'


function Klap() {
  return (
    <div className='w-[524px] h-[84px] rounded shadow-lg bg-white m-4'>
    <div className='flex items-center justify-center'>
         <div className='font-semibold text-2xl mt-2 text-[#e86e04] -mt-4 mb-3'>
             Klap
         </div>
    </div>

    <div className='inline-flexitems-center justify-between ml-2'>
         <ul className='inline-flex items-center justify-center'>
          <li className=' group cursor-pointer h-12 max-w-36 rounded hover:bg-[#e86e04] mx-1 p-3 flex items-center justify-center text-[#005b82] hover:text-white font-medium text-base'> <PencilIcon className="h-5 w-5 text-[#005b82] group-hover:text-white mr-2 "/> un Texte</li>
          <li className=' group cursor-pointer h-12 max-w-36 rounded hover:bg-[#e86e04] mx-1 p-3 flex items-center justify-center text-[#005b82] hover:text-white font-medium text-base'> <LinkIcon className="h-5 w-5 text-[#005b82] group-hover:text-white mr-2 "/> un Lien</li>
          <li className=' group cursor-pointer h-12 max-w-36 rounded hover:bg-[#e86e04] mx-1 p-3 flex items-center justify-center text-[#005b82] hover:text-white font-medium text-base'> <PhotographIcon className="h-5 w-5 text-[#005b82] group-hover:text-white mr-2 "/> une image</li>
          <li className=' group cursor-pointer h-12 max-w-36 rounded hover:bg-[#e86e04] mx-1 p-3 flex items-center justify-center text-[#005b82] hover:text-white font-medium text-base'> <VideoCameraIcon className="h-5 w-5 text-[#005b82] group-hover:text-white mr-2 "/> une Vidéo</li>
        </ul>
         </div>
    </div>
  )
}

export default Klap