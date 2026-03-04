import { SiteLayout } from '@/src/components/Layout/SiteLayout';
import { StaticPage } from '@/src/components/UI/Templates';

export default function FindAStorePage() {
  return <SiteLayout><main><StaticPage title="Find a Store"><p>United States flagship: 1418 River Drive, Suite 35 Cottonhall, CA 9622.</p><p>Open Mon - Fri 8AM - 9PM, Sat 9AM - 8PM.</p></StaticPage></main></SiteLayout>;
}
