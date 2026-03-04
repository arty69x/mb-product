import { SiteLayout } from '@/src/components/Layout/SiteLayout';
import { FormPage } from '@/src/components/UI/Templates';

export default function ContactPage() {
  return <SiteLayout><main><FormPage title="Contact"><form className="space-y-4"><input className="w-full border p-3" placeholder="Name" /><input className="w-full border p-3" placeholder="Email" /><textarea className="min-h-40 w-full border p-3" placeholder="Message" /><button className="bg-black px-6 py-3 text-white">Send</button></form></FormPage></main></SiteLayout>;
}
