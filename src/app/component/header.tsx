

'use client';

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FiHeart, FiSearch, FiMenu, FiX } from 'react-icons/fi'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { FaTimes } from 'react-icons/fa';
import { SiIfixit } from 'react-icons/si';
import { Button } from '@/components/ui/button';


const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };


  return (
    <div className='relative'>
    
      <div className='hidden lg:flex lg:gap-32 lg:items-end lg:justify-end'>
        <ul className='font-medium lg:text-base lg:gap-[75px] flex my-8'>
          <Link href="/" className='hover:text-gray-600'>Home</Link>
          <Link href="/shop" className='hover:text-gray-600'>Shop</Link>
          <Link href="/blog" className='hover:text-gray-600'>About</Link>
          <Link href="/contact" className='hover:text-gray-600'>Contact</Link>
        </ul>
        
        <div className='flex lg:gap-[45px] mr-32 my-8'>
          <Link href="/account">
            <Image src="/icon/account.svg" width={28} height={28} alt="account" className='w-7 h-7 hover:text-gray-600'/>
          </Link>
          
          <Link href="/shop">
            <FiSearch className='w-7 h-7 hover:text-gray-600' />
          </Link>
 
          <Link href="/wishlist">
            <FiHeart className="w-7 h-7 hover:text-gray-600"/>
          </Link>
          
          <button onClick={toggleCart}>
     <AiOutlineShoppingCart className='w-7 h-7 hover:text-gray-600'/>
      </button> 
      {isCartOpen &&(
      <>
            <div 
      className='fixed inset-0 bg-black bg-opacity-50 z-40' 
     onClick={toggleCart}
    />
         
            <div className="fixed top-0 right-0 h-full w-[400px] bg-white shadow-lg z-50  flex flex-col overflow-y-auto   "
                onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6 border-b-2 border-[#D9D9D9] p-6">
              <h2 className="text-2xl font-semibold ">Shopping Cart</h2>
              <button className="hover:text-gray-600" onClick={toggleCart}>
               <Image src="/icon/Close cart.svg" width={17} height={19} alt=''/>
              </button>
            </div>
       
            <div className='flex-1 p-6 ' >
            <div className='flex gap-4'>
               <Image  src="/Images/cart.svg" width={106} height={106} alt=''/>
                 <div className='flex flex-col gap-2 my-6' >
                    <h1>Asgard sofa</h1>
                    <p className='flex text-base  gap-3'>1 <FaTimes  className='pt-1 mt-[1px]'/> <span className='font-medium text-xs text-[#B88E2F] mt-1'>Rs. 250,000.00</span></p>
                 </div>
                 <SiIfixit className='ml-10 mt-10 w-5 h-5' color='#9F9F9F' />
            </div>



            </div>



           
        <div className="flex justify-between text-base  mb-4 p-4 border-b-2 border-[#D9D9D9]" >
          <span className='font-normal '>Subtotal</span>
         <span className='text-[#B88E2F] font-semibold'>Rs. 250,000.00</span>
        </div>
       
       <div className='grid grid-cols-2  p-4  '>
       <Button className='w-32 h-7 rounded-[50px] mr-3 py-4 text-sm px-6 ml-6'>    
       <Link href="/cart">View Cart</Link>
     
       </Button>
        <Button className='w-32 h-7 rounded-[50px] mr-3 py-4 text-sm px-6'>         
           <Link href="/checkout">Checkout</Link>

        </Button>

       </div>
      </div>
            
  


            </>) }
        </div>
      </div>

      <div className="lg:hidden">
  <div className="flex justify-between items-center p-4">

    <button onClick={toggleMobileMenu} className="z-50">
      {isMobileMenuOpen ? <FiX className="w-6 h-6"  /> : <FiMenu className="w-6 h-6" />}
    </button>

  
    <div className="flex items-center space-x-4">
      <Link href="/account">
        <Image 
          src="/icon/account.svg" 
          width={28} 
          height={28} 
          alt="account" 
          className="lg:w-7 lg:h-7 sm:w-6 sm:h-6 hover:opacity-75"
        />
      </Link>
      <Link href="/wishlist">
        <FiHeart className="w-6 h-6 hover:text-gray-600" />
      </Link>
      <Link href="/shop">
        <FiSearch className="w-6 h-6" />
      </Link>
      <button onClick={toggleCart}>
     <AiOutlineShoppingCart className='w-6 h-6 hover:text-gray-600'/>
      </button> 
    </div>
  </div>
  {isCartOpen &&(
      <>
            <div 
      className='fixed inset-0 bg-black bg-opacity-50 z-40' 
     onClick={toggleCart}
    />
         
            <div className="fixed top-0 right-0 h-full w-[256px] bg-white shadow-lg z-50  flex flex-col overflow-y-auto   "
                onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6 border-b-2 border-[#D9D9D9] p-6">
              <h2 className="text-xl font-semibold ">Shopping Cart</h2>
              <button className="hover:text-gray-600" onClick={toggleCart}>
               <Image src="/icon/Close cart.svg" width={17} height={19} alt=''/>
              </button>
            </div>
       
            <div className='flex-1  ' >
            <div className='flex gap-3 ml-2'>
               <Image  src="/Images/cart.svg" width={56} height={56} alt=''/>
                 <div className='flex flex-col gap-2 my-6 text-xs' >
                    <h1>Asgard sofa</h1>
                    <p className='flex gap-1'>1 <FaTimes  className='pt-1 '/> <span className=' text-[#B88E2F] '>Rs. 250,000.00</span></p>
                 </div>
                 <SiIfixit className='ml-5 mt-10 w-4 h-4' color='#9F9F9F' />
            </div>



            </div>



           
        <div className="flex justify-between text-base  mb-4 p-4 border-b-2 border-[#D9D9D9]" >
          <span className='font-normal '>Subtotal</span>
         <span className='text-[#B88E2F] font-semibold'>Rs. 250,000.00</span>
        </div>
       
       <div className='grid grid-cols-2  gap-3  '>
       <Button className='w-30 h-7 rounded-[50px]  py-4 text-sm px-4 '>    
       <Link href="/cart">View Cart</Link>
     
       </Button>
        <Button className='w-30 h-7 rounded-[50px]  py-4 text-sm px-4'>         
           <Link href="/checkout">Checkout</Link>

        </Button>

       </div>
      </div>
            
  


            </>) }


  {/* Mobile menu and overlay */}
  {isMobileMenuOpen && (
    <div
        className={`
          fixed top-0 left-0 w-64 h-full bg-white mt-10 
          transform transition-transform duration-300 z-50
        `}
      >
        <div className="p-6 space-y-4 mt-">
          <Link href="/" className="block py-2 text-lg" onClick={toggleMobileMenu}>
            Home
          </Link>
          <Link href="/shop" className="block py-2 text-lg" onClick={toggleMobileMenu}>
            Shop
          </Link>
          <Link href="/blog" className="block py-2 text-lg" onClick={toggleMobileMenu}>
            About
          </Link>
          <Link href="/contact" className="block py-2 text-lg" onClick={toggleMobileMenu}>
            Contact
          </Link>
        </div>
      </div>
    
  )}

  
</div>
    </div>
  )
}

export default Header