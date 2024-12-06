// src/components/Cart.jsx
import React, { useContext } from 'react';
import { CartContext } from './CartContext'; // Убедитесь, что путь корректен
import { Link } from 'react-router-dom';

const Cart = ({ closeCart }) => {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useContext(CartContext);

  // Вычисление общей стоимости
  const totalPrice = cartItems
    .reduce((acc, item) => acc + parseFloat(item.product.price) * item.quantity, 0)
    .toFixed(2);

  return (
    <div className="cart-container absolute right-0 top-0 mt-4 w-80 bg-white shadow-lg rounded-lg p-5 z-50 transition-transform transform translate-x-0 duration-300 ease-in-out">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Ihr Warenkorb</h2>
        <button
          onClick={closeCart}
          className="text-gray-500 hover:text-gray-700 focus:outline-none"
          aria-label="Close Cart"
        >
          {/* Иконка закрытия */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      {cartItems.length === 0 ? (
        <p>Ihr Warenkorb ist leer.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.product.id} className="flex items-center mb-4">
              <img src={item.product.image} alt={item.product.name} className="w-16 h-16 object-cover rounded mr-4" />
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{item.product.name}</h3>
                <p className="text-gray-600">€{item.product.price}</p>
                <div className="flex items-center mt-2">
                  <button
                    className="px-2 py-1 bg-gray-200 rounded-l"
                    onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                    aria-label={`Menge von ${item.product.name} reduzieren`}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={item.quantity}
                    min="1"
                    className="w-12 text-center border-t border-b border-gray-300"
                    onChange={(e) => {
                      const value = parseInt(e.target.value);
                      if (value >= 1) {
                        updateQuantity(item.product.id, value);
                      }
                    }}
                  />
                  <button
                    className="px-2 py-1 bg-gray-200 rounded-r"
                    onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                    aria-label={`Menge von ${item.product.name} erhöhen`}
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                className="ml-4 text-red-500 hover:text-red-700"
                onClick={() => removeFromCart(item.product.id)}
                aria-label={`Entferne ${item.product.name} aus dem Warenkorb`}
              >
                Entfernen
              </button>
            </div>
          ))}

          <div className="mt-6">
            <h3 className="text-xl font-bold">Gesamtsumme: €{totalPrice}</h3>
          </div>

          <div className="mt-6 flex justify-between">
            <button
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              onClick={() => {
                clearCart();
                closeCart();
              }}
            >
              Warenkorb Leeren
            </button>
            <Link
              to="/checkout"
              className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark"
              onClick={closeCart}
            >
              Zur Kasse
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
