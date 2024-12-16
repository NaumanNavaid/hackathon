import Link from 'next/link'
import React from 'react'
import { RxDividerVertical } from 'react-icons/rx'

const Footer = () => {
  return (
    <div className='mt-32 text-black font-medium text-base'>
       <div className=' flex mx-24  lg:flex-row sm:flex-col gap-24 border-b pb-20 border-[#D9D9D9]'>
         <div className='font-normal text-[#9F9F9F] lg:w-[285px] mt-20'>
             400 University Drive Suite 200 Coral Gables,
             FL 33134 USA
         </div>
          
         <div className='flex flex-col gap-14'>
             <h1 className='text-[#9F9F9F]'>Links</h1>
             <Link href="/">Home</Link>
             <Link href="/shop">Shop</Link>
             <Link href="/about">About</Link>
             <Link href="/contact">Contact</Link>
             <Link href="/account">My Account</Link>

            </div>     

          <div className='flex flex-col gap-14'>
             <h1 className='text-[#9F9F9F]'>Help</h1>
             <Link href="/checkout">Payment Options</Link>
             <Link href="#">Returns</Link>
             <Link href="#">Privacy Policies</Link>
            </div>        
            
          <div className='flex flex-col gap-14'>
             <h1 className='text-[#9F9F9F]'>Newsletter</h1>
             <div className='flex gap-1'>
                <input type="text" placeholder='Enter Your Email Address' className='text-[#9F9F9F] border-b-2 border-black pb-3' />
                <button className='pb-3 border-b-2 border-black'>SUBSCRIBE</button>
                </div>       
            </div>  
        </div> 
       
       <div className='mt-6 mx-[100px]'>
          2022 Meubel House. All rights reverved
       </div>

    </div>
  )
}

export default Footer