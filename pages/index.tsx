import Image from 'next/image';
import { SiteLayout } from '@/src/components/Layout/SiteLayout';
import { PageHero } from '@/src/components/UI/PageHero';
import { ListingPage, StaticPage } from '@/src/components/UI/Templates';
import { PRODUCTS } from '@/src/lib/data/site';

export default function HomePage() {
  return (
    <SiteLayout>
      <main>
        <PageHero title="NO.1 LUXURY BRANDNAME STONE" image="/assets/mb/v1/ref/hero-home.svg" heightClass="h-[280px] md:h-[540px]" />
        <section>
          <div className="container mx-auto px-4 py-12">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="relative aspect-[3/4] overflow-hidden"><Image src="/assets/mb/v1/ref/product-11.svg" alt="story" fill className="object-cover" /></div>
              <div>
                <h2 className="mb-4 text-4xl">Each necklace has its own unique story to tell.</h2>
                <p className="mb-4 text-sm leading-7">In the world of fashion, true luxury is not defined by price alone, but by the story behind each piece.</p>
                <button className="rounded-full bg-neutral-700 px-6 py-2 text-xs uppercase text-white hover:bg-black focus-visible:outline">Find Your Style</button>
              </div>
            </div>
          </div>
        </section>
        <ListingPage title="New Arrivals" products={PRODUCTS.slice(0, 4)} />
        <StaticPage title="About Us"><p className="text-center text-3xl font-semibold uppercase">100% Authentic Branded Items from Japan</p><p className="text-center uppercase">Carefully selected and imported directly from Japan.</p></StaticPage>
      </main>
    </SiteLayout>
  );
}
