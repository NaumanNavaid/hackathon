"use client"
import React, { useState, useMemo } from 'react'
import Image from 'next/image'
import Service from '../component/service'
import { FaChevronRight } from 'react-icons/fa'
import { client } from '@/sanity/lib/client'
import Link from 'next/link'

interface Product {
  _id: string;
  name: string;
  imagePath: string;
  price: number;
  description: string;
  discountPercentage: number;
  isFeaturedProduct: boolean;
  stockLevel: number;
  category: string;
}

const Page = async () => {
  const query = `*[_type == "product"]`
  const data = await client.fetch(query)

  return (
    <div>
      <ShopContent initialProducts={data} />
      <Service />
    </div>
  )
}

// Separate client component to handle state
const ShopContent = ({ initialProducts }: { initialProducts: Product[] }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  
  // Get unique categories
  const categories = useMemo(() => {
    return Array.from(new Set(initialProducts.map(product => product.category)));
  }, [initialProducts]);

  // Filter products
  const filteredProducts = useMemo(() => {
    if (selectedCategories.length === 0) return initialProducts;
    return initialProducts.filter(product => 
      selectedCategories.includes(product.category)
    );
  }, [initialProducts, selectedCategories]);

  // Toggle category selection
  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prev => {
      if (prev.includes(category)) {
        return prev.filter(c => c !== category);
      }
      return [...prev, category];
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <div className='bg-cover bg-center h-[320px] flex flex-col'
        style={{ backgroundImage: "url('/Images/Background 2.svg')" }}>
        <div className='flex flex-col items-center justify-center mt-10'>
          <Image src="/icon/Logo.svg" width={77} height={77} alt='Logo' />
          <h1 className='font-medium text-5xl'>Shop</h1>
          <div className='flex gap-2 mt-4 text-base'>
            <p className='font-medium'>Home</p>
            <FaChevronRight className='w-4 h-4 mt-1' />
            <p className='font-light'>Shop</p>
          </div>
        </div>
      </div>

      {/* Filter and Sort Section */}
      <div className="bg-[#FAF4F4] mt-6 md:mt-10">
        <div className="container mx-auto px-4 md:px-8 lg:px-20">
          <div className="flex flex-col md:flex-row justify-between items-center py-6 gap-4">
            {/* Left Section */}
            <div className="flex flex-wrap items-center gap-4 md:gap-6 w-full md:w-auto">
              {/* Filter Button */}
              <button 
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="flex items-center gap-2 text-sm md:text-base hover:opacity-80"
              >
                <Image src="/icon/Filter.svg" width={25} height={25} alt="filter" />
                <span className="font-normal">Filter</span>
              </button>

              {/* View Mode Toggles */}
              <div className="flex items-center gap-3">
                <Image src="/icon/Dots.svg" width={18} height={18} alt="Dots" />
                <Image src="/icon/View list.svg" width={24} height={24} alt="View list" />
              </div>

              {/* Divider */}
              <span className="hidden md:block border-l-2 h-8 border-[#9F9F9F] mx-2"></span>

              {/* Results Count */}
              <p className="text-xs md:text-sm text-gray-600">
                Showing 1–16 of 32 results
              </p>
            </div>

            {/* Right Section */}
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 mt-4 md:mt-0 w-full md:w-auto">
              {/* Show Dropdown */}
              <div className="flex items-center gap-2">
                <span className="text-sm md:text-xl font-normal">Show</span>
                <span className="w-12 h-12 md:w-14 md:h-14 bg-white text-[#9F9F9F] flex items-center justify-center font-normal text-sm md:text-xl rounded">
                  16
                </span>
              </div>

              {/* Sort By Dropdown */}
              <div className="flex items-center gap-2 md:gap-4">
                <span className="text-sm md:text-xl font-normal">Sort by</span>
                <span className="w-36 md:w-48 h-12 md:h-14 bg-white text-[#9F9F9F] flex items-center justify-center font-normal text-sm md:text-xl rounded">
                  Default
                </span>
              </div>
            </div>
          </div>

          {/* Filter Panel */}
          {isFilterOpen && (
            <div className="bg-white rounded-lg shadow-lg p-6 mb-6 transition-all">
              <h3 className="font-semibold text-lg mb-4">Categories</h3>
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    className={`px-4 py-2 rounded-lg text-sm transition-colors
                      ${selectedCategories.includes(category)
                        ? 'bg-[#FBEBB5] text-black'
                        : 'bg-[#FAF4F4] hover:bg-[#FBEBB5] hover:bg-opacity-50'
                      }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
              
              {/* Active Filters */}
              {selectedCategories.length > 0 && (
                <div className="mt-4 pt-4 border-t">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">Active filters:</span>
                    <button
                      onClick={() => setSelectedCategories([])}
                      className="text-sm text-blue-600 hover:underline"
                    >
                      Clear all
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Product Grid */}
      <div className='grid lg:grid-cols-3 lg:grid-rows-5 md:mx-20 sm:mx-5 mt-10 gap-4 md:grid-cols-2 md:grid-rows-10'>
        {filteredProducts.map((product) => (
          <Link key={product._id} href={`/shop/${product._id}`} className='bg-white rounded-[10px] shadow-xl p-4 items-center justify-center flex flex-col gap-4'>
            <div>
              <Image
                src={product.imagePath}
                alt="product"
                width={200}
                height={200}
                className="h-96 w-96 rounded-md"
              />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">{product.name}</h2>
              <p className="text-gray-600 mt-2">{product.description}</p>
              <p className="text-xl font-semibold text-green-600 mt-4">${product.price}</p>
              <p className="text-sm text-gray-500 mt-2">Category: {product.category}</p>
              <p className="text-sm text-gray-500 mt-2">Stock: {product.stockLevel}</p>
              <p className="text-sm text-gray-500 mt-2">
                Featured: {product.isFeaturedProduct ? 'Yes' : 'No'}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination */}
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

export default Page