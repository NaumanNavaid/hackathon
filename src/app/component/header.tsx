

'use client';

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FiHeart, FiSearch, FiMenu, FiX } from 'react-icons/fi'
import { AiOutlineShoppingCart } from 'react-icons/ai'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
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
          
          <Link href="/Cart">
            <AiOutlineShoppingCart className='w-7 h-7 hover:text-gray-600'/>
          </Link>
        </div>
      </div>

      <div className='lg:hidden'>
        {/* Mobile Menu Toggle */}
        <div className='flex justify-between items-center p-4'>
          <button 
            onClick={toggleMobileMenu} 
            className='z-50'
          >
            {isMobileMenuOpen ? <FiX className='w-6 h-6'/> : <FiMenu className='w-6 h-6'/>}
          </button>

          <div className='flex items-center space-x-4'>
          <Link href="/account">
            <Image src="/icon/account.svg" width={28} height={28} alt="account" className='lg:w-7 lg:h-7 sm:w-6 sm:h-6 hover:opacity-75'/>
          </Link>
         
          <Link href="/wishlist">
            <FiHeart className="w-6 h-6 hover:text-gray-600"/>
          </Link>
          
            <Link href="/shop">
              <FiSearch className='w-6 h-6' />
            </Link>
            <Link href="/Cart">
              <AiOutlineShoppingCart className='w-6 h-6'/>
            </Link>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div 
            className='fixed inset-0 bg-black bg-opacity-50 z-40' 
            onClick={toggleMobileMenu}
          />
        )}

       
        <div 
          className={`
            fixed top-0 left-0 w-64 h-full bg-white 
            transform transition-transform duration-300 z-50
            ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
          `}
        >
          <div className='p-6 space-y-4 mt-16'>
            <Link 
              href="/" 
              className='block py-2 text-lg'
              
            >
              Home
            </Link>
            <Link 
              href="/shop" 
              className='block py-2 text-lg'
              onClick={toggleMobileMenu}
            >
              Shop
            </Link>
            <Link 
              href="/About" 
              className='block py-2 text-lg'
              onClick={toggleMobileMenu}
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className='block py-2 text-lg'
              onClick={toggleMobileMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header