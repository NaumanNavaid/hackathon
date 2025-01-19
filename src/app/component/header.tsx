'use client';

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FiHeart, FiSearch, FiMenu, FiX } from 'react-icons/fi'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Button } from '@/components/ui/button';
import Sidecart from './Sidecart';
import { motion, AnimatePresence } from 'framer-motion'; // Importing Framer Motion

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

      {/* Desktop Menu */}
      <div className='hidden lg:flex lg:gap-32 lg:items-end lg:justify-end'>
        <ul className='font-medium lg:text-base lg:gap-[75px] flex my-8'>
          <Link href="/" className='hover:text-gray-600'>Home</Link>
          <Link href="/shop" className='hover:text-gray-600'>Shop</Link>
          <Link href="/blog" className='hover:text-gray-600'>About</Link>
          <Link href="/contact" className='hover:text-gray-600'>Contact</Link>
        </ul>

        <div className='flex lg:gap-[45px] mr-32 my-8'>
          <Link href="/account">
            <Image src="/icon/account.svg" width={28} height={28} alt="account" className='w-7 h-7 hover:text-gray-600' />
          </Link>

          <Link href="/shop">
            <FiSearch className='w-7 h-7 hover:text-gray-600' />
          </Link>

          <Link href="/wishlist">
            <FiHeart className="w-7 h-7 hover:text-gray-600" />
          </Link>

          <Sidecart />

        </div>
      </div>

      {/* Mobile Menu */}
      <div className="lg:hidden">
        <div className="flex justify-between items-center p-4">
          <button onClick={toggleMobileMenu} className="z-50">
            {isMobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
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
            <Sidecart />
          </div>
        </div>

        {/* Animate Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="fixed top-0 left-0 w-64 h-full mt-10 bg-white z-50" // Ensure full height and proper positioning
              initial={{ x: '-100%' }} // Start off-screen to the left
              animate={{ x: 0 }} // Slide in from left to center
              exit={{ x: '-100%' }} // Slide out to the left
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <div className="p-6 space-y-4">
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
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </div>
  );
}

export default Header;
