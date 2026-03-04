import Link from 'next/link';
import { Search, Heart, ShoppingBag } from 'lucide-react';

const nav = [
  { href: '/', label: 'Home' },
  { href: '/new-arrivals', label: 'New Arrivals' },
  { href: '/bags', label: 'Bags' },
  { href: '/accessories', label: 'Accessories' },
  { href: '/about', label: 'About' }
];

export default function Header() {
  return (
    <header className="h-[72px] border-b border-borderLight bg-white">
      <div className="container mx-auto flex h-full items-center justify-between px-4">
        <Link href="/" className="text-lg font-semibold" aria-label="MB Store Home">MB STORE</Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-secondaryText hover:text-primaryText focus-visible:ring-2 focus-visible:ring-accent">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <button aria-label="Search" className="hover:text-accent focus-visible:ring-2 focus-visible:ring-accent"><Search size={18} /></button>
          <Link href="/wishlist" aria-label="Wishlist" className="hover:text-accent focus-visible:ring-2 focus-visible:ring-accent"><Heart size={18} /></Link>
          <Link href="/cart" aria-label="Cart" className="hover:text-accent focus-visible:ring-2 focus-visible:ring-accent"><ShoppingBag size={18} /></Link>
        </div>
      </div>
    </header>
  );
}
