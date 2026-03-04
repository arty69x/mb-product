import SiteLayout from '@/src/components/Layout/SiteLayout';
import { products } from '@/src/lib/data/products';

export default function CartPage() {
  const items = products.slice(0, 2);
  return (
    <SiteLayout>
      <section className="py-8">
        <h1 className="mb-6 text-3xl font-semibold">Cart</h1>
        <div className="overflow-x-auto rounded-md border border-borderLight">
          <table className="min-w-full text-sm">
            <thead className="border-b border-borderLight bg-gray-50 text-left">
              <tr><th className="p-3">Product</th><th className="p-3">Price</th><th className="p-3">Quantity</th><th className="p-3">Subtotal</th></tr>
            </thead>
            <tbody>
              {items.map((item) => <tr key={item.id} className="border-b border-borderLight"><td className="p-3">{item.title}</td><td className="p-3">${item.price}</td><td className="p-3">1</td><td className="p-3">${item.price}</td></tr>)}
            </tbody>
          </table>
        </div>
        <div className="mt-6 rounded-md border border-borderLight p-4">Cart Summary: ${items.reduce((sum, item) => sum + item.price, 0)}</div>
      </section>
    </SiteLayout>
  );
}
