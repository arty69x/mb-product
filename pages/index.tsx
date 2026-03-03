import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import ProductCard from '../components/ProductCard';
import { DATABASE } from '../data/products';

export default function HomePage() {
  const featured = DATABASE['new-arrivals'].slice(0, 4);
        <title>m3 | Home</title>
      <Layout>
        <main>
          <section className="relative h-[500px] md:h-[490px] overflow-hidden">
            <img src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1880" alt="home hero" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/38" />
            <div className="relative z-10 h-full flex items-center justify-center">
              <h1 className="text-white text-center text-[34px] md:text-[64px] leading-none tracking-[0.03em] font-light px-6">NO.1 LUXURY BRANDNAME STONE</h1>
          </section>
          <section className="max-w-[1040px] mx-auto mt-10 bg-white px-6 py-8 md:px-10 md:py-12 grid md:grid-cols-[240px_1fr] gap-8 md:gap-10">
            <img src="https://images.unsplash.com/photo-1635767798638-3e25273a8236?q=80&w=900" alt="story" className="w-full h-[320px] md:h-[340px] object-cover" />
              <h2 className="text-[34px] md:text-[48px] leading-[1.06] mb-7">Each necklace has its own unique story to tell.</h2>
              <p className="text-[14px] md:text-[15px] text-[#505050] leading-[1.7] mb-4">In the world of fashion, true luxury is not defined by price alone, but by the story behind each piece.</p>
              <p className="text-[14px] md:text-[15px] text-[#505050] leading-[1.7] mb-8">This necklace was designed to embody timeless elegance. The gold-tone chain is meticulously crafted, gleaming under the light like a treasure from a classic era.</p>
              <button className="px-6 h-[34px] border border-[#767676] text-[10px] tracking-[0.16em]">FIND YOUR STYLE</button>
          </section>
          <section className="max-w-[1040px] mx-auto py-14 md:py-20 px-6 md:px-0">
            <h3 className="text-center text-[35px] md:text-[46px] tracking-[0.07em] mb-12">NEW ARRIVALS</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
              {featured.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            <div className="text-center mt-12">
              <Link href="/shop?category=new-arrivals" className="inline-block bg-[#6f6f6f] text-white text-[10px] h-[26px] px-8 rounded-full tracking-[0.09em] leading-[26px]">VIEW MORE</Link>
          </section>

          <section className="bg-[#e8e8e8] text-center py-16 md:py-20 px-6">
            <h3 className="text-[35px] md:text-[45px] mb-8">ABOUT US</h3>
            <h4 className="text-[24px] md:text-[42px] leading-[1.2] font-semibold mb-6">100% AUTHENTIC BRANDED ITEMS FROM JAPAN</h4>
            <p className="max-w-[900px] mx-auto text-[13px] md:text-[17px] tracking-[0.02em] leading-[1.7]">CAREFULLY SELECTED AND IMPORTED DIRECTLY FROM JAPAN. WITH OVER 10 YEARS OF EXPERIENCE IN AUTHENTIC SECONDHAND BRANDED GOODS, WE GUARANTEE GENUINE QUALITY. EACH ITEM IS THOROUGHLY INSPECTED BEFORE DELIVERY.</p>
          </section>
        </main>
      </Layout>
