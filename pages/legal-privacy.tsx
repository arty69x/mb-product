import { SiteLayout } from '@/src/components/Layout/SiteLayout';
import { StaticPage } from '@/src/components/UI/Templates';

export default function LegalPrivacyPage() {
  return <SiteLayout><main><StaticPage title="Legal & Privacy"><p>We process personal data to fulfill orders and improve service quality.</p><p>All transactions are encrypted and payment details are handled securely.</p></StaticPage></main></SiteLayout>;
}
