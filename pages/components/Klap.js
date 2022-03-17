import React from 'react'
import { LinkIcon, PencilIcon, PhotographIcon, UserIcon, VideoCameraIcon } from '@heroicons/react/solid'
import Kicon from './Kicon'

function Klap() {
  return (
    <>
    <div className='w-[524px] h-[68px] rounded shadow-lg bg-white mx-4 mt-7 mb-4  '>
    <div className='flex items-center justify-start'>
      <div className='flex items-center justify-center h-10 w-16 bg-white rounded -mt-3'>
      <div className='font-semibold text-lg mt-2 text-[#e86e04]  mb-3 '>
             Klap
         </div>
      </div>

    </div>

    <div className='inline-flexitems-center justify-between ml-7'>
         <ul className='inline-flex items-center justify-center'>
          <label for="my-modal-3" className=' modal-button group cursor-pointer h-8 max-w-36 rounded hover:bg-[#e86e04] mx-1 p-2 flex items-center justify-center text-[#005b82] hover:text-white font-medium text-base'> <PencilIcon className="h-5 w-5 text-[#005b82] group-hover:text-white mr-2 "/> un Texte</label>
          <label for="my-modal-4" className='modal-button  group cursor-pointer h-8 max-w-36 rounded hover:bg-[#e86e04] mx-1 p-2 flex items-center justify-center text-[#005b82] hover:text-white font-medium text-base'> <LinkIcon className="h-5 w-5 text-[#005b82] group-hover:text-white mr-2 "/> un Lien</label>
          <label for="my-modal-5" className=' modal-button group cursor-pointer h-8 max-w-36 rounded hover:bg-[#e86e04] mx-1 p-2 flex items-center justify-center text-[#005b82] hover:text-white font-medium text-base'> <PhotographIcon className="h-5 w-5 text-[#005b82] group-hover:text-white mr-2 "/> une image</label>
          <label for="my-modal-6" className='modal-button group cursor-pointer h-8 max-w-36 rounded hover:bg-[#e86e04] mx-1 p-2 flex items-center justify-center text-[#005b82] hover:text-white font-medium text-base'> <VideoCameraIcon className="h-5 w-5 text-[#005b82] group-hover:text-white mr-2 "/> une Vidéo</label>
        </ul>
         </div>
    </div>

{/*Klap Text*/}
<input type="checkbox" id="my-modal-3" class="modal-toggle"/>
<div class="modal">
  <div class="modal-box relative bg-white w-[684px] h-[468px] rounded">
    <label for="my-modal-3" class="btn btn-sm btn-circle bg-white hover:bg-gray-500 hover:text-white border-0 absolute right-2 top-2">✕</label>
    
    <div className='flex  items-start justify-start'>
    <Kicon />
    <h3 class="ml-8 text-2xl font-medium text-slate-600">Klaper un texte</h3>
    </div>


        <div className='flex flex-col items-start justify-start m-4 mb-3'>
        <div className="py-4 text-sm font-medium">Ecrivez votre desciption ici</div>
        <textarea class="textarea h-[132px] w-[422px] rounded-lg bg-white border border-1 border-slate-300" ></textarea>
        </div>

        <div className='flex flex-col items-start justify-start m-4'>
        <p className="py-4 text-sm font-medium">Type de publication</p>
        <select className="text-sm font-medium  select max-w-lg w-[422px] rounded-lg bg-white border border-1 border-slate-300">
  <option disabled selected>-------</option>
  <option>Professionelle</option>
  <option>Autres</option>
</select>
        </div>


            
    <div className='flex  items-start justify-end mt-8 mr-7'>
    <button class="h-[40px] w-[88px] text-sm rounded-lg text-white bg-[#005b82] font-bold">Annuler</button>
    <button class="h-[40px] w-[88px] text-sm rounded-lg text-white bg-[#e86e04]  font-bold ml-3">Klaper</button>
    </div>


  </div>
</div>

{/*Klap Link*/}
<input type="checkbox" id="my-modal-4" class="modal-toggle"/>
<div class="modal">
  <div class="modal-box relative bg-white w-[684px] h-[424px] rounded">
    <label for="my-modal-4" class="btn btn-sm btn-circle bg-white hover:bg-gray-500 hover:text-white border-0 absolute right-2 top-2">✕</label>
    
    <div className='flex  items-start justify-start'>
    <Kicon />
    <h3 class="ml-8 text-2xl font-medium text-slate-600">Klaper un lien</h3>
    </div>


        <div className='flex flex-col items-start justify-start m-4 mb-3'>
        <div className="py-4 text-sm font-medium">Coller votre lien ici.</div>
        <textarea class="textarea h-[40px] w-[422px] rounded-lg bg-white border border-1 border-slate-300" ></textarea>
        </div>

        <div className='flex flex-col items-start justify-start m-4'>
        <p className="py-4 text-sm font-medium">Type de publication</p>
        <select className="text-sm font-medium  select max-w-lg w-[422px] rounded-lg bg-white border border-1 border-slate-300">
  <option disabled selected>-------</option>
  <option>Professionelle</option>
  <option>Autres</option>
</select>
        </div>


            
    <div className='flex  items-start justify-end mt-8 mr-7'>
    <button class="h-[40px] w-[88px] text-sm rounded-lg text-white bg-[#005b82] font-bold">Annuler</button>
    <button class="h-[40px] w-[88px] text-sm rounded-lg text-white bg-[#e86e04]  font-bold ml-3">Klaper</button>
    </div>


  </div>
</div>

{/*Klap image*/}
<input type="checkbox" id="my-modal-5" class="modal-toggle"/>
<div class="modal">
  <div class="modal-box relative bg-white w-[694px] h-[468px] rounded no-scrollbar">
    <label for="my-modal-5" class="btn btn-sm btn-circle bg-white hover:bg-gray-500 hover:text-white border-0 absolute right-2 top-2">✕</label>
    
    <div className='flex  items-start justify-start'>
    <Kicon />
    <h3 class="ml-8 text-2xl font-medium text-slate-600">Klaper une image</h3>
    </div>

    <div className='cursor-pointer flex flex-col items-center justify-center mx-4  mt-8 mb-0  border-2 border-[#005b82] h-[132px] w-[422px] border-dashed rounded-lg'>
    <PhotographIcon className="h-16 w-16 text-[#005b82] group-hover:text-white mr-2 "/>
    <h3 class="mb-3 text-base font-semibold text-[#005b82]">Uploader une image</h3>
    </div>

        <div className='flex flex-col items-start justify-start m-4 mb-3'>
        <div className="py-4 text-sm font-medium">Ecrivez votre desciption ici</div>
        <textarea class="textarea h-[132px] w-[422px] rounded-lg bg-white border border-1 border-slate-300" ></textarea>
        </div>

        <div className='flex flex-col items-start justify-start m-4'>
        <p className="py-4 text-sm font-medium">Type de publication</p>
        <select className="text-sm font-medium  select max-w-lg w-[422px] rounded-lg bg-white border border-1 border-slate-300">
  <option disabled selected>-------</option>
  <option>Professionelle</option>
  <option>Autres</option>
</select>
        </div>


            
    <div className='flex  items-start justify-end mt-8 mr-7'>
    <button class="h-[40px] w-[88px] text-sm rounded-lg text-white bg-[#005b82] font-bold">Annuler</button>
    <button class="h-[40px] w-[88px] text-sm rounded-lg text-white bg-[#e86e04]  font-bold ml-3">Klaper</button>
    </div>


  </div>
</div>

{/*Klap video*/}
<input type="checkbox" id="my-modal-6" class="modal-toggle"/>
<div class="modal">
  <div class="modal-box relative bg-white w-[694px] h-[472px] rounded no-scrollbar">
    <label for="my-modal-6" class="btn btn-sm btn-circle bg-white hover:bg-gray-500 hover:text-white border-0 absolute right-2 top-2">✕</label>
    
    <div className='flex  items-start justify-start'>
    <Kicon />
    <h3 class="ml-8 text-2xl font-medium text-slate-600">Klaper une vidéo</h3>
    </div>

    <div className='cursor-pointer flex flex-col items-center justify-center mx-4  mt-8 mb-0  border-2 border-[#005b82] h-[132px] w-[422px] border-dashed rounded-lg'>
    <VideoCameraIcon className="h-16 w-16 text-[#005b82] group-hover:text-white mr-2 "/>
    <h3 class="mb-3 text-base font-semibold text-[#005b82]">Uploader une vidéo</h3>
    </div>

    <div className='py-4 text-xs font-medium w-[430px] mx-4 t-2 mb-3'>NB : Votre vidéo doit être au format MP4 et ne doit pas excédé 30 Mégabites(Mbs)</div>

        <div className='flex flex-col items-start justify-start m-4 mb-3'>
        <div className="py-4 text-sm font-medium">Ecrivez votre desciption ici</div>
        <textarea class="textarea h-[132px] w-[422px] rounded-lg bg-white border border-1 border-slate-300" ></textarea>
        </div>

        <div className='flex flex-col items-start justify-start m-4'>
        <p className="py-4 text-sm font-medium">Type de publication</p>
        <select className="text-sm font-medium  select max-w-lg w-[422px] rounded-lg bg-white border border-1 border-slate-300">
  <option disabled selected>-------</option>
  <option>Professionelle</option>
  <option>Autres</option>
</select>
        </div>


            
    <div className='flex  items-start justify-end mt-8 mr-7'>
    <button class="h-[40px] w-[88px] text-sm rounded-lg text-white bg-[#005b82] font-bold">Annuler</button>
    <button class="h-[40px] w-[88px] text-sm rounded-lg text-white bg-[#e86e04]  font-bold ml-3">Klaper</button>
    </div>


  </div>
</div>
</>
  )
}

export default Klap