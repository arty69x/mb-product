import { SiteLayout } from '@/src/components/Layout/SiteLayout';
import { StaticPage } from '@/src/components/UI/Templates';

export default function CustomerServicePage() {
  return <SiteLayout><main><StaticPage title="Customer Service"><p>Returns are accepted within 30 days for eligible orders.</p><p>Reach support 24/7 through support@mb.example.</p></StaticPage></main></SiteLayout>;
}
