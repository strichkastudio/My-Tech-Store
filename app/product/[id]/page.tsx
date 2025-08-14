
import ProductDetail from './ProductDetail';

export async function generateStaticParams() {
  return [
    { id: 'iphone-15-pro' },
    { id: 'samsung-s24-ultra' },
    { id: 'xiaomi-14-ultra' },
    { id: 'google-pixel-8-pro' },
    { id: 'oneplus-12' },
    { id: 'macbook-pro-m3' },
    { id: 'dell-xps-15' },
    { id: 'lenovo-thinkpad-x1' },
    { id: 'asus-rog-strix' },
    { id: 'hp-spectre-x360' },
    { id: 'airpods-pro-2' },
    { id: 'sony-wh1000xm5' },
    { id: 'bose-quietcomfort' },
    { id: 'sennheiser-momentum' },
    { id: 'ipad-pro-m2' },
    { id: 'samsung-tab-s9' },
    { id: 'apple-watch-ultra' },
    { id: 'samsung-watch6' },
    { id: 'steam-deck' },
    { id: 'ps5-dualsense' },
    { id: 'anker-powerbank' },
    { id: 'belkin-magsafe' }
  ];
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: PageProps) {
  const { id } = await params;
  return <ProductDetail productId={id} />;
}
