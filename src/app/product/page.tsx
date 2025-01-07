import React from 'react'
import { FaChevronRight } from 'react-icons/fa'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';

const page = () => {
  return (
    <div>
      <div className="flex flex-col sm:mx-4 md:mx-10 lg:mx-20">
        <div className='flex flex-col sm:flex-row gap-6'>
          <div className="flex items-center gap-4 font-normal text-base text-[#9F9F9F] py-4">
            <a href="#" className="hover:text-gray-700">Home</a>
            <FaChevronRight className="w-4 h-4 text-black" />
            <a href="#" className="hover:text-gray-700">Shop</a>
            <FaChevronRight className="w-4 h-4 text-black" />
          </div>
          <div className="flex items-center justify-between py-4 sm:border-l-2 sm:pl-4">
            <span className="text-black">Asgaard sofa</span>
          </div>
        </div>

        <div className='flex flex-col lg:flex-row mt-16 gap-10 lg:gap-20 mb-10'>
          <div className='flex flex-col sm:flex-row'>
            <div className='grid grid-cols-4 sm:grid-cols-1 gap-4 sm:gap-8 mr-4 sm:mr-8'>
              <div>
                <Image src="/Images/Sofa set 1.svg" width={76} height={80} alt='Sofa set' />
              </div>
              <div>
                <Image src="/Images/Sofa set 2.svg" width={76} height={80} alt='Sofa set' />
              </div>
              <div>
                <Image src="/Images/Sofa set 3.svg" width={76} height={80} alt='Sofa set' />
              </div>
              <div>
                <Image src="/Images/Sofa set  4.svg" width={76} height={80} alt='Sofa set' />
              </div>
            </div>
            <div>
              <Image src="/Images/Sofa set 5.svg" width={481} height={500} alt='Sofa set' className='w-full sm:w-auto' />
            </div>
          </div>
          <div className='sm:px-4 lg:px-0'>
            <div className=''>
              <h1 className='font-normal text-2xl sm:text-[42px]'>Asgaard sofa</h1>
              <p className='font-medium text-xl sm:text-2xl text-[#9F9F9F]'>Rs. 250,000.00</p>
              <div className='flex flex-col sm:flex-row gap-4 mt-4 mb-3'>
                <Image src="/icon/Star rating.svg" width={124} height={20} alt="star" />
                <span className='hidden sm:block border-l border-[#9F9F9F] h-8'></span>
                <p className='font-normal text-base text-[#9F9F9F]'>5 Customer Review</p>
              </div>
              <p className='sm:w-[424px] text-xs sm:text-[13px] mb-4'>
                Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
              </p>
              <div>
                Size
                <div className='grid grid-cols-3 w-32 mt-4'>
                  <span className='bg-[#FBEBB5] w-8 h-8 rounded-[5px] text-center font-normal pt-2 text-xs'>L</span>
                  <span className='bg-[#FAF4F4] w-8 h-8 rounded-[5px] text-center font-normal pt-2 text-xs'>XL</span>
                  <span className='bg-[#FAF4F4] w-8 h-8 rounded-[5px] text-center font-normal pt-2 text-xs'>XS</span>
                </div>
              </div>

              <div className='mt-4'>
                Color
                <div className='grid grid-cols-3 w-32 mt-4'>
                  <span className='bg-[#816DFA] w-8 h-8 rounded-full'></span>
                  <span className='bg-black w-8 h-8 rounded-full'></span>
                  <span className='bg-[#CDBA7B] w-8 h-8 rounded-full'></span>
                </div>
              </div>

              <div className='flex flex-col sm:flex-row gap-3 mt-8'>
                <div className="flex items-center border rounded-md overflow-hidden w-full sm:w-[123px]">
                  <button className="px-4 py-2 text-lg"> - </button>
                  <span className="px-4 py-2 text-lg">1</span>
                  <button className="px-4 py-2 text-lg"> + </button>
                </div>
                <Button className='rounded-2xl w-full sm:w-56'>Add To Cart</Button>
              </div>

            </div>

            <div className='text-base font-normal text-[#9F9F9F] mt-20 flex flex-col gap-2'>
              <p className='flex justify-between sm:gap-12'>SKU <span>: SS001 </span></p>
              <p className='flex justify-between sm:gap-3'>Category <span>: SS001 </span></p>
              <p className='flex justify-between sm:gap-12'>Tags <span>: Sofa, Chair, Home, Shop </span></p>
              <p className='flex justify-between sm:gap-12'>Share
                <span className='flex gap-6 text-black '>
                  :
                  <FaFacebook className='w-5 h-5 mt-1' />
                  <FaLinkedin className='w-5 h-5 mt-1' />
                  <FaTwitter className='w-5 h-5 mt-1' />
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='border-t border-b '>
        <div className='items-center justify-center font-normal text-[#9F9F9F] flex flex-col sm:flex-row gap-4 sm:gap-10 mt-8 text-base sm:text-2xl'>
          <h1 className='text-black'>Description</h1>
          <p>Additional Information</p>
          <p>Reviews [5]</p>
        </div>

        <div className='items-center justify-center font-normal text-[#9F9F9F] flex flex-col gap-6 sm:gap-10 mt-8 text-xs sm:text-base text-center'>
          <p>Embodying the raw, wayward spirit of rock 'n' roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
          <p>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-2 m-4 sm:m-10'>
          <div>
            <Image src='/Images/Sofa set 6.svg' width={605} height={348} alt='' className='w-full' />
          </div>
          <div>
            <Image src='/Images/Sofa set 7.svg' width={605} height={348} alt='' className='w-full' />
          </div>
        </div>
      </div>

      <div className='bg-white'>
        <div className="mx-4 sm:mx-10 lg:mx-20 flex flex-col gap-10">

          <div className='flex flex-col gap-3 font-medium text-center mt-10'>
            <h1 className='text-2xl sm:text-4xl'>Top Picks For You</h1>
            <p className='text-xs sm:text-base text-[#9F9F9F]'>Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</p>
          </div>

          <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3'>
            <div className='flex flex-col'>
              <Image
                src="/Images/Sofa 3.svg"
                width={287}
                height={287}
                alt='Sofa 3'
                className='w-full' />
              <div className='flex flex-col gap-3'>
                <h1 className='text-xs sm:text-base font-normal'>Trenton modular sofa_3</h1>
                <p className='text-base sm:text-2xl font-medium'>Rs 25,000.00</p>
              </div>
            </div>

            <div className='flex flex-col'>
              <Image
                src="\Images\Dining Table.svg"
                width={287}
                height={287}
                alt='Sofa 3'
                className='w-full' />
              <div className='flex flex-col gap-3'>
                <h1 className='text-xs sm:text-base font-normal'>Granite dining table with <br />dining chair</h1>
                <p className='text-base sm:text-2xl font-medium'>Rs 25,000.00</p>
              </div>
            </div>

            <div className='flex flex-col'>
              <Image
                src="/Images/Bar Table.svg"
                width={287}
                height={287}
                alt='Sofa 3'
                className='w-full' />
              <div className='flex flex-col gap-3'>
                <h1 className='text-xs sm:text-base font-normal'>Outdoor bar table and <br />stool</h1>
                <p className='text-base sm:text-2xl font-medium'>Rs 25,000.00</p>
              </div>
            </div>

            <div className='flex flex-col'>
              <Image
                src="/Images/Mirror.svg"
                width={287}
                height={287}
                alt='Sofa 3'
                className='w-full' />
              <div className='flex flex-col gap-3'>
                <h1 className='text-xs sm:text-base font-normal'>Plain console with teak <br />mirror</h1>
                <p className='text-base sm:text-2xl font-medium'>Rs 25,000.00</p>
              </div>
            </div>
          </div>

          <div className='text-center mt-10 mb-10'>
            <Link href="/shop" className='pb-3 border-b-2 border-black w-28'>View More</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page