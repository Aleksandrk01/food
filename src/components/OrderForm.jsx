// src/components/OrderForm/OrderForm.jsx
import React, { useState, useContext } from 'react';
import { CartContext } from './CartContext';

const OrderForm = () => {
  const { cartItems, clearCart, totalPrice } = useContext(CartContext);
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    phone: '',
    comment: '',
    pickup_time: '',
    newsletter: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Логика отправки данных на сервер
    console.log('Данные заказа:', formData, cartItems);
    clearCart();
    // Дополнительные действия после оформления заказа
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-6">
      <div className="text-xs font-semibold uppercase opacity-75">
        Deine Kontaktinformationen
      </div>
      <div>
        <input
          placeholder="E-Mail"
          className="block w-full rounded border-gray-300 shadow-sm focus:ring-neutral-300 focus:border-neutral-300 text-sm"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <input
          placeholder="Name"
          className="block w-full rounded border-gray-300 shadow-sm focus:ring-neutral-300 focus:border-neutral-300 text-sm"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <input
          placeholder="Telefon"
          className="block w-full rounded border-gray-300 shadow-sm focus:ring-neutral-300 focus:border-neutral-300 text-sm"
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <textarea
          placeholder="Kommentar"
          rows="2"
          className="shadow-sm focus:ring-neutral-300 focus:border-neutral-300 block w-full border-gray-300 rounded text-sm"
          name="comment"
          value={formData.comment}
          onChange={handleChange}
        ></textarea>
      </div>

      <div>
        <label className="flex items-center">
          <input
            type="checkbox"
            name="newsletter"
            checked={formData.newsletter}
            onChange={handleChange}
            className="h-4 w-4 rounded text-red-500 focus:ring-red-500 border-gray-300"
          />
          <span className="ml-2 text-sm">Sende mir Angebote per Mail.</span>
        </label>
      </div>

      <div className="text-xs font-semibold uppercase opacity-75">
        Zu wann?
      </div>

      <select
        className="block w-full pl-3 pr-10 py-2 text-base rounded border-gray-300 shadow-sm focus:ring-neutral-300 focus:border-neutral-300 text-sm"
        name="pickup_time"
        value={formData.pickup_time}
        onChange={handleChange}
        required
      >
        <option value="">Wähle eine Uhrzeit</option>
        <option value="2024-11-27 11:45:00 +0100">11:45</option>
        <option value="2024-11-27 12:00:00 +0100">12:00</option>
        {/* Добавьте остальные опции */}
      </select>

      <div className="text-xs">
        Durch Anklicken Bezahl-Buttons stimmst du unseren <a href="/agb" target="_blank" className="underline">AGBs</a> und unserer <a href="/privacy" target="_blank" className="underline">Datenschutzerklärung</a> zu.
      </div>

      <button
        type="submit"
        className="mt-4 w-full bg-red-500 text-white p-2 rounded"
      >
        Zahlungspflichtig bestellen: {totalPrice.toFixed(2)} €
      </button>
    </form>
  );
};

export default OrderForm;
