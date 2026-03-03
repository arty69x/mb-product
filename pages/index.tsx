import { useMemo, useState } from 'react';
import Head from 'next/head';
import { Heart, Search, ShoppingBag, User, X } from 'lucide-react';
import { DATABASE, Product } from '../data/products';

type View = 'home' | 'shop' | 'detail';

const NAV = ['Home', 'New Arrivals', 'Bags', 'Accessories', 'About us'];

export default function HomePage() {
  const [view, setView] = useState<View>('home');
  const [activeCategory, setActiveCategory] = useState<'new-arrivals' | 'bags' | 'accessories'>('new-arrivals');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showOffer, setShowOffer] = useState(true);
  const [showCookies, setShowCookies] = useState(true);

  const products = useMemo(() => DATABASE[activeCategory], [activeCategory]);
  const featured = DATABASE['new-arrivals'].slice(0, 4);

  const openShop = (category: 'new-arrivals' | 'bags' | 'accessories') => {
    setActiveCategory(category);
    setView('shop');
    window.scrollTo(0, 0);
  };

  const openProduct = (product: Product) => {
    setSelectedProduct(product);
    setView('detail');
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Head>
        <title>m3 | Luxury Store</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="bg-[#f2f2f2] text-[#111] min-h-screen">
        <header className="bg-white h-[72px] border-b border-[#ececec] sticky top-0 z-30">
          <div className="max-w-[1200px] mx-auto h-full px-6 flex items-center justify-between">
            <div className="text-4xl leading-none font-light">m3</div>
            <nav className="hidden md:flex items-center gap-10 text-[12px] font-semibold">
              {NAV.map((item) => (
                <button
                  key={item}
                  className={item === 'Bags' ? 'underline underline-offset-8' : ''}
                  onClick={() => {
                    if (item === 'Home') setView('home');
                    if (item === 'New Arrivals') openShop('new-arrivals');
                    if (item === 'Bags') openShop('bags');
                    if (item === 'Accessories') openShop('accessories');
                  }}
                >
                  {item}
                </button>
              ))}
            </nav>
            <div className="flex items-center gap-4">
              <Search size={15} />
              <User size={15} />
              <Heart size={15} />
              <ShoppingBag size={15} />
            </div>
          </div>
        </header>

        {view === 'home' && (
          <main>
            <section className="h-[500px] md:h-[460px] relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1700"
                alt="hero"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/35" />
              <div className="relative z-10 h-full flex items-center justify-center text-center text-white">
                <h1 className="text-[38px] md:text-[58px] tracking-wide font-light">NO.1 LUXURY BRANDNAME STONE</h1>
              </div>
            </section>

            <section className="max-w-[1040px] mx-auto bg-white mt-8 p-8 md:p-12 grid md:grid-cols-[280px_1fr] gap-8">
              <img src="https://images.unsplash.com/photo-1635767798638-3e25273a8236?q=80&w=800" alt="story" className="w-full h-[320px] object-cover" />
              <div>
                <h2 className="text-[38px] leading-none mb-5">Each necklace has its own unique story to tell.</h2>
                <p className="text-[14px] leading-7 text-[#555] mb-4">
                  In the world of fashion, true luxury is not defined by price alone, but by the story behind each piece.
                </p>
                <p className="text-[14px] leading-7 text-[#555] mb-8">
                  This necklace was designed to embody timeless elegance. The gold-tone chain is meticulously crafted, gleaming under the light like a treasure from a classic era.
                </p>
                <button className="border border-[#555] px-6 py-2 text-[11px] tracking-[0.15em]">FIND YOUR STYLE</button>
              </div>
            </section>

            <section className="max-w-[1040px] mx-auto py-16">
              <h3 className="text-center text-[42px] tracking-[0.08em] mb-12">NEW ARRIVALS</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {featured.map((product) => (
                  <article key={product.id} className="text-[12px]">
                    <img src={product.img} alt={product.title} className="w-full aspect-square object-cover cursor-pointer" onClick={() => openProduct(product)} />
                    <p className="mt-3 text-[#666]">Dresses</p>
                    <h4 className="leading-5">{product.title}</h4>
                    <p className="font-semibold mt-1">${Math.round(product.price / 10)}</p>
                  </article>
                ))}
              </div>
              <div className="text-center mt-10">
                <button onClick={() => openShop('new-arrivals')} className="bg-[#555] text-white px-6 py-2 text-[11px] tracking-[0.1em] rounded-full">
                  VIEW MORE
                </button>
              </div>
            </section>

            <section className="bg-[#e8e8e8] py-20 text-center px-6">
              <h3 className="text-[40px] mb-8">ABOUT US</h3>
              <h4 className="text-[33px] font-semibold mb-6">100% AUTHENTIC BRANDED ITEMS FROM JAPAN</h4>
              <p className="max-w-[860px] mx-auto text-[14px] tracking-wide leading-7">CAREFULLY SELECTED AND IMPORTED DIRECTLY FROM JAPAN. WITH OVER 10 YEARS OF EXPERIENCE IN AUTHENTIC SECONDHAND BRANDED GOODS, WE GUARANTEE GENUINE QUALITY.</p>
            </section>
          </main>
        )}

        {view === 'shop' && (
          <main>
            <section className="h-[370px] relative overflow-hidden">
              <img src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1800" alt="banner" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-black/35" />
              <h1 className="relative z-10 h-full flex items-center justify-center text-white text-[76px] tracking-[0.08em]">NEW ARRIVALS</h1>
            </section>

            <section className="max-w-[1200px] mx-auto py-8 px-6">
              <div className="flex justify-between text-[12px] text-[#444] mb-8">
                <p>DEFAULT SORTING</p>
                <p>VIEW 2 3 4 · FILTER</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                {products.map((product) => (
                  <article key={product.id} className="text-[12px]">
                    <img src={product.img} alt={product.title} className="w-full aspect-square object-cover cursor-pointer" onClick={() => openProduct(product)} />
                    <p className="mt-3 text-[#666]">Dresses</p>
                    <h4 className="leading-5">{product.title}</h4>
                    <p className="font-semibold mt-1">${Math.round(product.price / 10)}</p>
                  </article>
                ))}
              </div>
            </section>
          </main>
        )}

        {view === 'detail' && selectedProduct && (
          <main className="max-w-[1100px] mx-auto py-10 px-6">
            <div className="grid md:grid-cols-[1fr_420px] gap-10">
              <img src={selectedProduct.img} alt={selectedProduct.title} className="w-full aspect-square object-cover" />
              <div>
                <p className="text-[11px] text-[#888] mb-4">HOME / THE SHOP</p>
                <h1 className="text-[42px] leading-tight mb-3">{selectedProduct.title}</h1>
                <p className="text-[40px] mb-6">${Math.round(selectedProduct.price / 10)}</p>
                <p className="text-[14px] text-[#555] leading-7 mb-8">{selectedProduct.desc}</p>
                <div className="grid grid-cols-[120px_1fr] gap-4 mb-6">
                  <button className="border h-12">- 1 +</button>
                  <button className="bg-black text-white h-12 text-[12px] tracking-[0.1em]">ADD TO CART</button>
                </div>
                <button className="text-[12px] border-b border-black">ADD TO WISHLIST</button>
              </div>
            </div>
          </main>
        )}

        <footer className="bg-black text-white mt-10">
          <div className="max-w-[1200px] mx-auto px-6 py-16 grid md:grid-cols-5 gap-10 text-[12px]">
            <div>
              <div className="text-4xl mb-5 font-light">m3</div>
              <p>1418 River Drive, Suite 35 Cottonhall, CA 9622</p>
              <p className="mt-4">sale@uomo.com</p>
            </div>
            <div><p className="mb-4 text-white/80">COMPANY</p><p>About Us</p><p>Careers</p></div>
            <div><p className="mb-4 text-white/80">SHOP</p><p>New Arrivals</p><p>Accessories</p><p>Bags</p></div>
            <div><p className="mb-4 text-white/80">HELP</p><p>Customer Service</p><p>My Account</p></div>
            <div><p className="mb-4 text-white/80">OPENING TIME</p><p>Mon - Fri: 8AM - 9PM</p><p>Sat: 9AM - 8 PM</p></div>
          </div>
        </footer>

        {showOffer && (
          <div className="fixed inset-0 z-40 bg-black/45 flex items-center justify-center p-6">
            <div className="bg-white w-full max-w-[720px] relative">
              <button className="absolute top-4 right-4" onClick={() => setShowOffer(false)}>
                <X size={30} />
              </button>
              <img src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1200" alt="offer" className="w-full h-[260px] object-cover" />
              <div className="p-8 md:p-10">
                <h2 className="text-[62px] leading-none mb-4">You deserve it</h2>
                <p className="text-[42px] mb-8">A special offer just for you and your first order.</p>
                <div className="flex gap-4">
                  <button className="border border-[#555] px-8 py-4 text-[28px]">Claim offer</button>
                  <button className="border border-[#555] px-8 py-4 text-[28px]" onClick={() => setShowOffer(false)}>No thanks</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {showCookies && (
          <div className="fixed left-0 right-0 bottom-0 bg-[#ebebeb] z-50 border-t p-6 md:p-8">
            <div className="max-w-[1400px] mx-auto grid md:grid-cols-[1fr_240px] gap-4 items-center">
              <p className="text-[20px] md:text-[56px] uppercase leading-[1.1]">WE USE COOKIES TO ENHANCE YOUR EXPERIENCE WHILE NAVIGATE OUR SITE, ANALYZE SITE USAGE, AND ASSIST IN OUR MARKETING EFFORTS.</p>
              <button onClick={() => setShowCookies(false)} className="bg-black text-white px-6 py-5 text-[42px] font-semibold">ACCEPT ALL</button>
              <p className="text-[18px] md:text-[44px] uppercase text-[#777]">PRIVACY POLICY &gt;</p>
              <p className="text-[18px] md:text-[44px] uppercase text-right">PERSONALIZE MY CHOICES &gt;</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
