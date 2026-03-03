import Link from 'next/link';
import { ReactNode, useState } from 'react';
import { Heart, Search, ShoppingBag, User, X } from 'lucide-react';

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const [showOffer, setShowOffer] = useState(true);
  const [showCookies, setShowCookies] = useState(true);

  return (
    <div className="min-h-screen bg-[#f5f5f5] text-[#121212]">
      <header className="h-[74px] bg-white border-b border-[#ececec] sticky top-0 z-40">
        <div className="max-w-[1240px] mx-auto h-full px-6 flex items-center justify-between">
          <Link href="/" className="text-[46px] leading-none tracking-[-0.04em] font-light">m3</Link>
          <nav className="hidden md:flex items-center gap-10 text-[12px] font-semibold">
            <Link href="/">Home</Link>
            <Link href="/shop?category=new-arrivals">New Arrivals</Link>
            <Link href="/shop?category=bags">Bags</Link>
            <Link href="/shop?category=accessories">Accessories</Link>
            <Link href="/about">About us</Link>
          </nav>
          <div className="flex items-center gap-4 text-[#222]">
            <Search size={16} strokeWidth={1.8} />
            <User size={16} strokeWidth={1.8} />
            <Heart size={16} strokeWidth={1.8} />
            <ShoppingBag size={16} strokeWidth={1.8} />
          </div>
        </div>
      </header>

      {children}

      <footer className="bg-black text-white mt-10">
        <div className="max-w-[1240px] mx-auto px-6 py-16 grid md:grid-cols-5 gap-10 text-[12px]">
          <div>
            <div className="text-[54px] leading-none tracking-[-0.04em] mb-5 font-light">m3</div>
            <p>1418 River Drive, Suite 35 Cottonhall, CA 9622</p>
            <p className="mt-4">sale@uomo.com</p>
            <p className="mt-1">+1 246-345-0695</p>
          </div>
          <div><p className="mb-4 text-white/85">COMPANY</p><p>About Us</p><p>Careers</p><p>Affiliates</p><p>Blog</p><p>Contact Us</p></div>
          <div><p className="mb-4 text-white/85">SHOP</p><p>New Arrivals</p><p>Accessories</p><p>Bags</p></div>
          <div><p className="mb-4 text-white/85">HELP</p><p>Customer Service</p><p>My Account</p><p>Find a Store</p><p>Legal & Privacy</p><p>Contact</p></div>
          <div><p className="mb-4 text-white/85">OPENING TIME</p><p>Mon - Fri: 8AM - 9PM</p><p>Sat: 9 AM - 8 PM</p><p>Sun: Closed</p></div>
        </div>
      </footer>

      {showOffer && (
        <div className="fixed inset-0 z-50 bg-black/44 flex items-center justify-center p-4 md:p-6">
          <div className="bg-white w-full max-w-[690px] relative">
            <button onClick={() => setShowOffer(false)} className="absolute right-4 top-4 z-10" aria-label="Close offer">
              <X size={40} strokeWidth={1.8} />
            </button>
            <img src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1400" alt="offer" className="w-full h-[252px] object-cover" />
            <div className="p-6 md:p-8">
              <h2 className="text-[44px] md:text-[62px] leading-[0.98] mb-4">You deserve it</h2>
              <p className="text-[16px] md:text-[50px] leading-[1.1] mb-8">A special offer just for you and your first order.</p>
              <div className="grid grid-cols-2 gap-4">
                <button className="h-[62px] md:h-[78px] border border-[#666] text-[18px] md:text-[49px]">Claim offer</button>
                <button onClick={() => setShowOffer(false)} className="h-[62px] md:h-[78px] border border-[#666] text-[18px] md:text-[49px]">No thanks</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showCookies && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#ebebeb] border-t border-[#ddd] p-4 md:p-5">
          <div className="max-w-[1440px] mx-auto grid md:grid-cols-[1fr_250px] gap-4 items-center">
            <p className="uppercase text-[16px] md:text-[52px] leading-[1.08]">WE USE COOKIES TO ENHANCE YOUR EXPERIENCE WHILE NAVIGATE OUR SITE, ANALYZE SITE USAGE, AND ASSIST IN OUR MARKETING EFFORTS.</p>
            <button onClick={() => setShowCookies(false)} className="bg-black text-white h-[58px] md:h-[88px] text-[24px] md:text-[48px] font-semibold">ACCEPT ALL</button>
            <p className="uppercase text-[#7a7a7a] text-[14px] md:text-[47px]">PRIVACY POLICY &gt;</p>
            <p className="uppercase text-[14px] md:text-[47px] md:text-right">PERSONALIZE MY CHOICES &gt;</p>
          </div>
        </div>
      )}
    </div>
  );
}
