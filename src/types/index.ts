export type Product = {
  id: string;
  slug: string;
  title: string;
  category: string;
  price: number;
  comparePrice: number;
  images: string[];
  description: string;
  inventory: number;
  rating: number;
  reviews: string[];
};

export type Category = {
  id: string;
  slug: string;
  title: string;
  description: string;
};

export type Review = {
  id: string;
  productSlug: string;
  author: string;
  rating: number;
  comment: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  content: string;
};
