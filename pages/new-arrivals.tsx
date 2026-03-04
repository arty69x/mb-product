import { SiteLayout } from '@/src/components/Layout/SiteLayout';
import { PageHero } from '@/src/components/UI/PageHero';
import { ListingPage } from '@/src/components/UI/Templates';
import { PRODUCTS } from '@/src/lib/data/site';

export default function NewArrivalsPage() {
  return <SiteLayout><main><PageHero title="New Arrivals" image="/assets/mb/v1/ref/hero-new-arrivals.svg" /><ListingPage title="New Arrivals" products={PRODUCTS.slice(0, 10)} /></main></SiteLayout>;
}
