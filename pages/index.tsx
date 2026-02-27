import React, { useState, useEffect, useMemo } from 'react';
import Head from 'next/head';
import {
  Menu,
  Search,
  User,
  Heart,
  ShoppingBag,
  X,
  Truck,
  ShieldCheck,
  ArrowRight,
  Check,
  Facebook,
  Instagram,
  Trash2,
  Globe,
  Award,
  ExternalLink,
  Box
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { DATABASE, Product } from '../data/products';

type CartItem = Product & { qty: number };
type Order = { id: string; date: string; total: number; status: string };

export default function MBLuxuryUnlockedSystem() {
  const [view, setView] = useState('home');
  const [activeCategory, setActiveCategory] = useState('new-arrivals');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [currency, setCurrency] = useState('THB');
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showCookies, setShowCookies] = useState(true);
  const [toast, setToast] = useState<string | null>(null);
  const [discount, setDiscount] = useState(0);
  const [promoCode, setPromoCode] = useState('');
  const [isCertOpen, setIsCertOpen] = useState(false);

  useEffect(() => {
    const sCart = localStorage.getItem('mb_cart');
    const sWish = localStorage.getItem('mb_wish');
    const sOrders = localStorage.getItem('mb_orders');
    if (sCart) setCart(JSON.parse(sCart));
    if (sWish) setWishlist(JSON.parse(sWish));
    if (sOrders) setOrders(JSON.parse(sOrders));

    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    localStorage.setItem('mb_cart', JSON.stringify(cart));
    localStorage.setItem('mb_wish', JSON.stringify(wishlist));
    localStorage.setItem('mb_orders', JSON.stringify(orders));
  }, [cart, wishlist, orders]);

  const formatPrice = (p: number) => {
    if (currency === 'USD') return '$ ' + Math.round(p / 35).toLocaleString();
    return p.toLocaleString() + ' THB';
  };

  const subtotal = useMemo(() => cart.reduce((s, i) => s + i.price * i.qty, 0), [cart]);
  const total = useMemo(() => subtotal - subtotal * (discount / 100), [subtotal, discount]);

  const notify = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  };

  const applyPromo = () => {
    if (promoCode.trim().toUpperCase() === 'MB10') {
      setDiscount(10);
      notify('Promo code MB10 applied');
      return;
    }
    setDiscount(0);
    notify('Invalid promo code');
  };

  const navigateToShop = (cat: string) => {
    setActiveCategory(cat);
    setView('shop');
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const handleAddToCart = (p: Product) => {
    const exists = cart.find((i) => i.id === p.id);
    if (exists) {
      setCart(cart.map((i) => (i.id === p.id ? { ...i, qty: i.qty + 1 } : i)));
    } else {
      setCart([...cart, { ...p, qty: 1 }]);
    }
    notify('Item added to bag');
    setView('cart');
  };

  const toggleWishlist = (p: Product) => {
    if (wishlist.find((i) => i.id === p.id)) {
      setWishlist(wishlist.filter((i) => i.id !== p.id));
      notify('Removed from wishlist');
    } else {
      setWishlist([...wishlist, p]);
      notify('Saved to wishlist');
    }
  };

  const handleFinalCheckout = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id = 'MB-' + Math.floor(100000 + Math.random() * 900000);
    const newOrder = { id, date: new Date().toLocaleDateString(), total, status: 'Verified' };
    setOrders([newOrder, ...orders]);
    setCart([]);
    setView('success');
    window.scrollTo(0, 0);
  };

  const Header = () => (
    <nav
      className={
        'fixed top-0 w-full z-[100] transition-all duration-500 px-4 py-5 flex items-center justify-between ' +
        (isScrolled || view !== 'home' ? 'bg-white border-b border-neutral-100 text-black shadow-sm' : 'bg-transparent text-white')
      }
    >
      <div className="flex items-center gap-5">
        <Menu size={24} onClick={() => setIsMenuOpen(true)} className="cursor-pointer active:scale-90" />
        <div className="relative group flex items-center">
          <Search size={22} className="cursor-pointer" />
          <input
            type="text"
            placeholder="SEARCH..."
            className="ml-3 bg-transparent border-b border-current outline-none text-[10px] w-0 group-hover:w-28 focus:w-28 transition-all duration-500 opacity-0 group-hover:opacity-100"
            onChange={(e) => setSearchQuery(e.target.value.toUpperCase())}
          />
        </div>
      </div>
      <div onClick={() => setView('home')} className="text-2xl font-black tracking-tighter absolute left-1/2 -translate-x-1/2 uppercase cursor-pointer select-none">
        MB
      </div>
      <div className="flex gap-4 items-center">
        <div className="hidden sm:flex items-center gap-2 mr-2 border-r pr-4 border-current/20 text-[9px] font-black">
          <button onClick={() => setCurrency('THB')} className={currency === 'THB' ? 'underline' : 'opacity-30'}>
            THB
          </button>
          <button onClick={() => setCurrency('USD')} className={currency === 'USD' ? 'underline' : 'opacity-30'}>
            USD
          </button>
        </div>
        <User size={22} onClick={() => setView('account')} className="cursor-pointer hover:opacity-50" />
        <div onClick={() => setView('wishlist')} className="relative cursor-pointer">
          <Heart size={22} className={wishlist.length > 0 ? 'text-[#B18E3C] fill-current' : ''} />
          {wishlist.length > 0 && <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#B18E3C] rounded-full" />}
        </div>
        <div onClick={() => setView('cart')} className="relative cursor-pointer group">
          <ShoppingBag size={22} />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-[#B18E3C] text-white text-[8px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
              {cart.reduce((a, b) => a + b.qty, 0)}
            </span>
          )}
        </div>
      </div>
    </nav>
  );

  const ProductCard = ({ p }: { p: Product }) => (
    <div className="space-y-4 uppercase tracking-tight group">
      <div onClick={() => { setSelectedProduct(p); setView('detail'); window.scrollTo(0, 0); }} className="aspect-[3/4] bg-neutral-50 overflow-hidden relative cursor-pointer border border-neutral-100 shadow-sm">
        <img src={p.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]" alt={p.title} />
        <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-[8px] font-black tracking-widest shadow-sm">RANK {p.grade}</div>
      </div>
      <div className="flex justify-between items-start pt-1 px-1">
        <div className="text-[11px] font-black truncate pr-4 opacity-90 tracking-widest leading-tight">{p.title}</div>
        <ShoppingBag size={14} className="text-neutral-400 cursor-pointer hover:text-black transition-colors" onClick={() => handleAddToCart(p)} />
      </div>
      <div className="flex justify-between items-center px-1 mt-[-6px]">
        <div className="text-[14px] font-black tracking-tighter text-[#B18E3C]">{formatPrice(p.price)}</div>
        <Heart size={14} className={'cursor-pointer ' + (wishlist.find((i) => i.id === p.id) ? 'text-red-500 fill-current' : 'text-neutral-200')} onClick={() => toggleWishlist(p)} />
      </div>
    </div>
  );

  return (
    <>
      <Head>
        <title>MB LUXURY | Official Digital Flagship</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen bg-white font-sans overflow-x-hidden">
        <Header />
        <AnimatePresence>
          {toast && (
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="fixed bottom-10 right-10 z-[500] bg-black text-white px-10 py-5 text-[11px] font-black uppercase tracking-[0.2em] shadow-2xl rounded-full">
              {toast}
            </motion.div>
          )}
        </AnimatePresence>

        <main>
          {view === 'home' && (
            <div className="animate-in fade-in duration-700">
              <section className="h-[85vh] bg-black relative flex items-center justify-center overflow-hidden">
                <img src="https://images.unsplash.com/photo-1520962922320-2038eebab146?q=80&w=1600" className="absolute inset-0 w-full h-full object-cover opacity-60 brightness-75 scale-105" alt="hero" />
                <div className="relative text-white text-center px-6 space-y-8 z-20 uppercase">
                  <h2 className="text-[11px] tracking-[0.8em] font-light opacity-80">Japan Auction Standard Quality</h2>
                  <h1 className="text-4xl md:text-8xl font-light tracking-[0.15em] leading-tight">No.1 Luxury<br />Brandname Store</h1>
                  <button onClick={() => navigateToShop('new-arrivals')} className="border border-white px-14 py-5 text-[11px] font-bold uppercase tracking-[0.4em] hover:bg-white hover:text-black transition-all shadow-2xl active:scale-95">Discover Collection</button>
                </div>
              </section>
              <section className="py-32 flex flex-col items-center gap-16 uppercase tracking-[0.5em] font-black text-xs">
                <div onClick={() => navigateToShop('new-arrivals')} className="border-b-2 border-black pb-2 cursor-pointer hover:opacity-40 transition-all">New Arrivals</div>
                <div onClick={() => navigateToShop('bags')} className="border-b-2 border-black pb-2 cursor-pointer hover:opacity-40 transition-all">Bags Collection</div>
                <div onClick={() => navigateToShop('accessories')} className="border-b-2 border-black pb-2 cursor-pointer hover:opacity-40 transition-all">Accessories</div>
              </section>
            </div>
          )}

          {view === 'shop' && (
            <div className="pt-32 pb-40 px-4 max-w-7xl mx-auto min-h-screen animate-in fade-in">
              <h1 className="text-center text-xl font-bold tracking-[0.5em] mb-20 uppercase underline underline-offset-[16px] decoration-neutral-100">{activeCategory.replace('-', ' ')}</h1>
              <div className="grid grid-cols-2 gap-x-5 gap-y-16 md:grid-cols-4">
                {(DATABASE as Record<string, Product[]>)[activeCategory].filter((p: Product) => p.title.includes(searchQuery)).map((p: Product) => <ProductCard key={p.id} p={p} />)}
              </div>
            </div>
          )}

          {view === 'detail' && selectedProduct && (
            <div className="pt-32 pb-40 px-6 max-w-7xl mx-auto animate-in fade-in">
              <div className="flex flex-col md:flex-row gap-20">
                <div className="md:w-3/5 aspect-[3/4] overflow-hidden shadow-2xl relative border">
                  <img src={selectedProduct.img} className="w-full h-full object-cover" alt={selectedProduct.title} />
                  <div className="absolute top-10 right-10 bg-black text-white px-6 py-3 text-[10px] font-black tracking-[0.3em]">RANK {selectedProduct.grade}</div>
                </div>
                <div className="md:w-2/5 flex flex-col uppercase tracking-widest">
                  <p className="text-[10px] font-black text-neutral-300 mb-2">CATEGORY / {selectedProduct.cat} / SERIAL {selectedProduct.serial}</p>
                  <h1 className="text-3xl font-black mb-8 leading-tight">{selectedProduct.title}</h1>
                  <div className="text-3xl font-black mb-10 text-[#B18E3C]">{formatPrice(selectedProduct.price)}</div>
                  <p className="text-[12px] normal-case tracking-normal text-gray-500 mb-12 leading-loose opacity-60">{selectedProduct.desc}</p>
                  <div className="bg-neutral-50 p-6 mb-12 border-l-4 border-[#B18E3C] flex justify-between items-center cursor-pointer" onClick={() => setIsCertOpen(true)}>
                    <div className="space-y-1">
                      <p className="text-[11px] font-black flex items-center gap-3 underline">AUTHENTICITY REPORT</p>
                      <p className="text-[9px] opacity-40 normal-case">Grade {selectedProduct.grade} verified by Japan House</p>
                    </div>
                    <ExternalLink size={16} className="opacity-30" />
                  </div>
                  <div className="space-y-4">
                    <button onClick={() => handleAddToCart(selectedProduct)} className="w-full bg-black text-white py-7 font-black tracking-[0.4em] active:scale-95 shadow-xl">Add To Bag</button>
                    <button onClick={() => toggleWishlist(selectedProduct)} className="w-full border border-neutral-200 py-7 font-black tracking-[0.4em]">Wishlist</button>
                  </div>
                  <div className="border-t border-neutral-100 mt-12 pt-10 space-y-8 text-[10px] font-black opacity-60">
                    <div className="flex items-center gap-6"><Truck size={20} /> <span>WORLDWIDE SHIPPING</span></div>
                    <div className="flex items-center gap-6"><ShieldCheck size={20} /> <span>CERTIFIED AUTHENTIC</span></div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {view === 'cart' && (
            <div className="pt-32 pb-40 px-6 max-w-2xl mx-auto min-h-screen animate-in fade-in">
              <h1 className="text-2xl font-black uppercase tracking-widest mb-20 text-center underline underline-offset-[16px]">Selection ({cart.reduce((a, b) => a + b.qty, 0)})</h1>
              {cart.length === 0 ? (
                <div className="text-center py-40 opacity-30 text-[11px] font-black uppercase tracking-widest">Empty Selection</div>
              ) : (
                <div className="space-y-16">
                  {cart.map((item) => (
                    <div key={item.id} className="flex gap-10 items-center border-b pb-12 uppercase tracking-widest">
                      <img src={item.img} className="w-24 h-32 object-cover border cursor-pointer" onClick={() => { setSelectedProduct(item); setView('detail'); }} alt={item.title} />
                      <div className="flex-1 space-y-2">
                        <p className="text-[14px] font-black">{item.title}</p>
                        <p className="text-[14px] font-black text-[#B18E3C]">{formatPrice(item.price)}</p>
                        <div className="mt-8 flex items-center border w-fit">
                          <button onClick={() => { if (item.qty > 1) setCart(cart.map((i) => (i.id === item.id ? { ...i, qty: i.qty - 1 } : i))); }} className="p-2 px-4">-</button>
                          <span className="px-6 text-[12px] font-black">{item.qty}</span>
                          <button onClick={() => setCart(cart.map((i) => (i.id === item.id ? { ...i, qty: i.qty + 1 } : i)))} className="p-2 px-4">+</button>
                        </div>
                      </div>
                      <Trash2 size={20} className="text-neutral-200 cursor-pointer hover:text-black" onClick={() => setCart(cart.filter((i) => i.id !== item.id))} />
                    </div>
                  ))}
                  <div className="bg-neutral-50 p-12 space-y-10 uppercase tracking-widest font-black text-[11px]">
                    <div className="flex justify-between items-center gap-6">
                      <input placeholder="PROMO CODE (MB10)" className="bg-transparent border-b border-neutral-300 p-3 flex-1 outline-none" onChange={(e) => setPromoCode(e.target.value)} />
                      <button onClick={applyPromo} className="underline underline-offset-8">APPLY</button>
                    </div>
                    <div className="space-y-6 border-t pt-10">
                      <div className="flex justify-between font-bold opacity-50"><span>SUBTOTAL</span><span>{formatPrice(subtotal)}</span></div>
                      {discount > 0 && <div className="flex justify-between text-red-500"><span>DISCOUNT</span><span>-{formatPrice(subtotal * 0.1)}</span></div>}
                      <div className="flex justify-between text-xl pt-6 border-t border-black"><span>ESTIMATED TOTAL</span><span>{formatPrice(total)}</span></div>
                    </div>
                    <button onClick={() => setView('checkout')} className="w-full bg-black text-white py-8 text-sm active:scale-95 shadow-2xl tracking-[0.4em]">Checkout</button>
                  </div>
                </div>
              )}
            </div>
          )}

          {view === 'checkout' && (
            <div className="pt-32 pb-40 px-6 max-w-2xl mx-auto min-h-screen">
              <h1 className="text-2xl font-black uppercase tracking-widest mb-10 text-center">Checkout</h1>
              <form onSubmit={handleFinalCheckout} className="space-y-6">
                <input required placeholder="Full Name" className="w-full border p-4" />
                <input required placeholder="Address" className="w-full border p-4" />
                <input required placeholder="Phone" className="w-full border p-4" />
                <button type="submit" className="w-full bg-black text-white py-4 font-black uppercase tracking-[0.3em]">Confirm Payment</button>
              </form>
            </div>
          )}

          {view === 'account' && (
            <div className="pt-32 pb-40 px-6 max-w-7xl mx-auto min-h-screen animate-in fade-in">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-20 font-black uppercase tracking-widest text-[11px]">
                <div className="space-y-10">
                  <h2 className="text-3xl mb-16 tracking-tighter">My Account</h2>
                </div>
                <div className="md:col-span-3 space-y-16">
                  <h3 className="text-xs uppercase tracking-[0.4em] border-b pb-4">Order History</h3>
                  {orders.length === 0 ? <div className="py-24 text-center border-2 border-dashed rounded-2xl opacity-20">NO RECENT ORDERS</div> : orders.map((o) => (
                    <div key={o.id} className="border p-10 grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
                      <div className="space-y-2"><p className="opacity-40 text-[9px]">REF / DATE</p><p className="font-bold">{o.id}</p><p className="opacity-40 text-[10px]">{o.date}</p></div>
                      <div className="space-y-2"><p className="opacity-40 text-[9px]">STATUS</p><p className="font-bold text-green-600 flex items-center gap-2 underline">VERIFIED <Check size={14} /></p></div>
                      <div className="text-right"><p className="text-lg font-bold text-[#B18E3C]">{formatPrice(o.total)}</p></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {view === 'success' && (
            <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 animate-in zoom-in font-sans uppercase tracking-widest">
              <div className="w-28 h-28 bg-neutral-50 rounded-full flex items-center justify-center mb-10 text-[#B18E3C] shadow-inner"><Check size={50} /></div>
              <h1 className="text-4xl font-black uppercase mb-6 tracking-widest">Confirmed</h1>
              <div className="bg-neutral-50 p-12 w-full max-w-sm border border-neutral-100 shadow-sm">
                <p className="text-[9px] opacity-30 font-black mb-4 tracking-[0.2em]">ORDER ID</p>
                <p className="text-3xl font-black font-mono tracking-tighter">{orders[0]?.id}</p>
              </div>
              <button onClick={() => setView('home')} className="underline text-[11px] font-black uppercase tracking-widest mt-20 hover:opacity-50 transition-opacity">Main Boutique</button>
            </div>
          )}
        </main>

        {showCookies && (
          <div className="fixed bottom-0 w-full bg-white z-[600] p-8 border-t border-neutral-100 shadow-[0_-20px_60px_rgba(0,0,0,0.1)] text-[12px] font-bold tracking-wider uppercase leading-relaxed font-sans">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-10">
              <p className="opacity-80 flex-1">WE USE COOKIES TO ENHANCE YOUR EXPERIENCE WHILE NAVIGATE OUR SITE, ANALYZE SITE USAGE, AND ASSIST IN OUR MARKETING EFFORTS.</p>
              <div className="flex gap-10 items-center justify-center font-black">
                <span className="underline decoration-neutral-300 cursor-pointer">Privacy Policy</span>
                <button onClick={() => setShowCookies(false)} className="bg-black text-white px-20 py-6 font-black w-full md:w-auto hover:bg-zinc-800 active:scale-95 shadow-2xl transition-all">ACCEPT ALL</button>
              </div>
            </div>
          </div>
        )}

        <AnimatePresence>
          {isCertOpen && (
            <div className="fixed inset-0 z-[1000] flex items-center justify-center p-6 uppercase tracking-widest">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsCertOpen(false)} className="absolute inset-0 bg-black/95 backdrop-blur-md" />
              <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9 }} className="relative bg-white w-full max-w-lg p-12 text-center space-y-12 font-black">
                <Award size={64} className="mx-auto text-[#B18E3C]" />
                <h2 className="text-2xl border-b pb-8">Certificate of Authenticity</h2>
                <div className="grid grid-cols-2 gap-8 text-left text-[11px]">
                  <div><p className="opacity-30 mb-2">Item Serial</p><p className="text-lg">{selectedProduct?.serial}</p></div>
                  <div><p className="opacity-30 mb-2">Quality Grade</p><p className="text-lg text-[#B18E3C]">Rank {selectedProduct?.grade}</p></div>
                </div>
                <button onClick={() => setIsCertOpen(false)} className="w-full bg-black text-white py-6 font-black text-[10px] tracking-[0.5em] active:scale-95">CLOSE REPORT</button>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        <div className={'fixed inset-0 z-[1000] transition-transform duration-700 bg-white ' + (isMenuOpen ? 'translate-x-0' : '-translate-x-full')}>
          <div className="p-10 h-full flex flex-col font-black uppercase">
            <div className="flex justify-between items-center mb-24 text-2xl"><span>MB</span><X size={36} onClick={() => setIsMenuOpen(false)} /></div>
            <div className="flex flex-col gap-12 text-3xl tracking-[0.1em]">
              <div onClick={() => navigateToShop('new-arrivals')} className="cursor-pointer">New In</div>
              <div onClick={() => navigateToShop('bags')} className="cursor-pointer">Handbags</div>
              <div onClick={() => navigateToShop('accessories')} className="cursor-pointer">Jewelry</div>
            </div>
            <div className="mt-auto border-t pt-12 flex flex-col gap-10 opacity-30 text-[10px] text-center tracking-[0.5em]">
              <div className="flex justify-center gap-12"><Globe size={24} /><Facebook size={24} /><Instagram size={24} /></div>
              <p>Tokyo Sourced Excellence</p>
            </div>
          </div>
        </div>

        {view !== 'success' && (
          <footer className="bg-black text-white py-40 px-10 text-center uppercase tracking-[0.4em] text-[11px] border-t border-neutral-900 font-bold opacity-90">
            <div className="text-4xl font-black mb-12 tracking-tighter">MB LUXURY</div>
            <p className="opacity-20 mb-10 normal-case tracking-normal text-[10px]">Tokyo Ginza / London Mayfair / Bangkok Siam Square</p>
            <div className="text-neutral-800 pt-12 border-t border-neutral-900">© 2026 MB LUXURY BRANDNAME STORE. ALL RIGHTS RESERVED.</div>
          </footer>
        )}
      </div>
    </>
  );
}
