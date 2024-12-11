import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Table = () => {
  return (
    <div className='bg-[#FAF4F4] w-full'>
      <div className='flex lg:flex-row sm:flex-col gap-2 pt-4 mx-auto max-w-[1200px] px-4'>
        <div className='flex flex-col relative w-full'>
          <div className='relative w-full sm:h-96 h-[562px] lg:h-[562px]'>
            <Image 
              src="/Images/Table.svg" 
              alt='Side Table' 
              fill
              className='object-cover'
            />
          </div>
          <div className='absolute bottom-10 lg:ml-40 sm:ml-4 font-medium flex flex-col gap-6'>
            <h1 className='text-4xl  pt-10'>Side table</h1>
            <Link 
              href="/shop" 
              className='text-2xl sm:text-xl pb-3 border-b-2 border-black w-[125px]'
            >
              View More
            </Link>
          </div>
        </div>

        <div className='flex flex-col relative w-full'>
          <div className='relative w-full h-[562px] sm:h-[260px] lg:h-[562px]'>
            <Image 
              src="/Images/Sofa 2.svg" 
              alt='Sofa' 
              fill
              className='object-cover'
            />
          </div>
          <div className='absolute bottom-10 lg:ml-40 sm:ml-4 font-medium flex flex-col gap-6'>
            <h1 className='text-4xl  pt-10 '>Sofa</h1>
            <Link 
              href="/shop" 
              className='text-2xl sm:text-xl pb-3 border-b-2 border-black w-[125px]'
            >
              View More
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Table