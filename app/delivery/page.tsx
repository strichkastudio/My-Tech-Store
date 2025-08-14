'use client';

export default function DeliveryPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Доставка та оплата</h1>
          <p className="text-xl text-gray-600">
            Детальна інформація про способи доставки та оплати
          </p>
        </div>

        {/* Доставка */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Доставка</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-blue-50 rounded-lg p-6">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-truck-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Кур'єрська доставка</h3>
              <p className="text-gray-600 mb-4">
                Доставка по Києву протягом 1-2 робочих днів. Кур'єр передзвонить за годину до доставки.
              </p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">По Києву:</span>
                  <span className="font-medium">200 грн</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">При замовленні від 2000 грн:</span>
                  <span className="font-medium text-green-600">Безкоштовно</span>
                </div>
              </div>
            </div>

            <div className="bg-green-50 rounded-lg p-6">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-map-pin-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Нова пошта</h3>
              <p className="text-gray-600 mb-4">
                Доставка у відділення або поштомат Нової пошти по всій Україні.
              </p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">У відділення:</span>
                  <span className="font-medium">від 60 грн</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">За адресою:</span>
                  <span className="font-medium">від 80 грн</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Умови доставки</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Безкоштовна доставка:</h4>
                <ul className="space-y-1 text-gray-600">
                  <li>• При замовленні від 2000 грн по Києву</li>
                  <li>• При замовленні від 5000 грн по Україні</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Терміни доставки:</h4>
                <ul className="space-y-1 text-gray-600">
                  <li>• Київ: 1-2 робочих дні</li>
                  <li>• Україна: 2-5 робочих днів</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Оплата */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Способи оплати</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-bank-card-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Банківська картка</h3>
              <p className="text-gray-600 text-sm">
                Visa, Mastercard, Apple Pay, Google Pay
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-money-dollar-circle-line text-2xl text-green-600"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Готівка</h3>
              <p className="text-gray-600 text-sm">
                Оплата при отриманні товару
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-smartphone-line text-2xl text-purple-600"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Безготівковий</h3>
              <p className="text-gray-600 text-sm">
                Банківський переказ, розстрочка
              </p>
            </div>
          </div>
        </div>

        {/* Додаткова інформація */}
        <div className="bg-blue-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Важлива інформація</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Перевірка товару:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Можливість огляду товару перед оплатою</li>
                <li>• Перевірка комплектності та цілісності</li>
                <li>• Тестування основних функцій</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Гарантії:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Офіційна гарантія виробника</li>
                <li>• Можливість повернення протягом 14 днів</li>
                <li>• Безкоштовний гарантійний ремонт</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}