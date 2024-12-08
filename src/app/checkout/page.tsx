import React from 'react'
import Image from 'next/image'
import { FaChevronRight, FaTimes } from 'react-icons/fa'
import { Button } from '@/components/ui/button'

const page = () => {
  return (
   <div>
     <div className='bg-cover bg-center h-[320px]  flex flex-col '
       style={{backgroundImage: "url('/Images/Background 2.svg')"}}>
          <div className='flex flex-col  items-center justify-center mt-10'>
            <Image src="/icon/Logo.svg" width={77} height={77} alt='Logo'/>
             <h1 className='font-medium text-5xl'>Checkout</h1>            
            <div className='flex gap-2 mt-4 text-base' >
              <p className='font-medium'>Home</p>
              <FaChevronRight  className='w-4 h-4 mt-1'/>             
              <p className='font-light'>Checkout</p>
            </div>
          </div>
        </div>

        <div className='m-20'>
       <div className='grid lg:grid-cols-2 gap-4 lg:grid-rows-1'>
         <div className='flex flex-col gap-8 p-6'>
            <h1 className='font-semibold text-4xl'>Billing details</h1>

            <div>
                <p className='font-medium text-base'>Company Name (Optional)</p>
                <input
              type="text"
              className="block w-full md:w-[423px] px-3 py-2 mt-4 h-20 text-sm border rounded-md shadow-sm focus:ring-black focus:border-black border-gray-300"
            />
            </div>
            <div>
                <p className='font-medium text-base'>Country / Region</p>
                <input
              type="text"
              placeholder='Sri Lanka'
              className="block w-full md:w-[423px] px-3 py-2 mt-4 h-20 text-sm border rounded-md shadow-sm focus:ring-black focus:border-black border-gray-300"
            />
            </div>
            <div>
                <p className='font-medium text-base'>Street address</p>
                <input
              type="text"
              className="block w-full md:w-[423px] px-3 py-2 mt-4 h-20 text-sm border rounded-md shadow-sm focus:ring-black focus:border-black border-gray-300"
            />
            </div>

            <div>
                <p className='font-medium text-base'>Town / City</p>
                <input
              type="text"
              className="block w-full md:w-[423px] px-3 py-2 mt-4 h-20 text-sm border rounded-md shadow-sm focus:ring-black focus:border-black border-gray-300"
            />
            </div>
            <div>
                <p className='font-medium text-base'>Province</p>
                <input
              type="text"
               placeholder='Western Province'
              className="block w-full md:w-[423px] px-3 py-2 mt-4 h-20 text-sm border rounded-md shadow-sm focus:ring-black focus:border-black border-gray-300"
            />
            </div>
            <div>
                <p className='font-medium text-base'>ZIP code</p>
                <input
              type="text"
              className="block w-full md:w-[423px] px-3 py-2 mt-4 h-20 text-sm border rounded-md shadow-sm focus:ring-black focus:border-black border-gray-300"
            />
            </div>
            <div>
                <p className='font-medium text-base'>Phone</p>
                <input
              type="text"
              className="block w-full md:w-[423px] px-3 py-2 mt-4 h-20 text-sm border rounded-md shadow-sm focus:ring-black focus:border-black border-gray-300"
            />
            </div>
           
            <div>
                <p className='font-medium text-base'>Email address</p>
                 <input
              type="text"
              className="block w-full md:w-[423px] px-3 py-2 mt-4 h-20 text-sm border rounded-md shadow-sm focus:ring-black focus:border-black border-gray-300"
            />
            </div>

            <div>
                <p className='font-medium text-base'></p>
                <input
              type="text"
              placeholder='Additional information'
              className="block w-full md:w-[423px] px-3 py-2 mt-4 h-20 text-sm border rounded-md shadow-sm focus:ring-black focus:border-black border-gray-300"
            />
            </div>

         </div>
      <div>
         <div className='flex justify-between pb-3 pt-6 border-b'>
           <div className='flex flex-col gap-4'>
              <h1 className='font-medium text-2xl'>Product</h1>
               <p className='flex gap-1 font-normal text-base text-[#9F9F9F]'>Asgaard sofa <span className='text-black flex'><FaTimes  className='pt-1 mt-[2px] text-black'/> 1</span> </p>
               <p>Subtotal</p>
               <p> Total</p>
           </div>
           <div className='flex flex-col gap-4'>
              <h1 className='font-medium text-2xl'>Subtotal</h1>
               <p className='flex gap-1 font-normal text-base'>Rs. 250,000.00 </p>
               <p>Rs. 250,000.00</p>
               <p className='font-bold text-2xl text-[#B88E2F]'> Rs. 250,000.00</p>
           </div>
           <div>
          
           </div>
         </div>
         <div className="bg-white rounded-md shadow-md w-full max-w-md p-6">
      
        <div className="space-y-4">
          <div className="flex items-center">
            <input
              type="radio"
              name="payment-method"
              className="mr-2 text-black focus:ring-black"
            />
            <div className="flex-1 font-normal text-base text-[#9F9F9F]">              
              <span className="font-normal text-base text-[#9F9F9F]">Direct Bank Transfer</span>
            </div>
          </div>
          <p className="font-normal text-base text-[#9F9F9F]">
            Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
          </p>

          <div className="flex items-center">
            <input
              type="radio"
              name="payment-method"
              className="mr-2 t"
            />
            <div className="flex-1 bborder-[#9F9F9F] pl-4">
              <span className="font-normal text-base text-[#9F9F9F]">Direct Bank Transfer</span>
            </div>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              name="payment-method"
            />
            <div className=" border-[#9F9F9F] pl-4">
              <span className="font-normal text-base text-[#9F9F9F]">Cash On Delivery</span>
            </div>
          </div>
        </div>
        <p className="font-normal text-base text-[#9F9F9F] mt-4">
          Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our{' '}
          <a href="/" className="text-black hover:underline">
            privacy policy
          </a>
          .
        </p>   
        <div className='flex justify-center items-center mt-6 '>
        <Button className='w-[215px] rounded-2xl'>Place order</Button>
        </div>
      </div>
     
         </div>
     
         <div>
       
         </div>
       </div>
    </div>
   
     
     
   </div>
  )
}

export default page