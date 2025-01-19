'use client'; // Add 'use client' to use state and events

import { useState } from 'react';

interface CategoryListProps {
  categories: string[];
  onCategorySelect: (category: string) => void;
}

const CategoryList: React.FC<CategoryListProps> = ({ categories, onCategorySelect }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    onCategorySelect(category);
  };

  return (
    <div className="flex flex-wrap gap-4">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleCategoryClick(category)}
          className={`px-4 py-2 rounded ${
            selectedCategory === category
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-black'
          } hover:bg-blue-500 hover:text-white`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryList;
