// src/pages/Home.jsx
import React from 'react';
import Slider from '../components/Slider';
import Footer from '../components/Footer';
import ProductList from '../components/ProductList';
import productsData from '../data/products'; // Убедитесь, что импортируете правильно

const Home = () => {
  const getCategoryItems = (categoryName) => {
    const category = productsData.find(cat => cat.category === categoryName);
    console.log(`Category "${categoryName}":`, category); // Для отладки
    return category ? category.items : [];
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex flex-1 pt-20 bg-gray-100">
        <div className="flex flex-col w-full">
          <Slider />
          <section className="mt-10" id="beef-burger">
            <h2 className="text-3xl font-bold text-primary mb-5">Beef Burger</h2>
            <ProductList products={getCategoryItems('Beef Burger')} />
          </section>
          <section className="mt-10" id="chicken-burger">
            <h2 className="text-3xl font-bold text-primary mb-5">Chicken Burger</h2>
            <ProductList products={getCategoryItems('Chicken Burger')} />
          </section>
          <section className="mt-10" id="veggie-burger">
            <h2 className="text-3xl font-bold text-primary mb-5">Veggie Burger</h2>
            <ProductList products={getCategoryItems('Veggie Burger')} />
          </section>
        </div>
      </main>
      {/* <Cart /> */}
      <Footer />
    </div>
  );
};

export default Home;
