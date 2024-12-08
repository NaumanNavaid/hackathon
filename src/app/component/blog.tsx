import React from 'react'
import Image from 'next/image'

import { FiCalendar,FiClock  } from "react-icons/fi";
import Link from 'next/link';

const blog = () => {
  return (
    <div className="my-10 mx-20 flex flex-col gap-10">
          
      <div className='flex flex-col gap-3 font-medium text-center '>
          <h1 className='text-4xl'>Our Blogs</h1>
          <p className='text-base text-[#9F9F9F]'>Find a bright ideal to suit your taste with our great selection</p>
        </div>

        <div className='grid lg:grid-cols-3 gap-8'>

         <div className='flex flex-col'> 
             <Image
              src="/Images/Blog 1.svg" 
              width={393} 
              height={393} 
              alt='Sofa 3' />  
              <div className='flex flex-col gap-3 mt-5 text-center'>
                  <h1 className='text-xl font-normal'>Going all-in with millennial design</h1>
                 <div className='w-32 mx-28'>
                   <Link href="#" className='font-medium text-2xl pb-3 border-b-2 border-black '>Read More</Link>
                   </div> 
                 <div className='flex gap-5 items-center justify-center mt-3 font-light text-base'>
                     <div className='flex gap-3'>
                         <FiClock className='w-[18px] h-[18px] mt-1 '/>
                         <p>5 min</p>
                       </div>
                       <div className='flex gap-3 '>
                        <FiCalendar className='w-5 h-5'/>
                        <p>12th Oct 2022</p>
                        </div>
                    </div>
                </div>
           </div>

         <div className='flex flex-col'>
             <Image
             src="\Images\Blog 2.svg" 
             width={393} 
             height={393} 
             alt='Sofa 3' />  
              <div className='flex flex-col gap-3 mt-5 text-center'>
                  <h1 className='text-xl font-normal'>Going all-in with millennial design</h1>
                 <div className='w-32 mx-28'>
                   <Link href="#" className='font-medium text-2xl pb-3 border-b-2 border-black '>Read More</Link>
                   </div> 
                 <div className='flex gap-5 items-center justify-center mt-3 font-light text-base'>
                     <div className='flex gap-3'>
                         <FiClock className='w-[18px] h-[18px] mt-1 '/>
                         <p>5 min</p>
                       </div>
                       <div className='flex gap-3 '>
                        <FiCalendar className='w-5 h-5'/>
                        <p>12th Oct 2022</p>
                        </div>
                    </div>
                </div>
            </div>

         <div className='flex flex-col'>
              <Image
                src="/Images/Blog 3.svg" 
                width={393} 
                height={393} 
                alt='Sofa 3' />  
              <div className='flex flex-col gap-3 mt-5 text-center'>
                  <h1 className='text-xl font-normal'>Going all-in with millennial design</h1>
                 <div className='w-32 mx-28'>
                   <Link href="#" className='font-medium text-2xl pb-3 border-b-2 border-black '>Read More</Link>
                   </div> 
                 <div className='flex gap-5 items-center justify-center mt-3 font-light text-base'>
                     <div className='flex gap-3'>
                         <FiClock className='w-[18px] h-[18px] mt-1 '/>
                         <p>5 min</p>
                       </div>
                       <div className='flex gap-3 '>
                        <FiCalendar className='w-5 h-5'/>
                        <p>12th Oct 2022</p>
                        </div>
                    </div>
                </div>
           </div>




        </div>


    </div>
  )
}

export default blog