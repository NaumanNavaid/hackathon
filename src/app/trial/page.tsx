'use client';

import { client } from '@/sanity/lib/client';
import { useState, useEffect } from 'react';
import CategoryList from '../component/trial';

// Function to fetch categories
const fetchCategories = async () => {
  const query = `*[_type == "product"] {
    "category": category
  }`;
  const products = await client.fetch(query);
  return Array.from(new Set(products.map((product: { category: string }) => product.category))) as string[];
};

// Function to fetch products by category
const fetchProductsByCategory = async (category: string) => {
  const query = `*[_type == "product" && category == $category] {
    _id,
    name,
    description,
    price,
    imagePath
  }`;
  return await client.fetch(query, { category });
};

const HomePage: React.FC = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [products, setProducts] = useState<any[]>([]); // No interface needed now

  // Fetch categories on component mount
  useEffect(() => {
    const loadCategories = async () => {
      const categories = await fetchCategories();
      setCategories(categories);
    };

    loadCategories();
  }, []);

  // Handle category selection
  const handleCategorySelect = async (category: string) => {
    const filteredProducts = await fetchProductsByCategory(category);
    setProducts(filteredProducts);
  };

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-6">Browse by Category</h1>
      {/* Category Component */}
      <CategoryList categories={categories} onCategorySelect={handleCategorySelect} />
      {/* Product List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {products.map((product) => (
          <div key={product._id} className="p-4 border rounded shadow">
            <img
              src={product.imagePath}
              alt={product.name}
              className="w-full h-40 object-cover mb-4"
            />
            <h2 className="text-xl font-bold">{product.name}</h2>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-lg font-semibold mt-2">${product.price}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default HomePage;
