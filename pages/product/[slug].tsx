import { useMemo } from 'react';
import { useRouter } from 'next/router';
import { Layout } from '@/components/Layout/Layout';
import { ProductGallery } from '@/components/ProductGallery/ProductGallery';
import { ProductGrid } from '@/components/ProductGrid/ProductGrid';
import { ReviewForm } from '@/components/Review/ReviewForm';
import { ReviewList } from '@/components/Review/ReviewList';
import { formatPrice, getProductBySlug, getProductsByCategory } from '@/lib/shop';

export default function ProductDetailPage() {
  const router = useRouter();
  const slug = router.query.slug as string;
  const product = getProductBySlug(slug);
  const related = useMemo(() => (product ? getProductsByCategory(product.category).filter((p) => p.id !== product.id).slice(0, 4) : []), [product]);

  if (!product) return <Layout><section className="py-20">Product not found.</section></Layout>;

  return (
    <Layout>
      <section className="grid gap-10 py-10 md:grid-cols-2">
        <ProductGallery images={product.images} />
        <div className="space-y-4">
          <h1 className="text-4xl">{product.title}</h1>
          <p className="text-2xl">{formatPrice(product.price)}</p>
          <p className="text-[#666666]">{product.description}</p>
          <div className="flex gap-3">
            <input type="number" min={1} defaultValue={1} className="w-20 border p-2" aria-label="Quantity" />
            <button className="border px-6 py-3 hover:bg-black hover:text-white">Add to Cart</button>
          </div>
          <div className="flex gap-3 text-sm"><button>Wishlist</button><button>Share</button></div>
        </div>
      </section>
      <section className="py-12">
        <div className="mb-6 flex gap-6 border-b pb-3"><button>Description</button><button>Additional Info</button><button>Reviews</button></div>
        <ReviewList productId={product.id} />
        <ReviewForm />
      </section>
      <section className="py-12">
        <h3 className="mb-6 text-3xl">Related Products</h3>
        <ProductGrid products={related} />
      </section>
    </Layout>
  );
}
