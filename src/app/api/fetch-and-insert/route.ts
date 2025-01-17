
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { client } from '@/sanity/lib/client';


export async function GET(req: NextApiRequest, res: NextApiResponse) {
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
console.log(insertPromises)
    res.status(200).json({ message: 'Data migration successful!' });
  } catch (error) {
    console.error('Migration error:', error);
    res.status(500).json({ error: 'Data migration failed.' });
  }
}
