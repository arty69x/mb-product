import { ReactNode } from 'react';
import { ControlBar } from '@/components/ControlBar/ControlBar';
import { ProductGrid } from '@/components/ProductGrid/ProductGrid';
import { Product } from '@/lib/types';

export function ProductListPage({ title, products, extra }: { title: string; products: Product[]; extra?: ReactNode }) {
  return (
    <section className="py-10">
      <div className="mb-8 h-56 bg-[url('https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=1600')] bg-cover bg-center" />
      <h1 className="mb-4 text-4xl">{title}</h1>
      <ControlBar />
      <ProductGrid products={products} />
      <div className="mt-8 border-t pt-5 text-center text-sm">1 2 3 Next</div>
      {extra}
    </section>
  );
}
