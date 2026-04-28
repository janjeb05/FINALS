export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'tees' | 'bottoms' | 'essentials' | 'accessories' | 'outerwear';
  image: string;
  images: string[];
  description: string;
  sizes: string[];
  colors: string[];
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Freedom Oversized Tee',
    price: 45.99,
    category: 'tees',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80',
      'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&q=80',
    ],
    description: 'Heavyweight oversized tee that screams independence. Made for those who move with purpose through the city streets.',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['White', 'Black', 'Gray'],
  },
  {
    id: '2',
    name: 'Urban Rebel Tee',
    price: 48.99,
    category: 'tees',
    image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&q=80',
    ],
    description: 'Premium street-ready tee built for rebels and risk-takers. No compromise, just pure street energy.',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'Navy', 'Charcoal'],
  },
  {
    id: '3',
    name: 'Midnight Vibes Graphic Tee',
    price: 52.99,
    category: 'tees',
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80',
    ],
    description: 'Raw graphics for the late-night grind. Designed for creatives, dreamers, and street legends.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['White', 'Black'],
  },
  {
    id: '4',
    name: 'Street Denim',
    price: 98.99,
    category: 'bottoms',
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&q=80',
    ],
    description: 'Premium denim built for the streets. Flexible fit that moves with you from day to night.',
    sizes: ['28', '30', '32', '34', '36', '38'],
    colors: ['Dark Wash', 'Light Wash', 'Black'],
  },
  {
    id: '5',
    name: 'Tactical Cargo Pants',
    price: 89.99,
    category: 'bottoms',
    image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&q=80',
    ],
    description: 'Function meets street style. Built for urban explorers who carry their world with them.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Olive', 'Black', 'Khaki'],
  },
  {
    id: '6',
    name: 'Summer Freedom Shorts',
    price: 64.99,
    category: 'bottoms',
    image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=800&q=80',
    ],
    description: 'Lightweight and ready for anything. Perfect for those endless summer sessions.',
    sizes: ['28', '30', '32', '34', '36'],
    colors: ['Khaki', 'Navy', 'Stone'],
  },
  {
    id: '7',
    name: 'Limitless Crewneck',
    price: 78.99,
    category: 'essentials',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80',
    ],
    description: 'Heavyweight fleece for those who refuse to be boxed in. Comfort meets street credibility.',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Gray', 'Black', 'Navy'],
  },
  {
    id: '8',
    name: 'Underground Hoodie',
    price: 85.99,
    category: 'essentials',
    image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&q=80',
    ],
    description: 'The uniform of rebels. Premium construction for those who live outside the lines.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'Gray', 'Burgundy'],
  },
  {
    id: '9',
    name: 'Street Legend Cap',
    price: 38.99,
    category: 'accessories',
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=800&q=80',
    ],
    description: 'Crown yourself. Premium cap with uryusee embroidery for the fearless.',
    sizes: ['One Size'],
    colors: ['Black', 'White', 'Navy'],
  },
  {
    id: '10',
    name: 'Signature Leather Belt',
    price: 58.99,
    category: 'accessories',
    image: 'https://images.unsplash.com/photo-1624222247344-e5c61ed1c06e?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1624222247344-e5c61ed1c06e?w=800&q=80',
    ],
    description: 'Crafted for the streets. Genuine leather that only gets better with time.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Brown', 'Black'],
  },
  {
    id: '11',
    name: 'Urban Explorer Pack',
    price: 129.99,
    category: 'accessories',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80',
    ],
    description: 'Built for adventure. Carry your world while you chase your dreams through the concrete jungle.',
    sizes: ['One Size'],
    colors: ['Olive', 'Black', 'Navy'],
  },
  {
    id: '12',
    name: 'Rebel Denim Jacket',
    price: 148.99,
    category: 'outerwear',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80',
    ],
    description: 'Timeless rebellion. Premium denim that tells your story with every fade and crease.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Light Wash', 'Dark Wash'],
  },
  {
    id: '13',
    name: 'Flight Bomber',
    price: 168.99,
    category: 'outerwear',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80',
    ],
    description: 'Fly above the noise. Street-ready bomber for those who soar past limitations.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Navy', 'Olive'],
  },
  {
    id: '14',
    name: 'Arctic Puffer',
    price: 198.99,
    category: 'outerwear',
    image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&q=80',
    ],
    description: 'Unbreakable warmth for cold streets. Premium insulation for the relentless hustle.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'Navy', 'Red'],
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find((p) => p.id === id);
};

export const getProductsByCategory = (
  category: 'tees' | 'bottoms' | 'essentials' | 'accessories' | 'outerwear'
): Product[] => {
  return products.filter((p) => p.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.slice(0, 8);
};
