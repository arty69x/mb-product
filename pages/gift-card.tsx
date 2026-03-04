import { SiteLayout } from '@/src/components/Layout/SiteLayout';
import { FormPage } from '@/src/components/UI/Templates';

export default function GiftCardPage() {
  return <SiteLayout><main><FormPage title="Gift Card"><form className="space-y-4"><input className="w-full border p-3" placeholder="Recipient email" /><input className="w-full border p-3" placeholder="Amount" /><button className="bg-black px-6 py-3 text-white">Purchase</button></form></FormPage></main></SiteLayout>;
}
