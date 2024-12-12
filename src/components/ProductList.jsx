// src/components/ProductList.jsx
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { CartContext } from './CartContext';

const ProductList = ({ products }) => {
  const { addToCart } = useContext(CartContext); // Используем контекст корзины

  // Логирование для отладки
  console.log('Полученные продукты:', products);

  if (!products) {
    console.error('Проп "products" не передан в ProductList');
    return <div>Загрузка продуктов...</div>;
  }

  if (!Array.isArray(products)) {
    console.error('Проп "products" должен быть массивом');
    return <div>Некорректные данные продуктов.</div>;
  }

  if (products.length === 0) {
    return <div>Нет доступных продуктов.</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {products.map((item) => (
        <div key={item.id} className="border p-4 rounded">
          <img src={item.image} alt={item.name} className="w-full h-48 object-cover mb-2" />
          <h2 className="text-xl font-semibold">{item.name}</h2>
          <p className="text-gray-600">{item.description}</p>
          <p className="text-primary font-bold">{item.price} €</p>
          <button
            onClick={() => addToCart(item)}
            className="mt-2 bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition-colors"
          >
            Befehl
          </button>
        </div>
      ))}
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ProductList;
