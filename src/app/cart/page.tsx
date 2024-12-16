import React from 'react'
import { FaChevronRight } from 'react-icons/fa'
import { TbTrashFilled } from "react-icons/tb";
import Image from 'next/image'
import { Button } from '@/components/ui/button';

const page = () => {
  return (
    <div>
        <div className='bg-cover bg-center h-[320px]  flex flex-col '
        style={{backgroundImage: "url('/Images/Background 2.svg')"}}>
           <div className='flex flex-col  items-center justify-center mt-10'>
             <Image src="/icon/Logo.svg" width={77} height={77} alt='Logo'/>
              <h1 className='font-medium text-5xl'>Cart</h1>            
             <div className='flex gap-2 mt-4 text-base' >
               <p className='font-medium'>Home</p>
               <FaChevronRight  className='w-4 h-4 mt-1'/>             
               <p className='font-light'>Cart</p>

                  </div>
           </div>
        </div>

         <div className='mt-20 flex sm:flex-col lg:flex-row lg:mx-20 lg:gap-6 sm:gap-20'>
         <div className='flex flex-col gap-12 text-base'>
 
         <div className='bg-[#FFF9E5] w-full md:w-[817px] flex flex-row justify-between font-medium px-36 sm:px-4 lg:px-36 py-4 sm:py-2 lg:py-4'>
            <div className='flex gap-28 sm:gap-4 lg:gap-28'>
              <h1>Product</h1>
              <h1>Price</h1>
            </div>
            <div className='flex gap-6 sm:gap-2 lg:gap-6'>
              <h1>Quantity</h1>
              <h1>Subtotal</h1>
            </div>
            </div>

 
  <div className='flex lg:gap-10 flex-row  lg:items-start'>
    <Image
      src="/Images/cart.svg" 
      width={106}
      height={106}
      alt='cart'
      className='lg:w-[106px] lg:h-[106px] sm:w-20'
    />
    <div className='font-normal  sm:mt-5 lg:mt-10 flex  flex-row sm:gap-4 lg:gap-20 w-full justify-between '>
      <div className='text-[#9F9F9F] flex sm:flex-col ml-4 lg:flex-row gap-14 sm:gap-2 lg:gap-14 lg:text-left'>
        <h1 className='sm:text-sm lg:text-base'>Asgard Sofa</h1>
        <p className='sm:text-sm lg:text-base'>Rs. 250,000.00</p>
      </div>
      <div className='flex sm:gap-4 lg:gap-12 '>
      <span className='w-8 h-8 rounded text-center border-2 p-1 border-[#9F9F9F]'>1</span>

      <div className='flex flex-col lg:flex-row font-normal lg:gap-10 sm:gap-4 items-center lg:mr-10'>

        <p className='sm:text-sm lg:text-base'>Rs. 250,000.00</p>
        <TbTrashFilled color='#FBEBB5' className='w-5 h-5'/>
      </div>     
      </div>         
    </div>
  </div>
  <div className='flex lg:gap-10 flex-row  lg:items-start'>
    <Image
      src="/Images/Chairs.svg" 
      width={106}
      height={106}
      alt='cart'
      className='lg:w-[106px] lg:h-[106px] sm:w-20'
    />
    <div className='font-normal  sm:mt-5 lg:mt-10 flex  flex-row sm:gap-4  w-full justify-between '>
      <div className='text-[#9F9F9F] flex sm:flex-col ml-4 lg:flex-row gap-14 sm:gap-2 lg:gap-14 lg:text-left'>
        <h1 className='sm:text-sm lg:text-base'>Asgard Sofa</h1>
        <p className='sm:text-sm lg:text-base'>Rs. 250,000.00</p>
      </div>
     <div className='flex sm:gap-4 lg:gap-12 '>
      <span className='w-8 h-8 rounded text-center border-2 p-1 border-[#9F9F9F]'>1</span>

      <div className='flex flex-col lg:flex-row font-normal lg:gap-10 sm:gap-4 items-center lg:mr-10'>

        <p className='sm:text-sm lg:text-base'>Rs. 250,000.00</p>
        <TbTrashFilled color='#FBEBB5' className='w-5 h-5'/>
      </div>     
      </div>         
    </div>
  </div>

</div>
           <div className='bg-[#FFF9E5] '>
             <div className='mt-4 flex flex-col gap-16 w-[340px] h-[390px] lg:text-center justify-center items-center'>
               <h1 className='font-semibold text-[32px] ml-10'>Cart Totals</h1>
               <div className='flex flex-col gap-6'>
               <div className='flex lg:mx-12 sm:mx-6 lg:justify-between sm:gap-14 '>
               <h1 className='font-normal'>Subtotal</h1>
                    <p className='font-medium text-[#9F9F9F]'  >Rs. 250,000.00</p>
                 </div>
                 <div className='flex lg:mx-12 sm:mx-6 lg:justify-between sm:gap-8 lg:gap-0'>
                    <h1 className='font-normal'>Subtotal</h1>
                    <p className='font-semibold text-[#B88E2F] text-xl mx-0'  >Rs. 250,000.00</p>
                 </div>

               </div>

               <Button className='w-56 h-14 lg:ml-16 sm:ml-5 rounded-2xl'>Check out</Button>
             </div> 

           </div>

            </div>    

    </div>
  )
}

export default page

