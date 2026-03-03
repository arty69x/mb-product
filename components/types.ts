import { DATABASE, Product } from '../data/products';

export type Category = 'new-arrivals' | 'bags' | 'accessories';

export const CATEGORY_LABEL: Record<Category, string> = {
  'new-arrivals': 'New Arrivals',
  bags: 'Bags',
  accessories: 'Accessories'
};

export const ALL_PRODUCTS: Product[] = [...DATABASE['new-arrivals'], ...DATABASE.bags, ...DATABASE.accessories];
