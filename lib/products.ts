
export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  brand: string;
  images: string[];
  description: string;
  specifications: { [key: string]: string };
  inStock: boolean;
  rating: number;
  reviews: number;
}

export const categories = [
  { id: 'smartphones', name: 'Смартфони', icon: 'ri-smartphone-line' },
  { id: 'laptops', name: 'Ноутбуки', icon: 'ri-computer-line' },
  { id: 'headphones', name: 'Навушники', icon: 'ri-headphone-line' },
  { id: 'accessories', name: 'Аксесуари', icon: 'ri-usb-line' },
  { id: 'tablets', name: 'Планшети', icon: 'ri-tablet-line' },
  { id: 'smartwatch', name: 'Смарт-годинники', icon: 'ri-time-line' },
  { id: 'gaming', name: 'Ігрові пристрої', icon: 'ri-gamepad-line' }
];

export const products: Product[] = [
  // Смартфони
  {
    id: 'iphone-15-pro',
    name: 'iPhone 15 Pro Max',
    price: 54999,
    originalPrice: 59999,
    category: 'smartphones',
    brand: 'Apple',
    images: [
      'https://readdy.ai/api/search-image?query=iPhone%2015%20Pro%20Max%20modern%20premium%20titanium%20smartphone%20full%20product%20view%20centered%20on%20clean%20white%20background%20professional%20studio%20photography%20product%20showcase%20complete%20device%20visible%20titanium%20finish&width=600&height=600&seq=iphone15pro1&orientation=squarish',
      'https://readdy.ai/api/search-image?query=iPhone%2015%20Pro%20Max%20back%20view%20complete%20device%20titanium%20finish%20camera%20module%20full%20product%20photography%20centered%20white%20background%20professional%20lighting%20three%20cameras%20visible&width=600&height=600&seq=iphone15pro2&orientation=squarish',
      'https://readdy.ai/api/search-image?query=iPhone%2015%20Pro%20Max%20side%20profile%20complete%20smartphone%20titanium%20build%20full%20device%20visible%20centered%20white%20background%20studio%20product%20photography%20sleek%20design&width=600&height=600&seq=iphone15pro3&orientation=squarish'
    ],
    description: 'Найпотужніший iPhone з революційним чіпом A17 Pro, титановим корпусом та професійною камерою.',
    specifications: {
      'Екран': '6.7" Super Retina XDR OLED',
      'Процесор': 'A17 Pro',
      'Пам\'ять': '256 ГБ',
      'Камера': '48 Мп + 12 Мп + 12 Мп',
      'Батарея': 'до 29 годин відео',
      'Операційна система': 'iOS 17'
    },
    inStock: true,
    rating: 4.9,
    reviews: 247
  },
  {
    id: 'samsung-s24-ultra',
    name: 'Samsung Galaxy S24 Ultra',
    price: 49999,
    category: 'smartphones',
    brand: 'Samsung',
    images: [
      'https://readdy.ai/api/search-image?query=Samsung%20Galaxy%20S24%20Ultra%20premium%20black%20smartphone%20complete%20device%20with%20S%20Pen%20stylus%20full%20product%20view%20centered%20white%20background%20professional%20studio%20photography%20flagship%20Android%20phone&width=600&height=600&seq=samsungs24ultra1&orientation=squarish',
      'https://readdy.ai/api/search-image?query=Samsung%20Galaxy%20S24%20Ultra%20back%20view%20complete%20smartphone%20quad%20camera%20system%20premium%20design%20full%20device%20visible%20centered%20white%20background%20professional%20lighting%20camera%20array%20visible&width=600&height=600&seq=samsungs24ultra2&orientation=squarish',
      'https://readdy.ai/api/search-image?query=Samsung%20Galaxy%20S24%20Ultra%20with%20S%20Pen%20complete%20device%20premium%20smartphone%20full%20product%20photography%20centered%20white%20background%20professional%20lighting%20stylus%20included&width=600&height=600&seq=samsungs24ultra3&orientation=squarish'
    ],
    description: 'Флагманський смартфон з S Pen, 200-мегапіксельною камерою та штучним інтелектом Galaxy AI.',
    specifications: {
      'Екран': '6.8" Dynamic AMOLED 2X',
      'Процесор': 'Snapdragon 8 Gen 3',
      'Пам\'ять': '512 ГБ',
      'Камера': '200 Мп + 50 Мп + 12 Мп + 10 Мп',
      'Батарея': '5000 мАг',
      'S Pen': 'Вбудований'
    },
    inStock: true,
    rating: 4.8,
    reviews: 189
  },
  {
    id: 'xiaomi-14-ultra',
    name: 'Xiaomi 14 Ultra',
    price: 35999,
    originalPrice: 39999,
    category: 'smartphones',
    brand: 'Xiaomi',
    images: [
      'https://readdy.ai/api/search-image?query=Xiaomi%2014%20Ultra%20premium%20smartphone%20complete%20device%20elegant%20design%20full%20product%20view%20centered%20white%20background%20professional%20photography%20modern%20flagship%20phone%20sleek%20build&width=600&height=600&seq=xiaomi14ultra1&orientation=squarish',
      'https://readdy.ai/api/search-image?query=Xiaomi%2014%20Ultra%20back%20view%20complete%20smartphone%20camera%20module%20premium%20build%20quality%20full%20device%20visible%20centered%20white%20background%20studio%20lighting%20Leica%20cameras&width=600&height=600&seq=xiaomi14ultra2&orientation=squarish',
      'https://readdy.ai/api/search-image?query=Xiaomi%2014%20Ultra%20side%20profile%20complete%20flagship%20smartphone%20premium%20construction%20full%20product%20photography%20centered%20white%20background%20professional%20studio%20setup&width=600&height=600&seq=xiaomi14ultra3&orientation=squarish'
    ],
    description: 'Флагманський смартфон з потужною камерою Leica, швидким процесором та елегантним дизайном.',
    specifications: {
      'Екран': '6.73" AMOLED',
      'Процесор': 'Snapdragon 8 Gen 3',
      'Пам\'ять': '512 ГБ',
      'Камера': '50 Мп Leica + 50 Мп + 50 Мп',
      'Батарея': '5300 мАг',
      'Операційна система': 'MIUI 15'
    },
    inStock: true,
    rating: 4.7,
    reviews: 156
  },
  {
    id: 'google-pixel-8-pro',
    name: 'Google Pixel 8 Pro',
    price: 42999,
    category: 'smartphones',
    brand: 'Google',
    images: [
      'https://readdy.ai/api/search-image?query=Google%20Pixel%208%20Pro%20complete%20smartphone%20elegant%20design%20full%20product%20view%20centered%20white%20background%20professional%20photography%20flagship%20Android%20phone%20modern%20aesthetics%20clean%20lines&width=600&height=600&seq=googlepixel8pro1&orientation=squarish',
      'https://readdy.ai/api/search-image?query=Google%20Pixel%208%20Pro%20back%20view%20complete%20device%20camera%20bar%20distinctive%20design%20full%20smartphone%20visible%20centered%20white%20background%20studio%20lighting%20horizontal%20camera%20strip&width=600&height=600&seq=googlepixel8pro2&orientation=squarish',
      'https://readdy.ai/api/search-image?query=Google%20Pixel%208%20Pro%20side%20profile%20complete%20flagship%20smartphone%20premium%20build%20quality%20full%20product%20photography%20centered%20white%20background%20professional%20setup&width=600&height=600&seq=googlepixel8pro3&orientation=squarish'
    ],
    description: 'Смартфон Google з найкращою камерою на базі штучного інтелекту та чистим Android.',
    specifications: {
      'Екран': '6.7" LTPO OLED',
      'Процесор': 'Google Tensor G3',
      'Пам\'ять': '256 ГБ',
      'Камера': '50 Мп + 48 Мп + 48 Мп',
      'Батарея': '5050 мАг',
      'Операційна система': 'Android 14'
    },
    inStock: true,
    rating: 4.6,
    reviews: 203
  },
  {
    id: 'oneplus-12',
    name: 'OnePlus 12',
    price: 31999,
    category: 'smartphones',
    brand: 'OnePlus',
    images: [
      'https://readdy.ai/api/search-image?query=OnePlus%2012%20premium%20smartphone%20complete%20device%20sleek%20modern%20design%20full%20product%20view%20centered%20white%20background%20professional%20photography%20flagship%20phone%20elegant%20construction&width=600&height=600&seq=oneplus12new1&orientation=squarish',
      'https://readdy.ai/api/search-image?query=OnePlus%2012%20back%20view%20complete%20smartphone%20camera%20system%20premium%20build%20quality%20full%20device%20visible%20centered%20white%20background%20studio%20lighting%20circular%20camera%20module&width=600&height=600&seq=oneplus12new2&orientation=squarish',
      'https://readdy.ai/api/search-image?query=OnePlus%2012%20side%20profile%20complete%20flagship%20smartphone%20elegant%20construction%20full%20product%20photography%20centered%20white%20background%20professional%20studio%20lighting&width=600&height=600&seq=oneplus12new3&orientation=squarish'
    ],
    description: 'Швидкий смартфон з потужною продуктивністю, швидкою зарядкою та якісним дисплеєм.',
    specifications: {
      'Екран': '6.82" AMOLED',
      'Процесор': 'Snapdragon 8 Gen 3',
      'Пам\'ять': '256 ГБ',
      'Камера': '50 Мп + 64 Мп + 48 Мп',
      'Батарея': '5400 мАг',
      'Операційна система': 'OxygenOS 14'
    },
    inStock: true,
    rating: 4.5,
    reviews: 134
  },
  // Ноутбуки
  {
    id: 'macbook-pro-m3',
    name: 'MacBook Pro 14" M3',
    price: 74999,
    category: 'laptops',
    brand: 'Apple',
    images: [
      'https://readdy.ai/api/search-image?query=MacBook%20Pro%2014%20inch%20M3%20Space%20Gray%20complete%20laptop%20open%20full%20product%20view%20centered%20white%20background%20professional%20studio%20photography%20premium%20aluminum%20notebook%20computer%20sleek%20design&width=600&height=600&seq=macbookprom3new1&orientation=squarish',
      'https://readdy.ai/api/search-image?query=MacBook%20Pro%2014%20M3%20side%20profile%20complete%20laptop%20thin%20elegant%20design%20full%20device%20visible%20centered%20white%20background%20studio%20lighting%20premium%20build%20quality&width=600&height=600&seq=macbookprom3new2&orientation=squarish',
      'https://readdy.ai/api/search-image?query=MacBook%20Pro%2014%20M3%20keyboard%20and%20display%20view%20complete%20laptop%20full%20product%20photography%20centered%20white%20background%20professional%20tech%20photography%20Liquid%20Retina%20XDR&width=600&height=600&seq=macbookprom3new3&orientation=squarish'
    ],
    description: 'Професійний ноутбук з чіпом M3, Liquid Retina XDR дисплеєм та неймовірною продуктивністю.',
    specifications: {
      'Процесор': 'Apple M3',
      'Екран': '14.2" Liquid Retina XDR',
      'Пам\'ять': '16 ГБ',
      'Накопичувач': '512 ГБ SSD',
      'Графіка': 'M3 10-core GPU',
      'Батарея': 'до 22 годин'
    },
    inStock: true,
    rating: 4.9,
    reviews: 156
  },
  {
    id: 'dell-xps-15',
    name: 'Dell XPS 15',
    price: 52999,
    originalPrice: 57999,
    category: 'laptops',
    brand: 'Dell',
    images: [
      'https://readdy.ai/api/search-image?query=Dell%20XPS%2015%20premium%20laptop%20complete%20device%20open%20full%20product%20view%20centered%20white%20background%20professional%20photography%20sleek%20modern%20notebook%20computer%20silver%20design%20elegant%20build&width=600&height=600&seq=dellxps15new1&orientation=squarish',
      'https://readdy.ai/api/search-image?query=Dell%20XPS%2015%20side%20profile%20complete%20laptop%20elegant%20thin%20design%20full%20device%20visible%20centered%20white%20background%20studio%20lighting%20premium%20construction%20aluminum%20body&width=600&height=600&seq=dellxps15new2&orientation=squarish',
      'https://readdy.ai/api/search-image?query=Dell%20XPS%2015%20keyboard%20and%20screen%20view%20complete%20laptop%20full%20product%20photography%20centered%20white%20background%20professional%20tech%20photography%20modern%20design%204K%20display&width=600&height=600&seq=dellxps15new3&orientation=squarish'
    ],
    description: 'Потужний ноутбук для творчих професіоналів з 4K дисплеєм та дискретною графікою.',
    specifications: {
      'Процесор': 'Intel Core i7-13700H',
      'Екран': '15.6" 4K OLED',
      'Пам\'ять': '32 ГБ DDR5',
      'Накопичувач': '1 ТБ SSD',
      'Графіка': 'NVIDIA RTX 4060',
      'Батарея': 'до 13 годин'
    },
    inStock: true,
    rating: 4.7,
    reviews: 189
  },
  {
    id: 'lenovo-thinkpad-x1',
    name: 'Lenovo ThinkPad X1 Carbon',
    price: 67999,
    category: 'laptops',
    brand: 'Lenovo',
    images: [
      'https://readdy.ai/api/search-image?query=Lenovo%20ThinkPad%20X1%20Carbon%20business%20laptop%20complete%20device%20open%20full%20product%20view%20centered%20white%20background%20professional%20photography%20black%20premium%20notebook%20computer%20classic%20design&width=600&height=600&seq=lenovothinkpadx1new1&orientation=squarish',
      'https://readdy.ai/api/search-image?query=Lenovo%20ThinkPad%20X1%20Carbon%20side%20profile%20complete%20laptop%20ultra-thin%20design%20full%20device%20visible%20centered%20white%20background%20studio%20lighting%20professional%20build%20carbon%20fiber&width=600&height=600&seq=lenovothinkpadx1new2&orientation=squarish',
      'https://readdy.ai/api/search-image?query=Lenovo%20ThinkPad%20X1%20Carbon%20keyboard%20and%20display%20view%20complete%20laptop%20full%20product%20photography%20centered%20white%20background%20business%20laptop%20design%20TrackPoint%20red%20dot&width=600&height=600&seq=lenovothinkpadx1new3&orientation=squarish'
    ],
    description: 'Бізнес-ноутбук преміум-класу з надійністю ThinkPad та сучасними технологіями.',
    specifications: {
      'Процесор': 'Intel Core i7-1365U',
      'Екран': '14" 2.8K OLED',
      'Пам\'ять': '16 ГБ LPDDR5',
      'Накопичувач': '512 ГБ SSD',
      'Графіка': 'Intel Iris Xe',
      'Батарея': 'до 15 годин'
    },
    inStock: true,
    rating: 4.8,
    reviews: 142
  },
  {
    id: 'asus-rog-strix',
    name: 'ASUS ROG Strix G15',
    price: 43999,
    category: 'laptops',
    brand: 'ASUS',
    images: [
      'https://readdy.ai/api/search-image?query=ASUS%20ROG%20Strix%20G15%20gaming%20laptop%20complete%20device%20open%20full%20product%20view%20centered%20white%20background%20professional%20photography%20RGB%20backlit%20gaming%20notebook%20computer%20modern%20design%20black%20red%20accents&width=600&height=600&seq=asusrogstrixg15new1&orientation=squarish',
      'https://readdy.ai/api/search-image?query=ASUS%20ROG%20Strix%20G15%20side%20profile%20complete%20gaming%20laptop%20bold%20design%20full%20device%20visible%20centered%20white%20background%20studio%20lighting%20premium%20gaming%20construction%20aggressive%20styling&width=600&height=600&seq=asusrogstrixg15new2&orientation=squarish',
      'https://readdy.ai/api/search-image?query=ASUS%20ROG%20Strix%20G15%20keyboard%20and%20screen%20view%20complete%20gaming%20laptop%20full%20product%20photography%20centered%20white%20background%20RGB%20lighting%20gaming%20aesthetics%20144Hz%20display&width=600&height=600&seq=asusrogstrixg15new3&orientation=squarish'
    ],
    description: 'Ігровий ноутбук з потужною графікою, високою частотою оновлення екрану та RGB підсвіткою.',
    specifications: {
      'Процесор': 'AMD Ryzen 7 7735HS',
      'Екран': '15.6" 144Hz IPS',
      'Пам\'ять': '16 ГБ DDR5',
      'Накопичувач': '512 ГБ SSD',
      'Графіка': 'NVIDIA RTX 4050',
      'Батарея': 'до 8 годин'
    },
    inStock: true,
    rating: 4.6,
    reviews: 167
  },
  {
    id: 'hp-spectre-x360',
    name: 'HP Spectre x360',
    price: 58999,
    category: 'laptops',
    brand: 'HP',
    images: [
      'https://readdy.ai/api/search-image?query=HP%20Spectre%20x360%20convertible%20laptop%20complete%20device%20open%20full%20product%20view%20centered%20white%20background%20professional%20photography%20premium%202-in-1%20notebook%20computer%20elegant%20design%20gold%20accents&width=600&height=600&seq=hpspectrex360new1&orientation=squarish',
      'https://readdy.ai/api/search-image?query=HP%20Spectre%20x360%20side%20profile%20complete%20convertible%20laptop%20thin%20premium%20design%20full%20device%20visible%20centered%20white%20background%20studio%20lighting%20luxury%20build%20360%20degree%20hinge&width=600&height=600&seq=hpspectrex360new2&orientation=squarish',
      'https://readdy.ai/api/search-image?query=HP%20Spectre%20x360%20keyboard%20and%20touchscreen%20view%20complete%202-in-1%20laptop%20full%20product%20photography%20centered%20white%20background%20professional%20tech%20photography%20tablet%20mode&width=600&height=600&seq=hpspectrex360new3&orientation=squarish'
    ],
    description: 'Елегантний 2-в-1 ноутбук з сенсорним екраном, стилусом та преміум-дизайном.',
    specifications: {
      'Процесор': 'Intel Core i7-1355U',
      'Екран': '13.5" 3K2K OLED Touch',
      'Пам\'ять': '16 ГБ LPDDR5',
      'Накопичувач': '512 ГБ SSD',
      'Графіка': 'Intel Iris Xe',
      'Батарея': 'до 17 годин'
    },
    inStock: true,
    rating: 4.5,
    reviews: 128
  },
  // Навушники
  {
    id: 'airpods-pro-2',
    name: 'AirPods Pro (2-го покоління)',
    price: 9999,
    originalPrice: 11999,
    category: 'headphones',
    brand: 'Apple',
    images: [
      'https://readdy.ai/api/search-image?query=AirPods%20Pro%202nd%20generation%20white%20wireless%20earbuds%20complete%20product%20in%20charging%20case%20full%20view%20centered%20white%20background%20professional%20studio%20photography%20premium%20audio%20product%20H2%20chip&width=600&height=600&seq=airpodspro2new1&orientation=squarish',
      'https://readdy.ai/api/search-image?query=AirPods%20Pro%202%20earbuds%20complete%20product%20out%20of%20case%20showing%20elegant%20design%20full%20wireless%20earbuds%20visible%20centered%20white%20background%20studio%20lighting%20silicone%20tips&width=600&height=600&seq=airpodspro2new2&orientation=squarish',
      'https://readdy.ai/api/search-image?query=AirPods%20Pro%202%20charging%20case%20open%20and%20closed%20complete%20product%20view%20full%20case%20visible%20centered%20white%20background%20professional%20product%20photography%20MagSafe%20charging&width=600&height=600&seq=airpodspro2new3&orientation=squarish'
    ],
    description: 'Бездротові навушники з активним шумопригніченням нового покоління та просторовим звуком.',
    specifications: {
      'Тип': 'Повністю бездротові',
      'Шумопригнічення': 'Активне ANC',
      'Час роботи': 'до 6 годин + 24 години з кейсом',
      'Зарядка': 'Lightning/MagSafe/Qi',
      'Водозахист': 'IPX4',
      'Чіп': 'H2'
    },
    inStock: true,
    rating: 4.8,
    reviews: 324
  },
  {
    id: 'sony-wh1000xm5',
    name: 'Sony WH-1000XM5',
    price: 13999,
    category: 'headphones',
    brand: 'Sony',
    images: [
      'https://readdy.ai/api/search-image?query=Sony%20WH-1000XM5%20premium%20over-ear%20headphones%20complete%20product%20full%20headphones%20visible%20centered%20white%20background%20professional%20photography%20noise-canceling%20headphones%20modern%20design%20sleek%20profile&width=600&height=600&seq=sonywh1000xm5new1&orientation=squarish',
      'https://readdy.ai/api/search-image?query=Sony%20WH-1000XM5%20side%20profile%20complete%20over-ear%20headphones%20elegant%20design%20full%20product%20visible%20centered%20white%20background%20studio%20lighting%20premium%20audio%20device%20comfort%20padding&width=600&height=600&seq=sonywh1000xm5new2&orientation=squarish',
      'https://readdy.ai/api/search-image?query=Sony%20WH-1000XM5%20folded%20view%20complete%20headphones%20compact%20design%20full%20product%20photography%20centered%20white%20background%20professional%20tech%20photography%20carrying%20case&width=600&height=600&seq=sonywh1000xm5new3&orientation=squarish'
    ],
    description: 'Професійні накладні навушники з найкращим шумопригніченням та Hi-Res звуком.',
    specifications: {
      'Тип': 'Накладні бездротові',
      'Шумопригнічення': 'Активне ANC',
      'Час роботи': 'до 30 годин',
      'Зв\'язок': 'Bluetooth 5.2',
      'Кодеки': 'LDAC, aptX HD',
      'Вага': '250 г'
    },
    inStock: true,
    rating: 4.9,
    reviews: 456
  },
  {
    id: 'bose-quietcomfort',
    name: 'Bose QuietComfort Earbuds',
    price: 11999,
    originalPrice: 13999,
    category: 'headphones',
    brand: 'Bose',
    images: [
      'https://readdy.ai/api/search-image?query=Bose%20QuietComfort%20Earbuds%20wireless%20earbuds%20complete%20product%20in%20charging%20case%20full%20view%20centered%20white%20background%20professional%20photography%20premium%20noise-canceling%20earbuds%20elegant%20design&width=600&height=600&seq=bosequietcomfortnew1&orientation=squarish',
      'https://readdy.ai/api/search-image?query=Bose%20QuietComfort%20Earbuds%20complete%20product%20out%20of%20case%20showing%20premium%20design%20full%20earbuds%20visible%20centered%20white%20background%20studio%20lighting%20comfort%20tips&width=600&height=600&seq=bosequietcomfortnew2&orientation=squarish',
      'https://readdy.ai/api/search-image?query=Bose%20QuietComfort%20Earbuds%20charging%20case%20complete%20product%20view%20full%20case%20visible%20centered%20white%20background%20professional%20product%20photography%20compact%20design&width=600&height=600&seq=bosequietcomfortnew3&orientation=squarish'
    ],
    description: 'Бездротові навушники з відмінним шумопригніченням та збалансованим звуком.',
    specifications: {
      'Тип': 'Повністю бездротові',
      'Шумопригнічення': 'Активне ANC',
      'Час роботи': 'до 6 годин + 18 годин з кейсом',
      'Зв\'язок': 'Bluetooth 5.1',
      'Водозахист': 'IPX4',
      'Мікрофон': '6 мікрофонів'
    },
    inStock: true,
    rating: 4.7,
    reviews: 289
  },
  {
    id: 'sennheiser-momentum',
    name: 'Sennheiser Momentum 4 Wireless',
    price: 14999,
    category: 'headphones',
    brand: 'Sennheiser',
    images: [
      'https://readdy.ai/api/search-image?query=Sennheiser%20Momentum%204%20Wireless%20premium%20over-ear%20headphones%20complete%20product%20full%20headphones%20visible%20centered%20white%20background%20professional%20photography%20audiophile%20headphones%20sleek%20design&width=600&height=600&seq=sennheisermomentum4new1&orientation=squarish',
      'https://readdy.ai/api/search-image?query=Sennheiser%20Momentum%204%20side%20profile%20complete%20over-ear%20headphones%20elegant%20design%20full%20product%20visible%20centered%20white%20background%20studio%20lighting%20premium%20audio%20leather%20headband&width=600&height=600&seq=sennheisermomentum4new2&orientation=squarish',
      'https://readdy.ai/api/search-image?query=Sennheiser%20Momentum%204%20folded%20complete%20headphones%20compact%20design%20full%20product%20photography%20centered%20white%20background%20professional%20tech%20photography%20premium%20build&width=600&height=600&seq=sennheisermomentum4new3&orientation=squarish'
    ],
    description: 'Аудіофільські навушники з аутентичним звуком Sennheiser та тривалим часом роботи.',
    specifications: {
      'Тип': 'Накладні бездротові',
      'Шумопригнічення': 'Адаптивне ANC',
      'Час роботи': 'до 60 годин',
      'Зв\'язок': 'Bluetooth 5.2',
      'Кодеки': 'aptX Adaptive',
      'Драйвери': '42 мм'
    },
    inStock: true,
    rating: 4.8,
    reviews: 178
  },
  // Планшети
  {
    id: 'ipad-pro-m2',
    name: 'iPad Pro 12.9" M2',
    price: 47999,
    category: 'tablets',
    brand: 'Apple',
    images: [
      'https://readdy.ai/api/search-image?query=iPad%20Pro%2012.9%20inch%20M2%20complete%20tablet%20full%20device%20visible%20centered%20white%20background%20professional%20photography%20premium%20tablet%20computer%20modern%20design%20sleek%20profile%20Liquid%20Retina%20XDR&width=600&height=600&seq=ipadprom2new1&orientation=squarish',
      'https://readdy.ai/api/search-image?query=iPad%20Pro%20M2%20side%20profile%20complete%20tablet%20thin%20elegant%20design%20full%20device%20visible%20centered%20white%20background%20studio%20lighting%20premium%20build%20quality%20aluminum%20body&width=600&height=600&seq=ipadprom2new2&orientation=squarish',
      'https://readdy.ai/api/search-image?query=iPad%20Pro%20M2%20with%20Apple%20Pencil%20complete%20tablet%20and%20stylus%20full%20products%20visible%20centered%20white%20background%20professional%20product%20photography%20creative%20workflow&width=600&height=600&seq=ipadprom2new3&orientation=squarish'
    ],
    description: 'Професійний планшет з чіпом M2, Liquid Retina XDR дисплеєм та підтримкою Apple Pencil.',
    specifications: {
      'Процесор': 'Apple M2',
      'Екран': '12.9" Liquid Retina XDR',
      'Пам\'ять': '256 ГБ',
      'Камера': '12 Мп + 10 Мп',
      'Зв\'язок': 'Wi-Fi 6E + 5G',
      'Батарея': 'до 10 годин'
    },
    inStock: true,
    rating: 4.9,
    reviews: 234
  },
  {
    id: 'samsung-tab-s9',
    name: 'Samsung Galaxy Tab S9+',
    price: 38999,
    originalPrice: 42999,
    category: 'tablets',
    brand: 'Samsung',
    images: [
      'https://readdy.ai/api/search-image?query=Samsung%20Galaxy%20Tab%20S9%20Plus%20complete%20tablet%20full%20device%20visible%20centered%20white%20background%20professional%20photography%20premium%20Android%20tablet%20modern%20sleek%20design%20aluminum%20build&width=600&height=600&seq=samsungtabs9plusnew1&orientation=squarish',
      'https://readdy.ai/api/search-image?query=Samsung%20Galaxy%20Tab%20S9%20Plus%20side%20profile%20complete%20tablet%20elegant%20thin%20design%20full%20device%20visible%20centered%20white%20background%20studio%20lighting%20premium%20construction%20AMOLED%20display&width=600&height=600&seq=samsungtabs9plusnew2&orientation=squarish',
      'https://readdy.ai/api/search-image?query=Samsung%20Galaxy%20Tab%20S9%20Plus%20with%20S%20Pen%20complete%20tablet%20and%20stylus%20full%20products%20visible%20centered%20white%20background%20professional%20product%20photography%20productivity%20setup&width=600&height=600&seq=samsungtabs9plusnew3&orientation=squarish'
    ],
    description: 'Преміум планшет Android з S Pen, яскравим дисплеєм та потужною продуктивністю.',
    specifications: {
      'Процесор': 'Snapdragon 8 Gen 2',
      'Екран': '12.4" Super AMOLED',
      'Пам\'ять': '256 ГБ',
      'Камера': '13 Мп + 8 Мп',
      'S Pen': 'Вбудований',
      'Батарея': '10090 мАг'
    },
    inStock: true,
    rating: 4.7,
    reviews: 167
  },
  // Смарт-годинники
  {
    id: 'apple-watch-ultra',
    name: 'Apple Watch Ultra 2',
    price: 28999,
    category: 'smartwatch',
    brand: 'Apple',
    images: [
      'https://readdy.ai/api/search-image?query=Apple%20Watch%20Ultra%202%20complete%20smartwatch%20full%20device%20visible%20with%20sport%20band%20centered%20white%20background%20professional%20photography%20premium%20titanium%20smartwatch%20rugged%20design%20outdoor%20activities&width=600&height=600&seq=applewatchultra2new1&orientation=squarish',
      'https://readdy.ai/api/search-image?query=Apple%20Watch%20Ultra%202%20side%20profile%20complete%20smartwatch%20robust%20design%20full%20device%20visible%20centered%20white%20background%20studio%20lighting%20premium%20construction%20action%20button&width=600&height=600&seq=applewatchultra2new2&orientation=squarish',
      'https://readdy.ai/api/search-image?query=Apple%20Watch%20Ultra%202%20display%20view%20complete%20smartwatch%20bright%20screen%20full%20product%20visible%20centered%20white%20background%20professional%20product%20photography%20Always-On%20Retina&width=600&height=600&seq=applewatchultra2new3&orientation=squarish'
    ],
    description: 'Найміцніший Apple Watch для спорту та активного способу життя з титановим корпусом.',
    specifications: {
      'Екран': '49мм Always-On Retina',
      'Матеріал': 'Титан',
      'Водозахист': '100м',
      'GPS': 'Прецизійний подвійний GPS',
      'Батарея': 'до 36 годин',
      'Датчики': 'ЕКГ, SpO2, температура'
    },
    inStock: true,
    rating: 4.8,
    reviews: 145
  },
  {
    id: 'samsung-watch6',
    name: 'Samsung Galaxy Watch6 Classic',
    price: 14999,
    originalPrice: 16999,
    category: 'smartwatch',
    brand: 'Samsung',
    images: [
      'https://readdy.ai/api/search-image?query=Samsung%20Galaxy%20Watch6%20Classic%20complete%20smartwatch%20full%20device%20visible%20with%20rotating%20bezel%20centered%20white%20background%20professional%20photography%20premium%20Android%20smartwatch%20elegant%20design&width=600&height=600&seq=samsungwatch6classicnew1&orientation=squarish',
      'https://readdy.ai/api/search-image?query=Samsung%20Galaxy%20Watch6%20Classic%20side%20profile%20complete%20smartwatch%20elegant%20design%20full%20device%20visible%20centered%20white%20background%20studio%20lighting%20premium%20build%20rotating%20bezel&width=600&height=600&seq=samsungwatch6classicnew2&orientation=squarish',
      'https://readdy.ai/api/search-image?query=Samsung%20Galaxy%20Watch6%20Classic%20display%20view%20complete%20smartwatch%20bright%20AMOLED%20screen%20full%20product%20visible%20centered%20white%20background%20professional%20photography%20health%20monitoring&width=600&height=600&seq=samsungwatch6classicnew3&orientation=squarish'
    ],
    description: 'Елегантний смарт-годинник з обертовим безелем, моніторингом здоров\'я та стильним дизайном.',
    specifications: {
      'Екран': '1.5" Super AMOLED',
      'Матеріал': 'Нержавіюча сталь',
      'Водозахист': '5ATM + IP68',
      'Зв\'язок': 'Bluetooth 5.3',
      'Батарея': 'до 40 годин',
      'Датчики': 'ЕКГ, артеріальний тиск'
    },
    inStock: true,
    rating: 4.6,
    reviews: 198
  },
  // Ігрові пристрої
  {
    id: 'steam-deck',
    name: 'Steam Deck OLED',
    price: 24999,
    category: 'gaming',
    brand: 'Valve',
    images: [
      'https://readdy.ai/api/search-image?query=Steam%20Deck%20OLED%20handheld%20gaming%20console%20complete%20device%20full%20product%20visible%20centered%20white%20background%20professional%20photography%20portable%20PC%20gaming%20device%20modern%20design%20ergonomic%20build&width=600&height=600&seq=steamdeckolednew1&orientation=squarish',
      'https://readdy.ai/api/search-image?query=Steam%20Deck%20OLED%20side%20profile%20complete%20handheld%20console%20ergonomic%20design%20full%20device%20visible%20centered%20white%20background%20studio%20lighting%20gaming%20hardware%20portable%20PC&width=600&height=600&seq=steamdeckolednew2&orientation=squarish',
      'https://readdy.ai/api/search-image?query=Steam%20Deck%20OLED%20screen%20view%20complete%20gaming%20console%20bright%20OLED%20display%20full%20product%20visible%20centered%20white%20background%20professional%20product%20photography%20Steam%20library&width=600&height=600&seq=steamdeckolednew3&orientation=squarish'
    ],
    description: 'Портативна ігрова консоль з OLED екраном для запуску ігор Steam в дорозі.',
    specifications: {
      'Процесор': 'AMD APU',
      'Екран': '7.4" HDR OLED',
      'Пам\'ять': '512 ГБ SSD',
      'ОЗП': '16 ГБ LPDDR5',
      'Батарея': '3-12 годин',
      'ОС': 'SteamOS'
    },
    inStock: true,
    rating: 4.7,
    reviews: 189
  },
  {
    id: 'ps5-dualsense',
    name: 'PlayStation 5 DualSense Edge',
    price: 7999,
    category: 'gaming',
    brand: 'Sony',
    images: [
      'https://readdy.ai/api/search-image?query=PlayStation%205%20DualSense%20Edge%20wireless%20controller%20complete%20gamepad%20full%20product%20visible%20centered%20white%20background%20professional%20photography%20premium%20PS5%20controller%20gaming%20peripheral%20customizable&width=600&height=600&seq=ps5dualsenseedgenew1&orientation=squarish',
      'https://readdy.ai/api/search-image?query=PlayStation%205%20DualSense%20Edge%20controller%20side%20view%20complete%20gamepad%20ergonomic%20design%20full%20product%20visible%20centered%20white%20background%20studio%20lighting%20haptic%20feedback&width=600&height=600&seq=ps5dualsenseedgenew2&orientation=squarish',
      'https://readdy.ai/api/search-image?query=PlayStation%205%20DualSense%20Edge%20controller%20with%20case%20complete%20gaming%20controller%20and%20accessories%20full%20products%20visible%20centered%20white%20background%20professional%20photography&width=600&height=600&seq=ps5dualsenseedgenew3&orientation=squarish'
    ],
    description: 'Професійний контролер для PlayStation 5 з настроюваними кнопками та тригерами.',
    specifications: {
      'Тип': 'Бездротовий геймпад',
      'Зв\'язок': 'Bluetooth 5.1',
      'Батарея': 'до 12 годин',
      'Функції': 'Haptic Feedback, Adaptive Triggers',
      'Настроювання': 'Змінні стіки та кнопки',
      'Підсвітка': 'RGB'
    },
    inStock: true,
    rating: 4.8,
    reviews: 267
  },
  // Аксесуари
  {
    id: 'anker-powerbank',
    name: 'Anker PowerCore 26800',
    price: 2499,
    originalPrice: 2999,
    category: 'accessories',
    brand: 'Anker',
    images: [
      'https://readdy.ai/api/search-image?query=Anker%20PowerCore%2026800%20power%20bank%20complete%20portable%20charger%20full%20product%20visible%20centered%20white%20background%20professional%20photography%20mobile%20charging%20device%20modern%20design%20compact%20build&width=600&height=600&seq=ankerpowercorenew1&orientation=squarish',
      'https://readdy.ai/api/search-image?query=Anker%20PowerCore%20power%20bank%20side%20profile%20complete%20portable%20charger%20compact%20design%20full%20device%20visible%20centered%20white%20background%20studio%20lighting%20LED%20indicators&width=600&height=600&seq=ankerpowercorenew2&orientation=squarish',
      'https://readdy.ai/api/search-image?query=Anker%20PowerCore%20with%20charging%20cables%20complete%20power%20bank%20and%20accessories%20full%20products%20visible%20centered%20white%20background%20professional%20photography%20multiple%20ports&width=600&height=600&seq=ankerpowercorenew3&orientation=squarish'
    ],
    description: 'Потужний портативний акумулятор з швидкою зарядкою для всіх ваших пристроїв.',
    specifications: {
      'Ємність': '26800 мАг',
      'Порти': '3x USB-A',
      'Вихід': '3A макс',
      'Вхід': 'Micro-USB + USB-C',
      'Час зарядки': '6 годин',
      'Вага': '490 г'
    },
    inStock: true,
    rating: 4.6,
    reviews: 423
  },
  {
    id: 'belkin-magsafe',
    name: 'Belkin MagSafe 3-в-1',
    price: 4999,
    category: 'accessories',
    brand: 'Belkin',
    images: [
      'https://readdy.ai/api/search-image?query=Belkin%20MagSafe%203-in-1%20wireless%20charging%20station%20complete%20charging%20dock%20full%20product%20visible%20centered%20white%20background%20professional%20photography%20Apple%20ecosystem%20charger%20elegant%20design&width=600&height=600&seq=belkinmagsafenew1&orientation=squarish',
      'https://readdy.ai/api/search-image?query=Belkin%20MagSafe%20charger%20side%20profile%20complete%20wireless%20charging%20station%20elegant%20design%20full%20device%20visible%20centered%20white%20background%20studio%20lighting%20premium%20build&width=600&height=600&seq=belkinmagsafenew2&orientation=squarish',
      'https://readdy.ai/api/search-image?query=Belkin%20MagSafe%203-in-1%20with%20devices%20complete%20charging%20station%20and%20Apple%20devices%20full%20products%20visible%20centered%20white%20background%20professional%20photography%20wireless%20charging&width=600&height=600&seq=belkinmagsafenew3&orientation=squarish'
    ],
    description: 'Бездротова зарядна станція для одночасної зарядки iPhone, AirPods та Apple Watch.',
    specifications: {
      'Тип': 'Бездротова зарядка',
      'Сумісність': 'iPhone 12+, AirPods, Apple Watch',
      'Потужність iPhone': '15W MagSafe',
      'Потужність Watch': '5W',
      'Потужність AirPods': '5W',
      'Кабель': 'USB-C в комплекті'
    },
    inStock: true,
    rating: 4.7,
    reviews: 156
  }
];

export const getProductsByCategory = (categoryId: string) => {
  return products.filter(product => product.category === categoryId);
};

export const getProductById = (id: string) => {
  return products.find(product => product.id === id);
};

export const getFeaturedProducts = () => {
  return products.slice(0, 8);
};

export const getNewProducts = () => {
  return products.slice(-6);
};
