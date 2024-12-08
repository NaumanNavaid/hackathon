import React from 'react';
import { FaChevronRight, FaClock, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import Image from 'next/image';
import Service from '../component/service';

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

      <div className='mx-[100px] mt-24'>
        <div className='text-center'>
          <h1 className='font-semibold text-4xl'>Get In Touch With Us</h1>
          <p className='mt-2 text-[#9F9F9F] font-normal text-base'>
            For more information about our product & services. Please feel free to drop an email. Our staff is always there to help you out. Do not hesitate!
          </p>
        </div>

        <div className="p-6 border rounded-lg shadow-md mt-12 grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-bold mb-4">Contact Information</h3>

            <div className="mb-4 flex items-center">
              <FaMapMarkerAlt className="text-gray-700 mr-2" />
              <div>
                <p><strong>Address:</strong></p>
                <p>236 5th SE Avenue, New York NY10000, United States</p>
              </div>
            </div>

            <div className="mb-4 flex items-center">
              <FaPhoneAlt className="text-gray-700 mr-2" />
              <div>
                <p><strong>Phone:</strong></p>
                <p>Mobile: + (84) 546-6789</p>
                <p>Hotline: + (84) 456-6789</p>
              </div>
            </div>

            <div className="mb-4 flex items-center">
              <FaClock className="text-gray-700 mr-2" />
              <div>
                <p><strong>Working Times:</strong></p>
                <p>Monday - Friday: 9:00 - 22:00</p>
                <p>Saturday - Sunday: 9:00 - 21:00</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">Send Us a Message</h3>
            <form>
              <label className="block mb-2">
                <span className="text-gray-700">Username or email address</span>
                <input type="email" className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600" required />
              </label>
              <label className="block mb-2">
                <span className="text-gray-700">Password</span>
                <input type="password" className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600" required />
              </label>
              <div className="mb-4">
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2 text-gray-700">Remember me</span>
                </label>
              </div>
              <button type="submit" className="w-full bg-black text-white py-2 rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50">Log In</button>
              <div className="text-right mt-2">
                <a href="#" className="text-sm text-gray-600 hover:text-gray-800">Lost Your Password?</a>
              </div>
            </form>
          </div>
        </div>
      </div>
     <Service/>
    </div>
  );
}

export default page;

