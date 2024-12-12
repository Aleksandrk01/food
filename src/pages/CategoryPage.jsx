// src/pages/CategoryPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products';

const CategoryPage = () => {
  const { categoryName } = useParams();
  const formattedCategory = categoryName.replace(/-/g, ' ').toLowerCase();

  const category = products.find(
    (cat) => cat.category.toLowerCase() === formattedCategory
  );

  if (!category) {
    return <div>Категория не найдена</div>;
  }

  return (
    <div className="container mx-auto mt-24 p-4">
      <h1 className="text-2xl font-bold mb-4">{category.category}</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {category.items.map((item) => (
          <div key={item.id} className="border p-4 rounded">
            <img src={item.image} alt={item.name} className="w-full h-48 object-cover mb-2" />
            <h2 className="text-xl font-semibold">{item.name}</h2>
            <p className="text-gray-600">{item.description}</p>
            <p className="text-primary font-bold">{item.price} €</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
