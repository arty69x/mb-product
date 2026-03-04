export type Category = 'new-arrivals' | 'bags' | 'accessories';

export type Product = {
  id: string;
  slug: string;
  title: string;
  category: Category;
  subcategory: string;
  price: number;
  originalPrice?: number;
  description: string;
  images: string[];
  stock: number;
};

export type Review = {
  id: string;
  productId: string;
  name: string;
  avatar: string;
  date: string;
  rating: number;
  text: string;
};
