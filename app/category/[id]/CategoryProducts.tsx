
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { getProductsByCategory } from '@/lib/products';

interface CategoryProductsProps {
  categoryId: string;
}

export default function CategoryProducts({ categoryId }: CategoryProductsProps) {
  const [sortBy, setSortBy] = useState('name');
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  const allProducts = getProductsByCategory(categoryId);

  const brands = Array.from(new Set(allProducts.map(product => product.brand)));

  const filteredProducts = allProducts.filter(product => {
    if (product.price < priceRange[0] || product.price > priceRange[1]) {
      return false;
    }
    if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand)) {
      return false;
    }
    return true;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-asc':
        return a.price - b.price;
      case 'price-desc':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      default:
        return a.name.localeCompare(b.name);
    }
  });

  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev =>
      prev.includes(brand)
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Фільтри */}
      <div className="lg:w-64 space-y-6">
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h3 className="font-semibold text-gray-900 mb-4">Ціна</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-600 mb-2">Від</label>
              <input
                type="number"
                value={priceRange[0]}
                onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                placeholder="0"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-2">До</label>
              <input
                type="number"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 100000])}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                placeholder="100000"
              />
            </div>
          </div>
        </div>

        {brands.length > 0 && (
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="font-semibold text-gray-900 mb-4">Бренд</h3>
            <div className="space-y-2">
              {brands.map(brand => (
                <label key={brand} className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedBrands.includes(brand)}
                    onChange={() => toggleBrand(brand)}
                    className="mr-3 w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <span className="text-gray-700">{brand}</span>
                </label>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Список товарів */}
      <div className="flex-1">
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600">
            Знайдено {sortedProducts.length} товарів
          </p>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">Сортувати:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm pr-8"
            >
              <option value="name">За назвою</option>
              <option value="price-asc">Спочатку дешевші</option>
              <option value="price-desc">Спочатку дорожчі</option>
              <option value="rating">За рейтингом</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedProducts.map(product => (
            <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="relative">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-64 object-contain bg-white"
                />
                {product.originalPrice && (
                  <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded text-sm font-medium">
                    Акція
                  </div>
                )}
                {!product.inStock && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <span className="text-white font-medium">Немає в наявності</span>
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-medium text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                  <Link href={`/product/${product.id}`} className="cursor-pointer">
                    {product.name}
                  </Link>
                </h3>
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
                  <Link
                    href={`/product/${product.id}`}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap cursor-pointer"
                  >
                    Детальніше
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {sortedProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4 bg-gray-100 rounded-full">
              <i className="ri-search-line text-2xl text-gray-400"></i>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Товари не знайдено</h3>
            <p className="text-gray-600">Спробуйте змінити фільтри пошуку</p>
          </div>
        )}
      </div>
    </div>
  );
}
