import { SiteLayout } from '@/src/components/Layout/SiteLayout';
import { ListingPage } from '@/src/components/UI/Templates';
import { byCategory } from '@/src/lib/commerce/catalog';

export default function AccessoriesPage() {
  return <SiteLayout><main><ListingPage title="Accessories" products={byCategory('Accessories')} /></main></SiteLayout>;
}
