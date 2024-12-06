// src/components/Modal/Modal.jsx
import React from 'react';
import '../css/Modal.css'; // Создайте соответствующий CSS или используйте Tailwind

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Задний фон */}
      <div className="fixed inset-0 bg-black bg-opacity-75 z-40" onClick={onClose}></div>

      {/* Само модальное окно */}
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-white rounded shadow-lg w-full max-w-lg p-6 relative">
          {/* Кнопка закрытия */}
          <button
            className="absolute top-5 right-5 text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            &times;
          </button>
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
