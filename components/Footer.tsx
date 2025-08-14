
'use client';

import Link from 'next/link';
import { categories } from '@/lib/products';

export default function Footer() {
  const handleYouTubeClick = () => {
    if (typeof window !== 'undefined') {
      window.open('https://youtube.com/@techstore_ukraine', '_blank');
    }
  };

  const handleTelegramClick = () => {
    if (typeof window !== 'undefined') {
      window.open('https://t.me/techstore_ukraine', '_blank');
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Про магазин */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 flex items-center justify-center">
                <i className="ri-flashlight-line text-2xl text-blue-400"></i>
              </div>
              <span className="font-['Pacifico'] text-xl">TechStore</span>
            </div>
            <p className="text-gray-300 mb-4">
              Ваш надійний партнер у світі сучасних технологій. Якісна електроніка, найкращі ціни та професійний сервіс.
            </p>
            <div className="flex space-x-3">
              <a 
                href="https://facebook.com/techstore.ua" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-blue-400 transition-colors cursor-pointer"
              >
                <i className="ri-facebook-fill"></i>
              </a>
              <a 
                href="https://instagram.com/techstore.ua" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-blue-400 transition-colors cursor-pointer"
              >
                <i className="ri-instagram-line"></i>
              </a>
              <button 
                onClick={handleTelegramClick}
                className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-blue-400 transition-colors cursor-pointer"
              >
                <i className="ri-telegram-line"></i>
              </button>
              <button 
                onClick={handleYouTubeClick}
                className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-blue-400 transition-colors cursor-pointer"
              >
                <i className="ri-youtube-line"></i>
              </button>
            </div>
          </div>

          {/* Категорії */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Категорії</h3>
            <ul className="space-y-2">
              {categories.map(category => (
                <li key={category.id}>
                  <Link href={`/category/${category.id}`} className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Інформація */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Інформація</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Про нас
                </Link>
              </li>
              <li>
                <Link href="/delivery" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Доставка та оплата
                </Link>
              </li>
              <li>
                <Link href="/warranty" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Гарантія та повернення
                </Link>
              </li>
              <li>
                <Link href="/contacts" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Контакти
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Політика конфіденційності
                </Link>
              </li>
            </ul>
          </div>

          {/* Контакти */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Контакти</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-5 h-5 flex items-center justify-center mr-3">
                  <i className="ri-phone-line text-blue-400"></i>
                </div>
                <a href="tel:+380671234567" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  +38 (067) 123-45-67
                </a>
              </div>
              <div className="flex items-center">
                <div className="w-5 h-5 flex items-center justify-center mr-3">
                  <i className="ri-mail-line text-blue-400"></i>
                </div>
                <a href="mailto:info@techstore.ua" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  info@techstore.ua
                </a>
              </div>
              <div className="flex items-start">
                <div className="w-5 h-5 flex items-center justify-center mr-3 mt-0.5">
                  <i className="ri-map-pin-line text-blue-400"></i>
                </div>
                <span className="text-gray-300">
                  м. Київ, вул. Хрещатик 22,<br />
                  офіс 15, 01001
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-5 h-5 flex items-center justify-center mr-3">
                  <i className="ri-time-line text-blue-400"></i>
                </div>
                <span className="text-gray-300">
                  Пн-Пт: 9:00-19:00<br />
                  Сб-Нд: 10:00-17:00
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              2024 TechStore. Всі права захищені.
            </p>
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <div className="w-6 h-6 flex items-center justify-center mr-2">
                  <i className="ri-bank-card-line text-gray-400"></i>
                </div>
                <span className="text-gray-400 text-sm">Visa</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 flex items-center justify-center mr-2">
                  <i className="ri-bank-card-line text-gray-400"></i>
                </div>
                <span className="text-gray-400 text-sm">Mastercard</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 flex items-center justify-center mr-2">
                  <i className="ri-smartphone-line text-gray-400"></i>
                </div>
                <span className="text-gray-400 text-sm">Apple Pay</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}