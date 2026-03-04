import Link from 'next/link';
import { Product } from '../data/products';

const toDollar = (price: number) => `$${Math.max(17, Math.round(price / 17))}`;

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="text-[11px] leading-tight">
      <Link href={`/product/${product.id}`} className="block w-full">
        <img src={product.img} alt={product.title} className="w-full aspect-square object-cover" />
      </Link>
      <p className="mt-3 text-[#666] text-[11px]">Dresses</p>
      <h4 className="mt-1 text-[14px] font-normal leading-[1.2] min-h-[34px]">{product.title}</h4>
      <p className="mt-1 text-[13px] font-medium">{toDollar(product.price)}</p>
    </article>
  );
}
