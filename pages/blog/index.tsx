import Link from 'next/link';
import Image from 'next/image';
import SiteLayout from '@/src/components/Layout/SiteLayout';
import { blogPosts } from '@/src/lib/data/products';

export default function BlogIndex() {
  return (
    <SiteLayout>
      <section className="py-8">
        <h1 className="mb-6 text-3xl font-semibold">Blog</h1>
        <div className="grid gap-6 md:grid-cols-2">
          {blogPosts.map((post) => (
            <article key={post.slug} className="rounded-md border border-borderLight p-3">
              <div className="relative mb-3 h-48 overflow-hidden rounded"><Image src={post.image} alt={post.title} fill className="object-cover" /></div>
              <h2 className="font-semibold"><Link href={`/blog/${post.slug}`}>{post.title}</Link></h2>
              <p className="text-sm text-secondaryText">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
