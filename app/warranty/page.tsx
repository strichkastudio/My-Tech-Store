'use client';

export default function WarrantyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Гарантія та повернення</h1>
          <p className="text-xl text-gray-600">
            Ваші права та гарантії при покупці в TechStore
          </p>
        </div>

        {/* Гарантійні умови */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Гарантійні умови</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-green-50 rounded-lg p-6">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-shield-check-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Офіційна гарантія</h3>
              <p className="text-gray-600 mb-4">
                На всі товари діє офіційна гарантія виробника від 12 до 36 місяців.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Смартфони: 12-24 місяці</li>
                <li>• Ноутбуки: 12-36 місяців</li>
                <li>• Навушники: 12-24 місяці</li>
                <li>• Аксесуари: 6-12 місяців</li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-tools-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Гарантійний сервіс</h3>
              <p className="text-gray-600 mb-4">
                Безкоштовний ремонт або заміна товару при виявленні виробничих дефектів.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Діагностика безкоштовно</li>
                <li>• Ремонт до 21 дня</li>
                <li>• Заміна на новий товар при необхідності</li>
                <li>• Авторизовані сервісні центри</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Що покриває гарантія</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-green-600 mb-2">✓ Покривається:</h4>
                <ul className="space-y-1 text-gray-600">
                  <li>• Виробничі дефекти</li>
                  <li>• Несправності компонентів</li>
                  <li>• Програмні збої</li>
                  <li>• Дефекти матеріалів</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-red-600 mb-2">✗ Не покривається:</h4>
                <ul className="space-y-1 text-gray-600">
                  <li>• Механічні пошкодження</li>
                  <li>• Пошкодження рідиною</li>
                  <li>• Неправильне використання</li>
                  <li>• Самостійний ремонт</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Повернення товару */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Повернення товару</h2>
          
          <div className="bg-orange-50 rounded-lg p-6 mb-8">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mr-4">
                <i className="ri-time-line text-2xl text-white"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">14 днів на повернення</h3>
                <p className="text-gray-600">Ви можете повернути товар протягом 14 днів без пояснення причин</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Зв'яжіться з нами</h3>
              <p className="text-gray-600 text-sm">
                Телефонуйте або пишіть для оформлення повернення
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Упакуйте товар</h3>
              <p className="text-gray-600 text-sm">
                Збережіть оригінальну упаковку та комплектацію
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Отримайте кошти</h3>
              <p className="text-gray-600 text-sm">
                Гроші повернуться протягом 5-10 робочих днів
              </p>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-3">Умови повернення:</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Товар має бути в оригінальній упаковці</li>
              <li>• Збережена товарна накладна або чек</li>
              <li>• Відсутність слідів використання</li>
              <li>• Повна комплектація (коробка, документи, аксесуари)</li>
              <li>• Товар не входить до переліку товарів, що не підлягають поверненню</li>
            </ul>
          </div>
        </div>

        {/* Обмін товару */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Обмін товару</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-purple-50 rounded-lg p-6">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-refresh-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Обмін на аналогічний</h3>
              <p className="text-gray-600 mb-4">
                Можливість обміну на товар такої ж моделі іншого кольору або комплектації.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Безкоштовний обмін</li>
                <li>• Термін: до 14 днів</li>
                <li>• При наявності на складі</li>
              </ul>
            </div>

            <div className="bg-teal-50 rounded-lg p-6">
              <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-arrow-up-down-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Обмін на інший товар</h3>
              <p className="text-gray-600 mb-4">
                Обмін на товар іншої моделі з доплатою або поверненням різниці.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Доплата при більшій вартості</li>
                <li>• Повернення різниці</li>
                <li>• Індивідуальний розгляд</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Контакти для гарантії */}
        <div className="bg-gray-900 text-white rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Гарантійна підтримка</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Зв'яжіться з нами:</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <i className="ri-phone-line text-blue-400 mr-3"></i>
                  <span>+38 (067) 123-45-67</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-mail-line text-blue-400 mr-3"></i>
                  <span>warranty@techstore.ua</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-time-line text-blue-400 mr-3"></i>
                  <span>Пн-Пт: 9:00-18:00</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Документи для гарантії:</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Гарантійний талон</li>
                <li>• Товарна накладна або чек</li>
                <li>• Паспорт або ID-картка</li>
                <li>• Опис несправності</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}