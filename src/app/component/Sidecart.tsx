'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FaTimes } from 'react-icons/fa';
import { SiIfixit } from 'react-icons/si';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion'; // Import Framer Motion

const Sidecart = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    return (
        <div>
            <button onClick={toggleCart}>
                <AiOutlineShoppingCart className='md:w-7 md:h-7 sm:w-6 sm:h-6 sm:mt-1 hover:text-gray-600' />
            </button>
            <AnimatePresence>
                {isCartOpen && (
                    <>
                        {/* Overlay Background with Fade-in/Out Effect */}
                        <motion.div
                            className="fixed inset-0 bg-black bg-opacity-50 z-40"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={toggleCart}
                        />

                        {/* Side Cart with Slide-in Transition */}
                        <motion.div
                            className="fixed top-0 right-0 h-full w-full sm:w-64 md:w-[400px] bg-white shadow-lg z-50 flex flex-col overflow-y-auto"
                            initial={{ x: '100%' }} // Start off-screen to the right
                            animate={{ x: 0 }} // Slide in to its normal position
                            exit={{ x: '100%' }} // Slide out to the right when closing
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex justify-between items-center mb-6 border-b-2 border-[#D9D9D9] p-6">
                                <h2 className="md:text-2xl font-semibold sm:text-xl ">Shopping Cart</h2>
                                <button className="hover:text-gray-600" onClick={toggleCart}>
                                    <Image src="/icon/Close cart.svg" width={17} height={19} alt='' />
                                </button>
                            </div>

                            <div className='flex-1 md:p-6 sm:ml-2'>
                                <div className='flex md:gap-4 sm:gap-4'>
                                    <Image src="/Images/cart.svg" width={106} height={106} alt=''  className='sm:w-14 sm:h-14 md:w-28 md:h-28'/>
                                    <div className='flex flex-col gap-2 md:my-6 sm:text-xs md:text-base'>
                                        <h1>Asgard sofa</h1>
                                        <p className='flex text-base gap-3'>
                                            1 <FaTimes className='pt-1 mt-[1px]' />{' '}
                                            <span className='font-medium text-xs text-[#B88E2F] mt-1'>Rs. 250,000.00</span>
                                        </p>
                                    </div>
                                    <SiIfixit className='md:ml-10 md:mt-10 sm:mt-5 md:w-5 md:h-5 sm:w-5 sm:h-5'  color='#9F9F9F' />
                                </div>
                            </div>

                            <div className="flex justify-between text-base mb-4 p-4 border-b-2 border-[#D9D9D9]">
                                <span className='font-normal'>Subtotal</span>
                                <span className='text-[#B88E2F] font-semibold'>Rs. 250,000.00</span>
                            </div>

                            <div className='grid grid-cols-2  p-4 gap-3'>
                                <Button className='w-full sm:w-24 md:w-32 h-7 rounded-[50px] py-4 text-sm px-6'>
                                    <Link href="/cart">View Cart</Link>
                                </Button>
                                <Button className='w-full sm:w-24 md:w-32 h-7 rounded-[50px] py-4 text-sm px-6'>
                                    <Link href="/checkout">Checkout</Link>
                                </Button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Sidecart;


