import { Layout } from '@/components/Layout/Layout';
import { ProductGrid } from '@/components/ProductGrid/ProductGrid';
import { products } from '@/data/products';

export default function WishlistPage() {
  return (
    <Layout>
      <section className="py-10">
        <h1 className="mb-6 text-4xl">Wishlist</h1>
        <ProductGrid products={products.slice(0, 4)} />
      </section>
    </Layout>
  );
}
