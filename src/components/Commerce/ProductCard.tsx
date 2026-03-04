import Image from 'next/image';
import type { Product } from '@/src/lib/data/site';

type Props = { product: Product };

export function ProductCard({ product }: Props) {
  return (
    <article className="space-y-2 text-xs">
      <div className="relative aspect-[4/5] overflow-hidden bg-neutral-200">
        <Image src={product.image} alt={product.name} fill className="object-cover" />
      </div>
      <p className="text-neutral-500">{product.category}</p>
      <h3 className="text-[13px] leading-5">{product.name}</h3>
      <p className="text-lg font-semibold">
        ${product.price}
        {product.salePrice ? <span className="ml-2 text-red-500">${product.salePrice}</span> : null}
      </p>
    </article>
  );
}
