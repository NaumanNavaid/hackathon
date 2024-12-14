
import React from 'react'
import Image from 'next/image'
import Service from '../component/service'
import { FaChevronRight } from 'react-icons/fa'


const page = () => {
  return (
    <div>
       <div className='bg-cover bg-center h-[320px]  flex flex-col '
       style={{backgroundImage: "url('/Images/Background 2.svg')"}}>
          <div className='flex flex-col  items-center justify-center mt-10'>
            <Image src="/icon/Logo.svg" width={77} height={77} alt='Logo'/>
             <h1 className='font-medium text-5xl'>Shop</h1>            
            <div className='flex gap-2 mt-4 text-base' >
              <p className='font-medium'>Home</p>
              <FaChevronRight  className='w-4 h-4 mt-1'/>             
              <p className='font-light'>Shop</p>

                 </div>
          </div>
       </div>
       
        <div className='bg-[#FAF4F4] mt-6 md:mt-10'>
        <div className='container mx-auto px-4 md:px-8 lg:px-20'>
          <div className='flex flex-col md:flex-row  justify-between items-center py-6'>
            <div className='flex flex-wrap items-center gap-4 md:gap-6 w-full md:w-auto'>

              <button className='flex items-center gap-2'>
               <Image src="/icon/Filter.svg" width={25} height={25} alt='filter' />
                <span className='font-normal text-base'>Filter</span>
              </button>

              {/* View Mode Toggles */}
              <div className='flex items-center gap-3'>
                 <Image src="/icon/Dots.svg" width={18} height={18} alt='Dots' />
                <Image src="/icon/View list.svg" width={24} height={24} alt='View list' />
              </div>

              {/* Divider */}
              <span className='hidden md:block border-l-2 h-8 border-[#9F9F9F] mx-2'></span>

              {/* Results Count */}
              <p className='text-sm text-gray-600'>
                Showing 1–16 of 32 results
              </p>
            </div>

      
            <div className='flex flex-col md:flex-row items-center gap-6 mt-4 md:mt-0 '>
             <div className='flex items-center gap-2 '>
                <span className='text-xl font-normal'>Show</span>
                <span className="w-14 h-14  bg-white text-[#9F9F9F] p-4 font-normal text-xl">  16</span>
              </div>
            <div className='flex  gap-4'>
                <span className='text-xl font-normal w-20 pt-4'>Sort by</span>
                <span className="h-14 w-48  bg-white  text-[#9F9F9F] p-4 font-normal text-xl"> Default</span>
              </div>

            </div>
          </div>
        </div>
         </div>
      
      <div className='grid lg:grid-cols-4 lg:grid-rows-4 mx-20  gap-4 md:grid-cols-2 md:grid-rows-8'>
          
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

            <div className='flex flex-col'>
              <Image
                 src="/Images/Table 1.svg" 
                 width={287} 
                 height={287} 
                 alt='Sofa 3' />  
               <div className='flex flex-col gap-3'>
                 <h1 className='text-base font-normal'>Grain coffee table</h1>
                 <p className='font-medium text-2xl'>Rs. 15,000.00</p>
               </div>
            </div>

            <div className='flex flex-col'>
              <Image
                 src="\Images\Table 2.svg" 
                 width={287} 
                 height={287} 
                 alt='Sofa 3' />  
               <div className='flex flex-col gap-3'>
                 <h1 className='text-base font-normal'>Kent coffee table</h1>
                 <p className='font-medium text-2xl'> Rs. 225,000.00</p>
               </div>
            </div>

            <div className='flex flex-col'>
              <Image
                 src="/Images/Table 3.svg" 
                 width={287} 
                 height={287} 
                 alt='Sofa 3' />  
               <div className='flex flex-col gap-3'>
                 <h1 className='text-base font-normal'>Round coffee table_color 2</h1>
                 <p className='font-medium text-2xl'>Rs. 251,000.00</p>
               </div>
            </div>

            <div className='flex flex-col'>
              <Image
                 src="/Images/Table 4.svg" 
                 width={287} 
                 height={287} 
                 alt='Sofa 3' />  
               <div className='flex flex-col gap-3'>
                 <h1 className='text-base font-normal'>Reclaimed teak coffee table</h1>
                 <p className='font-medium text-2xl'>Rs. 25,200.00</p>
               </div>
            </div>

            <div className='flex flex-col'>
              <Image
                 src="/Images/Table 5.svg" 
                 width={287} 
                 height={287} 
                 alt='Sofa 3' />  
               <div className='flex flex-col gap-3'>
                 <h1 className='text-base font-normal'>Plain console</h1>
                 <p className='font-medium text-2xl'>Rs. 258,200.00</p>
               </div>
            </div>

            <div className='flex flex-col'>
              <Image
                 src="\Images\Sideboard 1.svg" 
                 width={287} 
                 height={287} 
                 alt='Sofa 3' />  
               <div className='flex flex-col gap-3'>
                 <h1 className='text-base font-normal'>Reclaimed teak Sideboard</h1>
                 <p className='font-medium text-2xl'> Rs. 20,000.00</p>
               </div>
            </div>

            <div className='flex flex-col'>
              <Image
                 src="/Images/Chairs.svg" 
                 width={287} 
                 height={287} 
                 alt='Sofa 3' />  
               <div className='flex flex-col gap-3'>
                 <h1 className='text-base font-normal'>SJP_0825</h1>
                 <p className='font-medium text-2xl'> Rs. 200,000.00</p>
               </div>
            </div>

            <div className='flex flex-col'>
              <Image
                 src="/Images/Chairs 2.svg" 
                 width={287} 
                 height={287} 
                 alt='Sofa 3' />  
               <div className='flex flex-col gap-3'>
                 <h1 className='text-base font-normal'>Bella chair and table</h1>
                 <p className='font-medium text-2xl'>Rs. 100,000.00</p>
               </div>
            </div>        
            
            <div className='flex flex-col'>
              <Image
                 src="/Images/Chairs 3.svg" 
                 width={287} 
                 height={287} 
                 alt='Sofa 3' />  
               <div className='flex flex-col gap-3'>
                 <h1 className='text-base font-normal'>Granite square side table</h1>
                 <p className='font-medium text-2xl'> Rs. 258,800.00</p>
               </div>
            </div>

            <div className='flex flex-col'>
              <Image
                 src="\Images\Chairs 4.svg" 
                 width={287} 
                 height={287} 
                 alt='Sofa 3' />  
               <div className='flex flex-col gap-3'>
                 <h1 className='text-base font-normal'>Asgaard Sofa</h1>
                 <p className='font-medium text-2xl'> Rs. 250,000.00</p>
               </div>
            </div>

            <div className='flex flex-col'>
              <Image
                 src="/Images/Chairs 5.svg" 
                 width={287} 
                 height={287} 
                 alt='Sofa 3' />  
               <div className='flex flex-col gap-3'>
                 <h1 className='text-base font-normal'>Maya sofa three seater   </h1>
                 <p className='font-medium text-2xl'>Rs. 115,000.00</p>
               </div>
            </div>

            <div className='flex flex-col'>
              <Image
                 src="/Images/Chairs 6.svg" 
                 width={287} 
                 height={287} 
                 alt='Sofa 3' />  
               <div className='flex flex-col gap-3'>
                 <h1 className='text-base font-normal'>Outdoor sofa set</h1>
                 <p className='font-medium text-2xl'>Rs. 244,000.00</p>
               </div>
            </div>







 

      </div>

      <div className='flex gap-10 items-center justify-center mt-20'>
         <span className='bg-[#FBEBB5] w-16 h-16 rounded-[10px] text-center pt-4 font-normal text-xl'>1</span>
         <span className='bg-[#FFF9E5] w-16 h-16 rounded-[10px] text-center pt-4 font-normal text-xl'>2</span>
         <span className='bg-[#FFF9E5] w-16 h-16 rounded-[10px] text-center pt-4 font-normal text-xl'>3</span>
         <span className='bg-[#FFF9E5] w-24 h-16 rounded-[10px] text-center pt-4 font-normal text-xl'>Next</span>

      </div>

      <Service/>
    </div>
  )
}

export default page