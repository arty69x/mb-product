import { products } from '@/data/products';
import { Category, Product } from '@/lib/types';

export const navItems = [
  { href: '/', label: 'Home' },
  { href: '/new-arrivals', label: 'New Arrivals' },
  { href: '/bags', label: 'Bags' },
  { href: '/accessories', label: 'Accessories' },
  { href: '/about', label: 'About' }
];

export const formatPrice = (value: number) => `$${value.toLocaleString()}`;

export const getProductsByCategory = (category?: Category) =>
  category ? products.filter((item) => item.category === category) : products;

export const getProductBySlug = (slug: string): Product | undefined =>
  products.find((item) => item.slug === slug);
