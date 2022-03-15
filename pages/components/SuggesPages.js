import React from 'react'
import avatar from '../assets/user.png'
import Link from 'next/link'
import Image from 'next/image'
import { PlusSmIcon } from '@heroicons/react/outline'

function SuggesPages() {
    const SuggesItems = [
        {
            name: 'BIO TOP COMMODITIES',
            cover:  avatar,
            description: 'INDUSTRIES AGRO-ALIMENTAIRE ET AUTRES',
            ville : 'Douala',
        },
        {
            name: 'Mauresque',
            cover:  avatar,
            description: 'INDUSTRIES AGRO-ALIMENTAIRE ET AUTRES',
            ville : 'Douala',
        },
        {
            name: "SEVE ET VINS D\'AFRIQUE",
            cover:  avatar,
            description: 'INFORMATIQUE, INTERNET',
            ville : 'Douala',
        },
        {
            name: 'Maison High-Tech',
            cover:  avatar,
            description: 'INDUSTRIES AGRO-ALIMENTAIRE ET AUTRES',
            ville : 'Douala',
        },
    ];
  return (
    <div className=' flex flex-col items-center justify-center mx-1 w-[268px] h-[492px] rounded shadow-lg bg-white'>
    <div className='font-semibold text-lg text-slate-600'>
    Suggestion de pages
    </div>
    <div className='flex flex-col items-center justify-center h-[360px] w-[98%] my-3'>

        {
            SuggesItems.map((item)=>{
                return(
                    <div className='inline-flex items-center justify-start h-[72px] w-[100%] my-3 ml-2'>
                    <div className='h-10 w-10 relative cursor-pointer mr-2 ml-1'>
                                <Image src={item.cover} alt='avatar'   layout="fill" objectFit="cover" className='h-16 w-16' />
                        </div>
                        <div>
                                    <div className='text-[13.6px] text-slate-600 font-bold truncate w-[148px]  cursor-pointer'>
                                        {item.name}
                                    </div>
            
                                    <div className='text-[10px]  w-[128px] text-slate-600 font-medium '>
                                    {item.description}
                                    </div>
                                    <div className='text-[9px] text-slate-600 font-medium '>
                                    {item.ville}
                                    </div>
                        </div>
                        <div  className='mx-2   d-flex justify-center items-center text-center py-1 px-1 w-8 h-8 rounded-full bg-transparent hover:bg-gray-200 cursor-pointer' >
                        <span className='text-white font-bold text-base '><PlusSmIcon className="h-6 w-6 text-slate-600"/></span>
                        </div>
                    </div>
            
                );
            })
        }
        
    </div>

    <div className='font-semibold text-base mt-2 text-[#e86e04]'>
        <Link href='/contacts'>
        Voir tout
        </Link>

    </div>
    
    </div>
  )
}

export default SuggesPages