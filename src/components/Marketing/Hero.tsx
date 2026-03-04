import Image from 'next/image';
import { heroImages } from '@/src/lib/data/products';
import Button from '@/src/components/UI/Button';

export default function Hero() {
  return (
    <section className="py-8">
      <div className="grid gap-4 lg:grid-cols-12">
        <div className="space-y-4 lg:col-span-5">
          <h1 className="text-4xl font-semibold text-primaryText">Complete Luxury Storefront</h1>
          <p className="text-secondaryText">Discover premium bags and accessories with curated seasonal collections.</p>
          <Button aria-label="Shop new arrivals">Shop New Arrivals</Button>
        </div>
        <div className="grid gap-2 sm:grid-cols-2 lg:col-span-7">
          {heroImages.map((src) => (
            <div key={src} className="relative h-48 overflow-hidden rounded-md sm:h-56">
              <Image src={src} alt="Store hero" fill className="object-cover" sizes="(max-width:768px) 100vw, 50vw" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
