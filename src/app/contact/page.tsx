import React from 'react'
import { FaChevronRight } from 'react-icons/fa'
 import Image from 'next/image'
const page = () => {
  return (
    <div>    
        
      <div className='bg-cover bg-center h-[320px]  flex flex-col '
    style={{backgroundImage: "url('/Images/Background 2.svg')"}}>
       <div className='flex flex-col  items-center justify-center mt-10'>
         <Image src="/icon/Logo.svg" width={77} height={77} alt='Logo'/>
          <h1 className='font-medium text-5xl'>Contact</h1>            
         <div className='flex gap-2 mt-4 text-base' >
           <p className='font-medium'>Home</p>
           <FaChevronRight  className='w-4 h-4 mt-1'/>             
           <p className='font-light'>contact</p>

              </div>
       </div>
        </div>

       <div className='mx-[100px] mt-24'>
        <div className='text-center'>
          <h1 className='font-semibold text-4xl'>Get In Touch With Us</h1>
          <p className='mt-2 text-[#9F9F9F] font-normal text-base'>For More Information About Our Product & Services. Please Feel Free To Drop <br /> An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
        </div>

        <div className='mt-16'>

        </div>

       </div>

</div>
  )
}

export default page