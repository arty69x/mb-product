import SiteLayout from './SiteLayout';
import ProductGrid from '@/src/components/Commerce/ProductGrid';
import { products } from '@/src/lib/data/products';

export default function RoutePage({ title, description, filter }: { title: string; description: string; filter?: string }) {
  const filtered = filter ? products.filter((product) => product.category === filter || product.slug.includes(filter)) : products;
  return (
    <SiteLayout>
      <section className="py-8">
        <h1 className="mb-3 text-3xl font-semibold">{title}</h1>
        <p className="mb-6 text-secondaryText">{description}</p>
        <ProductGrid products={filtered.slice(0, 12)} />
      </section>
    </SiteLayout>
  );
}
