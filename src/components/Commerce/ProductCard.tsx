import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Product } from '@/src/types';
import AddToCart from './AddToCart';
import WishlistButton from './WishlistButton';

export default function ProductCard({ product }: { product: Product }) {
  const [hovered, setHovered] = useState(false);
  const hasDiscount = product.comparePrice > 0 && product.comparePrice > product.price;

  return (
    <article
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image Container */}
      <Link href={`/product/${product.slug}`} className="block">
        <div className="relative aspect-square overflow-hidden bg-surfaceLight">
          <Image
            src={product.images[0] ?? ''}
            alt={product.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            loading="lazy"
          />

          {/* Hover Overlay with Actions */}
          <div
            className={`absolute inset-0 flex flex-col items-center justify-end transition-opacity duration-300 ${hovered ? 'opacity-100' : 'opacity-0'}`}
          >
            {/* Quick View & Wishlist Icons */}
            <div className="absolute right-2 top-2 flex flex-col gap-2">
              <AddToCart variant="overlay" />
              <WishlistButton className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm" />
            </div>

            {/* Add to Cart Button */}
            <div className="w-full px-3 pb-3">
              <AddToCart variant="full" />
            </div>
          </div>
        </div>
      </Link>

      {/* Product Info */}
      <div className="mt-3">
        <p className="text-xs uppercase tracking-wide text-secondaryText">
          {product.category === 'new-arrivals' ? 'Dresses' : product.category === 'bags' ? 'Bags' : 'Accessories'}
        </p>
        <Link
          href={`/product/${product.slug}`}
          className="mt-0.5 block text-sm text-primaryText transition-colors hover:text-secondaryText"
        >
          {product.title}
        </Link>
        <div className="mt-1 flex items-center gap-2">
          {hasDiscount ? (
            <>
              <span className="text-sm text-secondaryText line-through">${product.comparePrice}</span>
              <span className="text-sm text-accent">${product.price}</span>
            </>
          ) : (
            <span className="text-sm text-primaryText">${product.price}</span>
          )}
        </div>
      </div>

      {/* Wishlist Button (always visible on mobile) */}
      <div className="absolute right-0 top-0 p-2 sm:hidden">
        <WishlistButton />
      </div>
    </article>
  );
}
