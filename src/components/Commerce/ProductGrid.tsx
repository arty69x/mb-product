import type { Product } from '@/src/lib/data/site';
import { ProductCard } from './ProductCard';

type Props = { products: Product[] | null | undefined };

export function ProductGrid({ products }: Props) {
  if (!products) {
    return <p role="status">Loading products…</p>;
  }

  if (!Array.isArray(products) || products.length === 0) {
    return <p role="status">No products available.</p>;
  }

  return (
    <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-5">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
