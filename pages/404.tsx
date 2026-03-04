import { SiteLayout } from '@/src/components/Layout/SiteLayout';
import { NotFoundPage } from '@/src/components/UI/Templates';

export default function Custom404() {
  return <SiteLayout><main><NotFoundPage /></main></SiteLayout>;
}
