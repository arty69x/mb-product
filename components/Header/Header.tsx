import Link from 'next/link';
import { Heart, Menu, Search, ShoppingBag, User } from 'lucide-react';
import { navItems } from '@/lib/shop';

type HeaderProps = {
  onOpenMobileMenu: () => void;
};

export function Header({ onOpenMobileMenu }: HeaderProps) {
  return (
    <header className="h-[72px] border-b border-[#e5e5e5]">
      <div className="container mx-auto flex h-full items-center justify-between px-4">
        <div className="flex items-center gap-3 lg:hidden">
          <button aria-label="Open menu" onClick={onOpenMobileMenu} className="p-1 focus-visible:outline-2">
            <Menu size={20} />
          </button>
          <button aria-label="Search" className="p-1">
            <Search size={18} />
          </button>
        </div>

        <Link href="/" className="text-xl font-semibold tracking-[0.2em]">MB</Link>

        <nav className="hidden items-center gap-6 text-sm lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition-all duration-200 ease-out hover:opacity-80">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button aria-label="Search" className="hidden p-1 lg:block"><Search size={18} /></button>
          <Link aria-label="Account" href="/account" className="p-1"><User size={18} /></Link>
          <Link aria-label="Wishlist" href="/wishlist" className="p-1"><Heart size={18} /></Link>
          <Link aria-label="Cart" href="/cart" className="p-1"><ShoppingBag size={18} /></Link>
        </div>
      </div>
    </header>
  );
}
