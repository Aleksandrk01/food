// src/components/ProductList/ProductList.jsx
import React from 'react';
import '../css/ProductList.css';
import ProductCard from '../components/ProductCard';
import Product1 from '../assets/images/product1.jpg';
import Product2 from '../assets/images/product2.jpg';

const products = [
  {
    id: 1,
    name: 'Beef Burger',
    description: 'Saftiger Rindfleisch-Burger mit frischen Zutaten.',
    image: Product1,
    price: '8,99',
  },
  {
    id: 2,
    name: 'Chicken Burger',
    description: 'Zarter Hähnchen-Burger mit knackigem Salat.',
    image: Product2,
    price: '7,99',
  },
  {
    id: 3,
    name: 'Veggie Burger',
    description: 'Leichter Gemüse-Burger für Vegetarier.',
    image: Product2,
    price: '6,99',
  },
  {
    id: 4,
    name: 'Veggie Burger',
    description: 'Leichter Gemüse-Burger für Vegetarier.',
    image: Product2,
    price: '6,99',
  },
  // Добавьте больше товаров по необходимости
];

const ProductList = () => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
