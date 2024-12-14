import React from 'react'
import { FaChevronRight , FaTag } from 'react-icons/fa'
import Image from 'next/image'
import { FiCalendar, FiSearch } from 'react-icons/fi'
import Link from 'next/link'
import Service from '../component/service'
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

    <div className='mt-20 lg:mx-20 flex lg:flex-row sm:flex-col gap-4'>
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
                  <Image src="/icon/profile.svg" width={16} height={17}    alt='/Blog'/>
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
               
                <p className='text-base font-normal text-[#9f9f9f] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
                <div className='w-24 pb-3 border-b-2 border-black '>
                   <Link href="#" className='font-medium text-base  '>Read More</Link>
                   </div> 

             </div>
        </div>  
       
        <div className='flex flex-col '>
            <Image
              src="/Images/Blog2.svg"
              width={817}
              height={500}
              alt='blog'
              />
            <div className='flex gap-9 mt-3 text-[#9F9F9F] font-normal text-base'>
                 <div className='flex gap-3'>
                  <Image src="/icon/profile.svg" width={16} height={17}    alt='/Blog'/>
                   <p>Admin</p>
                </div>
                <div className='flex gap-3 '>
                        <FiCalendar className='w-5 h-5'/>
                        <p>12th Oct 2022</p>
                </div>  
                <div className='flex gap-3 '>
                        <FaTag className='w-5 h-5'/>
                        <p>Handmade</p>
                </div>  
             </div>

            <div className='flex flex-col mt-6 gap-2'>
                <h1 className='font-semibold text-2xl'>Exploring new ways of decorating</h1>
               
                <p className='text-base font-normal text-[#9f9f9f] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
                <div className='w-24 pb-3 border-b-2 border-black '>
                   <Link href="#" className='font-medium text-base  '>Read More</Link>
                   </div> 

             </div>
        </div>  

        <div className='flex flex-col '>
            <Image
              src="/Images/Blog3.svg"
              width={817}
              height={500}
              alt='blog'
              />
            <div className='flex gap-9 mt-3 text-[#9F9F9F] font-normal text-base'>
                 <div className='flex gap-3'>
                  <Image src="/icon/profile.svg" width={16} height={17}    alt='/Blog'/>
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
                <h1 className='font-semibold text-2xl'>Handmade pieces that took time to make</h1>
               
                <p className='text-base font-normal text-[#9f9f9f] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
                <div className='w-24 pb-3 border-b-2 border-black '>
                   <Link href="#" className='font-medium text-base  '>Read More</Link>
                   </div> 

             </div>
        </div>  
    </div>

    <div className='flex flex-col gap-10 ml-4'>
       <div className='w-[300px] h-14 rounded-lg border border-black flex justify-between p-4'>
         <input type="text" className='border-none' />
                     <FiSearch className='w-6 h-6 hover:text-gray-600' />
         
       </div>

       <div className='ml-8'>
       
         <h1 className='font-medium text-2xl'>Categories</h1>
         <div className='flex flex-col text-base font-normal text-[#9f9f9f] mt-10 gap-6'>
            <p className='flex justify-between'> Crafts <span className='mr-6'>2</span></p>
            <p className='flex justify-between'> Design<span className='mr-6'>8</span></p>
            <p className='flex justify-between'> Handmade <span className='mr-6'>7</span></p>
            <p className='flex justify-between'> Interior<span className='mr-6'>1</span></p>
            <p className='flex justify-between'> Woods<span className='mr-6'>6</span></p>
   

         </div>
       </div>

       <div className='ml-8 mt-20'>
         <h1 className='font-medium text-2xl '>Recent Posts</h1>

      <div className='flex flex-col gap-4'>   
          <div className='flex flex-col gap-4 mt-6'>
           <div className='flex gap-4'>
            <Image
             src="/Images/Blog4.svg" 
             width={80}
             height={80}
             alt='blg4'
            />
            <div className='flex flex-col gap-2 mt-2'>
               <h1 className='text-sm'>Going all-in with <br />millennial design</h1>
               <p className='text-xs  text-[#9f9f9f]'>03 Aug 2022</p>
            </div>
            </div>           

          </div>

          <div className='flex flex-col gap-4 mt-6'>
           <div className='flex gap-4'>
            <Image
             src="/Images/Blog5.svg" 
             width={80}
             height={80}
             alt='blg4'
            />
            <div className='flex flex-col gap-2 mt-2'>
               <h1 className='text-sm'>Exploring new ways <br />of 
                   decorating</h1>
               <p className='text-xs  text-[#9f9f9f]'>03 Aug 2022</p>
            </div>
            </div>           

          </div>
 
          <div className='flex flex-col gap-4 mt-6'>
           <div className='flex gap-4'>
            <Image
             src="/Images/Blog6.svg" 
             width={80}
             height={80}
             alt='blg4'
            />
            <div className='flex flex-col gap-2 mt-2'>
               <h1 className='text-sm'>Handmade pieces <br /> that took time to make</h1>
               <p className='text-xs  text-[#9f9f9f]'>03 Aug 2022</p>
            </div>
            </div>           

          </div>

          <div className='flex flex-col gap-4 mt-6'>
           <div className='flex gap-4'>
            <Image
             src="/Images/Blog7.svg" 
             width={80}
             height={80}
             alt='blg4'
            />
            <div className='flex flex-col gap-2 mt-2'>
               <h1 className='text-sm'>Modern home in <br /> Milan</h1>
               <p className='text-xs  text-[#9f9f9f]'>03 Aug 2022</p>
            </div>
            </div>           

          </div>
 
          <div className='flex flex-col gap-4 mt-6'>
           <div className='flex gap-4'>
            <Image
             src="/Images/Blog8.svg" 
             width={80}
             height={80}
             alt='blg4'
            />
            <div className='flex flex-col gap-2 mt-2'>
               <h1 className='text-sm'>Colorful  office <br /> redesign</h1>
               <p className='text-xs  text-[#9f9f9f]'>03 Aug 2022</p>
            </div>
            </div>           

          </div>
          </div> 


       </div>
       <div
       >

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