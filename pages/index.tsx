import Link from 'next/link';
import { Layout } from '@/components/Layout/Layout';
import { Hero } from '@/components/Hero/Hero';
import { ProductGrid } from '@/components/ProductGrid/ProductGrid';
import { products } from '@/data/products';

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <section className="py-14">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl">New Arrivals</h2>
          <Link className="border px-4 py-2 hover:bg-black hover:text-white" href="/new-arrivals">View More</Link>
        </div>
        <ProductGrid products={products.slice(0, 4)} />
      </section>
      <section className="grid gap-16 py-16 md:grid-cols-2">
        <img src="https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?q=80&w=1200" alt="Story" className="aspect-square w-full object-cover" />
        <div className="flex flex-col justify-center gap-6">
          <h3 className="text-4xl">Our Story</h3>
          <p className="text-[#666666]">Curated luxury collections sourced from trusted partners and authenticated by experts.</p>
          <Link href="/about" className="w-fit border px-6 py-3 hover:bg-black hover:text-white">Read More</Link>
        </div>
      </section>
      <section className="mx-auto max-w-[800px] py-16 text-center">
        <h3 className="mb-4 text-3xl">About MB Luxury</h3>
        <p className="text-[#666666]">We blend timeless craftsmanship and modern retail technology to make premium shopping seamless.</p>
      </section>
      <section className="grid gap-6 py-10 md:grid-cols-3">
        {['Fast Delivery', '24/7 Support', 'Money Back'].map((item) => (
          <div key={item} className="border p-6 text-center">{item}</div>
        ))}
      </section>
    </Layout>
  );
}
