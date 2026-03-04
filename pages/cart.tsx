import Link from 'next/link';
import { Layout } from '@/components/Layout/Layout';
import { products } from '@/data/products';
import { formatPrice } from '@/lib/shop';

export default function CartPage() {
  const items = products.slice(0, 2);
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <Layout>
      <section className="py-10">
        <h1 className="mb-6 text-4xl">Cart</h1>
        <div className="space-y-4">{items.map((item) => <div key={item.id} className="flex items-center justify-between border p-4"><p>{item.title}</p><p>{formatPrice(item.price)}</p></div>)}</div>
        <div className="mt-6 flex items-center justify-between border-t pt-4"><p>Total</p><p>{formatPrice(total)}</p></div>
        <Link href="/checkout" className="mt-6 inline-block border px-6 py-3 hover:bg-black hover:text-white">Go to Checkout</Link>
      </section>
    </Layout>
  );
}
