
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center">
        <div className="mb-8">
          <img 
            src="https://readdy.ai/api/search-image?query=404%20error%20page%20illustration%20with%20cute%20robot%20or%20character%20looking%20confused%2C%20friendly%20design%2C%20light%20colors%2C%20modern%20minimalist%20style%2C%20tech%20theme&width=400&height=300&seq=404error&orientation=landscape"
            alt="404 Error"
            className="mx-auto w-64 h-48 object-cover object-top rounded-lg"
          />
        </div>
        
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Сторінку не знайдено</h2>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">
          Вибачте, але сторінка, яку ви шукаєте, не існує або була переміщена.
        </p>
        
        <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
          <Link 
            href="/"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors whitespace-nowrap cursor-pointer"
          >
            На головну
          </Link>
          <Link 
            href="/catalog"
            className="inline-block bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 px-6 py-3 rounded-lg font-medium transition-colors whitespace-nowrap cursor-pointer"
          >
            До каталогу
          </Link>
        </div>
      </div>
    </div>
  );
}
