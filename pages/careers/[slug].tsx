import { useRouter } from 'next/router';
import { SiteLayout } from '@/src/components/Layout/SiteLayout';
import { DetailPage } from '@/src/components/UI/Templates';

export default function CareerDetailPage() {
  const router = useRouter();
  const slug = typeof router.query.slug === 'string' ? router.query.slug : 'career';

  return <SiteLayout><main><DetailPage title={slug.replace('-', ' ')} image="/assets/mb/v1/ref/career-1.svg"><p className="mb-4">Join MB and help craft world-class luxury shopping experiences.</p><button className="bg-black px-6 py-3 text-white">Apply Now</button></DetailPage></main></SiteLayout>;
}
