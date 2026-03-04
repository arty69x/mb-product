import { SiteLayout } from '@/src/components/Layout/SiteLayout';
import { ListingPage } from '@/src/components/UI/Templates';
import { PRODUCTS } from '@/src/lib/data/site';

export default function WishlistPage() {
  return <SiteLayout><main><ListingPage title="Wishlist" products={PRODUCTS.slice(0, 3)} /></main></SiteLayout>;
}
