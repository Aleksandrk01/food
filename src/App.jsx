// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Checkout from './pages/Checkout';
import ThankYou from './pages/ThankYou';
import Header from './components/Header';
import Cart from './components/Cart';
import CookieConsent from './components/CookieConsent';

// Правильный импорт данных о продуктах
import products from './data/products'; // Относительный путь

const App = () => {
  const [filteredProducts, setFilteredProducts] = useState(products); // Состояние для фильтрованных продуктов

  // Функция фильтрации продуктов
  const handleSearch = (query) => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Передаём функцию handleSearch в Header */}
        <Header onSearch={handleSearch} />
        <Routes>
          <Route path="/" element={<Home products={filteredProducts} />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <CookieConsent />
      </div>
    </Router>
  );
};

export default App;
