// src/pages/Checkout.jsx
import React, { useState, useContext } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { CartContext } from '../components/CartContext';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { cartItems, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [shippingInfo, setShippingInfo] = useState({
    name: '',
    address: '',
    email: '',
    phone: '',
  });

  const [paymentMethod, setPaymentMethod] = useState('card'); // 'card' или 'paypal'
  const [cardInfo, setCardInfo] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const handleShippingChange = (e) => {
    setShippingInfo({
      ...shippingInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleCardChange = (e) => {
    setCardInfo({
      ...cardInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Собираем данные заказа
    const orderData = {
      shippingInfo,
      paymentMethod,
      cardInfo: paymentMethod === 'card' ? cardInfo : null,
      cartItems,
      total: cartItems
        .reduce((acc, item) => acc + parseFloat(item.product.price) * item.quantity, 0)
        .toFixed(2),
    };

    console.log('Order Data:', orderData);

    // Здесь будет логика отправки данных на сервер или передачи их платежной системе
    // Например:
    // sendOrderToServer(orderData).then(response => {
    //   if (response.success) {
    //     clearCart();
    //     navigate('/thank-you');
    //   }
    // });

    // Для демонстрации очищаем корзину и переходим на страницу благодарности
    clearCart();
    navigate('/thank-you');
  };

  // Вычисление общей стоимости
  const totalPrice = cartItems
    .reduce((acc, item) => acc + parseFloat(item.product.price) * item.quantity, 0)
    .toFixed(2);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pt-20 px-5 lg:px-10 bg-gray-100">
        <div className="max-w-2xl mx-auto w-full bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-6">Zahlungsinformationen</h1>
          <form onSubmit={handleSubmit}>
            {/* Секция Информации о Доставке */}
            <section className="mb-6">
              <h2 className="text-2xl font-semibold mb-4">Lieferinformationen</h2>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={shippingInfo.name}
                  onChange={handleShippingChange}
                  required
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="address" className="block text-gray-700 font-medium mb-2">
                  Adresse
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={shippingInfo.address}
                  onChange={handleShippingChange}
                  required
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  E-Mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={shippingInfo.email}
                  onChange={handleShippingChange}
                  required
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                  Telefonnummer
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={shippingInfo.phone}
                  onChange={handleShippingChange}
                  required
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </section>

            {/* Секция Способа Оплаты */}
            <section className="mb-6">
              <h2 className="text-2xl font-semibold mb-4">Zahlungsmethode</h2>
              <div className="flex items-center mb-4">
                <input
                  type="radio"
                  id="card"
                  name="paymentMethod"
                  value="card"
                  checked={paymentMethod === 'card'}
                  onChange={() => setPaymentMethod('card')}
                  className="mr-2"
                />
                <label htmlFor="card" className="text-gray-700 font-medium">
                  Kreditkarte
                </label>
              </div>
              <div className="flex items-center mb-4">
                <input
                  type="radio"
                  id="paypal"
                  name="paymentMethod"
                  value="paypal"
                  checked={paymentMethod === 'paypal'}
                  onChange={() => setPaymentMethod('paypal')}
                  className="mr-2"
                />
                <label htmlFor="paypal" className="text-gray-700 font-medium">
                  PayPal
                </label>
              </div>

              {/* Поля для Кредитной Карты */}
              {paymentMethod === 'card' && (
                <div className="mt-4">
                  <div className="mb-4">
                    <label htmlFor="cardNumber" className="block text-gray-700 font-medium mb-2">
                      Kartennummer
                    </label>
                    <input
                      type="text"
                      id="cardNumber"
                      name="cardNumber"
                      value={cardInfo.cardNumber}
                      onChange={handleCardChange}
                      required
                      placeholder="1234 5678 9012 3456"
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div className="flex space-x-4">
                    <div className="mb-4 w-1/2">
                      <label htmlFor="expiryDate" className="block text-gray-700 font-medium mb-2">
                        Ablaufdatum
                      </label>
                      <input
                        type="text"
                        id="expiryDate"
                        name="expiryDate"
                        value={cardInfo.expiryDate}
                        onChange={handleCardChange}
                        required
                        placeholder="MM/YY"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div className="mb-4 w-1/2">
                      <label htmlFor="cvv" className="block text-gray-700 font-medium mb-2">
                        CVV
                      </label>
                      <input
                        type="text"
                        id="cvv"
                        name="cvv"
                        value={cardInfo.cvv}
                        onChange={handleCardChange}
                        required
                        placeholder="123"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Поля для PayPal (Опционально) */}
              {paymentMethod === 'paypal' && (
                <div className="mt-4">
                  <p className="text-gray-700">
                    Sie werden zur PayPal-Seite weitergeleitet, um Ihre Zahlung abzuschließen.
                  </p>
                  <button
                    type="button"
                    className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                    onClick={() => {
                      // Логика перенаправления на PayPal будет реализована другими разработчиками
                      // Например, window.location.href = 'https://www.paypal.com/';
                      toast.info('Weiterleitung zu PayPal...');
                    }}
                  >
                    Mit PayPal bezahlen
                  </button>
                </div>
              )}
            </section>

            {/* Общая Сумма и Кнопка Подтверждения */}
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold">Gesamtsumme: €{totalPrice}</h3>
              <button
                type="submit"
                className="bg-primary text-white px-6 py-2 rounded hover:bg-primary-dark transition-colors"
              >
                Bestellung abschließen
              </button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;
