// src/pages/ThankYou.jsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const ThankYou = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1 pt-20 px-5 lg:px-10 bg-gray-100">
        <div className="max-w-2xl mx-auto w-full text-center">
          <h1 className="text-4xl font-bold mb-6">Vielen Dank für Ihre Bestellung!</h1>
          <p className="text-gray-700 mb-6">
            Ihre Bestellung wurde erfolgreich aufgegeben. Wir werden sie so schnell wie möglich bearbeiten.
          </p>
          <Link
            to="/"
            className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary-dark transition-colors"
          >
            Zurück zur Startseite
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ThankYou;
