export type Product = {
  id: string;
  name: string;
  category: 'Dresses' | 'Bags' | 'Accessories';
  price: number;
  salePrice?: number;
  image: string;
};

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/new-arrivals', label: 'New Arrivals' },
  { href: '/bags', label: 'Bags' },
  { href: '/accessories', label: 'Accessories' },
  { href: '/about', label: 'About us' }
];

export const PRODUCTS: Product[] = [
  { id: 'p1', name: 'Cropped Faux Leather Jacket', category: 'Dresses', price: 29, image: '/assets/mb/v1/ref/product-1.svg' },
  { id: 'p2', name: 'Calvin Shorts', category: 'Dresses', price: 62, image: '/assets/mb/v1/ref/product-2.svg' },
  { id: 'p3', name: 'Kirby T‑Shirt', category: 'Dresses', price: 17, image: '/assets/mb/v1/ref/product-3.svg' },
  { id: 'p4', name: 'Cableknit Shawl', category: 'Dresses', price: 129, salePrice: 99, image: '/assets/mb/v1/ref/product-4.svg' },
  { id: 'p5', name: 'Zessi Dresses', category: 'Dresses', price: 129, image: '/assets/mb/v1/ref/product-5.svg' },
  { id: 'p6', name: 'Classic Chain Bag', category: 'Bags', price: 199, image: '/assets/mb/v1/ref/product-6.svg' },
  { id: 'p7', name: 'Black Mini Bag', category: 'Bags', price: 155, image: '/assets/mb/v1/ref/product-7.svg' },
  { id: 'p8', name: 'Logo Shoulder Bag', category: 'Bags', price: 210, image: '/assets/mb/v1/ref/product-8.svg' },
  { id: 'p9', name: 'Monogram Box Bag', category: 'Accessories', price: 98, image: '/assets/mb/v1/ref/product-9.svg' },
  { id: 'p10', name: 'Tweed Clutch', category: 'Accessories', price: 88, image: '/assets/mb/v1/ref/product-10.svg' }
];

export const FOOTER_COLUMNS = [
  { title: 'COMPANY', links: ['About Us', 'Careers', 'Affiliates', 'Blog', 'Contact Us'] },
  { title: 'SHOP', links: ['New Arrivals', 'Accessories', 'Bags'] },
  { title: 'HELP', links: ['Customer Service', 'My Account', 'Find a Store', 'Legal & Privacy', 'Gift Card'] }
];
