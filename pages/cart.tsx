import Link from 'next/link';
import { SiteLayout } from '@/src/components/Layout/SiteLayout';

export default function CartPage() {
  return (
    <SiteLayout>
      <main>
        <section><div className="container mx-auto px-4 py-28 text-center"><h1 className="text-6xl font-bold uppercase">Your Bag is Empty</h1><Link href="/shop" className="mt-10 inline-block border-b text-3xl font-semibold uppercase">Continue Shopping</Link></div></section>
      </main>
    </SiteLayout>
  );
}
