"use client";
import { client } from '@/sanity/lib/client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const getproduct = async (id: string) => {
  const query = `*[_type == "product" && _id == "${id}"]{
    _id,
    name,
    imagePath,
    price,
    description,
    discountPercentage,
    stockLevel,
    category
  }[0]`;
  return client.fetch(query);
};

const Page = ({ params }: { params: { id: string } }) => {
  const [product, setProduct] = useState<any | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getproduct(params.id);
      setProduct(data);
    };
    fetchData();
  }, [params.id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="grid md:grid-cols-2 gap-10 md:mx-10 sm:mx-4 mt-10">
      <div className="items-center justify-center flex">
        <Image
          src={product.imagePath}
          alt={product.name}
          width={300}
          height={300}
          className="md:w-[500px] md:h-[500px] rounded-md"
        />
      </div>
      <div className="flex flex-col gap-3">
        <p className="font-bold text-3xl">{product.name}</p>
        <div className="flex gap-3 m-4 text-xl font-semibold">
          <p className="text-green-600">${product.price}</p>
          {product.discountPercentage > 0 && (
            <span>{product.discountPercentage}% off</span>
          )}
        </div>
        <p className="font-semibold text-lg">In Stock: {product.stockLevel}</p>
        <p className="font-light text-md text-opacity-50 text-black">
          Category: {product.category}
        </p>
        <p className="font-medium text-2xl">{product.description}</p>
        <Button className="w-64 bg-black text-white mt-5 transition duration-300 ease-in-out transform hover:scale-105">
          Add To Cart
        </Button>
      </div>
    </div>
  );
};

export default Page;
