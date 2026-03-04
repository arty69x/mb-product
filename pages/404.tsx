import SiteLayout from '@/src/components/Layout/SiteLayout';
import Link from 'next/link';

export default function Custom404() {
  return <SiteLayout><section className="py-16 text-center"><h1 className="mb-3 text-4xl font-semibold">404</h1><p className="mb-4 text-secondaryText">Page not found.</p><Link href="/" className="text-accent">Back home</Link></section></SiteLayout>;
}
