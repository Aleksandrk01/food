// src/data/products.js

import Product1 from '../assets/images/product2.jpg';
import Product2 from '../assets/images/product2.webp';
import Product3 from '../assets/images/product3.webp';
import Product4 from '../assets/images/product4.webp';
import Product5 from '../assets/images/product5.webp';
import Product6 from '../assets/images/product6.webp';
import Product7 from '../assets/images/production7.webp';
import Product8 from '../assets/images/production8.webp';
import Product9 from '../assets/images/production9.webp';
import Product10 from '../assets/images/product10.webp';
import Product11 from '../assets/images/product11.webp';
import Product12 from '../assets/images/product12.webp';
import Product13 from '../assets/images/product13.webp';
import Product14 from '../assets/images/product14.webp';
import Product16 from '../assets/images/product16.webp';
import Product17 from '../assets/images/product17.webp';


const products = [
  {
    category: 'Beef Burger',
    items: [
      {
        id: 1,
        name: 'Grizzly Standard',
        description: 'Ein klassischer Rindfleisch-Burger mit frischen Zutaten und aromatischer Sauce.',
        image: Product1,
        price: '11,90',
      },
      {
        id: 2,
        name: 'Grizzly Oko (veggie)',
        description: 'Vegetarischer Burger mit knusprigem Tofu und Avocado.',
        image: Product2,
        price: '11,90',
      },
      {
        id: 3,
        name: 'Cheeseburger',
        description: 'Burger mit geschmolzenem Käse und frischem Rucola.',
        image: Product3,
        price: '12,90',
      },
      {
        id: 4,
        name: 'Bauernburger mit Ei',
        description: 'Burger mit Doppelpatty und frischem Salat.',
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
        name: 'Grizzly Bacon',
        description: 'Burger mit knusprigem Speck und saftigem Patty.',
        image: Product6,
        price: '15,90',
      },
      {
        id: 7,
        name: 'Grizzly BBQ',
        description: 'Burger mit rauchigem Speck, Ei und BBQ-Sauce.',
        image: Product7,
        price: '15,90',
      },
      {
        id: 8,
        name: 'Grizzly Premium XXL',
        description: 'Großer Burger mit Guacamole und knackigen Gurkenscheiben.',
        image: Product8,
        price: '17,90',
      },
      {
        id: 9,
        name: 'Grizzly XXXL',
        description: 'Der größte Burger mit Avocado, frittierten Zwiebeln und frischem Salat.',
        image: Product9,
        price: '22,90',
      },
    ],
  },
  // Категория: Chicken Burger
  {
    category: 'Chicken Burger',
    items: [
      {
        id: 10,
        name: 'Chicken Burger',
        description: 'Burger mit geräucherter Hähnchenbrust und würziger Barbecue-Sauce.',
        image: Product10,
        price: '8,90',
      },
      {
        id: 11,
        name: 'Spicy Chicken',
        description: 'Pikanter Burger mit Chilis und scharfer Mayonnaise-Dressing.',
        image: Product11,
        price: '8,90',
      },
      {
        id: 12,
        name: 'Chicken Cheese',
        description: 'Burger mit Hähnchenfleisch und geschmolzenem Käse.',
        image: Product12,
        price: '9,90',
      },
      {
        id: 13,
        name: 'Chicken Bauer mit Ei',
        description: 'Burger mit Speck, Ei und spezieller Sauce.',
        image: Product13,
        price: '10,90',
      },
      {
        id: 14,
        name: 'Grizzly Chicken Burger',
        description: 'Burger mit geräucherter Hähnchenbrust und würziger Barbecue-Sauce.',
        image: Product14,
        price: '14,90',
      },
    ],
  },
  // Категория: Veggie Burger
  {
    category: 'Veggie Burger',
    items: [
      {
        id: 15,
        name: 'Veggie Burger',
        description: 'Vegetarischer Burger mit knusprigem Tofu und Avocado.',
        image: Product2,
        price: '7,90',
      },
      {
        id: 16,
        name: 'Veggie Cheeses',
        description: 'Burger mit Ziegenkäse und Rucola für einen raffinierten Geschmack.',
        image: Product16,
        price: '8,90',
      },
      {
        id: 17,
        name: 'Veggie HOT',
        description: 'Pikanter Burger mit Chilis und scharfer Mayonnaise-Dressing.',
        image: Product17,
        price: '8,90',
      },
    ],
  },
];

export default products;
