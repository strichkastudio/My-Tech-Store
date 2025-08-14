
'use client';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero секція */}
      <div 
        className="relative h-96 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://readdy.ai/api/search-image?query=modern%20electronics%20store%20interior%20with%20sleek%20design%2C%20professional%20lighting%2C%20clean%20white%20walls%2C%20technology%20displays%2C%20minimalist%20aesthetic%2C%20corporate%20environment%2C%20high-tech%20atmosphere&width=1200&height=400&seq=about-hero&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Про TechStore</h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto px-4">
              Ваш надійний партнер у світі сучасних технологій
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Наша місія */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Наша місія</h2>
            <p className="text-lg text-gray-700 mb-6">
              TechStore - це більше ніж просто магазин електроніки. Ми прагнемо зробити сучасні технології доступними для кожного, надаючи найкращий сервіс та професійні консультації.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Наша мета - допомогти вам знайти ідеальне технічне рішення, яке покращить ваше життя та роботу. Ми ретельно відбираємо продукцію від найкращих світових брендів.
            </p>
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">5+</div>
                <div className="text-gray-600">років на ринку</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">10K+</div>
                <div className="text-gray-600">задоволених клієнтів</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">500+</div>
                <div className="text-gray-600">товарів в асортименті</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://readdy.ai/api/search-image?query=happy%20customers%20using%20modern%20electronics%20in%20bright%20store%2C%20people%20testing%20smartphones%20and%20laptops%2C%20friendly%20staff%20helping%20clients%2C%20modern%20retail%20environment%2C%20positive%20shopping%20experience&width=600&height=400&seq=mission-image&orientation=landscape"
              alt="Наша місія"
              className="rounded-lg shadow-lg object-cover w-full h-80"
            />
          </div>
        </div>

        {/* Наші переваги */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Чому обирають TechStore?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-shield-check-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Якість та надійність</h3>
              <p className="text-gray-600">
                Ми працюємо лише з офіційними постачальниками та надаємо повну гарантію на всю продукцію.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-customer-service-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Професійна підтримка</h3>
              <p className="text-gray-600">
                Наші експерти допоможуть вибрати найкращий варіант та нададуть технічну підтримку після покупки.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-truck-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Швидка доставка</h3>
              <p className="text-gray-600">
                Доставляємо замовлення по всій Україні протягом 1-3 робочих днів з можливістю самовивозу.
              </p>
            </div>
          </div>
        </div>

        {/* Наша команда */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Наша команда</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <img 
                src="https://readdy.ai/api/search-image?query=professional%20male%20manager%20in%20modern%20office%2C%20friendly%20smile%2C%20business%20casual%20attire%2C%20technology%20background%2C%20confident%20leadership%20portrait%2C%2030-35%20years%20old&width=300&height=300&seq=team-manager&orientation=squarish"
                alt="Олександр Іваненко"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover object-top"
              />
              <h3 className="text-xl font-semibold mb-2">Олександр Іваненко</h3>
              <p className="text-blue-600 mb-2">Директор магазину</p>
              <p className="text-gray-600 text-sm">
                15 років досвіду в IT-індустрії. Експерт з підбору корпоративних рішень.
              </p>
            </div>
            <div className="text-center">
              <img 
                src="https://readdy.ai/api/search-image?query=professional%20female%20sales%20consultant%20in%20electronics%20store%2C%20warm%20smile%2C%20modern%20uniform%2C%20helping%20customers%20with%20technology%2C%20friendly%20service%20representative%2C%2025-30%20years%20old&width=300&height=300&seq=team-consultant&orientation=squarish"
                alt="Марія Петренко"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover object-top"
              />
              <h3 className="text-xl font-semibold mb-2">Марія Петренко</h3>
              <p className="text-blue-600 mb-2">Головний консультант</p>
              <p className="text-gray-600 text-sm">
                Спеціаліст з мобільних пристроїв та аксесуарів. Допоможе обрати ідеальний гаджет.
              </p>
            </div>
            <div className="text-center">
              <img 
                src="https://readdy.ai/api/search-image?query=professional%20male%20technical%20support%20specialist%2C%20focused%20expression%2C%20computer%20workstation%20background%2C%20modern%20office%20environment%2C%20IT%20expert%20helping%20customers%2C%2028-35%20years%20old&width=300&height=300&seq=team-support&orientation=squarish"
                alt="Андрій Коваленко"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover object-top"
              />
              <h3 className="text-xl font-semibold mb-2">Андрій Коваленко</h3>
              <p className="text-blue-600 mb-2">Технічний експерт</p>
              <p className="text-gray-600 text-sm">
                Інженер з комп'ютерних систем. Надає технічну підтримку та консультації.
              </p>
            </div>
          </div>
        </div>

        {/* Наші досягнення */}
        <div className="bg-gray-50 rounded-lg p-8 mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Наші досягнення</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <i className="ri-award-line text-xl text-yellow-600"></i>
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">№1</div>
              <p className="text-gray-600 text-sm">Магазин електроніки в регіоні</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <i className="ri-star-line text-xl text-green-600"></i>
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">4.9</div>
              <p className="text-gray-600 text-sm">Рейтинг від клієнтів</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <i className="ri-time-line text-xl text-blue-600"></i>
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">24/7</div>
              <p className="text-gray-600 text-sm">Онлайн підтримка</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <i className="ri-refresh-line text-xl text-purple-600"></i>
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">30</div>
              <p className="text-gray-600 text-sm">днів на повернення</p>
            </div>
          </div>
        </div>

        {/* Наші партнери */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Наші партнери</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            <div className="flex items-center justify-center h-16">
              <div className="w-8 h-8 flex items-center justify-center">
                <i className="ri-apple-fill text-3xl text-gray-400"></i>
              </div>
            </div>
            <div className="flex items-center justify-center h-16">
              <span className="text-2xl font-bold text-gray-400">Samsung</span>
            </div>
            <div className="flex items-center justify-center h-16">
              <span className="text-2xl font-bold text-gray-400">Xiaomi</span>
            </div>
            <div className="flex items-center justify-center h-16">
              <span className="text-2xl font-bold text-gray-400">Lenovo</span>
            </div>
            <div className="flex items-center justify-center h-16">
              <span className="text-2xl font-bold text-gray-400">ASUS</span>
            </div>
            <div className="flex items-center justify-center h-16">
              <span className="text-2xl font-bold text-gray-400">Sony</span>
            </div>
          </div>
        </div>
      </div>

      {/* CTA секція */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Готові зробити покупку?
          </h2>
          <p className="text-xl mb-8">
            Відвідайте наш магазин або оформіть замовлення онлайн прямо зараз!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/catalog" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer"
            >
              Переглянути каталог
            </a>
            <a 
              href="/contacts" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer"
            >
              Зв'язатися з нами
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
