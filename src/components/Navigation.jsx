// src/components/Navigation.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const categories = ['Alle', 'Burger', 'Pizza', 'Salate', 'Getränke'];

const Navigation = () => {
  return (
    <nav className="bg-white shadow">
      <ul className="flex space-x-4 p-4 overflow-x-auto">
        {categories.map((category) => (
          <li key={category}>
            <NavLink
              to={`/${category.toLowerCase()}`}
              className={({ isActive }) =>
                isActive
                  ? 'text-primary font-semibold'
                  : 'text-gray-600 hover:text-primary transition-colors'
              }
            >
              {category}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
