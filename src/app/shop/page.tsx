import { client } from '@/sanity/lib/client';
import ShopPage from '../component/shop';
import React from 'react';

export default async function Page() {
  const productsQuery = `*[_type == "product"]`;
  const categoriesQuery = `*[_type == "product"]{category}`;

  // Fetch data on the server
  const products = await client.fetch(productsQuery);
  const categoriesData:{ categories : string}[]= await client.fetch(categoriesQuery);
 console.log(products)
  // Extract unique categories
  const uniqueCategories = [...new Set(categoriesData.map((item: any) => item.category))];

  // Pass data as props to the Client Component
  return <ShopPage products={products} categories={uniqueCategories} />;
}
