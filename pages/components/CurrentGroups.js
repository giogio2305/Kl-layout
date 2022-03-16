import React, {useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {  UserGroupIcon } from '@heroicons/react/solid'
import Kicon from './Kicon'


function CurrentGroups() {
  return (
    <div className='flex flex-row items-center justify-center mx-6 mt-4 mb-4 '>

                {/* first side feed*/}
                <div className='flex flex-col items-center justify-start w-[325px] h-[735px] max-h-[735px] mx-[15px]'> 
            
            
            <label for="my-modal-3" className='cursor-pointer h-[200px] w-[275px] bg-white rounded mt-1 ml-32 flex flex-col items-center justify-center  border-2 border-[#005b82]  border-dashed rounded-lg'>
    <UserGroupIcon className="h-16 w-16 text-[#005b82] group-hover:text-white mb-2 "/>
    <h3 class="mb-1 text-base font-semibold text-[#005b82]">Créer un Groupe</h3>
    <div class="text-xs font-medium text-[#005b82]">Une experience unique</div>
    </label>
            </div>
        {/* middle side feed*/}
            <div className='flex flex-col items-center justify-start w-[975px] h-[735px] max-h-[735px]'>
            <div className='h-[375px] w-[825px] bg-white rounded mt-1 mr-12'></div>
            </div>









                       {/*Creer Groupe*/}
<input type="checkbox" id="my-modal-3" class="modal-toggle"/>
<div class="modal">
  <div class="modal-box relative bg-white w-[694px] h-[644px] rounded no-scrollbar">
    <label for="my-modal-3" class="btn btn-sm btn-circle bg-white hover:bg-gray-500 hover:text-white border-0 absolute right-2 top-2">✕</label>
    
    <div className='flex  items-start justify-start'>
    <Kicon />
    <h3 class="ml-8 text-2xl font-medium text-slate-600">Créer un Groupe</h3>
    </div>

        
    <div className='flex flex-col items-start justify-start m-4'>
        <p className="py-4 text-sm font-medium">Thème du groupe</p>
        <input type="text" class="text-sm font-medium   w-[422px] input input-bordered   rounded-lg bg-white border border-1 border-slate-300"></input>

        </div>


        <div className='flex flex-col items-start justify-start m-4 mb-3'>
        <div className="py-4 text-sm font-medium">Description du groupe</div>
        <textarea class="textarea h-[132px] w-[422px] rounded-lg bg-white border border-1 border-slate-300" ></textarea>
        </div>


        <div className='flex  items-start justify-between w-[422px] m-4 mb-3'>
        <div className='flex flex-col items-start justify-start'>
        <div className="py-4 text-sm font-medium"> Groupe Privée ?</div>
        <input type="text" class="text-sm font-medium   w-[207px] input input-bordered   rounded-lg bg-white border border-1 border-slate-300"></input>
       </div>
        </div>

        <div className='flex flex-col items-start justify-start m-4'>
        <p className="py-4 text-sm font-medium">Image de profil du groupe</p>
        <input type="text" class="text-sm font-medium   w-[422px] input input-bordered   rounded-lg bg-white border border-1 border-slate-300"></input>
        </div>

        <div className='flex flex-col items-start justify-start m-4'>
        <p className="py-4 text-sm font-medium">Image de couverture du groupe</p>
        <input type="text" class="text-sm font-medium   w-[422px] input input-bordered   rounded-lg bg-white border border-1 border-slate-300"></input>
        </div>



            
    <div className='flex  items-start justify-end mt-8 mr-7'>
    <button class="h-[40px] w-[88px] text-sm rounded-lg text-white bg-[#005b82] font-bold">Annuler</button>
    <button class="h-[40px] w-[88px] text-sm rounded-lg text-white bg-[#e86e04]  font-bold ml-3">Créer</button>
    </div>


  </div>
</div>
    </div>
  )
}

export default CurrentGroups