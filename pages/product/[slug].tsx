import { useState } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import SiteLayout from '@/src/components/Layout/SiteLayout';
import ProductGallery from '@/src/components/Commerce/ProductGallery';
import Tabs from '@/src/components/UI/Tabs';
import ProductGrid from '@/src/components/Commerce/ProductGrid';
import { products } from '@/src/lib/data/products';
import { reviews as allReviews } from '@/src/lib/data/reviews';
import type { Product } from '@/src/types';
import { Heart, Share2, ChevronLeft, ChevronRight, Minus, Plus, Star } from 'lucide-react';

export default function ProductPage({ product }: { product: Product | null }) {
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <SiteLayout>
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <p className="text-secondaryText">Product not found.</p>
          </div>
        </section>
      </SiteLayout>
    );
  }

  const productReviews = allReviews.filter((r) => r.productSlug === product.slug);
  const relatedProducts = products.filter((item) => item.slug !== product.slug).slice(0, 4);
  const productIndex = products.findIndex((p) => p.slug === product.slug);
  const prevProduct = products[productIndex - 1];
  const nextProduct = products[productIndex + 1];

  const descriptionContent = (
    <div className="mx-auto max-w-3xl">
      <h3 className="mb-4 text-sm font-semibold text-primaryText">
        Sed do eiusmod tempor incididunt ut labore
      </h3>
      <p className="mb-6 text-sm leading-relaxed text-secondaryText">
        {product.description}
      </p>
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h4 className="mb-3 text-sm font-semibold text-primaryText">Why choose product?</h4>
          <ul className="list-disc pl-5 text-sm leading-relaxed text-secondaryText">
            <li>Great by cotton fabric with soft and smooth</li>
            <li>{'Simple, Configurable (e.g. size, color, etc.), bundled'}</li>
            <li>Downloadable/Digital Products, Virtual Products</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold text-primaryText">Sample Number List</h4>
          <ol className="list-decimal pl-5 text-sm leading-relaxed text-secondaryText">
            <li>Create Store-specific attributes on the fly</li>
            <li>{'Simple, Configurable (e.g. size, color, etc.), bundled'}</li>
            <li>Downloadable/Digital Products, Virtual Products</li>
          </ol>
        </div>
      </div>
      <div className="mt-6">
        <h4 className="mb-1 text-sm font-semibold text-primaryText">Lining</h4>
        <p className="text-sm text-secondaryText">100% Polyester. Main: 100% Polyester.</p>
      </div>
    </div>
  );

  const additionalContent = (
    <div className="mx-auto max-w-xl">
      <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-primaryText">Additional Information</h3>
      <table className="w-full">
        <tbody>
          {[
            ['Weight', '1.25 kg'],
            ['Dimensions', '90 x 60 x 90 cm'],
            ['Size', 'XS, S, M, L, XL'],
            ['Color', 'Black, Orange, White'],
            ['Storage', 'Relaxed fit shirt-style dress with a rugged']
          ].map(([label, value]) => (
            <tr key={label} className="border-b border-borderLight">
              <td className="py-3 text-sm font-semibold text-primaryText">{label}</td>
              <td className="py-3 text-sm text-secondaryText">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const reviewsContent = (
    <div className="mx-auto max-w-2xl">
      <h3 className="mb-6 text-lg font-semibold text-primaryText">Reviews</h3>
      {productReviews.length > 0 ? (
        <div className="mb-8 flex flex-col gap-6">
          {productReviews.map((review) => (
            <div key={review.id} className="border-b border-borderLight pb-6">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primaryText text-sm text-white">
                    {review.author.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-primaryText">{review.author}</p>
                    <p className="text-xs text-secondaryText">April 06, 2020</p>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-borderLight'}
                    />
                  ))}
                </div>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-secondaryText">{review.comment}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="mb-8 text-sm text-secondaryText">No reviews yet.</p>
      )}

      {/* Review Form */}
      <div className="border-t border-borderLight pt-8">
        <h4 className="mb-1 text-sm font-semibold text-primaryText">
          {`Be the first to review "${product.title}"`}
        </h4>
        <p className="mb-4 text-xs text-secondaryText">
          Your email address will not be published. Required fields are marked *
        </p>
        <div className="mb-4 flex items-center gap-2">
          <span className="text-sm text-primaryText">Your rating *</span>
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }, (_, i) => (
              <Star key={i} size={16} className="text-yellow-400" />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <textarea
            aria-label="Your Review"
            placeholder="Your Review"
            rows={5}
            className="w-full border border-borderLight px-4 py-3 text-sm text-primaryText outline-none transition-colors focus:border-primaryText"
          />
          <input
            aria-label="Name"
            type="text"
            placeholder="Name *"
            className="w-full border border-borderLight px-4 py-3 text-sm text-primaryText outline-none transition-colors focus:border-primaryText"
          />
          <input
            aria-label="Email address"
            type="email"
            placeholder="Email address *"
            className="w-full border border-borderLight px-4 py-3 text-sm text-primaryText outline-none transition-colors focus:border-primaryText"
          />
          <label className="flex items-center gap-2 text-xs text-secondaryText">
            <input type="checkbox" className="rounded border-borderLight" />
            Save my name, email, and website in this browser for the next time I comment.
          </label>
          <button className="self-start bg-primaryText px-8 py-3 text-xs uppercase tracking-widest text-white transition-colors hover:bg-secondaryText">
            Submit
          </button>
        </div>
      </div>
    </div>
  );

  const tabs = [
    { label: 'Description', content: descriptionContent },
    { label: 'Additional Information', content: additionalContent },
    { label: `Reviews (${productReviews.length})`, content: reviewsContent }
  ];

  return (
    <SiteLayout>
      {/* Breadcrumb + Prev/Next */}
      <section className="border-b border-borderLight">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-secondaryText">
              <li><Link href="/" className="transition-colors hover:text-primaryText">HOME</Link></li>
              <li>/</li>
              <li><Link href="/shop" className="transition-colors hover:text-primaryText">THE SHOP</Link></li>
            </ol>
          </nav>
          <div className="flex items-center gap-4 text-xs text-secondaryText">
            {prevProduct && (
              <Link href={`/product/${prevProduct.slug}`} className="flex items-center gap-1 transition-colors hover:text-primaryText">
                <ChevronLeft size={14} strokeWidth={1.5} /> PREV
              </Link>
            )}
            {nextProduct && (
              <Link href={`/product/${nextProduct.slug}`} className="flex items-center gap-1 transition-colors hover:text-primaryText">
                NEXT <ChevronRight size={14} strokeWidth={1.5} />
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Product Info */}
      <section className="py-8 lg:py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Gallery */}
            <ProductGallery images={product.images} title={product.title} />

            {/* Details */}
            <div className="flex flex-col">
              <h1 className="text-2xl text-primaryText lg:text-3xl" style={{ fontFamily: 'Georgia, serif' }}>
                {product.title}
              </h1>
              <p className="mt-3 text-xl text-primaryText">${product.price}</p>

              <p className="mt-4 text-sm leading-relaxed text-secondaryText">
                {product.description}
              </p>

              {/* Quantity + Add to Cart */}
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <div className="flex items-center border border-borderLight">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    aria-label="Decrease quantity"
                    className="flex h-12 w-12 items-center justify-center text-secondaryText transition-colors hover:text-primaryText"
                  >
                    <Minus size={16} strokeWidth={1.5} />
                  </button>
                  <span className="flex h-12 w-12 items-center justify-center border-x border-borderLight text-sm text-primaryText">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    aria-label="Increase quantity"
                    className="flex h-12 w-12 items-center justify-center text-secondaryText transition-colors hover:text-primaryText"
                  >
                    <Plus size={16} strokeWidth={1.5} />
                  </button>
                </div>
                <button className="h-12 flex-1 bg-primaryText text-xs uppercase tracking-widest text-white transition-colors hover:bg-secondaryText sm:max-w-xs">
                  Add to Cart
                </button>
              </div>

              {/* Wishlist + Share */}
              <div className="mt-4 flex items-center gap-6">
                <button className="flex items-center gap-2 text-xs text-secondaryText transition-colors hover:text-primaryText">
                  <Heart size={16} strokeWidth={1.5} /> Add to Wishlist
                </button>
                <button className="flex items-center gap-2 text-xs text-secondaryText transition-colors hover:text-primaryText">
                  <Share2 size={16} strokeWidth={1.5} /> Share
                </button>
              </div>

              {/* Meta */}
              <div className="mt-6 border-t border-borderLight pt-4 text-xs text-secondaryText">
                <p><span className="font-medium text-primaryText">SKU:</span> {product.id}</p>
                <p className="mt-1"><span className="font-medium text-primaryText">CATEGORIES:</span> {product.category}</p>
                <p className="mt-1"><span className="font-medium text-primaryText">TAGS:</span> luxury, authentic, japan</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="border-t border-borderLight py-10 lg:py-14">
        <div className="container mx-auto px-4">
          <Tabs tabs={tabs} />
        </div>
      </section>

      {/* Related Products */}
      <section className="border-t border-borderLight py-10 lg:py-14">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-xl text-primaryText">
            Related <span className="font-bold">Products</span>
          </h2>
          <ProductGrid products={relatedProducts} columns={4} />
        </div>
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
  } catch {
    return { props: { product: null } };
  }
};
