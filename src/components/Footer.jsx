// src/components/Footer/Footer.jsx
import React, { useState } from 'react';
import '../css/Footer.css';
import Logo from '../assets/images/logo.png';
// import ProductList from '../components/ProductList';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscriptionStatus, setSubscriptionStatus] = useState('');

  const handleSubscription = (e) => {
    e.preventDefault();
    // Добавьте логику отправки формы (например, API-запрос)
    console.log(`Subscribed with email: ${email}`);
    setSubscriptionStatus('Danke für Ihre Anmeldung!');
    setEmail('');
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* О компании */}
        <div className="footer-section-logo">
          <img src={Logo} alt="Food Brother Logo" className="footer-logo" />
          <p className="footer-description">
            Food Brother ist Ihr zuverlässiger Partner für köstliche Burger und erstklassigen Service.
          </p>
        </div>

        {/* Локация */}
        <div className="footer-section">
          <h3 className="footer-section-title">Location</h3>
          <ul className="footer-list">
            <li>Lessingstrasse 1, 40721 Hilden</li>
            <li>Email: info@foodbrother.de</li>
            <li>Telefon: +49 176 80623023</li>
          </ul>
        </div>

        {/* Ссылки */}
        {/* <div className="footer-section">
          <h3 className="footer-section-title">Links</h3>
          <ul className="footer-list">
            <li><a href="/">Startseite</a></li>
            <li><a href="/menu">Menü</a></li>
            <li><a href="/about">Über uns</a></li>
            <li><a href="/contact">Kontakt</a></li>
          </ul>
        </div> */}

        {/* Социальные сети */}
        {/* <div className="footer-section">
          <h3 className="footer-section-title">Folgen Sie uns</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <svg className="w-6 h-6 text-white hover:text-primary-dark transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.312h3.587l-.467 3.622h-3.12V24h6.116C23.403 24 24 23.403 24 22.675V1.325C24 .597 23.403 0 22.675 0z"/>
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <svg className="w-6 h-6 text-white hover:text-primary-dark transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557a9.93 9.93 0 01-2.828.775A4.932 4.932 0 0023.337 3.1a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616 3c-2.723 0-4.932 2.208-4.932 4.932 0 .387.043.762.127 1.124C7.728 8.82 4.1 6.881 1.671 3.149a4.822 4.822 0 00-.666 2.475c0 1.708.869 3.213 2.188 4.096a4.904 4.904 0 01-2.23-.616c-.054 2.385 1.693 4.374 4.157 4.827a4.935 4.935 0 01-2.224.084c.63 1.953 2.445 3.377 4.6 3.418A9.867 9.867 0 010 19.54a13.94 13.94 0 007.548 2.212c9.058 0 14-7.496 14-13.986 0-.21 0-.423-.015-.635A9.935 9.935 0 0024 4.557z"/>
              </svg>
            </a>
          </div>
        </div> */}
      </div>

    </footer>
  );
};

export default Footer;
