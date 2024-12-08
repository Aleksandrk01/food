// src/components/ProductList/ProductList.jsx
import React from 'react';
import '../css/ProductList.css';
import ProductCard from '../components/ProductCard';
import Product1 from '../assets/images/product1.avif';
import Product2 from '../assets/images/product2.jpg';
import Product3 from '../assets/images/product3.jpg';
import Product4 from '../assets/images/product4.png';
import Product5 from '../assets/images/product5.webp';
import Product6 from '../assets/images/product6.jpg';

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
    description: 'Vegetarischer Burger mit knusprigem Tofu und Avocado.',
    image: Product2,
    price: '11,90',
  },
  {
    id: 3,
    name: 'Cheesseburger',
    description: 'Burger mit Ziegenkäse und Rucola für einen raffinierten Geschmack.',
    image: Product3,
    price: '12,90',
  },
  {
    id: 4,
    name: 'Bavernburger mit El',
    description: 'Burger mit Doppelpatty und knusprigen Salatblättern.',
    image: Product4,
    price: '13,90',
  },
  {
    id: 5,
    name: 'Grizzly HOT',
    description: 'Burger mit scharfem Cheddar-Käse und karamellisierten Zwiebeln.',
    image: Product5,
    price: '13,90',
  },
  {
    id: 6,
    name: 'Gitzzly Bacon',
    description: 'Klassischer Cheeseburger mit einer Scheibe geschmolzenem Käse.',
    image: Product6,
    price: '15,90',
  },
  {
    id: 7,
    name: 'Grizzly BBQ',
    description: 'Burger mit Speck, Ei und spezieller Sauce.',
    image: Product2,
    price: '15,90',
  },
  {
    id: 8,
    name: 'Grizzly Premium XXL',
    description: 'Burger mit Guacamole und frischen Gurkenscheiben.',
    image: Product3,
    price: '17,90',
  },
  {
    id: 9,
    name: 'Grizzly XXXL',
    description: 'Burger mit Avocado, frittierten Zwiebeln und frischem Salat.',
    image: Product4,
    price: '22,90',
  },
  {
    id: 10,
    name: 'Chicken Burger',
    description: 'Burger mit geräucherter Hähnchenbrust und würziger Barbecue-Sauce.',
    image: Product5,
    price: '8,90',
  },
  {
    id: 11,
    name: 'Spicy Chicken',
    description: 'Pikant Burger mit Chilis und scharfer Mayonnaise-Dressing.',
    image: Product6,
    price: '8,90',
  },
  {
    id: 12,
    name: 'Chicken Bauer mit Ei',
    description: 'Burger mit Speck, Ei und spezieller Sauce.',
    image: Product3,
    price: '10,90',
  },
  {
    id: 13,
    name: 'Grizzly Chicken Burger',
    description: 'Burger mit geräucherter Hähnchenbrust und würziger Barbecue-Sauce.',
    image: Product4,
    price: '14,90',
  },
  {
    id: 14,
    name: 'Veggie Burger',
    description: 'Vegetarischer Burger mit knusprigem Tofu und Avocado.',
    image: Product5,
    price: '15,90',
  },
  {
    id: 15,
    name: 'Veggie Cheeses',
    description: 'Burger mit Ziegenkäse und Rucola für einen raffinierten Geschmack.',
    image: Product6,
    price: '8,90',
  },
  {
    id: 16,
    name: 'Veggie HOT',
    description: 'Pikant Burger mit Chilis und scharfer Mayonnaise-Dressing.',
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
