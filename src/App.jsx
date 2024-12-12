import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Checkout from './pages/Checkout';
import ThankYou from './pages/ThankYou';
import Header from './components/Header';
import Cart from './components/Cart';
import CookieConsent from './components/CookieConsent';

// Импорт данных о продуктах
import products from './data/products';

const App = () => {
  // Создаём начальное состояние — полный список категорий с их товарами
  const [filteredProducts, setFilteredProducts] = useState(products);

  // Функция фильтрации продуктов
  const handleSearch = (query) => {
    if (!query) {
      // Если строка поиска пустая, возвращаем все категории с товарами
      setFilteredProducts(products);
      return;
    }

    // Фильтруем товары в каждой категории
    const filtered = products.map((category) => {
      const filteredItems = category.items.filter(
        (item) =>
          item.name.toLowerCase().includes(query.toLowerCase()) ||
          item.description.toLowerCase().includes(query.toLowerCase())
      );

      return {
        ...category,
        items: filteredItems,
      };
    });

    // Удаляем категории, в которых нет подходящих товаров
    const nonEmptyCategories = filtered.filter((category) => category.items.length > 0);

    setFilteredProducts(nonEmptyCategories);
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
