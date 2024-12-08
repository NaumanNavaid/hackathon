import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const table = () => {
  return (
  <div className='bg-[#FAF4F4] w-full'>
     <div className='flex lg:flex-row sm:flex-col gap-2 pt-4'>
        <div className='flex flex-col relative'>
             <Image src="/Images/Table.svg" width={605} height={562} alt='' className='sm:w-[300px] sm:h-[260px] lg:w-full lg:h-full'/>
             <div className='absolute bottom-10 ml-40 font-medium flex flex-col gap-6 '>
                <h1  className='text-4xl pt-10'>Side table</h1>
                <Link href="/shop" className='text-2xl pb-3 border-b-2 border-black w-[125px]'>View More</Link>
               </div>
          </div>

          <div className='flex flex-col relative'>
             <Image src="/Images/Sofa 2.svg" width={605} height={562} alt='' className='sm:w-[300px] sm:h-[260px] lg:w-full lg:h-full'/>
             <div className='absolute bottom-10 ml-40 font-medium flex flex-col gap-6 '>
                <h1  className='text-4xl pt-10'>Side table</h1>
                <Link href="/shop" className='text-2xl pb-3 border-b-2 border-black w-[125px]'>View More</Link>
               </div>
          </div>

     
        </div>
    </div> 
  )
}

export default table