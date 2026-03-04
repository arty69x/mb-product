import type { Product, BlogPost } from '@/src/types';

const imagePool = [
  'https://images.unsplash.com/photo-1584917865442-de89df76afd3',
  'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1',
  'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
  'https://images.unsplash.com/photo-1614179689702-355944cd0918',
  'https://images.unsplash.com/photo-1603252109303-2751441dd157',
  'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg',
  'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg',
  'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg',
  'https://cdn.pixabay.com/photo/2016/11/19/15/22/bag-1836847_1280.jpg',
  'https://cdn.pixabay.com/photo/2017/08/06/08/42/woman-2589570_1280.jpg'
];

const makeProduct = (id: number, title: string, category: string): Product => {
  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  return {
    id: `prod-${id}`,
    slug,
    title,
    category,
    price: 120 + id * 9,
    comparePrice: 150 + id * 11,
    images: [imagePool[id % imagePool.length], imagePool[(id + 1) % imagePool.length], imagePool[(id + 2) % imagePool.length]],
    description: `${title} is crafted for versatility, comfort, and elevated everyday styling.`,
    inventory: 8 + id,
    rating: Number((4 + (id % 2) * 0.5).toFixed(1)),
    reviews: [`Loved by customers for refined details ${id}.`, `Hand-finished design note ${id}.`]
  };
};

export const products: Product[] = [
  makeProduct(1, 'Valencia Leather Tote', 'bags'),
  makeProduct(2, 'Noir City Crossbody', 'bags'),
  makeProduct(3, 'Arc Mini Top Handle', 'bags'),
  makeProduct(4, 'Sierra Weekend Duffle', 'travel'),
  makeProduct(5, 'Linen Travel Wallet', 'accessories'),
  makeProduct(6, 'Orbit Card Sleeve', 'accessories'),
  makeProduct(7, 'Classic Belt 28mm', 'accessories'),
  makeProduct(8, 'Canyon Messenger', 'bags'),
  makeProduct(9, 'Dune Bucket Bag', 'bags'),
  makeProduct(10, 'Monaco Shoulder Bag', 'new-arrivals'),
  makeProduct(11, 'Everyday Key Holder', 'essentials'),
  makeProduct(12, 'Soft Travel Pouch', 'travel'),
  makeProduct(13, 'Minimal Zip Wallet', 'essentials'),
  makeProduct(14, 'Structured Work Tote', 'new-arrivals'),
  makeProduct(15, 'Metro Sling Bag', 'bags'),
  makeProduct(16, 'Signature Passport Case', 'travel'),
  makeProduct(17, 'Contour Phone Pouch', 'accessories'),
  makeProduct(18, 'Compact Cosmetics Case', 'essentials'),
  makeProduct(19, 'Edition Shoulder Strap', 'accessories'),
  makeProduct(20, 'Heritage Carryall', 'new-arrivals')
];

export const heroImages: string[] = [
  'https://images.unsplash.com/photo-1548036654-3d94448aba32',
  'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab',
  'https://images.pexels.com/photos/994523/pexels-photo-994523.jpeg',
  'https://cdn.pixabay.com/photo/2015/03/26/10/01/fashion-690690_1280.jpg'
];

export const blogPosts: BlogPost[] = [
  {
    slug: 'craftsmanship-notes',
    title: 'Craftsmanship Notes for Everyday Luxury',
    excerpt: 'How we select materials and finish each piece.',
    image: heroImages[1],
    content: 'Every collection is built around durable fabrics, precise stitching, and timeless forms.'
  },
  {
    slug: 'city-styling-guide',
    title: 'City Styling Guide: Day to Night',
    excerpt: 'Pairing bags and accessories for a seamless routine.',
    image: heroImages[2],
    content: 'From office to evening, compact layers and neutral tones keep your wardrobe effortless.'
  }
];
