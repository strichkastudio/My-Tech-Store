
import CategoryProducts from './CategoryProducts';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return [
    { id: 'smartphones' },
    { id: 'laptops' },
    { id: 'tablets' },
    { id: 'accessories' },
    { id: 'headphones' },
    { id: 'smartwatch' },
    { id: 'gaming' }
  ];
}

export default async function CategoryPage({ params }: PageProps) {
  const resolvedParams = await params;
  return <CategoryProducts categoryId={resolvedParams.id} />;
}
