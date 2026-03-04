import { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ProductGrid } from '@/src/components/Commerce/ProductGrid';
import type { Product } from '@/src/lib/data/site';

export function StaticPage({ title, children }: { title: string; children: ReactNode }) {
  return <section><div className="container mx-auto px-4 py-16"><h1 className="mb-8 text-4xl uppercase">{title}</h1><div className="space-y-5 text-sm leading-7">{children}</div></div></section>;
}

export function ListingPage({ title, products }: { title: string; products: Product[] }) {
  return <section><div className="container mx-auto px-4 py-8"><div className="mb-6 flex items-center justify-between border-b pb-3 text-xs uppercase"><button className="focus-visible:outline">Default Sorting</button><button className="focus-visible:outline">Filter</button></div><h2 className="mb-6 text-3xl uppercase">{title}</h2><ProductGrid products={products} /></div></section>;
}

export function DetailPage({ title, image, children }: { title: string; image: string; children: ReactNode }) {
  return (
    <section><div className="container mx-auto px-4 py-10"><div className="grid gap-8 md:grid-cols-2"><div className="relative aspect-square overflow-hidden"><Image src={image} alt={title} fill className="object-cover" /></div><div><p className="mb-2 text-xs uppercase">Home / Detail</p><h1 className="mb-4 text-3xl">{title}</h1>{children}</div></div></div></section>
  );
}

export function FormPage({ title, children }: { title: string; children: ReactNode }) {
  return <section><div className="container mx-auto px-4 py-14"><h1 className="mb-6 text-4xl uppercase">{title}</h1><div className="max-w-2xl border bg-white p-6">{children}</div></div></section>;
}

export function NotFoundPage() {
  return <section><div className="container mx-auto px-4 py-24"><div className="mx-auto max-w-xl border bg-white p-10 text-center"><h1 className="text-5xl font-bold">404</h1><p className="mt-4 text-lg">Page not found.</p><Link href="/" className="mt-6 inline-block border-b text-sm uppercase">Back Home</Link></div></div></section>;
}
