import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import ProductCard from '../components/ProductCard';
import { DATABASE } from '../data/products';
import { CATEGORY_LABEL, Category } from '../components/types';

export default function ShopPage() {
  const { query } = useRouter();
  const category = (query.category as Category) || 'new-arrivals';
  const safeCategory: Category = ['new-arrivals', 'bags', 'accessories'].includes(category) ? category : 'new-arrivals';
  const products = DATABASE[safeCategory];

  return (
    <>
      <Head>
        <title>m3 | Shop</title>
      </Head>
      <Layout>
        <main>
          <section className="relative h-[380px] overflow-hidden">
            <img src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=2000" alt="shop hero" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/32" />
            <div className="relative h-full flex items-center justify-center">
              <h1 className="text-white text-[40px] md:text-[68px] tracking-[0.1em] font-light uppercase">{CATEGORY_LABEL[safeCategory]}</h1>
            </div>
          </section>

          <section className="max-w-[1240px] mx-auto px-6 py-7 md:py-8">
            <div className="flex items-center justify-between text-[11px] mb-8 text-[#444] uppercase">
              <p>Default Sorting</p>
              <p>View 2 3 4 · Filter</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-x-6 gap-y-10 md:gap-y-12">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <div className="text-center mt-12 mb-5">
              <button className="text-[11px] border-b border-[#444] uppercase tracking-[0.04em]">Show More</button>
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
}
