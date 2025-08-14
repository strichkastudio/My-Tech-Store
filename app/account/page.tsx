
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState('profile');
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [show2FAModal, setShow2FAModal] = useState(false);
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [passwordError, setPasswordError] = useState('');
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [is2FAEnabled, setIs2FAEnabled] = useState(false);
  const [isEnabling2FA, setIsEnabling2FA] = useState(false);
  const [twoFACode, setTwoFACode] = useState('');
  const [twoFAError, setTwoFAError] = useState('');

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordData({
      ...passwordData,
      [e.target.name]: e.target.value
    });
    setPasswordError('');
  };

  const handlePasswordSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPasswordError('');

    if (passwordData.newPassword.length < 8) {
      setPasswordError('Новий пароль повинен містити мінімум 8 символів');
      return;
    }

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setPasswordError('Паролі не співпадають');
      return;
    }

    setIsChangingPassword(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));

      setShowPasswordModal(false);
      setPasswordData({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
      });

      if (typeof window !== 'undefined') {
        alert('Пароль успішно змінено!');
      }
    } catch (error) {
      setPasswordError('Помилка при зміні пароля. Спробуйте ще раз.');
    } finally {
      setIsChangingPassword(false);
    }
  };

  const handle2FAToggle = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTwoFAError('');

    if (!is2FAEnabled) {
      if (!twoFACode || twoFACode.length !== 6) {
        setTwoFAError('Введіть 6-значний код з додатка автентифікації');
        return;
      }

      setIsEnabling2FA(true);
      try {
        await new Promise(resolve => setTimeout(resolve, 2000));

        setIs2FAEnabled(true);
        setShow2FAModal(false);
        setTwoFACode('');
        if (typeof window !== 'undefined') {
          alert('Двофакторну автентифікацію успішно увімкнено!');
        }
      } catch (error) {
        setTwoFAError('Невірний код. Спробуйте ще раз.');
      } finally {
        setIsEnabling2FA(false);
      }
    } else {
      setIsEnabling2FA(true);
      try {
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIs2FAEnabled(false);
        setShow2FAModal(false);
        if (typeof window !== 'undefined') {
          alert('Двофакторну автентифікацію вимкнено!');
        }
      } catch (error) {
        setTwoFAError('Помилка при вимкненні 2FA. Спробуйте ще раз.');
      } finally {
        setIsEnabling2FA(false);
      }
    }
  };

  const handle2FAButtonClick = () => {
    if (is2FAEnabled) {
      handle2FAToggle({ preventDefault: () => {} } as React.FormEvent<HTMLFormElement>);
    } else {
      setShow2FAModal(true);
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <i className="ri-user-line text-4xl text-blue-600"></i>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Вхід до акаунта</h2>
            <p className="text-gray-600">Увійдіть до свого акаунта або створіть новий</p>
          </div>

          <div className="mt-8 space-y-4">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="example@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Пароль</label>
                <input
                  type="password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300" />
                <span className="ml-2 text-sm text-gray-600">Запам'ятати мене</span>
              </label>
              <a href="#" className="text-sm text-blue-600 hover:text-blue-500 cursor-pointer">Забули пароль?</a>
            </div>

            <button
              onClick={() => setIsLoggedIn(true)}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer"
            >
              Увійти
            </button>

            <div className="text-center">
              <span className="text-gray-600">Немає акаунта? </span>
              <a href="#" className="text-blue-600 hover:text-blue-500 cursor-pointer">Зареєструватися</a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: 'profile', name: 'Профіль', icon: 'ri-user-line' },
    { id: 'orders', name: 'Замовлення', icon: 'ri-shopping-bag-line' },
    { id: 'addresses', name: 'Адреси', icon: 'ri-map-pin-line' },
    { id: 'settings', name: 'Налаштування', icon: 'ri-settings-line' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="px-4 mx-auto py-8 max-w-6xl">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <i className="ri-user-fill text-2xl text-blue-600"></i>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Олександр Петренко</h1>
              <p className="text-gray-600">alex.petrenko@email.com</p>
              <p className="text-sm text-green-600">Верифікований користувач</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <nav className="space-y-2">
                {tabs.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors cursor-pointer whitespace-nowrap ${
                      activeTab === tab.id
                        ? 'bg-blue-50 text-blue-600 border border-blue-200'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <i className={`${tab.icon} text-lg`}></i>
                    <span>{tab.name}</span>
                  </button>
                ))}
              </nav>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <button
                  onClick={() => setIsLoggedIn(false)}
                  className="w-full flex items-center space-x-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
                >
                  <i className="ri-logout-box-line text-lg"></i>
                  <span>Вийти</span>
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm p-6">
              {activeTab === 'profile' && (
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Особиста інформація</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Ім'я</label>
                      <input
                        type="text"
                        defaultValue="Олександр"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Прізвище</label>
                      <input
                        type="text"
                        defaultValue="Петренко"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        defaultValue="alex.petrenko@email.com"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Телефон</label>
                      <input
                        type="tel"
                        defaultValue="+380 67 123 45 67"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Дата народження</label>
                      <input
                        type="date"
                        defaultValue="1990-05-15"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div className="mt-6">
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer">
                      Зберегти зміни
                    </button>
                  </div>
                </div>
              )}

              {activeTab === 'orders' && (
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Історія замовлень</h2>
                  <div className="space-y-4">
                    {[
                      { id: '#1234', date: '15.01.2024', status: 'Доставлено', total: '15 420 ₴', items: 'iPhone 15 Pro, AirPods Pro' },
                      { id: '#1235', date: '10.01.2024', status: 'В дорозі', total: '32 500 ₴', items: 'MacBook Air M2, Magic Mouse' },
                      { id: '#1236', date: '05.01.2024', status: 'Оброблюється', total: '8 900 ₴', items: 'Samsung Galaxy Watch6' }
                    ].map(order => (
                      <div key={order.id} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-4">
                            <span className="font-medium text-gray-900">Замовлення {order.id}</span>
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-medium ${
                                order.status === 'Доставлено'
                                  ? 'bg-green-100 text-green-800'
                                  : order.status === 'В дорозі'
                                  ? 'bg-blue-100 text-blue-800'
                                  : 'bg-yellow-100 text-yellow-800'
                              }`}
                            >
                              {order.status}
                            </span>
                          </div>
                          <span className="font-bold text-gray-900">{order.total}</span>
                        </div>
                        <p className="text-gray-600 text-sm mb-2">{order.items}</p>
                        <p className="text-gray-500 text-xs">{order.date}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'addresses' && (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-gray-900">Адреси доставки</h2>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer">
                      Додати адресу
                    </button>
                  </div>
                  <div className="space-y-4">
                    {[
                      { type: 'Домашня', address: 'вул. Хрещатик, 25, кв. 12', city: 'Київ, 01001', isDefault: true },
                      { type: 'Робоча', address: 'пр. Перемоги, 15, оф. 204', city: 'Київ, 02000', isDefault: false }
                    ].map((address, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <span className="font-medium text-gray-900">{address.type}</span>
                            {address.isDefault && (
                              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                                За замовчуванням
                              </span>
                            )}
                          </div>
                          <div className="flex items-center space-x-2">
                            <button className="text-blue-600 hover:text-blue-700 cursor-pointer">
                              <i className="ri-edit-line"></i>
                            </button>
                            <button className="text-red-600 hover:text-red-700 cursor-pointer">
                              <i className="ri-delete-bin-line"></i>
                            </button>
                          </div>
                        </div>
                        <p className="text-gray-700">{address.address}</p>
                        <p className="text-gray-500 text-sm">{address.city}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'settings' && (
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Налаштування акаунта</h2>
                  <div className="space-y-6">
                    <div className="border-b border-gray-200 pb-6">
                      <h3 className="text-lg font-medium text-gray-900 mb-4">Сповіщення</h3>
                      <div className="space-y-3">
                        {[
                          { name: 'Email-сповіщення про замовлення', checked: true },
                          { name: 'SMS-сповіщення про доставку', checked: true },
                          { name: 'Розсилка про акції та знижки', checked: false },
                          { name: 'Новини та оновлення', checked: true }
                        ].map((setting, index) => (
                          <label key={index} className="flex items-center justify-between cursor-pointer">
                            <span className="text-gray-700">{setting.name}</span>
                            <input
                              type="checkbox"
                              defaultChecked={setting.checked}
                              className="rounded border-gray-300 cursor-pointer"
                            />
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="border-b border-gray-200 pb-6">
                      <h3 className="text-lg font-medium text-gray-900 mb-4">Безпека</h3>
                      <div className="space-y-3">
                        <button
                          onClick={() => setShowPasswordModal(true)}
                          className="flex items-center justify-between w-full text-left cursor-pointer whitespace-nowrap hover:bg-gray-50 p-3 rounded-lg transition-colors"
                        >
                          <span className="text-gray-700">Змінити пароль</span>
                          <i className="ri-arrow-right-s-line text-gray-400"></i>
                        </button>
                        <button
                          onClick={handle2FAButtonClick}
                          className="flex items-center justify-between w-full text-left cursor-pointer whitespace-nowrap hover:bg-gray-50 p-3 rounded-lg transition-colors"
                        >
                          <div className="flex items-center space-x-3">
                            <span className="text-gray-700">Двофакторна автентифікація</span>
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-medium ${
                                is2FAEnabled
                                  ? 'bg-green-100 text-green-800'
                                  : 'bg-gray-100 text-gray-600'
                              }`}
                            >
                              {is2FAEnabled ? 'Увімкнено' : 'Вимкнено'}
                            </span>
                          </div>
                          <i className="ri-arrow-right-s-line text-gray-400"></i>
                        </button>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-4">Небезпечна зона</h3>
                      <button className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors whitespace-nowrap cursor-pointer">
                        Видалити акаунт
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {showPasswordModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">Зміна пароля</h3>
              <button
                onClick={() => setShowPasswordModal(false)}
                className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 cursor-pointer"
              >
                <i className="ri-close-line text-xl"></i>
              </button>
            </div>

            <form onSubmit={handlePasswordSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Поточний пароль
                </label>
                <input
                  type="password"
                  name="currentPassword"
                  value={passwordData.currentPassword}
                  onChange={handlePasswordChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Новий пароль
                </label>
                <input
                  type="password"
                  name="newPassword"
                  value={passwordData.newPassword}
                  onChange={handlePasswordChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
                <p className="text-xs text-gray-500 mt-1">Мінімум 8 символів</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Підтвердити новий пароль
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={passwordData.confirmPassword}
                  onChange={handlePasswordChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              {passwordError && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-600 text-sm">{passwordError}</p>
                </div>
              )}

              <div className="flex space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowPasswordModal(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer whitespace-nowrap"
                >
                  Скасувати
                </button>
                <button
                  type="submit"
                  disabled={isChangingPassword}
                  className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 transition-colors cursor-pointer whitespace-nowrap"
                >
                  {isChangingPassword ? (
                    <span className="flex items-center justify-center">
                      <i className="ri-loader-line animate-spin mr-2"></i>
                      Зміна...
                    </span>
                  ) : (
                    'Змінити пароль'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {show2FAModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">
                {is2FAEnabled ? 'Вимкнути 2FA' : 'Налаштування 2FA'}
              </h3>
              <button
                onClick={() => setShow2FAModal(false)}
                className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 cursor-pointer"
              >
                <i className="ri-close-line text-xl"></i>
              </button>
            </div>

            {!is2FAEnabled ? (
              <div>
                <div className="text-center mb-6">
                  <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4 bg-blue-50 rounded-full">
                    <i className="ri-shield-check-line text-3xl text-blue-600"></i>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Увімкнути двофакторну автентифікацію
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Додайте додатковий рівень безпеки до вашого акаунта
                  </p>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h5 className="font-medium text-gray-900 mb-2">Крок 1: Встановіть додаток</h5>
                    <p className="text-sm text-gray-600 mb-3">
                      Завантажте Google Authenticator або Authy на ваш телефон
                    </p>
                    <div className="flex space-x-2">
                      <span className="text-xs px-2 py-1 bg-white rounded border">Google Authenticator</span>
                      <span className="text-xs px-2 py-1 bg-white rounded border">Authy</span>
                    </div>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h5 className="font-medium text-gray-900 mb-2">Крок 2: Скануйте QR-код</h5>
                    <div className="bg-white p-4 rounded-lg mb-3 text-center">
                      <div className="w-24 h-24 bg-gray-200 rounded-lg mx-auto flex items-center justify-center">
                        <i className="ri-qr-code-line text-3xl text-gray-400"></i>
                      </div>
                      <p className="text-xs text-gray-500 mt-2">QR-код для налаштування</p>
                    </div>
                    <p className="text-xs text-gray-600">
                      Альтернативний ключ: ABCD-EFGH-IJKL-MNOP
                    </p>
                  </div>
                </div>

                <form onSubmit={handle2FAToggle} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Введіть код з додатка
                    </label>
                    <input
                      type="text"
                      value={twoFACode}
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, '').slice(0, 6);
                        setTwoFACode(value);
                        setTwoFAError('');
                      }}
                      placeholder="123456"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-center text-2xl tracking-widest"
                      maxLength={6}
                      required
                    />
                    <p className="text-xs text-gray-500 mt-1">6-значний код з додатка автентифікації</p>
                  </div>

                  {twoFAError && (
                    <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                      <p className="text-red-600 text-sm">{twoFAError}</p>
                    </div>
                  )}

                  <div className="flex space-x-3 pt-4">
                    <button
                      type="button"
                      onClick={() => setShow2FAModal(false)}
                      className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer whitespace-nowrap"
                    >
                      Скасувати
                    </button>
                    <button
                      type="submit"
                      disabled={isEnabling2FA}
                      className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 transition-colors cursor-pointer whitespace-nowrap"
                    >
                      {isEnabling2FA ? (
                        <span className="flex items-center justify-center">
                          <i className="ri-loader-line animate-spin mr-2"></i>
                          Увімкнення...
                        </span>
                      ) : (
                        'Увімкнути 2FA'
                      )}
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div>
                <div className="text-center mb-6">
                  <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4 bg-red-50 rounded-full">
                    <i className="ri-shield-cross-line text-3xl text-red-600"></i>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Вимкнути двофакторну автентифікацію
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Ви впевнені, що хочете вимкнути додатковий захист акаунта?
                  </p>
                </div>

                <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg mb-6">
                  <div className="flex items-start">
                    <div className="w-5 h-5 flex items-center justify-center mr-3 flex-shrink-0">
                      <i className="ri-alert-line text-yellow-600"></i>
                    </div>
                    <div>
                      <h5 className="font-medium text-yellow-900 mb-1">Увага!</h5>
                      <p className="text-sm text-yellow-800">
                        Вимкнення 2FA знизить рівень безпеки вашого акаунта.
                        Рекомендуємо залишити цю функцію увімкненою.
                      </p>
                    </div>
                  </div>
                </div>

                {twoFAError && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg mb-4">
                    <p className="text-red-600 text-sm">{twoFAError}</p>
                  </div>
                )}

                <div className="flex space-x-3">
                  <button
                    type="button"
                    onClick={() => setShow2FAModal(false)}
                    className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Скасувати
                  </button>
                  <button
                    onClick={handle2FAButtonClick}
                    disabled={isEnabling2FA}
                    className="flex-1 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 disabled:bg-gray-400 transition-colors cursor-pointer whitespace-nowrap"
                  >
                    {isEnabling2FA ? (
                      <span className="flex items-center justify-center">
                        <i className="ri-loader-line animate-spin mr-2"></i>
                        Вимкнення...
                      </span>
                    ) : (
                      'Вимкнути 2FA'
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}