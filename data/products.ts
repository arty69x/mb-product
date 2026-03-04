import { Product, Review } from '@/lib/types';

export const products: Product[] = [
  {
    id: '1',
    slug: 'quilted-chain-flap-bag',
    title: 'Quilted Chain Flap Bag',
    category: 'bags',
    subcategory: 'Leather Bag',
    price: 2890,
    originalPrice: 3200,
    description: 'Italian calfskin bag with signature chain strap and magnetic flap closure.',
    images: [
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1200',
      'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?q=80&w=1200',
      'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?q=80&w=1200'
    ],
    stock: 8
  },
  {
    id: '2',
    slug: 'monogram-tote',
    title: 'Monogram Canvas Tote',
    category: 'new-arrivals',
    subcategory: 'Tote',
    price: 2190,
    description: 'Daily structured tote with top zip and internal laptop sleeve.',
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200',
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1200'
    ],
    stock: 15
  },
  {
    id: '3',
    slug: 'silk-logo-scarf',
    title: 'Silk Logo Scarf',
    category: 'accessories',
    subcategory: 'Scarf',
    price: 390,
    description: 'Printed twill silk scarf, hand-rolled edges, collectible seasonal motif.',
    images: [
      'https://images.unsplash.com/photo-1520903074185-8eca362b3dce?q=80&w=1200',
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200'
    ],
    stock: 30
  },
  {
    id: '4',
    slug: 'mini-vanity-case',
    title: 'Mini Vanity Case',
    category: 'new-arrivals',
    subcategory: 'Crossbody',
    price: 1640,
    originalPrice: 1810,
    description: 'Compact vanity silhouette with top handle and detachable shoulder strap.',
    images: ['https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?q=80&w=1200'],
    stock: 12
  },
  {
    id: '5',
    slug: 'structured-city-bag',
    title: 'Structured City Bag',
    category: 'bags',
    subcategory: 'Top Handle',
    price: 3090,
    description: 'Architectural shape with polished hardware and suede lining.',
    images: ['https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1200'],
    stock: 6
  },
  {
    id: '6',
    slug: 'signature-belt',
    title: 'Signature Reversible Belt',
    category: 'accessories',
    subcategory: 'Belt',
    price: 490,
    description: 'Reversible leather belt with heritage buckle in brushed gold finish.',
    images: ['https://images.unsplash.com/photo-1618677366787-9727aacca7ea?q=80&w=1200'],
    stock: 20
  },
  {
    id: '7',
    slug: 'diamond-quilt-shoulder-bag',
    title: 'Diamond Quilt Shoulder',
    category: 'bags',
    subcategory: 'Shoulder Bag',
    price: 2650,
    description: 'Supple lambskin shoulder bag with adjustable chain and leather strap.',
    images: ['https://images.unsplash.com/photo-1591348278999-ee1d0c5f2dbf?q=80&w=1200'],
    stock: 9
  },
  {
    id: '8',
    slug: 'crystal-charms-bracelet',
    title: 'Crystal Charms Bracelet',
    category: 'new-arrivals',
    subcategory: 'Jewelry',
    price: 540,
    description: 'Statement bracelet with removable charms and secure clasp.',
    images: ['https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=1200'],
    stock: 18
  }
];

export const reviews: Review[] = [
  {
    id: 'r1',
    productId: '1',
    name: 'Anya T.',
    avatar: 'https://i.pravatar.cc/80?img=12',
    date: '2026-02-11',
    rating: 5,
    text: 'Absolutely flawless leather and stitching. Packaging was premium too.'
  },
  {
    id: 'r2',
    productId: '1',
    name: 'Mali K.',
    avatar: 'https://i.pravatar.cc/80?img=32',
    date: '2026-01-04',
    rating: 4,
    text: 'Great shape and color. Slightly heavier than expected but still lovely.'
  }
];
