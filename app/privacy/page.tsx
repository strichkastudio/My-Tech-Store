'use client';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Політика конфіденційності</h1>
          <p className="text-xl text-gray-600">
            Ваша приватність має для нас найвищий пріоритет
          </p>
          <p className="text-sm text-gray-500 mt-2">Останнє оновлення: 15 грудня 2024 року</p>
        </div>

        <div className="prose prose-lg max-w-none">
          {/* Вступ */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Загальні положення</h2>
            <div className="bg-blue-50 rounded-lg p-6 mb-6">
              <p className="text-gray-700 leading-relaxed">
                TechStore ("ми", "наш", "компанія") зобов'язується захищати конфіденційність особистої інформації 
                наших клієнтів. Ця Політика конфіденційності описує, як ми збираємо, використовуємо, зберігаємо та 
                захищаємо вашу особисту інформацію при використанні нашого вебсайту та сервісів.
              </p>
            </div>
            <p className="text-gray-600">
              Використовуючи наш сайт, ви погоджуєтеся з умовами цієї Політики конфіденційності. 
              Якщо ви не згодні з будь-якими положеннями, будь ласка, не використовуйте наш сайт.
            </p>
          </div>

          {/* Збір інформації */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Яку інформацію ми збираємо</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Особиста інформація</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Ім'я та прізвище</li>
                  <li>• Email адреса</li>
                  <li>• Номер телефону</li>
                  <li>• Адреса доставки</li>
                  <li>• Дата народження (опціонально)</li>
                </ul>
              </div>
              
              <div className="bg-orange-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Технічна інформація</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• IP-адреса</li>
                  <li>• Тип браузера</li>
                  <li>• Операційна система</li>
                  <li>• Час відвідування</li>
                  <li>• Сторінки, які ви переглядаєте</li>
                </ul>
              </div>
            </div>

            <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Інформація про покупки</h3>
              <p className="text-gray-600 mb-3">
                Ми зберігаємо інформацію про ваші замовлення, включаючи:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-1 text-gray-600">
                  <li>• Придбані товари</li>
                  <li>• Дати замовлень</li>
                  <li>• Суми покупок</li>
                </ul>
                <ul className="space-y-1 text-gray-600">
                  <li>• Статус замовлень</li>
                  <li>• Спосіб оплати</li>
                  <li>• Історія повернень</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Використання інформації */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Як ми використовуємо вашу інформацію</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Обробка замовлень</h3>
                <p className="text-gray-600">
                  Використовуємо вашу інформацію для обробки замовлень, організації доставки, 
                  надання підтримки клієнтам та вирішення питань щодо ваших покупок.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Покращення сервісу</h3>
                <p className="text-gray-600">
                  Аналізуємо поведінку користувачів для покращення функціональності сайту, 
                  персоналізації пропозицій та оптимізації користувацького досвіду.
                </p>
              </div>

              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Маркетингові комунікації</h3>
                <p className="text-gray-600">
                  З вашої згоди надсилаємо інформацію про нові товари, акції та спеціальні пропозиції. 
                  Ви можете відписатися в будь-який час.
                </p>
              </div>
            </div>
          </div>

          {/* Захист інформації */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Захист вашої інформації</h2>
            
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
              <div className="flex items-center mb-3">
                <i className="ri-shield-check-line text-2xl text-red-600 mr-3"></i>
                <h3 className="text-lg font-semibold text-gray-900">Заходи безпеки</h3>
              </div>
              <p className="text-gray-600">
                Ми використовуємо сучасні технології шифрування SSL/TLS для захисту передачі даних. 
                Всі платіжні операції обробляються через захищені канали.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="ri-lock-line text-xl text-blue-600"></i>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Шифрування</h4>
                <p className="text-sm text-gray-600">256-бітне SSL шифрування всіх даних</p>
              </div>
              
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="ri-server-line text-xl text-green-600"></i>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Безпечні сервери</h4>
                <p className="text-sm text-gray-600">Захищені дата-центри з обмеженим доступом</p>
              </div>
              
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="ri-eye-close-line text-xl text-purple-600"></i>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Обмежений доступ</h4>
                <p className="text-sm text-gray-600">Лише авторизований персонал має доступ</p>
              </div>
            </div>
          </div>

          {/* Cookies */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Використання Cookies</h2>
            
            <div className="bg-yellow-50 rounded-lg p-6 mb-6">
              <p className="text-gray-700">
                Наш сайт використовує cookies для покращення вашого досвіду. Cookies - це невеликі файли, 
                які зберігаються на вашому пристрої та допомагають нам запам'ятовувати ваші налаштування.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Типи cookies:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Необхідні cookies (для роботи сайту)</li>
                  <li>• Функціональні cookies (налаштування)</li>
                  <li>• Аналітичні cookies (статистика)</li>
                  <li>• Маркетингові cookies (реклама)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Ваш контроль:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Ви можете відключити cookies в браузері</li>
                  <li>• Налаштувати які cookies приймати</li>
                  <li>• Видалити існуючі cookies</li>
                  <li>• Отримувати сповіщення про нові cookies</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Ваші права */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Ваші права</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-teal-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Право на доступ</h3>
                <p className="text-gray-600">
                  Ви можете запитати копію всієї особистої інформації, яку ми про вас зберігаємо.
                </p>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Право на виправлення</h3>
                <p className="text-gray-600">
                  Ви можете запитати виправлення неточної або неповної інформації.
                </p>
              </div>
              
              <div className="bg-red-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Право на видалення</h3>
                <p className="text-gray-600">
                  Ви можете запитати видалення вашої особистої інформації з наших систем.
                </p>
              </div>
              
              <div className="bg-orange-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Право на портативність</h3>
                <p className="text-gray-600">
                  Ви можете запитати передачу ваших даних іншому постачальнику послуг.
                </p>
              </div>
            </div>
          </div>

          {/* Контакти */}
          <div className="bg-gray-900 text-white rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6">7. Зв'яжіться з нами</h2>
            <p className="text-gray-300 mb-6">
              Якщо у вас є питання щодо цієї Політики конфіденційності або ви хочете скористатися 
              своїми правами, зв'яжіться з нами:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold mb-4">Контактна інформація:</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <i className="ri-mail-line text-blue-400 mr-3"></i>
                    <span>privacy@techstore.ua</span>
                  </div>
                  <div className="flex items-center">
                    <i className="ri-phone-line text-blue-400 mr-3"></i>
                    <span>+38 (067) 123-45-67</span>
                  </div>
                  <div className="flex items-center">
                    <i className="ri-map-pin-line text-blue-400 mr-3"></i>
                    <span>м. Київ, вул. Хрещатик 22, офіс 15</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Час відповіді:</h3>
                <p className="text-gray-300">
                  Ми відповідаємо на запити щодо конфіденційності протягом 30 днів з моменту отримання.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}