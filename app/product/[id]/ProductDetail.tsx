
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { getProductById, products } from '@/lib/products';

interface ProductDetailProps {
  productId: string;
}

// Простий стейт менеджер для кошика
let cartItems: any[] = [];
let cartUpdateCallback: (() => void) | null = null;

export const setCartUpdateCallback = (callback: () => void) => {
  cartUpdateCallback = callback;
};

export const addToCart = (product: any, quantity: number = 1) => {
  const existingItem = cartItems.find(item => item.id === product.id);
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cartItems.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      quantity: quantity
    });
  }
  if (cartUpdateCallback) cartUpdateCallback();
  
  // Показуємо повідомлення про додавання
  if (typeof window !== 'undefined') {
    const notification = document.createElement('div');
    notification.className = 'fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50';
    notification.textContent = `${product.name} додано до кошика!`;
    document.body.appendChild(notification);
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 3000);
  }
};

export const getCartItems = () => cartItems;
export const getCartCount = () => cartItems.reduce((sum, item) => sum + item.quantity, 0);

export default function ProductDetail({ productId }: ProductDetailProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const product = getProductById(productId);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Товар не знайдено</h1>
        <Link href="/catalog" className="text-blue-600 hover:text-blue-700 cursor-pointer">
          Повернутися до каталогу
        </Link>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Навігаційні крихти */}
      <div className="flex items-center mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-700 cursor-pointer">
          Головна
        </Link>
        <i className="ri-arrow-right-s-line mx-2 text-gray-400"></i>
        <Link href="/catalog" className="text-blue-600 hover:text-blue-700 cursor-pointer">
          Каталог
        </Link>
        <i className="ri-arrow-right-s-line mx-2 text-gray-400"></i>
        <span className="text-gray-600">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {/* Галерея зображень */}
        <div>
          <div className="mb-4">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="w-full h-96 lg:h-[500px] object-contain bg-white rounded-lg"
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`relative rounded-lg overflow-hidden cursor-pointer ${
                  selectedImage === index ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                <img
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                  className="w-full h-20 object-contain bg-gray-50"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Інформація про товар */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>

          <div className="flex items-center mb-6">
            <div className="flex text-yellow-400 mr-2">
              {[...Array(5)].map((_, i) => (
                <i key={i} className={`ri-star-${i < Math.floor(product.rating) ? 'fill' : 'line'} text-lg`}></i>
              ))}
            </div>
            <span className="text-gray-600">({product.reviews} відгуків)</span>
          </div>

          <div className="mb-6">
            <div className="flex items-center space-x-4 mb-2">
              <span className="text-3xl font-bold text-gray-900">₴{product.price.toLocaleString()}</span>
              {product.originalPrice && (
                <span className="text-xl text-gray-500 line-through">₴{product.originalPrice.toLocaleString()}</span>
              )}
            </div>
            {product.originalPrice && (
              <div className="text-green-600 font-medium">
                Економія ₴{(product.originalPrice - product.price).toLocaleString()}
              </div>
            )}
          </div>

          <p className="text-gray-600 mb-8 leading-relaxed">{product.description}</p>

          {/* Кількість та кнопка покупки */}
          <div className="flex items-center space-x-4 mb-8">
            <div className="flex items-center border border-gray-300 rounded-lg">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-2 hover:bg-gray-50 cursor-pointer whitespace-nowrap"
              >
                <i className="ri-subtract-line"></i>
              </button>
              <span className="px-4 py-2 border-l border-r border-gray-300">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-2 hover:bg-gray-50 cursor-pointer whitespace-nowrap"
              >
                <i className="ri-add-line"></i>
              </button>
            </div>
            <button 
              onClick={handleAddToCart}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors cursor-pointer whitespace-nowrap"
            >
              <i className="ri-shopping-cart-line mr-2"></i>
              Додати до кошика
            </button>
            <button className="w-12 h-12 flex items-center justify-center border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
              <i className="ri-heart-line text-gray-600"></i>
            </button>
          </div>

          {/* Статус наявності */}
          <div className="flex items-center mb-8">
            <div className={`w-3 h-3 rounded-full mr-2 ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`}></div>
            <span className={`font-medium ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
              {product.inStock ? 'В наявності' : 'Немає в наявності'}
            </span>
          </div>

          {/* Переваги */}
          <div className="bg-gray-50 rounded-lg p-4 space-y-3">
            <div className="flex items-center">
              <div className="w-5 h-5 flex items-center justify-center mr-3">
                <i className="ri-truck-line text-blue-600"></i>
              </div>
              <span className="text-gray-700">Безкоштовна доставка від 2000 грн</span>
            </div>
            <div className="flex items-center">
              <div className="w-5 h-5 flex items-center justify-center mr-3">
                <i className="ri-refresh-line text-blue-600"></i>
              </div>
              <span className="text-gray-700">Обмін та повернення протягом 14 днів</span>
            </div>
            <div className="flex items-center">
              <div className="w-5 h-5 flex items-center justify-center mr-3">
                <i className="ri-shield-check-line text-blue-600"></i>
              </div>
              <span className="text-gray-700">Офіційна гарантія</span>
            </div>
          </div>
        </div>
      </div>

      {/* Характеристики */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Характеристики</h2>
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          {Object.entries(product.specifications).map(([key, value], index) => (
            <div key={key} className={`px-6 py-4 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
              <div className="flex justify-between">
                <span className="font-medium text-gray-600">{key}</span>
                <span className="text-gray-900">{value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Схожі товари */}
      {relatedProducts.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Схожі товари</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map(relatedProduct => (
              <div key={relatedProduct.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative">
                  <img
                    src={relatedProduct.images[0]}
                    alt={relatedProduct.name}
                    className="w-full h-48 object-contain bg-white"
                  />
                  {relatedProduct.originalPrice && (
                    <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded text-sm font-medium">
                      Акція
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                    <Link href={`/product/${relatedProduct.id}`} className="cursor-pointer">
                      {relatedProduct.name}
                    </Link>
                  </h3>
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className={`ri-star-${i < Math.floor(relatedProduct.rating) ? 'fill' : 'line'} text-sm`}></i>
                      ))}
                    </div>
                    <span className="text-gray-500 text-sm ml-2">({relatedProduct.reviews})</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold text-gray-900">₴{relatedProduct.price.toLocaleString()}</span>
                      {relatedProduct.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">₴{relatedProduct.originalPrice.toLocaleString()}</span>
                      )}
                    </div>
                    <Link
                      href={`/product/${relatedProduct.id}`}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap cursor-pointer"
                    >
                      Купити
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}