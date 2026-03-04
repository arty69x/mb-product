import Link from 'next/link';
import { Heart, ShoppingBag } from 'lucide-react';
import { Product } from '@/lib/types';
import { formatPrice } from '@/lib/shop';

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group transition-all duration-200 ease-out hover:shadow-lg">
      <div className="relative aspect-square overflow-hidden">
        <img src={product.images[0]} alt={product.title} className="h-full w-full object-cover transition-all duration-200 ease-out group-hover:scale-105" />
        <div className="absolute right-3 top-3 flex gap-2 opacity-0 transition-all duration-200 group-hover:opacity-100">
          <button aria-label="Add to wishlist" className="rounded-full bg-white p-2 hover:opacity-80"><Heart size={14} /></button>
          <button aria-label="Quick view" className="rounded-full bg-white p-2 hover:opacity-80"><ShoppingBag size={14} /></button>
        </div>
      </div>
      <div className="space-y-1 p-3">
        <p className="text-xs text-[#666666]">{product.subcategory}</p>
        <Link href={`/product/${product.slug}`} className="block text-base">{product.title}</Link>
        <p className="text-sm">
          {product.originalPrice && <span className="mr-2 text-[#666666] line-through">{formatPrice(product.originalPrice)}</span>}
          <span className={product.originalPrice ? 'text-[#d40000]' : ''}>{formatPrice(product.price)}</span>
        </p>
      </div>
    </article>
  );
}
