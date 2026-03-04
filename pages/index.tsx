import SiteLayout from '@/src/components/Layout/SiteLayout';
import Hero from '@/src/components/Marketing/Hero';
import ProductGrid from '@/src/components/Commerce/ProductGrid';
import StorySection from '@/src/components/Marketing/StorySection';
import AboutSection from '@/src/components/Marketing/AboutSection';
import FeatureIcons from '@/src/components/Marketing/FeatureIcons';
import Newsletter from '@/src/components/Marketing/Newsletter';
import { products } from '@/src/lib/data/products';

export default function HomePage() {
  return (
    <SiteLayout>
      <Hero />
      <section className="py-8">
        <h2 className="mb-4 text-2xl font-semibold">New Arrivals</h2>
        <ProductGrid products={products.slice(0, 8)} />
      </section>
      <StorySection />
      <AboutSection />
      <FeatureIcons />
      <Newsletter />
    </SiteLayout>
  );
}
