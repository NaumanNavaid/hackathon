import { client } from '@/sanity/lib/client'
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

// Get product data by ID
const getproduct = async (id: string) => {
    const query = `*[_type == "product" && _id == "${id}"]{
        _id,
        name,
        imagePath,
        price,
        description,
        discountPercentage,
        isFeaturedProduct,
        stockLevel,
        category
    }[0]`
    const data = await client.fetch(query)
    console.log(data)
    return data
}

// Next.js dynamically loads route parameters automatically
const page = async ({ params }: { params: { id: string } }) => {
    const { id } = params // Destructure id from params directly
    const product = await getproduct(id) // Fetch product by ID
    console.log(product)

    return (
        <div className='grid md:grid-cols-2 gap-10 md:mx-10 sm:mx-4 mt-10'>
            <div className='items-center justify-center flex'>
                <Image
                    src={product.imagePath}
                    alt={product.name}
                    width={300} // Provide width and height for aspect ratio calculation
                    height={300}
                    className=" md:w-[500px] md:h-[500px] rounded-md"
                />
            </div>
            <div className='flex flex-col gap-3 '>
                <p className='font-bold text-3xl'>{product.name}</p>
                <div className='flex gap-3 m-4 text-xl font-semibold'>
                    <p className=" text-green-600 ">${product.price}</p>
                    {product.discountPercentage > 0 && (
                        <span>{product.discountPercentage}% off</span>
                    )}
                </div>
                <p className='font-semibold text-lg'>In Stock: {product.stockLevel}</p>
                <p className='font-light text-md text-opacity-50 text-black'>Category: {product.category}</p>
                <p className='font-medium text-2xl '>{product.description}</p>

                <Button className='w-64 bg-black text-white mt-5 transition duration-300 ease-in-out transform hover:scale-105'>
                    Add To Cart
                </Button>
            </div>
        </div>
    )
}

export default page
