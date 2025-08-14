
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { categories } from '@/lib/products';
import { getCartCount, setCartUpdateCallback } from '@/app/product/[id]/ProductDetail';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    setCartCount(getCartCount());
    setCartUpdateCallback(() => {
      setCartCount(getCartCount());
    });
  }, []);

  // Defensive fallback – guarantees an iterable array
  const categoryList = Array.isArray(categories) ? categories : [];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="px-4 mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Логотип */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 flex items-center justify-center">
              <i className="ri-flashlight-line text-2xl text-blue-600"></i>
            </div>
            <span className="font-['Pacifico'] text-xl text-gray-900">TechStore</span>
          </Link>

          {/* Навігація для десктопу */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/catalog"
              className="text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer"
            >
              Каталог
            </Link>
            <div className="relative">
              <button
                onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                onMouseEnter={() => setIsCategoriesOpen(true)}
                className="text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer flex items-center"
              >
                Категорії
                <i
                  className={`ri-arrow-down-s-line ml-1 transition-transform ${
                    isCategoriesOpen ? 'rotate-180' : ''
                  }`}
                ></i>
              </button>
              {isCategoriesOpen && (
                <div
                  className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 w-48 z-10"
                  onMouseLeave={() => setIsCategoriesOpen(false)}
                >
                  {categoryList.map((category) => (
                    <Link
                      key={category.id}
                      href={`/category/${category.id}`}
                      onClick={() => setIsCategoriesOpen(false)}
                      className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors cursor-pointer"
                    >
                      <i className={`${category.icon} mr-3`}></i>
                      {category.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              href="/about"
              className="text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer"
            >
              Про нас
            </Link>
            <Link
              href="/contacts"
              className="text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer"
            >
              Контакти
            </Link>
          </nav>

          {/* Пошук */}
          <div className="flex-1 max-w-md mx-8 hidden md:block">
            <div className="relative">
              <input
                type="text"
                placeholder="Пошук товарів..."
                className="w-full px-4 py-2 pl-10 pr-4 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 flex items-center justify-center">
                <i className="ri-search-line text-gray-400 text-sm"></i>
              </div>
            </div>
          </div>

          {/* Іконки */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="md:hidden w-8 h-8 flex items-center justify-center text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
            >
              <i className="ri-search-line text-xl"></i>
            </button>

            <Link
              href="/cart"
              className="relative w-8 h-8 flex items-center justify-center text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
            >
              <i className="ri-shopping-cart-line text-xl"></i>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            <Link
              href="/account"
              className="w-8 h-8 flex items-center justify-center text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
            >
              <i className="ri-user-line text-xl"></i>
            </Link>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden w-8 h-8 flex items-center justify-center text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
            >
              <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-xl`}></i>
            </button>
          </div>
        </div>

        {/* Мобільний пошук */}
        {isSearchOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="relative">
              <input
                type="text"
                placeholder="Пошук товарів..."
                className="w-full px-4 py-2 pl-10 pr-4 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 flex items-center justify-center">
                <i className="ri-search-line text-gray-400 text-sm"></i>
              </div>
            </div>
          </div>
        )}

        {/* Мобільне меню */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="space-y-4">
              <Link
                href="/catalog"
                className="block text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
              >
                Каталог
              </Link>
              <div className="space-y-2">
                <div className="text-gray-700 font-medium">Категорії</div>
                {categoryList.map((category) => (
                  <Link
                    key={category.id}
                    href={`/category/${category.id}`}
                    className="flex items-center pl-4 py-1 text-gray-600 hover:text-blue-600 transition-colors cursor-pointer"
                  >
                    <i className={`${category.icon} mr-3`}></i>
                    {category.name}
                  </Link>
                ))}
              </div>
              <Link
                href="/about"
                className="block text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
              >
                Про нас
              </Link>
              <Link
                href="/contacts"
                className="block text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
              >
                Контакти
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}