import Link from 'next/link';
import { SiteLayout } from '@/src/components/Layout/SiteLayout';
import { StaticPage } from '@/src/components/UI/Templates';

const posts = [
  { slug: 'luxury-care-guide', title: 'Luxury Care Guide' },
  { slug: 'japan-sourcing-notes', title: 'Japan Sourcing Notes' }
];

export default function BlogIndexPage() {
  return <SiteLayout><main><StaticPage title="Blog"><ul className="space-y-3">{posts.map((post) => <li key={post.slug}><Link href={`/blog/${post.slug}`} className="border-b">{post.title}</Link></li>)}</ul></StaticPage></main></SiteLayout>;
}
