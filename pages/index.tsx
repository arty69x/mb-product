import Link from 'next/link';
import SiteLayout from '@/src/components/Layout/SiteLayout';
import Hero from '@/src/components/Marketing/Hero';
import ProductGrid from '@/src/components/Commerce/ProductGrid';
import StorySection from '@/src/components/Marketing/StorySection';
import AboutSection from '@/src/components/Marketing/AboutSection';
import FeatureIcons from '@/src/components/Marketing/FeatureIcons';
import { products } from '@/src/lib/data/products';
import { ArrowRight } from 'lucide-react';

export default function HomePage() {
  const newArrivals = products.slice(0, 4);

  return (
    <SiteLayout>
      {/* Hero Carousel */}
      <Hero />

      {/* Story Section Carousel */}
      <StorySection />

      {/* New Arrivals Section */}
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <h2
            className="mb-10 text-center text-2xl uppercase tracking-[0.15em] text-primaryText"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            New Arrivals
          </h2>
          <ProductGrid products={newArrivals} columns={4} />
          <div className="mt-10 flex justify-center">
            <Link
              href="/new-arrivals"
              className="group flex items-center gap-2 border border-primaryText px-6 py-2.5 text-xs uppercase tracking-widest text-primaryText transition-colors hover:bg-primaryText hover:text-white"
            >
              View More
              <ArrowRight size={14} strokeWidth={1.5} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Feature Icons */}
      <FeatureIcons />
    </SiteLayout>
  );
}
