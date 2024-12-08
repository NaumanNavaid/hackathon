import React from 'react'
import Image from 'next/image'
import Link from 'next/link'



const toppicks = () => {
  return (
   <div className='bg-white'>
     <div className=" mx-20 flex flex-col gap-10 ">
      
      <div className='flex flex-col gap-3 font-medium text-center mt-10'>
          <h1 className='text-4xl'>Top Picks For You</h1>
          <p className='text-base text-[#9F9F9F]'>Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</p>
        </div>


        <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-3'>

            <div className='flex flex-col'>
              <Image
                 src="/Images/Sofa 3.svg" 
                 width={287} 
                 height={287} 
                 alt='Sofa 3' />  
               <div className='flex flex-col gap-3'>
                 <h1 className='text-base font-normal'>Trenton modular sofa_3</h1>
                 <p className='font-medium text-2xl'>Rs 25,000.00</p>
               </div>
            </div>

           <div className='flex flex-col'>
              <Image
                 src="\Images\Dining Table.svg" 
                 width={287} 
                 height={287} 
                 alt='Sofa 3' />  
               <div className='flex flex-col gap-3'>
                 <h1 className='text-base font-normal'>Granite dining table with <br />dining chair</h1>
                 <p className='font-medium text-2xl'>Rs 25,000.00</p>
               </div>
            </div>

            <div className='flex flex-col'>
              <Image
                 src="/Images/Bar Table.svg" 
                 width={287} 
                 height={287} 
                 alt='Sofa 3' />  
               <div className='flex flex-col gap-3'>
                 <h1 className='text-base font-normal'>Outdoor bar table and <br />stool</h1>
                 <p className='font-medium text-2xl'>Rs 25,000.00</p>
               </div>
            </div>

            <div className='flex flex-col'>
              <Image
                 src="/Images/Mirror.svg" 
                 width={287} 
                 height={287} 
                 alt='Sofa 3' />  
               <div className='flex flex-col gap-3'>
                 <h1 className='text-base font-normal'>Plain console with teak <br />mirror</h1>
                 <p className='font-medium text-2xl'>Rs 25,000.00</p>
               </div>
            </div>



          </div>
        
        <div className='text-center mt-10 mb-10'>
          <Link href="/shop" className='pb-3 border-b-2 border-black w-28'>View More</Link>
        </div>
         
          
       </div>
   </div>
   )

}

export default toppicks