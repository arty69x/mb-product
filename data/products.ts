export interface Product {
  id: number;
  cat: string;
  title: string;
  price: number;
  img: string;
  grade: string;
  desc: string;
  serial: string;
  origin: string;
  qty?: number;
}

export const DATABASE = {
  'new-arrivals': [
    { id: 101, cat: 'CLOTHING', title: 'CROPPED FAUX LEATHER JACKET', price: 1290, img: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=800', grade: 'A', desc: 'Premium Japanese leather jacket, meticulously sourced.', serial: 'MB-L-101', origin: 'Tokyo Auction' },
    { id: 102, cat: 'DRESSES', title: 'CABLEKNIT OVERSIZED SHAWL', price: 990, img: 'https://images.unsplash.com/photo-1608234807905-4466023792f5?q=80&w=800', grade: 'S', desc: 'Grade S quality oversized wool shawl.', serial: 'MB-S-102', origin: 'Osaka Premium' },
    { id: 103, cat: 'TOPS', title: 'SIGNATURE LOGO T-SHIRT', price: 590, img: 'https://images.unsplash.com/photo-1550639525-c97d455acf70?q=80&w=800', grade: 'New', desc: 'Brand new signature 100% cotton tee.', serial: 'MB-T-103', origin: 'Store Stock' },
    { id: 104, cat: 'DRESSES', title: 'VINTAGE SILK SLIP DRESS', price: 2490, img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800', grade: 'A', desc: 'Authentic 90s silk slip from Tokyo.', serial: 'MB-D-104', origin: 'Kyoto Vintage' }
  ],
  bags: [
    { id: 201, cat: 'BAGS', title: 'HERMES BIRKIN 30 VINTAGE', price: 650000, img: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800', grade: 'S', desc: "Swift Leather, Gold Hardware. Collector's Choice.", serial: 'H-B30-201', origin: 'Ginza Collector' },
    { id: 202, cat: 'BAGS', title: 'BOTTEGA VENETA PADDED BAG', price: 62000, img: 'https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=800', grade: 'A', desc: 'Modern Nappa leather padded intrecciato.', serial: 'BV-P-202', origin: 'Japan Sourcing' },
    { id: 203, cat: 'BAGS', title: 'CLASSIC QUILTED FLAP BAG', price: 45000, img: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800', grade: 'B', desc: 'Iconic lambskin flap, minor signs of wear.', serial: 'CH-F-203', origin: 'Tokyo Private' },
    { id: 204, cat: 'BAGS', title: 'MINI LADY DIOR ROSE', price: 125000, img: 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?q=80&w=800', grade: 'A', desc: 'Lady Dior Mini in rare rose gold finish.', serial: 'D-M-204', origin: 'Japan Auction' }
  ],
  accessories: [
    { id: 301, cat: 'WATCHES', title: 'VINTAGE ROLEX DATEJUST 36', price: 215000, img: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=800', grade: 'A', desc: '36mm Datejust with Jubilee bracelet.', serial: 'RX-DJ-301', origin: 'Nagoya Boutique' },
    { id: 302, cat: 'JEWELRY', title: 'ORNATE EMBLEM EARRINGS', price: 790, img: 'https://images.unsplash.com/photo-1535633302704-c02fbc4d253d?q=80&w=800', grade: 'S', desc: 'Brand signature emblem, high finish.', serial: 'ACC-E-302', origin: 'Japan Sourced' }
  ]
};
