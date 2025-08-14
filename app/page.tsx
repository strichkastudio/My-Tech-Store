
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { getFeaturedProducts, getNewProducts, categories } from '@/lib/products';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const featuredProducts = getFeaturedProducts();
  const newProducts = getNewProducts();

  const slides = [
    {
      title: 'iPhone 15 Pro Max',
      subtitle: 'Нова епоха мобільних технологій',
      description: 'Революційний чіп A17 Pro, титановий корпус та неймовірні можливості камери',
      price: '54 999',
      originalPrice: '59 999',
      image: 'https://readdy.ai/api/search-image?query=iPhone%2015%20Pro%20Max%20hero%20banner%20with%20modern%20tech%20background%2C%20premium%20smartphone%20floating%20in%20dynamic%20technological%20environment%2C%20blue%20gradient%20background%2C%20futuristic%20lighting%20effects%2C%20professional%20product%20photography&width=800&height=500&seq=hero1&orientation=landscape',
      link: '/product/iphone-15-pro'
    },
    {
      title: 'MacBook Pro M3',
      subtitle: 'Потужність без компромісів',
      description: 'Професійна продуктивність з новим чіпом M3 та Liquid Retina XDR дисплеєм',
      price: '74 999',
      image: 'https://readdy.ai/api/search-image?query=MacBook%20Pro%20M3%20hero%20banner%20with%20creative%20workspace%20background%2C%20premium%20laptop%20in%20modern%20office%20environment%2C%20gradient%20blue%20background%2C%20professional%20lighting%2C%20tech%20lifestyle%20photography&width=800&height=500&seq=hero2&orientation=landscape',
      link: '/product/macbook-pro-m3'
    },
    {
      title: 'Samsung Galaxy S24 Ultra',
      subtitle: 'Штучний інтелект у ваших руках',
      description: 'Galaxy AI, S Pen та найпотужніша камера для професійної фотографії',
      price: '49 999',
      image: 'https://readdy.ai/api/search-image?query=Samsung%20Galaxy%20S24%20Ultra%20hero%20banner%20with%20AI%20technology%20background%2C%20premium%20smartphone%20with%20S%20Pen%2C%20futuristic%20digital%20environment%2C%20purple%20gradient%20background%2C%20high-tech%20atmosphere&width=800&height=500&seq=hero3&orientation=landscape',
      link: '/product/samsung-s24-ultra'
    }
  ];

  const advantages = [
    {
      icon: 'ri-truck-line',
      title: 'Безкоштовна доставка',
      description: 'При замовленні від 2000 грн'
    },
    {
      icon: 'ri-customer-service-line',
      title: '24/7 підтримка',
      description: 'Завжди готові допомогти'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Офіційна гарантія',
      description: 'На всі товари від виробника'
    },
    {
      icon: 'ri-refresh-line',
      title: 'Обмін та повернення',
      description: 'Протягом 14 днів'
    }
  ];

  const testimonials = [
    {
      name: 'Олександр К.',
      rating: 5,
      text: 'Замовляв iPhone 15 Pro. Швидка доставка, оригінальний товар, відмінний сервіс. Рекомендую!',
      avatar: 'https://readdy.ai/api/search-image?query=professional%20male%20portrait%20photo%20for%20customer%20testimonial%2C%20friendly%20businessman%2C%20clean%20background%2C%20modern%20lighting%2C%20professional%20headshot%20photography&width=80&height=80&seq=avatar1&orientation=squarish'
    },
    {
      name: 'Марина В.',
      rating: 5,
      text: 'Купувала MacBook для роботи. Консультанти допомогли з вибором, ціна найкраща в місті!',
      avatar: 'https://readdy.ai/api/search-image?query=professional%20female%20portrait%20photo%20for%20customer%20testimonial%2C%20friendly%20businesswoman%2C%20clean%20background%2C%20modern%20lighting%2C%20professional%20headshot%20photography&width=80&height=80&seq=avatar2&orientation=squarish'
    },
    {
      name: 'Дмитро П.',
      rating: 5,
      text: 'Відмінний магазин! Великий вибір, адекватні ціни, швидка доставка. Буду замовляти ще.',
      avatar: 'https://readdy.ai/api/search-image?query=professional%20male%20portrait%20photo%20for%20customer%20testimonial%2C%20confident%20young%20man%2C%20clean%20background%2C%20modern%20lighting%2C%20professional%20headshot%20photography&width=80&height=80&seq=avatar3&orientation=squarish'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="min-h-screen bg-white">
      {/* Головний слайдер */}
      <section className="relative h-[500px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
              index === currentSlide ? 'translate-x-0' : 'translate-x-full'
            }`}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
              <div className="max-w-lg text-white">
                <p className="text-blue-300 font-medium mb-2">{slide.subtitle}</p>
                <h1 className="text-5xl font-bold mb-4">{slide.title}</h1>
                <p className="text-lg text-gray-200 mb-6">{slide.description}</p>
                <div className="flex items-center space-x-4 mb-6">
                  <span className="text-3xl font-bold text-blue-300">₴{slide.price}</span>
                  {slide.originalPrice && (
                    <span className="text-lg text-gray-300 line-through">₴{slide.originalPrice}</span>
                  )}
                </div>
                <Link href={slide.link} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors whitespace-nowrap cursor-pointer inline-block">
                  Детальніше
                </Link>
              </div>
            </div>
          </div>
        ))}
        
        {/* Індикатори слайдів */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
                index === currentSlide ? 'bg-blue-500' : 'bg-white/50'
              }`}
            ></button>
          ))}
        </div>
      </section>

      {/* Категорії */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Популярні категорії</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {categories.map(category => (
              <Link key={category.id} href={`/category/${category.id}`} className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
                <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4 bg-blue-50 rounded-lg">
                  <i className={`${category.icon} text-2xl text-blue-600`}></i>
                </div>
                <h3 className="font-medium text-gray-900">{category.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Популярні товари */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Популярні товари</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-64 object-cover object-top"
                  />
                  {product.originalPrice && (
                    <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded text-sm font-medium">
                      Акція
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-900 mb-2">{product.name}</h3>
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className={`ri-star-${i < Math.floor(product.rating) ? 'fill' : 'line'} text-sm`}></i>
                      ))}
                    </div>
                    <span className="text-gray-500 text-sm ml-2">({product.reviews})</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-xl font-bold text-gray-900">₴{product.price.toLocaleString()}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">₴{product.originalPrice.toLocaleString()}</span>
                      )}
                    </div>
                    <Link href={`/product/${product.id}`} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap cursor-pointer">
                      Купити
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Переваги */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center">
                <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4 bg-blue-50 rounded-lg">
                  <i className={`${advantage.icon} text-2xl text-blue-600`}></i>
                </div>
                <h3 className="font-medium text-gray-900 mb-2">{advantage.title}</h3>
                <p className="text-gray-600 text-sm">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Відгуки */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Що кажуть наші клієнти</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-medium text-gray-900">{testimonial.name}</h4>
                    <div className="flex text-yellow-400">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <i key={i} className="ri-star-fill text-sm"></i>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
