import Link from 'next/link';
import Image from 'next/image';
import type { Product } from '@/src/types';
import AddToCart from './AddToCart';
import WishlistButton from './WishlistButton';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group rounded-md border border-borderLight p-3">
      <div className="relative aspect-square overflow-hidden rounded-md">
        <Image src={product.images[0] ?? ''} alt={product.title} fill className="object-cover transition duration-300 group-hover:scale-105" />
        <div className="absolute bottom-2 left-2 flex gap-2">
          <WishlistButton />
          <AddToCart />
        </div>
      </div>
      <p className="mt-3 text-xs uppercase tracking-wide text-secondaryText">{product.category}</p>
      <Link href={`/product/${product.slug}`} className="text-sm font-medium text-primaryText hover:text-accent">{product.title}</Link>
      <p className="text-sm text-primaryText">${product.price}</p>
    </article>
  );
}
