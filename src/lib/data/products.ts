import type { Product, BlogPost } from '@/src/types';

export const products: Product[] = [
  {
    id: 'prod-1',
    slug: 'cropped-faux-leather-jacket',
    title: 'Cropped Faux Leather Jacket',
    category: 'new-arrivals',
    price: 29,
    comparePrice: 0,
    images: ['/assets/mb/v1/ref/product-1.svg', '/assets/mb/v1/ref/product-2.svg', '/assets/mb/v1/ref/product-3.svg'],
    description: 'A sleek cropped faux leather jacket that blends edgy style with comfort. Perfect for layering over casual outfits or dressing up a simple look.',
    inventory: 12,
    rating: 4.5,
    reviews: ['Great quality for the price!', 'Fits perfectly and looks amazing.']
  },
  {
    id: 'prod-2',
    slug: 'bottega-brown',
    title: 'Bottega Brown',
    category: 'bags',
    price: 62,
    comparePrice: 0,
    images: ['/assets/mb/v1/ref/product-2.svg', '/assets/mb/v1/ref/product-1.svg', '/assets/mb/v1/ref/product-3.svg'],
    description: 'An elegant brown woven leather bag inspired by Italian craftsmanship. Features a distinctive intrecciato pattern and premium gold-tone hardware.',
    inventory: 8,
    rating: 5,
    reviews: ['Absolutely stunning bag.', 'Worth every penny.']
  },
  {
    id: 'prod-3',
    slug: 'kirby-t-shirt',
    title: 'Kirby T-Shirt',
    category: 'new-arrivals',
    price: 17,
    comparePrice: 0,
    images: ['/assets/mb/v1/ref/product-3.svg', '/assets/mb/v1/ref/product-4.svg', '/assets/mb/v1/ref/product-5.svg'],
    description: 'A fun and playful graphic T-shirt featuring a beloved character design. Made from soft cotton for all-day comfort.',
    inventory: 25,
    rating: 4,
    reviews: ['Super cute design!', 'Comfortable cotton fabric.']
  },
  {
    id: 'prod-4',
    slug: 'cableknit-shawl',
    title: 'Cableknit Shawl',
    category: 'accessories',
    price: 99,
    comparePrice: 129,
    images: ['/assets/mb/v1/ref/product-4.svg', '/assets/mb/v1/ref/product-5.svg', '/assets/mb/v1/ref/product-6.svg'],
    description: 'A luxuriously soft cable-knit shawl crafted from premium wool blend. Versatile enough to wear as a scarf, wrap, or blanket.',
    inventory: 6,
    rating: 4.5,
    reviews: ['So warm and cozy!', 'Beautiful knit pattern.']
  },
  {
    id: 'prod-5',
    slug: 'zessi-dresses',
    title: 'Zessi Dresses',
    category: 'new-arrivals',
    price: 129,
    comparePrice: 0,
    images: ['/assets/mb/v1/ref/product-5.svg', '/assets/mb/v1/ref/product-6.svg', '/assets/mb/v1/ref/product-7.svg'],
    description: 'An elegant dress combining contemporary design with timeless sophistication. Features a flattering silhouette and premium fabric.',
    inventory: 4,
    rating: 5,
    reviews: ['Perfect for special occasions.', 'Exceptional quality.']
  },
  {
    id: 'prod-6',
    slug: 'calvin-shorts',
    title: 'Calvin Shorts',
    category: 'new-arrivals',
    price: 62,
    comparePrice: 0,
    images: ['/assets/mb/v1/ref/product-6.svg', '/assets/mb/v1/ref/product-7.svg', '/assets/mb/v1/ref/product-8.svg'],
    description: 'Classic tailored shorts with a modern fit. Made from breathable fabric, ideal for warm-weather styling.',
    inventory: 15,
    rating: 4,
    reviews: ['Great fit and comfortable.', 'High quality material.']
  },
  {
    id: 'prod-7',
    slug: 'chanel-classic-flap',
    title: 'Chanel Classic Flap',
    category: 'bags',
    price: 449,
    comparePrice: 0,
    images: ['/assets/mb/v1/ref/product-7.svg', '/assets/mb/v1/ref/product-8.svg', '/assets/mb/v1/ref/product-9.svg'],
    description: 'The iconic Chanel Classic Flap bag in pristine condition. Features the signature quilted leather and interlocking CC clasp.',
    inventory: 2,
    rating: 5,
    reviews: ['Authentic and beautiful.', 'A dream bag in perfect condition.']
  },
  {
    id: 'prod-8',
    slug: 'quilted-shoulder-bag',
    title: 'Quilted Shoulder Bag',
    category: 'bags',
    price: 129,
    comparePrice: 0,
    images: ['/assets/mb/v1/ref/product-8.svg', '/assets/mb/v1/ref/product-9.svg', '/assets/mb/v1/ref/product-10.svg'],
    description: 'A timeless quilted shoulder bag with chain strap detail. Crafted from premium leather with meticulous stitching.',
    inventory: 5,
    rating: 4.5,
    reviews: ['Beautiful craftsmanship.', 'Perfect everyday luxury bag.']
  },
  {
    id: 'prod-9',
    slug: 'gucci-marmont',
    title: 'Gucci Marmont',
    category: 'bags',
    price: 389,
    comparePrice: 0,
    images: ['/assets/mb/v1/ref/product-9.svg', '/assets/mb/v1/ref/product-10.svg', '/assets/mb/v1/ref/product-11.svg'],
    description: 'The coveted Gucci GG Marmont bag in excellent pre-owned condition. Features the iconic double G hardware and chevron quilting.',
    inventory: 3,
    rating: 5,
    reviews: ['Stunning and authentic.', 'In better condition than expected.']
  },
  {
    id: 'prod-10',
    slug: 'vintage-dior-saddle',
    title: 'Vintage Dior Saddle',
    category: 'bags',
    price: 520,
    comparePrice: 0,
    images: ['/assets/mb/v1/ref/product-10.svg', '/assets/mb/v1/ref/product-11.svg', '/assets/mb/v1/ref/product-12.svg'],
    description: 'A rare vintage Dior Saddle bag in the classic monogram canvas. This iconic silhouette is a collector\'s piece.',
    inventory: 1,
    rating: 5,
    reviews: ['A true collector\'s item.', 'Amazing find!']
  },
  {
    id: 'prod-11',
    slug: 'prada-nylon-tote',
    title: 'Prada Nylon Tote',
    category: 'bags',
    price: 299,
    comparePrice: 0,
    images: ['/assets/mb/v1/ref/product-11.svg', '/assets/mb/v1/ref/product-12.svg', '/assets/mb/v1/ref/product-1.svg'],
    description: 'The minimalist Prada nylon tote that started it all. Lightweight, durable, and effortlessly chic.',
    inventory: 4,
    rating: 4.5,
    reviews: ['So practical and stylish.', 'Holds everything I need.']
  },
  {
    id: 'prod-12',
    slug: 'louis-vuitton-pochette',
    title: 'Louis Vuitton Pochette',
    category: 'bags',
    price: 350,
    comparePrice: 0,
    images: ['/assets/mb/v1/ref/product-12.svg', '/assets/mb/v1/ref/product-1.svg', '/assets/mb/v1/ref/product-2.svg'],
    description: 'A classic Louis Vuitton Pochette Accessoires in the iconic monogram canvas. Perfect as a clutch or crossbody.',
    inventory: 3,
    rating: 5,
    reviews: ['Versatile and timeless.', 'Perfect size for essentials.']
  },
  {
    id: 'prod-13',
    slug: 'gold-chain-necklace',
    title: 'Gold Chain Necklace',
    category: 'accessories',
    price: 89,
    comparePrice: 0,
    images: ['/assets/mb/v1/ref/product-3.svg', '/assets/mb/v1/ref/product-4.svg', '/assets/mb/v1/ref/product-5.svg'],
    description: 'A delicate gold-tone chain necklace with pendant detail. The perfect finishing touch for any outfit.',
    inventory: 10,
    rating: 4.5,
    reviews: ['Elegant and dainty.', 'Goes with everything.']
  },
  {
    id: 'prod-14',
    slug: 'designer-silk-scarf',
    title: 'Designer Silk Scarf',
    category: 'accessories',
    price: 75,
    comparePrice: 0,
    images: ['/assets/mb/v1/ref/product-5.svg', '/assets/mb/v1/ref/product-6.svg', '/assets/mb/v1/ref/product-7.svg'],
    description: 'A luxurious silk scarf with an artistic print. Can be worn as a headband, neck scarf, or bag accessory.',
    inventory: 7,
    rating: 4,
    reviews: ['Beautiful print and soft silk.', 'Very versatile accessory.']
  },
  {
    id: 'prod-15',
    slug: 'pearl-drop-earrings',
    title: 'Pearl Drop Earrings',
    category: 'accessories',
    price: 45,
    comparePrice: 0,
    images: ['/assets/mb/v1/ref/product-9.svg', '/assets/mb/v1/ref/product-10.svg', '/assets/mb/v1/ref/product-11.svg'],
    description: 'Classic pearl drop earrings with gold-tone settings. Timeless elegance for everyday wear or special occasions.',
    inventory: 12,
    rating: 5,
    reviews: ['So elegant and versatile.', 'Perfect quality pearls.']
  }
];

export const heroImages: string[] = [
  '/assets/mb/v1/ref/hero-home.svg',
  '/assets/mb/v1/ref/hero-product.svg',
  '/assets/mb/v1/ref/hero-new-arrivals.svg',
  '/assets/mb/v1/ref/hero-mobile.svg'
];

export const blogPosts: BlogPost[] = [
  {
    slug: 'craftsmanship-notes',
    title: 'Craftsmanship Notes for Everyday Luxury',
    excerpt: 'How we select materials and finish each piece.',
    image: '/assets/mb/v1/ref/blog-1.svg',
    content: 'Every collection is built around durable fabrics, precise stitching, and timeless forms.'
  },
  {
    slug: 'city-styling-guide',
    title: 'City Styling Guide: Day to Night',
    excerpt: 'Pairing bags and accessories for a seamless routine.',
    image: '/assets/mb/v1/ref/blog-2.svg',
    content: 'From office to evening, compact layers and neutral tones keep your wardrobe effortless.'
  }
];
