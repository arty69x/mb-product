import { PRODUCTS } from '@/src/lib/data/site';

export function byCategory(category: string) {
  return PRODUCTS.filter((item) => item.category.toLowerCase() === category.toLowerCase());
}
