import Link from 'next/link';

type MobileMenuProps = { open: boolean; onClose: () => void };

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  if (!open) return null;
  const items = [
    { href: '/new-arrivals', label: 'Collections' },
    { href: '/bags', label: 'Products' },
    { href: '/accessories', label: 'Special Price' },
    { href: '/account', label: 'Language' }
  ];

  return (
    <div className="fixed inset-0 z-50 bg-white p-6">
      <button aria-label="Close menu" onClick={onClose} className="mb-8 border px-3 py-1">Close</button>
      <nav className="grid gap-5 text-2xl">
        {items.map((item) => (
          <Link key={item.href} href={item.href} onClick={onClose}>{item.label}</Link>
        ))}
      </nav>
    </div>
  );
}
