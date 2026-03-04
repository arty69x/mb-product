import { GetStaticPaths, GetStaticProps } from 'next';
import SiteLayout from '@/src/components/Layout/SiteLayout';
import { blogPosts } from '@/src/lib/data/products';
import type { BlogPost } from '@/src/types';

export default function BlogPostPage({ post }: { post: BlogPost | null }) {
  if (!post) return <SiteLayout><section className="py-8"><p>Post not found.</p></section></SiteLayout>;
  return <SiteLayout><section className="py-8"><h1 className="mb-4 text-3xl font-semibold">{post.title}</h1><p className="text-secondaryText">{post.content}</p></section></SiteLayout>;
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: blogPosts.map((post) => ({ params: { slug: post.slug } })),
  fallback: false
});

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const slug = typeof params?.slug === 'string' ? params.slug : '';
    return { props: { post: blogPosts.find((item) => item.slug === slug) ?? null } };
  } catch (error) {
    return { props: { post: null } };
  }
};
