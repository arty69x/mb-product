import { GetStaticPaths, GetStaticProps } from 'next';
import SiteLayout from '@/src/components/Layout/SiteLayout';
import ProductGallery from '@/src/components/Commerce/ProductGallery';
import AddToCart from '@/src/components/Commerce/AddToCart';
import WishlistButton from '@/src/components/Commerce/WishlistButton';
import Tabs from '@/src/components/UI/Tabs';
import ProductGrid from '@/src/components/Commerce/ProductGrid';
import { products } from '@/src/lib/data/products';
import { reviews } from '@/src/lib/data/reviews';
import type { Product } from '@/src/types';
import Input from '@/src/components/UI/Input';

export default function ProductPage({ product }: { product: Product | null }) {
  if (!product) {
    return <SiteLayout><section className="py-8"><p className="text-secondaryText">Product not found.</p></section></SiteLayout>;
  }
  const tabs = [
    { label: 'Description', content: product.description },
    { label: 'Additional information', content: `Inventory: ${product.inventory}` },
    { label: 'Reviews', content: reviews.filter((item) => item.productSlug === product.slug).map((item) => item.comment).join(' ') || 'No reviews yet.' }
  ];
  return (
    <SiteLayout>
      <section className="py-8">
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-6"><ProductGallery images={product.images} title={product.title} /></div>
          <div className="space-y-4 lg:col-span-6">
            <h1 className="text-3xl font-semibold">{product.title}</h1>
            <p className="text-secondaryText">${product.price}</p>
            <div className="flex gap-2"><AddToCart /><WishlistButton /></div>
          </div>
        </div>
      </section>
      <section className="py-8">
        <Tabs tabs={tabs} />
      </section>
      <section className="py-8">
        <h2 className="mb-3 text-xl font-semibold">Review form</h2>
        <div className="max-w-lg space-y-3"><Input aria-label="Your name" placeholder="Your name" /><Input aria-label="Your review" placeholder="Your review" /></div>
      </section>
      <section className="py-8">
        <h2 className="mb-4 text-2xl font-semibold">Related products</h2>
        <ProductGrid products={products.filter((item) => item.slug !== product.slug).slice(0, 4)} />
      </section>
    </SiteLayout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: products.map((product) => ({ params: { slug: product.slug } })),
  fallback: false
});

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const slug = typeof params?.slug === 'string' ? params.slug : '';
    return { props: { product: products.find((item) => item.slug === slug) ?? null } };
  } catch (error) {
    return { props: { product: null } };
  }
};
