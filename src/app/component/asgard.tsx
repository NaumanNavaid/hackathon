import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Asgard = () => {
  return (
    <div className="flex lg:flex-row sm:flex-col items-center justify-center h-[660px] bg-[#FFF9E5]">
      <div className="relative -left-12">
        <Image
          src="/Images/Asgard Sofa.svg"
          width={947}
          height={639}
          alt="Asgard Sofa"
        />
      </div>
      <div className="mx-6 text-center">
        <h2 className="text-black">New Arrivals</h2>
        <h1 className="text-black text-5xl font-bold ">Asgard sofa</h1>
        <Button className='rounded-[0px] mt-8 w-56'>
          <Link href="/product" >Order Now</Link></Button>
      </div>
    </div>
  );
};

export default Asgard;