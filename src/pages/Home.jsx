// src/pages/Home.jsx
import React from 'react';
import Header from '../components/Header';
import Slider from '../components/Slider';
// import Navigation from '../components/Navigation';
// import Cart from '../components/Cart';
import Footer from '../components/Footer';
import ProductList from '../components/ProductList';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1 pt-20 bg-gray-100">
        <div className="flex flex-col w-full">
          <Slider />
          {/* <Navigation /> */}
          <section className="mt-10">
            <h2 className="text-3xl font-bold text-primary mb-5">Unsere Produkte</h2>
            <ProductList />
          </section>
        </div>
      </main>
      {/* <Cart /> */}
      <Footer />
    </div>
  );
};

export default Home;
