import { SiteLayout } from '@/src/components/Layout/SiteLayout';
import { PageHero } from '@/src/components/UI/PageHero';
import { ListingPage } from '@/src/components/UI/Templates';
import { PRODUCTS } from '@/src/lib/data/site';

export default function ShopPage() {
  return <SiteLayout><main><PageHero title="Shop" image="/assets/mb/v1/ref/hero-new-arrivals.svg" /><ListingPage title="The Shop" products={PRODUCTS} /></main></SiteLayout>;
}
