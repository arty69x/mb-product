import { SiteLayout } from '@/src/components/Layout/SiteLayout';
import { FormPage } from '@/src/components/UI/Templates';

export default function CheckoutPage() {
  return <SiteLayout><main><FormPage title="Checkout"><form className="space-y-4"><input className="w-full border p-3" placeholder="Full name" /><input className="w-full border p-3" placeholder="Email" /><input className="w-full border p-3" placeholder="Address" /><button className="bg-black px-6 py-3 text-white">Place Order</button></form></FormPage></main></SiteLayout>;
}
