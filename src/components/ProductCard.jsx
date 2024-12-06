// src/components/ProductCard/ProductCard.jsx
import React, { useContext } from 'react';
import '../css/ProductCard.css'; // Импортируем стили
import { CartContext } from './CartContext';
import { toast } from 'react-toastify';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} wurde zum Warenkorb hinzugefügt!`);
  };

  return (
    <div className="product-card bg-white p-5 rounded-lg shadow-md flex flex-col">
      <img src={product.image} alt={product.name} className="product-image w-full h-48 object-cover rounded" loading="lazy" />
      <h3 className="product-name text-xl font-semibold mt-4">{product.name}</h3>
      <p className="product-description mt-2 text-gray-600 flex-1">{product.description}</p>
      <span className="product-price text-primary font-bold mt-2 block">€{product.price}</span>
      <button
        className="product-button mt-4 w-full bg-primary text-white py-2 rounded hover:bg-primary-dark transition-colors"
        onClick={handleAddToCart}
      >
        In den Warenkorb
      </button>
    </div>
  );
};

export default ProductCard;
