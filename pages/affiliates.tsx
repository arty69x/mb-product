import { SiteLayout } from '@/src/components/Layout/SiteLayout';
import { FormPage } from '@/src/components/UI/Templates';

export default function AffiliatesPage() {
  return <SiteLayout><main><FormPage title="Affiliates"><form className="space-y-4"><input className="w-full border p-3" placeholder="Website" /><input className="w-full border p-3" placeholder="Email" /><button className="bg-black px-6 py-3 text-white">Apply</button></form></FormPage></main></SiteLayout>;
}
