import Link from 'next/link';

const companyLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/about', label: 'Careers' },
  { href: '/about', label: 'Affiliates' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact Us' }
];

const shopLinks = [
  { href: '/new-arrivals', label: 'New Arrivals' },
  { href: '/accessories', label: 'Accessories' },
  { href: '/bags', label: 'Bags' }
];

const helpLinks = [
  { href: '/contact', label: 'Customer Service' },
  { href: '/account', label: 'My Account' },
  { href: '/contact', label: 'Find a Store' },
  { href: '/about', label: 'Legal & Privacy' },
  { href: '/contact', label: 'Contact' },
  { href: '/shop', label: 'Gift Card' }
];

const socialLinks = [
  { label: 'Facebook', icon: 'f' },
  { label: 'Twitter', icon: 't' },
  { label: 'Instagram', icon: 'i' },
  { label: 'YouTube', icon: 'y' },
  { label: 'Pinterest', icon: 'p' }
];

export default function Footer() {
  return (
    <footer className="bg-footerBg text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="mb-4 inline-block" aria-label="MB brandname Home">
              <span className="text-2xl font-bold tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>
                MB
              </span>
              <span className="ml-1 text-2xs text-white/60">brandname</span>
            </Link>
            <div className="mt-4 text-xs leading-relaxed text-white/60">
              <p>1418 River Drive, Suite 35 Cottonhall, CA 9622</p>
              <p>United States</p>
            </div>
            <div className="mt-4 text-xs text-white/60">
              <p>
                <a href="mailto:sale@uomo.com" className="transition-colors hover:text-white">
                  sale@uomo.com
                </a>
              </p>
              <p>
                <a href="tel:+12463450695" className="transition-colors hover:text-white">
                  +1 246-345-0695
                </a>
              </p>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest">Company</h3>
            <ul className="flex flex-col gap-2.5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Shop */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest">Shop</h3>
            <ul className="flex flex-col gap-2.5">
              {shopLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest">Help</h3>
            <ul className="flex flex-col gap-2.5">
              {helpLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Time */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest">Opening Time</h3>
            <ul className="flex flex-col gap-2.5 text-xs text-white/60">
              <li>{'Mon \u2013 Fri: 8AM \u2013 9PM'}</li>
              <li>{'Sat: 9 AM \u2013 8 PM'}</li>
              <li>Sun: Closed</li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-10 flex items-center gap-4">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href="#"
              aria-label={social.label}
              title={social.label}
              className="flex h-8 w-8 items-center justify-center text-sm text-white/60 transition-colors hover:text-white"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto flex flex-col items-center justify-between gap-3 px-4 py-4 sm:flex-row">
          <p className="text-2xs text-white/40">
            {'©2020 Uomo'}
          </p>
          <div className="flex items-center gap-3 text-2xs text-white/40">
            <span>United Kingdom</span>
            <span>|</span>
            <span>English</span>
            <span>|</span>
            <span>$ USD</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
