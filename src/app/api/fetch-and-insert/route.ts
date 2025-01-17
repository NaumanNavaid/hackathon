import axios from 'axios';
import { client } from '@/sanity/lib/client';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    // Fetch data from the external API
    const { data } = await axios.get('https://template-0-beta.vercel.app/api/product');

    // Insert each product into Sanity
    const insertPromises = data.map((product: any) =>
      client.createOrReplace({
        _type: 'product',
        _id: product.id, // Use product ID as the document ID
        name: product.name,
        imagePath: product.imagePath,
        price: parseFloat(product.price),
        description: product.description,
        discountPercentage: product.discountPercentage,
        isFeaturedProduct: product.isFeaturedProduct,
        stockLevel: product.stockLevel,
        category: product.category,
      })
    );

    // Wait for all products to be inserted
    await Promise.all(insertPromises);
    console.log(insertPromises);

    return NextResponse.json({ message: 'Data migration successful!' });
  } catch (error) {
    console.error('Migration error:', error);
    return NextResponse.json({ error: 'Data migration failed.' }, { status: 500 });
  }
}