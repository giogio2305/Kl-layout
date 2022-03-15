import React from 'react'
import Image from 'next/image'
import img from '../assets/favicon.png'
function Kicon() {
  return (
    <div className="h-8 w-8 relative"> 
    <Image
        src={img}
        alt="Picture of the author"
        layout="fill" 
        objectFit="cover" 
      />
    </div>
  )
}

export default Kicon