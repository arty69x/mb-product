import { useState } from 'react';
import Link from 'next/link';
import { Search, Heart, ShoppingBag, User, Menu, X } from 'lucide-react';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/new-arrivals', label: 'New Arrivals' },
  { href: '/bags', label: 'Bags' },
  { href: '/accessories', label: 'Accessories' },
  { href: '/about', label: 'About us' }
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-borderLight bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:h-[72px]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1" aria-label="MB brandname Home">
          <span className="text-2xl font-bold tracking-tight text-primaryText" style={{ fontFamily: 'Georgia, serif' }}>
            MB
          </span>
          <span className="hidden text-2xs text-secondaryText sm:block">
            brandname
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm tracking-wide text-primaryText transition-colors hover:text-secondaryText focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primaryText focus-visible:ring-offset-2"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Utility Icons */}
        <div className="flex items-center gap-5">
          <button
            aria-label="Search"
            title="Search"
            className="text-primaryText transition-colors hover:text-secondaryText focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primaryText"
          >
            <Search size={20} strokeWidth={1.5} />
          </button>
          <Link
            href="/account"
            aria-label="My Account"
            title="My Account"
            className="hidden text-primaryText transition-colors hover:text-secondaryText focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primaryText sm:block"
          >
            <User size={20} strokeWidth={1.5} />
          </Link>
          <Link
            href="/wishlist"
            aria-label="Wishlist"
            title="Wishlist"
            className="text-primaryText transition-colors hover:text-secondaryText focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primaryText"
          >
            <Heart size={20} strokeWidth={1.5} />
          </Link>
          <Link
            href="/cart"
            aria-label="Shopping Cart"
            title="Shopping Cart"
            className="relative text-primaryText transition-colors hover:text-secondaryText focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primaryText"
          >
            <ShoppingBag size={20} strokeWidth={1.5} />
            <span className="absolute -right-2 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-primaryText text-2xs text-white">
              0
            </span>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-primaryText lg:hidden"
          >
            {mobileOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileOpen && (
        <nav
          className="border-t border-borderLight bg-white px-4 py-6 lg:hidden"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-sm tracking-wide text-primaryText transition-colors hover:text-secondaryText"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/account"
                onClick={() => setMobileOpen(false)}
                className="block text-sm tracking-wide text-primaryText transition-colors hover:text-secondaryText sm:hidden"
              >
                My Account
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
