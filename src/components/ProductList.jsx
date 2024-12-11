// src/components/ProductList/ProductList.jsx
import React from 'react';
import '../css/ProductList.css';
import ProductCard from '../components//ProductCard'; // Исправьте путь, если необходимо

const ProductList = ({ products }) => {
  // Проверяем, что products существует и является массивом
  if (!products || !Array.isArray(products)) {
    return <div>Keine Produkte verfügbar.</div>; // Сообщение, если продукты не загружены
  }

  return (
    <div className="product-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-5">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
