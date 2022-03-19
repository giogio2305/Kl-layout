import React from 'react'
import prince from '../assets/prince-akachi-4Yv84VgQkRM-unsplash.jpg'
import bsg from '../assets/andra-c-taylor-jr-ZMPcfusc_-k-unsplash.jpg'
import {  ChatAlt2Icon, MicrophoneIcon, PhoneIcon, UserAddIcon, VideoCameraIcon, VolumeUpIcon} from '@heroicons/react/solid'
import {  StatusOnlineIcon  } from '@heroicons/react/outline'
import Image from 'next/image'
import Link from 'next/link'
function AudioCall() {
  return (
    <div className='absolute flex items-center justify-start top-60 left-[28%] h-[60vh] w-[64vw] rounded-lg'> 
 
 
    <div className='w-[68%] flex flex-col items-center justify-start h-full  rounded-lg'>

      <div className='flex items-center justify-center border-b-2   bg-white w-full rounded-t-lg h-[60px]'>
        <div className='flex  items-center justify-center pt-2'>
        <ChatAlt2Icon className="h-6 w-6 text-[#005b82]"/>
        <div className='text-lg text-[#005b82] ml-2 mr-1 font-semibold'>Klapeers Messenger</div>
        <div className="h-1 w-1 mx-1 rounded-full bg-[#005b82] "/>
        <div className='text-lg text-[#005b82] ml-1 font-semibold'>Appel audio</div>
        </div>
       
      </div>

<div className=' relative h-[100%] w-[100%] flex flex-col items-center justify-between bg-gradient-to-t from-gray-900 to-gray-600 bg-gradient-to-r  rounded-b-lg mt-0 ' >
      
<div className='absolute flex flex-col items-center  justify-start  w-full h-20 mt-10'>
<div className='h-[9vh] w-[9vw] shadow mt-4'>
<Image src={bsg} alt='avatar' objectFit='cover' className='h-[100%] w-[100%] rounded-full' />
</div>

<div className='text-xl text-white mt-24 font-semibold'>Cabraule Ketchanga</div>

<div className=' h-6 w-20 max-w-28 inline-flex items-center justify-start  rounded-lg mt-3'>
<StatusOnlineIcon className="h-6 w-6 text-green-400"/>
<div className='text-[14px] text-green-400 font-semibold ml-1'>12:04</div>
</div>
</div>


<div className='absolute flex items-center justify-center bottom-3  w-full h-16'>




    <div className='flex items-center justify-center'>
<div className='h-10 w-10 max-w-28 flex items-center justify-center bg-[rgba(0,0,0,0.4)] rounded-full cursor-pointer'>
        <MicrophoneIcon className="h-5 w-5 text-white"/>
</div>

<div className='h-10 w-10 mx-3 max-w-28 flex items-center justify-center bg-[rgba(0,0,0,0.4)] rounded-full cursor-pointer'>
        <VideoCameraIcon className="h-5 w-5 text-white"/>
</div>

<div className='h-12 w-12 max-w-28 mx-3 flex items-center justify-center bg-red-500 rounded-full cursor-pointer'>
        <PhoneIcon className="h-6 w-6 text-white rotate-[138deg] mt-[2px]"/>
</div>

<div className='h-10 w-10 max-w-28 flex items-center justify-center bg-[rgba(0,0,0,0.4)] rounded-full cursor-pointer'>
        <UserAddIcon className="h-5 w-5 text-white"/>
</div>

<div className='h-10 w-10 mx-3 max-w-28 flex items-center justify-center bg-[rgba(0,0,0,0.4)] rounded-full cursor-pointer'>
        <VolumeUpIcon className="h-5 w-5 text-white"/>
</div>


</div>


</div>



      </div>
</div>


    {/*<div className='w-[32%] h-full bg-white  rounded-r-lg border-l-2'>
    <div className=' w-full h-[60px] text-center border-b-2 '>
      <div className='text-xl  p-5 text-[#005b82] font-semibold'>Discussion</div>
    </div>


    <div className='h-[420px] w-full'>

      </div>

    <div className='h-[60px] w-full  border-t-2 pt-1.5 inline-flex items-center justify-center'>
                    <div  className='ml-2 d-flex justify-center items-center text-center py-1.5 px-1.5 w-9 h-9 rounded-full bg-[#005b82] cursor-pointer ml-1' >
                    <span className='text-white font-bold text-base '><PlusIcon className="h-6 w-6 text-white"/></span>
                    </div>
                    <textarea class="textarea textarea-bordered h-[36px] w-[248px] bg-white mb-2 mx-2" placeholder="Votre message"></textarea>
                    <div  className='mr-2   d-flex justify-center items-center text-center py-[7px] px-[9px] w-9 h-9 rounded-full bg-[#005b82] cursor-pointer' >
                    <span className='text-white font-bold text-base '><PaperAirplaneIcon className="h-5 w-5 text-white rotate-45"/></span>
                    </div>
                    </div>
    </div>*/}
 </div>
  )
}

export default AudioCall