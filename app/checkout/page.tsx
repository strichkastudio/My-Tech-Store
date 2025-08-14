
'use client';

import { useState } from 'react';
import Link from 'next/link';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '@/lib/emailjs';

export default function CheckoutPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    address: '',
    paymentMethod: 'card',
    deliveryMethod: 'nova-poshta'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const cartItems = [
    {
      id: 'iphone-15-pro',
      name: 'iPhone 15 Pro Max',
      price: 54999,
      quantity: 1
    },
    {
      id: 'airpods-pro-2',
      name: 'AirPods Pro (2-го покоління)',
      price: 9999,
      quantity: 2
    }
  ];

  const totalAmount = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = totalAmount > 2000 ? 0 : 200;
  const finalTotal = totalAmount + deliveryFee;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'city', 'address'];
    for (const field of requiredFields) {
      if (!formData[field as keyof typeof formData].trim()) {
        return false;
      }
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const orderDetails = {
        orderId: `ORDER-${Date.now()}`,
        customerName: `${formData.firstName} ${formData.lastName}`,
        customerEmail: formData.email,
        customerPhone: formData.phone,
        deliveryAddress: `${formData.city}, ${formData.address}`,
        paymentMethod: formData.paymentMethod === 'card' ? 'Картою онлайн' : 'Готівкою при отриманні',
        deliveryMethod: formData.deliveryMethod === 'nova-poshta' ? 'Нова пошта' : 'Кур\'єрська доставка',
        items: cartItems.map(item => `${item.name} x${item.quantity} - ₴${(item.price * item.quantity).toLocaleString()}`).join('\n'),
        totalAmount: `₴${finalTotal.toLocaleString()}`,
        orderDate: new Date().toLocaleString('uk-UA')
      };

      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        orderDetails,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      setSubmitStatus('success');
    } catch (error) {
      console.error('Помилка відправки замовлення:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 py-16 text-center">
          <div className="w-16 h-16 flex items-center justify-center mx-auto mb-6 bg-green-100 rounded-full">
            <i className="ri-check-line text-3xl text-green-600"></i>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Замовлення оформлено!</h1>
          <p className="text-gray-600 mb-8">
            Дякуємо за ваше замовлення. Ми зв'яжемося з вами найближчим часом для підтвердження.
          </p>
          <Link href="/" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors whitespace-nowrap cursor-pointer inline-block">
            Повернутися на головну
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Оформлення замовлення</h1>
          <div className="flex items-center text-sm">
            <Link href="/" className="text-blue-600 hover:text-blue-700 cursor-pointer">
              Головна
            </Link>
            <i className="ri-arrow-right-s-line mx-2 text-gray-400"></i>
            <Link href="/cart" className="text-blue-600 hover:text-blue-700 cursor-pointer">
              Кошик
            </Link>
            <i className="ri-arrow-right-s-line mx-2 text-gray-400"></i>
            <span className="text-gray-600">Оформлення</span>
          </div>
        </div>

        <form id="checkout-form" onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Форма замовлення */}
          <div className="lg:col-span-2 space-y-6">
            {/* Контактна інформація */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Контактна інформація</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ім'я *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Прізвище *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Телефон *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+380"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Адреса доставки */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Адреса доставки</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Спосіб доставки
                  </label>
                  <select
                    name="deliveryMethod"
                    value={formData.deliveryMethod}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-8"
                  >
                    <option value="nova-poshta">Нова пошта</option>
                    <option value="courier">Кур'єрська доставка</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Місто *
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Адреса *
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Вулиця, будинок, квартира"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Спосіб оплати */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Спосіб оплати</h2>
              <div className="space-y-3">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    checked={formData.paymentMethod === 'card'}
                    onChange={handleInputChange}
                    className="mr-3 w-4 h-4 text-blue-600 focus:ring-blue-500"
                  />
                  <div className="flex items-center">
                    <div className="w-6 h-6 flex items-center justify-center mr-3">
                      <i className="ri-bank-card-line text-blue-600"></i>
                    </div>
                    <span className="text-gray-700">Картою онлайн</span>
                  </div>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cash"
                    checked={formData.paymentMethod === 'cash'}
                    onChange={handleInputChange}
                    className="mr-3 w-4 h-4 text-blue-600 focus:ring-blue-500"
                  />
                  <div className="flex items-center">
                    <div className="w-6 h-6 flex items-center justify-center mr-3">
                      <i className="ri-money-dollar-circle-line text-green-600"></i>
                    </div>
                    <span className="text-gray-700">Готівкою при отриманні</span>
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* Підсумок замовлення */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Ваше замовлення</h2>
              
              <div className="space-y-3 mb-4">
                {cartItems.map(item => (
                  <div key={item.id} className="flex justify-between">
                    <span className="text-gray-600">{item.name} x{item.quantity}</span>
                    <span className="font-medium">₴{(item.price * item.quantity).toLocaleString()}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 pt-4 space-y-3 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Вартість товарів:</span>
                  <span className="font-medium">₴{totalAmount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Доставка:</span>
                  <span className="font-medium">
                    {deliveryFee === 0 ? (
                      <span className="text-green-600">Безкоштовно</span>
                    ) : (
                      `₴${deliveryFee}`
                    )}
                  </span>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-lg font-semibold text-gray-900">Разом:</span>
                  <span className="text-xl font-bold text-gray-900">₴{finalTotal.toLocaleString()}</span>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-6 py-3 rounded-lg font-medium transition-colors cursor-pointer whitespace-nowrap"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <i className="ri-loader-line animate-spin mr-2"></i>
                    Оформлення...
                  </span>
                ) : (
                  'Підтвердити замовлення'
                )}
              </button>

              {submitStatus === 'error' && (
                <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-600 text-sm">
                    Помилка при оформленні замовлення. Перевірте правильність заповнення всіх полів.
                  </p>
                </div>
              )}

              <div className="mt-4 pt-4 border-t border-gray-200 text-xs text-gray-500">
                Натискаючи "Підтвердити замовлення", ви погоджуєтеся з умовами обробки персональних даних.
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
