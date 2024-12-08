import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { FiHeart, FiSearch } from 'react-icons/fi'
import { AiOutlineShoppingCart } from 'react-icons/ai'


 const header = () => {
  return (
   
      <div className='flex lg:gap-32 sm:gap-4 lg:items-end lg:justify-end sm:items-start sm:justify-start'>
        <ul className='font-medium  sm:text-xs lg:text-base sm:gap-10 lg:gap-[75px] flex my-8'>
          <Link href="/">Home</Link>
          <Link href="/shop">Shop</Link>      
          <Link href="/About">About</Link>
          <Link href="/contact">Contact</Link>
        </ul>
    
      <div className='flex lg:gap-[45px] sm:gap-4 mr-32 my-8'>
         <Link href="/account">
          <Image src="/icon/account.svg" width={28} height={28} alt="account" className='sm:block'/>
         </Link>

         <Link href="/shop">
         <FiSearch className='w-7 h-7' />
         </Link>
 
        <Link href="/wishlist">
         <FiHeart className="w-7 h-7"/>
        </Link>
        
        <Link href="/Cart">
        <AiOutlineShoppingCart className='w-7 h-7'/>
        </Link>


          </div>

        </div>
  )

}

export default header