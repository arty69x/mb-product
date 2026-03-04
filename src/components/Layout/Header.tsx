import Link from 'next/link';
import { NAV_LINKS } from '@/src/lib/data/site';

export function Header() {
  return (
    <header className="border-b border-neutral-200 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex h-14 items-center justify-between gap-4 text-[11px] uppercase tracking-[0.08em]">
          <Link href="/" className="text-2xl font-medium normal-case tracking-normal">m3</Link>
          <nav className="hidden gap-6 md:flex">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-black">
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3" aria-label="Header controls">
            <Link href="/wishlist" aria-label="Wishlist">♡</Link>
            <Link href="/account" aria-label="Account">◌</Link>
            <Link href="/cart" aria-label="Cart">👜</Link>
          </div>
        </div>
      </div>
    </header>
  );
}
