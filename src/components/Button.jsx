// src/components/Button/Button.jsx
import React from 'react';
import '../css/Button.css'; // Импортируем стили

const Button = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`btn ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
