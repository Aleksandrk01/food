// src/pages/Contact.jsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pt-20 px-5 lg:px-10 bg-gray-100">
        <h1 className="text-3xl font-bold mb-6">Kontakt</h1>
        {/* Добавьте контактную информацию здесь */}
        <p>Diese Seite ist noch in Arbeit.</p>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
