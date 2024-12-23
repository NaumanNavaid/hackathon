import React from 'react'
import Image from 'next/image'
import { FaChevronRight } from 'react-icons/fa'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Service from '../component/service'


const page = () => {
  return (
    <div>
     <div className='bg- bg-center h-[320px]  flex flex-col '
       style={{backgroundImage: "url('/Images/Background 2.svg')"}}>
          <div className='flex flex-col  items-center justify-center mt-10'>
            <Image src="/icon/Logo.svg" width={77} height={77} alt='Logo'/>
             <h1 className='font-medium text-5xl'>My Account</h1>            
            <div className='flex gap-2 mt-4 text-base' >
              <p className='font-medium'>Home</p>
              <FaChevronRight  className='w-4 h-4 mt-1'/>             
              <p className='font-light'>My Account</p>

                 </div>
          </div>
       </div>

    <div className='m-20'>
       <div className='grid lg:grid-cols-2 gap-4 lg:grid-rows-1'>
         <div className='flex flex-col gap-8 p-6'>
            <h1 className='font-semibold text-4xl'>Log In</h1>
            <div>
                <p className='font-medium text-base'>Username or email address</p>
                <input
              type="text"
          
              className="block lg:w-[423px] sm:w-80  px-3 py-2 mt-4 h-20 text-sm border rounded-md shadow-sm focus:ring-black focus:border-black border-gray-300"
       
            />
            </div>
            <div>
                <p className='font-medium text-base'>Password</p>
                <input
              type="text"
          
              className="block lg:w-[423px] sm:w-80  px-3 py-2 mt-4 h-20 text-sm border rounded-md shadow-sm focus:ring-black focus:border-black border-gray-300"
       
            />
            </div>
            <div className='flex items-center'>
                <input 
                type="text" 
                className='w-8 h-7 rounded-md border  border-gray-300'
                />
                <p className='ml-4'>Remember me</p>
            </div>
            <div className='flex gap-8 '>
             <Button className='w-[215px] rounded-2xl'>Log in</Button>
             <Link href="#" className='underline decoration-black pt-2'>Lost Your Password?</Link>
            </div>
         </div>

         <div className='flex flex-col gap-8 p-6'>
            <h1 className='font-semibold text-4xl'>Register</h1>
            <div>
                <p className='font-medium text-base'>Email address</p>
                <input
              type="text"
          
              className="block lg:w-[423px] sm:w-80  px-3 py-2 mt-4 h-20 text-sm border rounded-md shadow-sm focus:ring-black focus:border-black border-gray-300"
       
            />
            </div>
          <div className='flex flex-col gap-5 font-light text-base'>
            <p>A link to set a new password will be sent to your email <br />address.</p>
            <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our 
                <br /><span className='font-semibold'>privacy policy.</span></p>
          </div>
            <div className='flex gap-8 '>
             <Button className='w-[215px] rounded-2xl'>Register</Button>
           
            </div>
         </div>

       </div>
    </div>
   <Service/>
    </div>
  )
}

export default page