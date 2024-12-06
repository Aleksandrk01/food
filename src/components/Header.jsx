// src/components/Header.jsx
import React, { useState, useContext, useEffect, useRef } from 'react';
import '../css/Header.css'; // Импортируем стили
import Logo from '../assets/images/logo.png';
import word from '../assets/images/white.png';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext'; // Убедитесь, что путь корректен
import Cart from './Cart'; // Импортируем компонент корзины
import { toast } from 'react-toastify'; // Для уведомлений (опционально)

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false); // Состояние для управления видимостью корзины
  const { cartItems } = useContext(CartContext);
  const cartRef = useRef();

  // Обработчик для закрытия корзины при клике вне её области
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setIsCartOpen(false);
      }
    };

    if (isCartOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isCartOpen]);

  return (
    <header className="bg-primary-dark fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="max-w-desktop mx-auto flex items-center justify-between h-20 px-5 lg:px-10 header-block">
        <div className="flex-shrink-0">
        <Link to="/">
            <img src={word} alt="Food Brother Logo" className="h-10 w-auto" />
          </Link>
          <Link to="/">
            <img src={Logo} alt="Food Brother Logo" className="h-10 w-auto" />
          </Link>
        </div>

        {/* Поисковая строка */}
        <div className="flex-1 mx-5 hidden sm:block relative">
          <input
            type="text"
            name="search_product"
            placeholder="Gericht suchen"
            className="w-full h-10 pl-3 pr-10 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
            {/* Иконка поиска */}
            <svg
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* Кнопка корзины */}
        <div className="ml-4 relative">
          <button
            className="flex items-center text-gray-300 hover:text-primary transition-colors focus:outline-none"
            onClick={() => setIsCartOpen(!isCartOpen)} // Переключение состояния корзины
            aria-label="Warenkorb anzeigen"
          >
            {/* Иконка корзины */}
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
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m5-9v9m4-9v9m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v4m-4 0h14"
              />
            </svg>
            {/* Количество товаров в корзине */}
            <span className="ml-1 text-sm font-semibold">
              {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
            </span>
          </button>
          {/* Отображение корзины */}
          {isCartOpen && (
            <div ref={cartRef}>
              <Cart closeCart={() => setIsCartOpen(false)} />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
