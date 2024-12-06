// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Checkout from './pages/Checkout'; // Импортируем Checkout
import ThankYou from './pages/ThankYou'; // Импортируем ThankYou

import Cart from './components/Cart'; // Добавьте страницу корзины
import CookieConsent from './components/CookieConsent';

const App = () => {
  return (
    <Router>
        <div className="flex flex-col min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/checkout" element={<Checkout />} /> {/* Добавляем маршрут */}
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/cart" element={<Cart />} />
            {/* Добавьте другие маршруты по необходимости */}
          </Routes>
          <CookieConsent />
        </div>
    </Router>
  );
};

export default App;
