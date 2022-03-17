import React from 'react'
import { LinkIcon,HeartIcon, NewspaperIcon, PencilIcon, PhotographIcon, UserIcon, VideoCameraIcon,BanIcon, ChatAlt2Icon, DotsVerticalIcon, TrashIcon, UserCircleIcon, UserGroupIcon, ShareIcon } from '@heroicons/react/solid'
import avatar from '../assets/user.png'
import Link from 'next/link'
import Image from 'next/image'
function FeedCart() {
    const OptionsItems=[
        {
            name: 'Modifier la publication',
            icon: <PencilIcon className="h-7 w-7 text-slate-600"/>,
        },
        {
            name: 'Supprimer la publication',
            icon: <TrashIcon className="h-7 w-7 text-slate-600"/>,
        },
    ]
  return (
    <div className=' relative h-[728px] w-[524px] my-2 rounded bg-white block'>

    {/* entete de la publication */}
    <div className='w-full h-[60px] bg-white rounded-t inline-flex items-center justify-between px-4'>


        <div className='inline-flex items-center justify-start'>
    <div className='h-9 w-9 relative cursor-pointer'>
                <Image src={avatar} alt='avatar'   layout="fill" objectFit="cover" className='h-16 w-16' />
    </div>
                
                <div className='ml-4 block '>
                    <Link href='Mbakop Georges Alfred'>
                    <div className='text-base text-slate-600 font-bold mt-[5px] truncate w-[240px]  cursor-pointer'>
                    Mbakop Georges Alfred
                    </div>
                    </Link>
                    
                    <div className='inline-flex items-center justify-center mb-[4px]'>
                    <div className='text-[10px] text-slate-600 font-medium '>
                    il y a 1 jour, 16 h
                    </div>
                    <div className="h-1 w-1 mx-2 rounded-full bg-slate-600 "/>
                    <UserGroupIcon className="h-3.5 w-3.5 mb-[3px] text-slate-600 cursor-pointer"/>
                    </div>

                </div>

                </div>

                <div class="dropdown dropdown-end">
                <DotsVerticalIcon tabindex="0" className="h-4 w-4 text-slate-600 ml-1 cursor-pointer"/>
                <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-white rounded-xl w-48">
                    {
                        OptionsItems.map((item, index)=>{
                                    return(
                                        <li><a>
                                            {item.icon} 
                                            <div className='text-slate-600 text-[14px] font-semibold'>
                                            {item.name}
                                            </div>
                                            
                                            </a></li>
                                    );
                        })

                    }
                </ul>
                </div>
    </div>

    {/* media de la publication */}
    <div className='w-full h-[56%] bg-slate-600'>

    </div>

    {/* stats de la publication */}
    <div className='w-full h-[5%] py-3  inline-flex items-center justify-start'>

        <div className='inline-flex items-center justify-center cursor-pointer hover:opacity-60 mx-3'>
        <HeartIcon className="h-6 w-6  text-slate-500  mx-2"/>
        <div className='text-sm font-semibold text-slate-500'>8</div>
        </div>

        <div className='inline-flex items-center justify-center cursor-pointer hover:opacity-60 mx-3'>
        <ChatAlt2Icon className="h-6 w-6  text-slate-500  mx-2"/>
        <div className='text-sm font-semibold text-slate-500'>8</div>
        </div>

        <div className='inline-flex items-center justify-center cursor-pointer hover:opacity-60 mx-3'>
        <ShareIcon className="h-6 w-6  text-slate-500  mx-2"/>
        <div className='text-sm font-semibold text-slate-500'>8</div>
        </div>
    </div>

    {/* media de la publication */}
    <div className='w-full h-[20%] border-t-2 pt-1'>
                        
                        <div className='w-full items-center justify-end  px-6 py-2 cursor-pointer'>
                            <div className='text-slate-600 text-[13px] font-semibold text-right'>
                            Tous les commentaires
                            </div>
                        </div>

                        <div className='w-full flex items-start justify-start  px-3.5 py-2'>
                        <div className='h-8 w-8 relative cursor-pointer mr-2'>
                        <Image src={avatar} alt='avatar'   layout="fill" objectFit="cover" className='h-16 w-16' />
                        </div>
                        
                        <div className='flex flex-col items-start rounded-lg justify-start max-w-[90%] px-2 py-2'>
                        
                        <div className='flex flex-col items-start rounded-lg justify-start  bg-gray-200 px-2 py-2 mb-1.5'>
                        <Link href='Mbakop Georges Alfred'>
                        <div className='text-sm text-slate-600 font-semibold  cursor-pointer hover:underline'>
                        Mbakop Georges Alfred
                        </div>
                        </Link>

                        <div className='text-[12px] text-slate-600 font-medium mt-1'>
                        Please don't mislead people here php is really powerful just look at Facebook that you're using
                    </div>
                        </div>

                                                     
                    <div className='inline-flex items-center justify-start px-1'>
                        <div className='text-[9px] text-slate-600 font-medium '>
                    1 jour, 16 h
                    </div>
                    </div>
                        </div>



                        </div>

    </div>

                    {/* commenter de la publication */}
                    <div className='absolute inline-flex items-center justify-start rounded-b w-full h-[52px] p-2 bottom-0 border-t-2 '>
                    <textarea class="p-2 w-[88%] h-[40px] outline-none" placeholder="Votre commentaire"></textarea>
                    <div className='text-[13px] font-bold ml-3 text-[#005b82] cursor-pointer'>Publier</div>
                        </div>

</div>
  )
}

export default FeedCart