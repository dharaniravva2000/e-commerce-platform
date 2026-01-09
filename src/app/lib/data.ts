// Mock data for luxury e-commerce

export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  imageQuery: string;
  tag?: string;
  featured?: boolean;
}

export interface Collection {
  id: string;
  name: string;
  description: string;
  imageQuery: string;
  productCount: number;
}

export const collections: Collection[] = [
  {
    id: '1',
    name: 'Heritage Collection',
    description: 'Timeless pieces crafted with traditional techniques',
    imageQuery: 'luxury fashion editorial',
    productCount: 24
  },
  {
    id: '2',
    name: 'Modern Minimalism',
    description: 'Contemporary elegance meets refined simplicity',
    imageQuery: 'minimalist luxury fashion',
    productCount: 18
  },
  {
    id: '3',
    name: 'Evening Atelier',
    description: 'Exceptional pieces for memorable occasions',
    imageQuery: 'luxury evening wear',
    productCount: 15
  },
  {
    id: '4',
    name: 'Artisan Series',
    description: 'Limited handcrafted masterpieces',
    imageQuery: 'luxury leather goods',
    productCount: 12
  }
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Cashmere Overcoat',
    price: 2850,
    category: 'Outerwear',
    description: 'Luxurious cashmere overcoat with hand-stitched details',
    imageQuery: 'luxury mens coat',
    tag: 'New',
    featured: true
  },
  {
    id: '2',
    name: 'Silk Evening Dress',
    price: 4200,
    category: 'Evening Wear',
    description: 'Elegant silk evening dress with intricate embroidery',
    imageQuery: 'luxury evening dress',
    tag: 'Limited',
    featured: true
  },
  {
    id: '3',
    name: 'Leather Briefcase',
    price: 1950,
    category: 'Accessories',
    description: 'Handcrafted Italian leather briefcase',
    imageQuery: 'luxury leather bag',
    tag: 'Crafted',
    featured: true
  },
  {
    id: '4',
    name: 'Wool Suit',
    price: 3400,
    category: 'Tailoring',
    description: 'Bespoke wool suit with custom fitting',
    imageQuery: 'luxury mens suit',
    featured: true
  },
  {
    id: '5',
    name: 'Cashmere Sweater',
    price: 890,
    category: 'Knitwear',
    description: 'Pure cashmere crew neck sweater',
    imageQuery: 'luxury sweater',
    featured: false
  },
  {
    id: '6',
    name: 'Silk Scarf',
    price: 420,
    category: 'Accessories',
    description: 'Hand-printed silk scarf',
    imageQuery: 'silk scarf luxury',
    tag: 'New Drop',
    featured: false
  },
  {
    id: '7',
    name: 'Leather Boots',
    price: 1580,
    category: 'Footwear',
    description: 'Handmade leather Chelsea boots',
    imageQuery: 'luxury leather boots',
    featured: false
  },
  {
    id: '8',
    name: 'Merino Blazer',
    price: 2150,
    category: 'Tailoring',
    description: 'Premium merino wool blazer',
    imageQuery: 'luxury blazer',
    featured: false
  }
];

export const heroSlides = [
  {
    id: '1',
    title: 'Winter Heritage',
    subtitle: 'Timeless pieces for the season',
    imageQuery: 'luxury winter fashion',
    cta: 'Explore Collection'
  },
  {
    id: '2',
    title: 'Artisan Crafted',
    subtitle: 'Limited edition handmade pieces',
    imageQuery: 'luxury craftsmanship',
    cta: 'Discover More'
  },
  {
    id: '3',
    title: 'Evening Elegance',
    subtitle: 'Exceptional pieces for special moments',
    imageQuery: 'luxury evening fashion',
    cta: 'View Collection'
  }
];
