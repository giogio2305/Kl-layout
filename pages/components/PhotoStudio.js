import { CameraIcon, PhotographIcon } from '@heroicons/react/outline'
import React from 'react'

function PhotoStudio() {
  return (
    <div className='max-h-screen h-[80vh] mt-24 w-[80vw]'>
        {/* Entete */}
        <div className='w-full h-16 rounded-t-lg bg-[#005b82] inline-flex items-center justify-center'>
        <CameraIcon className='h-6 w-6 text-white'/>
            <div className='text-white text-center font-semibold text-lg ml-4'>Information sur votre photo</div>
        </div>
        {/* Corps */}
        <div className='w-full h-full flex items-start justify-start my-4'>

            {/* Formulaire */}
        <div className='max-h-screen sm:mb-12 w-80 bg-slate-50 shadow-lg rounded p-1'>
        {/* 1ere etape */}
            <div className='flex flex-col items-start justify start p-3 my-2'>
                <div className='text-[#005b82] font-semibold text-lg'>1<sup>ere</sup> etape</div>
                <div className='flex flex-col items-center justify-start h-20 p-3 rounded my-4 w-full shadow bg-white border-[#005b82] border-2 border-dashed'>
                <PhotographIcon className='h-8 w-8 text-[#005b82] '/>
                <div className='text-[#005b82] font-semibold text-base'>Charger une photo</div>
                </div>
            </div>

            {/* 2e etape */}
            <div className='flex flex-col items-start justify start p-3 my-2'>
                <div className='text-[#005b82] font-semibold text-lg'>2<sup>e</sup> etape</div>
                <div className='flex flex-col items-start justify-start h-20 p-3 rounded my-4 w-full shadow bg-white'>
                <div className='text-[#005b82] font-semibold text-sm'>Choisir une echelle</div>
                <select className='w-full h-8 mt-1 focus:outline-none font-medium text-xs text-slate-500'>
                    <option>---------</option>
                    <option>Portrait [20 * 30] - Paysage [30 * 20]</option>
                    <option>Portrait [24 * 36] - Paysage [36 * 24]</option>
                    <option>Portrait [30 * 45] - Paysage [45 * 30]</option>
                </select>
                </div>
            </div>

             {/* 3e etape */}
                        <div className='flex flex-col items-start justify start p-3 my-2'>
                <div className='text-[#005b82] font-semibold text-lg'>3<sup>e</sup> etape</div>
                <div className='flex flex-col items-start justify-start h-20 p-3 rounded my-4 w-full shadow bg-white'>
                <div className='text-[#005b82] font-semibold text-sm'>Retravaillez cette photo ?</div>
                <div className='flex items-center justify-center mt-2'>
                    <input type='radio' name='retouche'/>
                    <label className='ml-2 mt-1 mr-8 font-medium text-base text-[#005b82]'>Oui</label>

                    <input type='radio' name='retouche'/>
                    <label className='ml-2 mt-1 font-medium text-base text-[#005b82]'>Non</label>
                </div>
                </div>
            </div>


            {/* bouton de soumission */}
            <div className='flex flex-col items-start justify start px-16 py-4 my-8'>
            <button class="bg-[#005b82] hover:bg-gray-400 text-white font-bold py-2 px-4 rounded inline-flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
            <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
            </svg>
                <span className='ml-2'>Previsualiser</span>
                </button>
            </div>

        </div>

        {/* Previsuel */}
        <div className='flex flex-col items-center justify-center h-[92%] w-[70vw] bg-slate-50 rounded ml-12'>
        <div className='text-lg font-semibold text-[#005b82]'>Apercu de la photo</div>
        <div className='h-[80%] w-[90%] bg-slate-200 shadow-lg border-2 border-[#005b82] border-dashed m-6'></div>
        </div>
        
        </div>
        
    </div>
  )
}

export default PhotoStudio