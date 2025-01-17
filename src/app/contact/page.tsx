import React from 'react';
import { FaChevronRight, FaClock, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import Image from 'next/image';
import Service from '../component/service';
import { Button } from '@/components/ui/button';


const page = () => {
  return (
    <div>
      <div className='bg-cover bg-center h-[320px] flex flex-col' style={{ backgroundImage: "url('/Images/Background 2.svg')" }}>
        <div className='flex flex-col items-center justify-center mt-10'>
          <Image src="/icon/Logo.svg" width={77} height={77} alt='Logo' />
          <h1 className='font-medium text-5xl'>Contact</h1>
          <div className='flex gap-2 mt-4 text-base'>
            <p className='font-medium'>Home</p>
            <FaChevronRight className='w-4 h-4 mt-1' />
            <p className='font-light'>Contact</p>
          </div>
        </div>
      </div>

      <div className='md:mx-[100px] mt-24'>
        <div className='text-center'>
          <h1 className='font-semibold text-4xl'>Get In Touch With Us</h1>
          <p className='mt-2 text-[#9F9F9F] font-normal text-base'>
          For More Information About Our Product & Services. Please Feel Free To Drop Us An <br />
          Email. Our Staff Always Be There To Help You Out. Do Not Hesitate! </p>        
        </div>
        <div className=" lg:p-6   mt-12 grid gap-6 md:grid-cols-2">
          <div className='mt-10'>

            <div className="mb-4 flex ">
              <FaMapMarkerAlt className="text-gray-700 mr-2" />
              <div>
                <p><strong>Address</strong></p>
                <p>236 5th SE Avenue, New York NY10000, United States</p>
              </div>
            </div>

            <div className="mb-4 flex ">
              <FaPhoneAlt className="text-gray-700 mr-2" />
              <div>
                <p><strong>Phone:</strong></p>
                <p>Mobile: + (84) 546-6789</p>
                <p>Hotline: + (84) 456-6789</p>
              </div>
            </div>

            <div className="mb-4 flex ">
              <FaClock className="text-gray-700 mr-2" />
              <div>
                <p><strong>Working Times:</strong></p>
                <p>Monday - Friday: 9:00 - 22:00</p>
                <p>Saturday - Sunday: 9:00 - 21:00</p>
              </div>
            </div>
          </div>

          <div className='flex flex-col gap-8 lg:p-6 sm:mr-6  sm:mx-5 sm:p-0'>
            <div>
                <p className='font-medium text-base'>Your name</p>
                <input
              type="text"
              placeholder='Abc'         
              className="block lg:w-[423px] sm:w-64 px-3 py-2 mt-4 h-20 text-sm border rounded-md shadow-sm focus:ring-black focus:border-black border-gray-300"
       
            />
            </div>
            <div>
                <p className='font-medium text-base'>email address</p>
                <input
              type="text"
              placeholder='Abc@def.com'
              className="block lg:w-[423px] sm:w-64 px-3 py-2 mt-4 h-20 text-sm border rounded-md shadow-sm focus:ring-black focus:border-black border-gray-300"
       
            />
            </div>
            <div>
                <p className='font-medium text-base'>Subject</p>
                <input
              type="text"
              placeholder='This is an optional'         
              className="block lg:w-[423px] sm:w-64 px-3 py-2 mt-4 h-20 text-sm border rounded-md shadow-sm focus:ring-black focus:border-black border-gray-300"
       
            />
            </div>
            <div>
                <p className='font-medium text-base'>Message</p>
                <input
              type="text"
              placeholder='Hi! i’d like to ask about'         
              className="block lg:w-[423px] sm:w-64 px-3 py-2 mt-4 h-20 text-sm border rounded-md shadow-sm focus:ring-black focus:border-black border-gray-300"
       
            />
            </div>

           
             <Button className='w-[215px] rounded-2xl'>Sumbit </Button>
       
         </div>

        </div>
      </div>
     <Service/>
    </div>
  );
}

export default page;

