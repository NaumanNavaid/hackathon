import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const hero = () => {
  return (
    <div className='flex lg:flex-row sm:flex-col bg-[#FBEBB5] '>
        <div className='flex-col flex gap-9 ml-20 my-40 font-medium'>
           <h1 className='text-[64px]  '>Rocket single seater</h1>
           <Link href="/shop" className='text-2xl pb-3 border-b-2 w-[121px] border-black ' >Shop Now</Link>
        </div>
     <div>
       <Image 
         src="/Images/Sofa.svg"
         width={883}
         height={800}
         alt='Sofa' 
         className='
         '
         />
      </div>
     </div>
  )
}

export default hero