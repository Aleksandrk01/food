// src/components/ProductList/ProductList.jsx
import React from 'react';
import '../css/ProductList.css';
import ProductCard from '../components/ProductCard';
import Product1 from '../assets/images/product1.jpg';
// import Product2 from '../assets/images/product2.jpg';

const products = [
  {
    id: 1,
    name: 'Grizzly Standart',
    description: 'Saftiger Rindfleisch-Burger mit frischen Zutaten.',
    image: Product1,
    price: '11,90',
  },
  {
    id: 2,
    name: 'Grizzly Oko (veggiel)',
    description: 'Zarter Hähnchen-Burger mit knackigem Salat.',
    image: Product1,
    price: '11,90',
  },
  {
    id: 3,
    name: 'Cheesseburger',
    description: 'Leichter Gemüse-Burger für Vegetarier.',
    image: Product1,
    price: '12,90',
  },
  {
    id: 4,
    name: 'Bavernburger mit El',
    description: 'Leichter Gemüse-Burger für Vegetarier.',
    image: Product1,
    price: '13,90',
  },
  {
    id: 5,
    name: 'Grizzly HOT',
    description: 'Leichter Gemüse-Burger für Vegetarier.',
    image: Product1,
    price: '13,90',
  },
  {
    id: 6,
    name: 'Gitzzly Bacon',
    description: 'Leichter Gemüse-Burger für Vegetarier.',
    image: Product1,
    price: '15,90',
  },
  {
    id: 7,
    name: 'Grizzly BBQ',
    description: 'Leichter Gemüse-Burger für Vegetarier.',
    image: Product1,
    price: '15,90',
  },
  {
    id: 8,
    name: 'Grizzly Premium XXL',
    description: 'Leichter Gemüse-Burger für Vegetarier.',
    image: Product1,
    price: '17,90',
  },
  {
    id: 9,
    name: 'Grizzly XXXL',
    description: 'Leichter Gemüse-Burger für Vegetarier.',
    image: Product1,
    price: '22,90',
  },
  {
    id: 10,
    name: 'Chicken Burger',
    description: 'Leichter Gemüse-Burger für Vegetarier.',
    image: Product1,
    price: '8,90',
  },
  {
    id: 11,
    name: 'Spicy Chicken',
    description: 'Leichter Gemüse-Burger für Vegetarier.',
    image: Product1,
    price: '8,90',
  },
  {
    id: 12,
    name: 'Chicken Bauer mit Ei',
    description: 'Leichter Gemüse-Burger für Vegetarier.',
    image: Product1,
    price: '10,90',
  },
  {
    id: 13,
    name: 'Grizzly Chicken Burger',
    description: 'Leichter Gemüse-Burger für Vegetarier.',
    image: Product1,
    price: '14,90',
  },
  {
    id: 14,
    name: 'Veggie Burger',
    description: 'Leichter Gemüse-Burger für Vegetarier.',
    image: Product1,
    price: '15,90',
  },
  {
    id: 15,
    name: 'Veggie Cheeses',
    description: 'Leichter Gemüse-Burger für Vegetarier.',
    image: Product1,
    price: '8,90',
  },
  {
    id: 16,
    name: 'Veggie HOT',
    description: 'Leichter Gemüse-Burger für Vegetarier.',
    image: Product1,
    price: '8,90',
  }
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
