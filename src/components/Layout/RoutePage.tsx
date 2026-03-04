import { useState } from 'react';
import Image from 'next/image';
import SiteLayout from './SiteLayout';
import ProductGrid from '@/src/components/Commerce/ProductGrid';
import { products } from '@/src/lib/data/products';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';

const bannerImages: Record<string, string> = {
  'new-arrivals': '/assets/mb/v1/ref/hero-new-arrivals.svg',
  bags: '/assets/mb/v1/ref/hero-home.svg',
  accessories: '/assets/mb/v1/ref/hero-product.svg'
};

interface RoutePageProps {
  title: string;
  description: string;
  filter?: string;
}

export default function RoutePage({ title, description, filter }: RoutePageProps) {
  const [viewCols, setViewCols] = useState<2 | 3 | 4 | 5>(5);
  const [showMore, setShowMore] = useState(false);

  const filtered = filter
    ? products.filter((product) => product.category === filter || product.slug.includes(filter))
    : products;

  const displayCount = showMore ? filtered.length : Math.min(15, filtered.length);
  const displayed = filtered.slice(0, displayCount);
  const bannerImage = (filter && bannerImages[filter]) || '/assets/mb/v1/ref/hero-new-arrivals.svg';

  return (
    <SiteLayout>
      {/* Banner */}
      <section className="relative h-[30vh] w-full overflow-hidden sm:h-[35vh] lg:h-[40vh]">
        <Image
          src={bannerImage}
          alt={title}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1
            className="text-2xl uppercase tracking-[0.2em] text-white md:text-3xl lg:text-4xl"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            {title}
          </h1>
        </div>
      </section>

      {/* Controls Bar */}
      <section className="border-b border-borderLight">
        <div className="container mx-auto flex flex-wrap items-center justify-between gap-4 px-4 py-4">
          {/* Sort */}
          <button className="flex items-center gap-1 text-xs uppercase tracking-wider text-secondaryText transition-colors hover:text-primaryText">
            Default Sorting <ChevronDown size={14} strokeWidth={1.5} />
          </button>

          <div className="flex items-center gap-4">
            {/* View Options */}
            <div className="hidden items-center gap-2 text-xs text-secondaryText sm:flex">
              <span className="uppercase tracking-wider">View</span>
              {([2, 3, 4, 5] as const).map((num) => (
                <button
                  key={num}
                  onClick={() => setViewCols(num)}
                  className={`px-1 transition-colors ${viewCols === num ? 'font-semibold text-primaryText' : 'text-secondaryText hover:text-primaryText'}`}
                  aria-label={`Show ${num} columns`}
                >
                  {num}
                </button>
              ))}
            </div>

            {/* Filter */}
            <button className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-secondaryText transition-colors hover:text-primaryText">
              <SlidersHorizontal size={14} strokeWidth={1.5} />
              Filter
            </button>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-10 lg:py-14">
        <div className="container mx-auto px-4">
          <ProductGrid products={displayed} columns={viewCols > 4 ? 5 : viewCols as 2 | 3 | 4} />

          {/* Show More */}
          {filtered.length > displayCount && !showMore && (
            <div className="mt-10 flex justify-center">
              <button
                onClick={() => setShowMore(true)}
                className="border-b border-primaryText pb-1 text-xs uppercase tracking-widest text-primaryText transition-colors hover:border-secondaryText hover:text-secondaryText"
              >
                Show More
              </button>
            </div>
          )}
        </div>
      </section>
    </SiteLayout>
  );
}
