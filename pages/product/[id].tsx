import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import ProductCard from '../../components/ProductCard';
import { ALL_PRODUCTS } from '../../components/types';

const toDollar = (price: number) => `$${Math.max(17, Math.round(price / 17))}`;

export default function ProductDetailPage() {
  const { query } = useRouter();
  const id = Number(query.id);
  const product = ALL_PRODUCTS.find((item) => item.id === id) || ALL_PRODUCTS[0];

  return (
    <>
      <Head>
        <title>m3 | Product</title>
      </Head>
      <Layout>
        <main className="max-w-[1240px] mx-auto px-6 py-9 md:py-10 bg-white">
          <div className="grid md:grid-cols-[680px_1fr] gap-10 md:gap-14">
            <div>
              <img src={product.img} alt={product.title} className="w-full aspect-square object-cover" />
            </div>
            <div>
              <p className="text-[11px] text-[#888] mb-4 uppercase">Home / The Shop</p>
              <h1 className="text-[36px] md:text-[48px] leading-[1.1] mb-2">{product.title}</h1>
              <p className="text-[34px] md:text-[40px] mb-6">{toDollar(product.price)}</p>
              <p className="text-[14px] text-[#555] leading-7 mb-8">{product.desc}</p>
              <div className="grid grid-cols-[120px_1fr] gap-4 mb-5">
                <button className="h-[44px] border border-[#bbb] text-[12px]">- 1 +</button>
                <button className="h-[44px] bg-black text-white text-[11px] tracking-[0.1em]">ADD TO CART</button>
              </div>
              <div className="flex items-center gap-6 text-[11px] uppercase text-[#333]">
                <button className="border-b border-[#333]">Add to Wishlist</button>
                <button className="border-b border-[#333]">Share</button>
              </div>
            </div>
          </div>

          <section className="mt-16 border-t border-[#ececec] pt-10">
            <h3 className="text-[15px] font-semibold uppercase mb-6">Description</h3>
            <p className="text-[13px] text-[#555] leading-7 mb-12">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. This section is styled to mirror the reference product content rhythm and spacing.</p>

            <h3 className="text-[15px] font-semibold uppercase mb-7">Related Products</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {ALL_PRODUCTS.slice(0, 4).map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
}
