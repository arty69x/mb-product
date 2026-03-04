import { SiteLayout } from '@/src/components/Layout/SiteLayout';
import { StaticPage } from '@/src/components/UI/Templates';

export default function AboutPage() {
  return <SiteLayout><main><StaticPage title="About Us"><p>MB curates authentic pre-owned luxury from Japan with strict quality control and transparent product grading.</p><p>Every item is inspected before dispatch and delivered with care.</p></StaticPage></main></SiteLayout>;
}
