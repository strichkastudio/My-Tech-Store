
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { getCartItems, getCartCount, setCartUpdateCallback } from '@/app/product/[id]/ProductDetail';

interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    setCartItems(getCartItems());
    setCartUpdateCallback(() => {
      setCartItems(getCartItems());
    });
  }, []);

  const updateQuantity = (id: string, newQuantity: number) => {
    const items = getCartItems();
    if (newQuantity === 0) {
      const itemIndex = items.findIndex(item => item.id === id);
      if (itemIndex !== -1) {
        items.splice(itemIndex, 1);
      }
    } else {
      const item = items.find(item => item.id === id);
      if (item) {
        item.quantity = newQuantity;
      }
    }
    setCartItems([...items]);
  };

  const removeItem = (id: string) => {
    const items = getCartItems();
    const itemIndex = items.findIndex(item => item.id === id);
    if (itemIndex !== -1) {
      items.splice(itemIndex, 1);
    }
    setCartItems([...items]);
  };

  const totalAmount = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = totalAmount > 2000 ? 0 : 200;
  const finalTotal = totalAmount + deliveryFee;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Кошик</h1>
          <div className="flex items-center text-sm">
            <Link href="/" className="text-blue-600 hover:text-blue-700 cursor-pointer">
              Головна
            </Link>
            <i className="ri-arrow-right-s-line mx-2 text-gray-400"></i>
            <span className="text-gray-600">Кошик</span>
          </div>
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-24 h-24 flex items-center justify-center mx-auto mb-6 bg-gray-100 rounded-full">
              <i className="ri-shopping-cart-line text-4xl text-gray-400"></i>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ваш кошик порожній</h2>
            <p className="text-gray-600 mb-8">Додайте товари до кошика, щоб оформити замовлення</p>
            <Link href="/catalog" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors whitespace-nowrap cursor-pointer inline-block">
              Перейти до каталогу
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Список товарів */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h2 className="text-lg font-semibold text-gray-900">Товари в кошику ({cartItems.length})</h2>
                </div>
                <div className="divide-y divide-gray-200">
                  {cartItems.map(item => (
                    <div key={item.id} className="px-6 py-4">
                      <div className="flex items-center">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20 object-cover object-top rounded-lg mr-4"
                        />
                        <div className="flex-1">
                          <h3 className="font-medium text-gray-900 mb-1">
                            <Link href={`/product/${item.id}`} className="hover:text-blue-600 cursor-pointer">
                              {item.name}
                            </Link>
                          </h3>
                          <p className="text-lg font-bold text-gray-900">₴{item.price.toLocaleString()}</p>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center border border-gray-300 rounded-lg">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="px-3 py-2 hover:bg-gray-50 cursor-pointer whitespace-nowrap"
                            >
                              <i className="ri-subtract-line"></i>
                            </button>
                            <span className="px-4 py-2 border-l border-r border-gray-300">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="px-3 py-2 hover:bg-gray-50 cursor-pointer whitespace-nowrap"
                            >
                              <i className="ri-add-line"></i>
                            </button>
                          </div>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="w-8 h-8 flex items-center justify-center text-red-600 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                          >
                            <i className="ri-delete-bin-line"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Підсумок замовлення */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Підсумок замовлення</h2>
                
                <div className="space-y-3 mb-4">
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
                  {deliveryFee > 0 && (
                    <p className="text-sm text-gray-500">
                      Безкоштовна доставка від ₴2,000
                    </p>
                  )}
                </div>

                <div className="border-t border-gray-200 pt-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-lg font-semibold text-gray-900">Разом:</span>
                    <span className="text-xl font-bold text-gray-900">₴{finalTotal.toLocaleString()}</span>
                  </div>
                </div>

                <Link
                  href="/checkout"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors cursor-pointer inline-block text-center whitespace-nowrap"
                >
                  Оформити замовлення
                </Link>

                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <div className="w-4 h-4 flex items-center justify-center mr-1">
                        <i className="ri-shield-check-line text-green-500"></i>
                      </div>
                      Захищені платежі
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 flex items-center justify-center mr-1">
                        <i className="ri-truck-line text-blue-500"></i>
                      </div>
                      Швидка доставка
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}