
'use client';

import { useState } from 'react';
import Link from 'next/link';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '@/lib/emailjs';

export default function ContactsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === 'message' && value.length > 500) {
      return;
    }
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    const { name, email, message } = formData;
    if (!name.trim() || !email.trim() || !message.trim()) {
      return false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const contactData = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        subject: formData.subject || 'Звернення з сайту',
        message: formData.message,
        send_date: new Date().toLocaleString('uk-UA')
      };

      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        contactData,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Помилка відправки повідомлення:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Контакти</h1>
          <p className="text-xl text-gray-600">
            Зв'яжіться з нами будь-яким зручним способом
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Контактна інформація */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Наші контакти</h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-50 rounded-lg mr-4 flex-shrink-0">
                  <i className="ri-map-pin-line text-xl text-blue-600"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Адреса</h3>
                  <p className="text-gray-600">
                    м. Київ, вул. Хрещатик 22,<br />
                    офіс 15, 01001
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-50 rounded-lg mr-4 flex-shrink-0">
                  <i className="ri-phone-line text-xl text-blue-600"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Телефон</h3>
                  <a href="tel:+380671234567" className="text-blue-600 hover:text-blue-700 cursor-pointer">
                    +38 (067) 123-45-67
                  </a>
                  <p className="text-gray-500 text-sm mt-1">Пн-Пт: 9:00-19:00, Сб-Нд: 10:00-17:00</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-50 rounded-lg mr-4 flex-shrink-0">
                  <i className="ri-mail-line text-xl text-blue-600"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <a href="mailto:info@techstore.ua" className="text-blue-600 hover:text-blue-700 cursor-pointer">
                    info@techstore.ua
                  </a>
                  <p className="text-gray-500 text-sm mt-1">Відповідаємо протягом 24 годин</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-50 rounded-lg mr-4 flex-shrink-0">
                  <i className="ri-customer-service-line text-xl text-blue-600"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Підтримка</h3>
                  <p className="text-gray-600">Цілодобова підтримка клієнтів</p>
                  <p className="text-gray-500 text-sm mt-1">Онлайн-чат на сайті</p>
                </div>
              </div>
            </div>

            {/* Соціальні мережі */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Ми в соціальних мережах</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 flex items-center justify-center bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors cursor-pointer">
                  <i className="ri-facebook-fill text-xl text-blue-600"></i>
                </a>
                <a href="#" className="w-12 h-12 flex items-center justify-center bg-pink-50 hover:bg-pink-100 rounded-lg transition-colors cursor-pointer">
                  <i className="ri-instagram-line text-xl text-pink-600"></i>
                </a>
                <a href="#" className="w-12 h-12 flex items-center justify-center bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors cursor-pointer">
                  <i className="ri-telegram-line text-xl text-blue-500"></i>
                </a>
                <a href="#" className="w-12 h-12 flex items-center justify-center bg-red-50 hover:bg-red-100 rounded-lg transition-colors cursor-pointer">
                  <i className="ri-youtube-line text-xl text-red-600"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Форма зворотного зв'язку */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Зворотний зв'язок</h2>
            
            {submitStatus === 'success' ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4 bg-green-100 rounded-full">
                  <i className="ri-check-line text-2xl text-green-600"></i>
                </div>
                <h3 className="text-lg font-semibold text-green-900 mb-2">Повідомлення відправлено!</h3>
                <p className="text-green-700">Дякуємо за звернення. Ми зв'яжемося з вами найближчим часом.</p>
              </div>
            ) : (
              <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Ім'я *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Телефон
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+380"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Тема звернення
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-8"
                    >
                      <option value="">Оберіть тему</option>
                      <option value="Питання по товару">Питання по товару</option>
                      <option value="Технічна підтримка">Технічна підтримка</option>
                      <option value="Гарантійне обслуговування">Гарантійне обслуговування</option>
                      <option value="Співпраця">Співпраця</option>
                      <option value="Інше">Інше</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Повідомлення *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    maxLength={500}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Опишіть ваше питання або пропозицію..."
                    required
                  />
                  <div className="text-right text-sm text-gray-500 mt-1">
                    {formData.message.length}/500
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-6 py-3 rounded-lg font-medium transition-colors cursor-pointer whitespace-nowrap"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <i className="ri-loader-line animate-spin mr-2"></i>
                      Відправка...
                    </span>
                  ) : (
                    'Відправити повідомлення'
                  )}
                </button>

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-600 text-sm">
                      Помилка при відправці повідомлення. Перевірте правильність заповнення всіх обов'язкових полів.
                    </p>
                  </div>
                )}
              </form>
            )}
          </div>
        </div>

        {/* Карта */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Як нас знайти</h2>
          <div className="bg-gray-100 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.1640531314047!2d30.5233!3d50.4501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce56b2456d5b%3A0x7c4c4c4c4c4c4c4c!2z0LLRg9C7LiDQpdGA0LXRidCw0YLQuNC6IDIyLCDQmtC40ZfQsiwg0KPQutGA0LDRl9C90LAh5e!5e0!3m2!1suk!2sua!4v1629234567890!5m2!1suk!2sua"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
