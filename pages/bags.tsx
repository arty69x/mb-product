import { SiteLayout } from '@/src/components/Layout/SiteLayout';
import { ListingPage } from '@/src/components/UI/Templates';
import { byCategory } from '@/src/lib/commerce/catalog';

export default function BagsPage() {
  return <SiteLayout><main><ListingPage title="Bags" products={byCategory('Bags')} /></main></SiteLayout>;
}
