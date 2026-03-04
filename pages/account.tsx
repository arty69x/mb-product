import { SiteLayout } from '@/src/components/Layout/SiteLayout';
import { FormPage } from '@/src/components/UI/Templates';

export default function AccountPage() {
  return <SiteLayout><main><FormPage title="My Account"><form className="space-y-4"><input className="w-full border p-3" placeholder="Email" /><input className="w-full border p-3" placeholder="Password" type="password" /><button className="bg-black px-6 py-3 text-white">Sign In</button></form></FormPage></main></SiteLayout>;
}
