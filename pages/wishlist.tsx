import SiteLayout from '@/src/components/Layout/SiteLayout';
import ProductGrid from '@/src/components/Commerce/ProductGrid';
import { products } from '@/src/lib/data/products';

export default function WishlistPage() {
  return <SiteLayout><section className="py-8"><h1 className="mb-6 text-3xl font-semibold">Wishlist</h1><ProductGrid products={products.slice(2, 10)} /></section></SiteLayout>;
}
