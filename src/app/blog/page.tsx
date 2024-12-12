import React from 'react'
import { FaChevronRight , FaTag } from 'react-icons/fa'
import Image from 'next/image'
import { FiCalendar } from 'react-icons/fi'
import Link from 'next/link'
const page = () => {
  return (
    <div>    
         <div className='bg-cover bg-center h-[320px]  flex flex-col '
    style={{backgroundImage: "url('/Images/Background 2.svg')"}}>
       <div className='flex flex-col  items-center justify-center mt-10'>
         <Image src="/icon/Logo.svg" width={77} height={77} alt='Logo'/>
          <h1 className='font-medium text-5xl'>Blog</h1>            
         <div className='flex gap-2 mt-4 text-base' >
           <p className='font-medium'>Home</p>
           <FaChevronRight  className='w-4 h-4 mt-1'/>             
           <p className='font-light'>Blog</p>

              </div>
       </div>
    </div>

    <div className='mt-20 lg:mx-20 flex gap-4'>
      <div className='flex flex-col gap-14'>
         <div className='flex flex-col '>
            <Image
              src="/Images/Blog1.svg"
              width={817}
              height={500}
              alt='blog'
              />
            <div className='flex gap-9 mt-3 text-[#9F9F9F] font-normal text-base'>
                 <div className='flex gap-3'>
                  <Image src="/icon/Profile.svg" width={16} height={17}    alt='/Blog'/>
                   <p>Admin</p>
                </div>
                <div className='flex gap-3 '>
                        <FiCalendar className='w-5 h-5'/>
                        <p>12th Oct 2022</p>
                </div>  
                <div className='flex gap-3 '>
                        <FaTag className='w-5 h-5'/>
                        <p>Wood</p>
                </div>  
             </div>

            <div className='flex flex-col mt-6 gap-2'>
                <h1 className='font-semibold text-2xl'>Going all-in with millennial design</h1>
               
                <p className='text-base font-normal text-[#9f9f9f] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et <br />dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin <br />aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis <br />in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit <br />ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
                <div className='w-24 pb-3 border-b-2 border-black '>
                   <Link href="#" className='font-medium text-base  '>Read More</Link>
                   </div> 

             </div>
        </div>  
       
        <div className='flex flex-col '>
            <Image
              src="/Images/Blog1.svg"
              width={817}
              height={500}
              alt='blog'
              />
            <div className='flex gap-9 mt-3 text-[#9F9F9F] font-normal text-base'>
                 <div className='flex gap-3'>
                  <Image src="/icon/Profile.svg" width={16} height={17}    alt='/Blog'/>
                   <p>Admin</p>
                </div>
                <div className='flex gap-3 '>
                        <FiCalendar className='w-5 h-5'/>
                        <p>12th Oct 2022</p>
                </div>  
                <div className='flex gap-3 '>
                        <FaTag className='w-5 h-5'/>
                        <p>Wood</p>
                </div>  
             </div>

            <div className='flex flex-col mt-6 gap-2'>
                <h1 className='font-semibold text-2xl'>Going all-in with millennial design</h1>
               
                <p className='text-base font-normal text-[#9f9f9f] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et <br />dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin <br />aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis <br />in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit <br />ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
                <div className='w-24 pb-3 border-b-2 border-black '>
                   <Link href="#" className='font-medium text-base  '>Read More</Link>
                   </div> 

             </div>
        </div>  

        <div className='flex flex-col '>
            <Image
              src="/Images/Blog1.svg"
              width={817}
              height={500}
              alt='blog'
              />
            <div className='flex gap-9 mt-3 text-[#9F9F9F] font-normal text-base'>
                 <div className='flex gap-3'>
                  <Image src="/icon/Profile.svg" width={16} height={17}    alt='/Blog'/>
                   <p>Admin</p>
                </div>
                <div className='flex gap-3 '>
                        <FiCalendar className='w-5 h-5'/>
                        <p>12th Oct 2022</p>
                </div>  
                <div className='flex gap-3 '>
                        <FaTag className='w-5 h-5'/>
                        <p>Wood</p>
                </div>  
             </div>

            <div className='flex flex-col mt-6 gap-2'>
                <h1 className='font-semibold text-2xl'>Going all-in with millennial design</h1>
               
                <p className='text-base font-normal text-[#9f9f9f] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et <br />dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin <br />aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis <br />in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit <br />ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
                <div className='w-24 pb-3 border-b-2 border-black '>
                   <Link href="#" className='font-medium text-base  '>Read More</Link>
                   </div> 

             </div>
        </div>  
    </div>

    <div className='flex flex-col gap-10 ml-4'>
    
     </div>
</div>
</div>
  )
}

export default page