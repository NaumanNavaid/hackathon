import { Button } from '@/components/ui/button'
import React from 'react'

const Instagram = () => {
  return (
    <div className="bg-cover bg-center h-screen flex flex-col items-center justify-center" style={{ backgroundImage: "url('/Images/Background.svg')" }} > 
        <div className=" bg-opacity-70 p-8 rounded-lg text-center"> 
            <h1 className="lg:text-6xl sm:text-4xl font-bold mb-2">Our Instagram</h1>
            <p className="text-xl mb-4">Follow our store on Instagram</p>
          <Button className="bg-[#FAF4F4] text-black rounded-full w-64 border-[#FAF4F4] shadow-md"> Follow Us </Button> 
        </div> 
  </div>

      )
}

export default Instagram