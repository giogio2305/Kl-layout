import { ChevronDownIcon,ChevronUpIcon,XIcon } from '@heroicons/react/solid'
import React from 'react'

function ChatBox({chatBox, chatReduce, setChatBox, setChatReduce}) {
  return (
    <>
{
    chatBox &&  
    <> 
                            {
                              chatReduce  
                              ?
                              <div className='fixed flex flex-col items-center justify-start rounded shadow-lg bottom-0 right-24 mb-1 w-[338px] h-10 flex flex-col items-center bg-white'>
        
                              <div className='flex items-center justify-start w-[100%] h-10 rounded-t bg-[#005b82] px-1'>
                                  
                                  <div className='inline-flex items-center justify-center mr-20 ml-2'>
                                  <div  className='mx-2   d-flex justify-center items-center text-center  w-2 h-2 rounded-full bg-[#e80c00] cursor-pointer' ></div>
                                      <div className='text-base text-white font-semibold w-[148px] truncate '>Cabraule Ketchanga</div>
                                  </div>
                                  <div className='inline-flex items-center justify-center '>
                              <ChevronUpIcon className='h-6 w-6 text-white cursor-pointer' onClick={()=>setChatReduce(!chatReduce)}/>
                              <XIcon className='h-5 w-5 text-white ml-2 cursor-pointer' onClick={()=>setChatBox(!chatBox)}/>
                              </div>
                              
                              </div>
                              </div>
                              :
                                
                              <div className='fixed flex flex-col items-center justify-start rounded shadow-lg bottom-0 right-24 mb-1 w-[338px] h-[455px] flex flex-col items-center bg-white'>
        
<div className='flex items-center justify-start w-[100%] h-10 rounded-t bg-[#005b82] px-1'>
    
    <div className='inline-flex items-center justify-center mr-20 ml-2'>
    <div  className='mx-2   d-flex justify-center items-center text-center  w-2 h-2 rounded-full bg-[#e80c00] cursor-pointer' ></div>
        <div className='text-base text-white font-semibold w-[148px] truncate '>Cabraule Ketchanga</div>
    </div>
    <div className='inline-flex items-center justify-center '>
<ChevronDownIcon className='h-6 w-6 text-white cursor-pointer' onClick={()=>setChatReduce(!chatReduce)}/>
<XIcon className='h-5 w-5 text-white ml-2 cursor-pointer' onClick={()=>setChatBox(!chatBox)}/>
</div>

</div>

<div className='h-[372px] w-[330px] my-1'>

</div>

<div className='h-[44px] w-[330px] bg-blue-200 mb-1'>

</div>
</div>

                            }
    </>
}
</>
  )
}

export default ChatBox