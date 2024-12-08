import React from 'react'
import { FaChevronRight, FaClock, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'
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

       
        <div className="p-6 border rounded-lg shadow-md"> <h3 className="text-2xl font-bold mb-4">Contact Information</h3> <div className="mb-4 flex items-center"> <FaMapMarkerAlt className="text-gray-700 mr-2" /> <div> <p><strong>Address:</strong></p> <p>236 5th SE Avenue, New York NY10000, United States</p> </div> </div> <div className="mb-4 flex items-center"> <FaPhoneAlt className="text-gray-700 mr-2" /> <div> <p><strong>Phone:</strong></p> <p>Mobile: + (84) 546-6789</p> <p>Hotline: + (84) 456-6789</p> </div> </div> <div className="mb-4 flex items-center"> <FaClock className="text-gray-700 mr-2" /> <div> <p><strong>Working Times:</strong></p> <p>Monday - Friday: 9:00 - 22:00</p> <p>Saturday - Sunday: 9:00 - 21:00</p>
        </div>

       </div>

</div>
  )
}

export default page