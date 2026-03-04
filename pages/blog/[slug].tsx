import { useRouter } from 'next/router';
import { SiteLayout } from '@/src/components/Layout/SiteLayout';
import { DetailPage } from '@/src/components/UI/Templates';

export default function BlogDetailPage() {
  const router = useRouter();
  const slug = typeof router.query.slug === 'string' ? router.query.slug : 'article';

  return <SiteLayout><main><DetailPage title={slug.replace('-', ' ')} image="/assets/mb/v1/ref/blog-1.svg"><p>Editorial insight on vintage luxury pieces and authenticity checks.</p></DetailPage></main></SiteLayout>;
}
