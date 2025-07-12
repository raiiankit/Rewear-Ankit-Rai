
export interface Item {
  id: string;
  title: string;
  description: string;
  category: string;
  type: string;
  size: string;
  condition: string;
  tags: string[];
  images: string[];
  image: string; // primary image
  owner: string;
  ownerId: string;
  points: number;
  status: 'available' | 'pending' | 'swapped';
  createdAt: string;
  location?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  points: number;
  itemsListed: number;
  swapsCompleted: number;
  joinedAt: string;
  rating: number;
  bio?: string;
}

export const featuredItems: Item[] = [
  {
    id: '1',
    title: 'Vintage Denim Jacket',
    description: 'Beautiful vintage denim jacket from the 90s. Perfectly worn-in with unique fade patterns. Great for layering and adds character to any outfit.',
    category: 'Outerwear',
    type: 'Jacket',
    size: 'M',
    condition: 'Good',
    tags: ['vintage', 'denim', 'casual', '90s'],
    images: [
      'https://images.unsplash.com/photo-1544966503-7cc5ac882d5e?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=400&fit=crop'
    ],
    image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5e?w=400&h=400&fit=crop',
    owner: 'Sarah M.',
    ownerId: 'user1',
    points: 45,
    status: 'available',
    createdAt: '2024-01-15',
    location: 'Downtown'
  },
  {
    id: '2',
    title: 'Floral Summer Dress',
    description: 'Gorgeous floral summer dress perfect for warm weather. Light, breathable fabric with a flattering A-line silhouette. Worn only a few times.',
    category: 'Dresses',
    type: 'Summer Dress',
    size: 'S',
    condition: 'Excellent',
    tags: ['floral', 'summer', 'dress', 'casual'],
    images: [
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&h=400&fit=crop'
    ],
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop',
    owner: 'Emma L.',
    ownerId: 'user2',
    points: 35,
    status: 'available',
    createdAt: '2024-01-10',
    location: 'Midtown'
  },
  {
    id: '3',
    title: 'Designer Wool Coat',
    description: 'Luxurious wool coat from a premium brand. Classic cut that never goes out of style. Perfect for professional settings or elegant occasions.',
    category: 'Outerwear',
    type: 'Coat',
    size: 'L',
    condition: 'Excellent',
    tags: ['designer', 'wool', 'professional', 'winter'],
    images: [
      'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=400&fit=crop'
    ],
    image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400&h=400&fit=crop',
    owner: 'Michael R.',
    ownerId: 'user3',
    points: 80,
    status: 'available',
    createdAt: '2024-01-08',
    location: 'Uptown'
  },
  {
    id: '4',
    title: 'Classic White Sneakers',
    description: 'Clean, minimalist white sneakers in excellent condition. Perfect for casual outfits and comfortable for all-day wear.',
    category: 'Shoes',
    type: 'Sneakers',
    size: '9',
    condition: 'Good',
    tags: ['sneakers', 'white', 'casual', 'comfortable'],
    images: [
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop'
    ],
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop',
    owner: 'Jake T.',
    ownerId: 'user4',
    points: 25,
    status: 'available',
    createdAt: '2024-01-12',
    location: 'Downtown'
  },
  {
    id: '5',
    title: 'Striped Cotton T-Shirt',
    description: 'Comfortable striped cotton t-shirt, perfect for layering or wearing on its own. Soft fabric with great fit.',
    category: 'Tops',
    type: 'T-Shirt',
    size: 'M',
    condition: 'Good',
    tags: ['striped', 'cotton', 'casual', 'comfortable'],
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop'
    ],
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
    owner: 'Lisa K.',
    ownerId: 'user5',
    points: 15,
    status: 'available',
    createdAt: '2024-01-14',
    location: 'Midtown'
  },
  {
    id: '6',
    title: 'Black Leather Boots',
    description: 'Stylish black leather boots with minimal wear. Great for both casual and semi-formal occasions.',
    category: 'Shoes',
    type: 'Boots',
    size: '8',
    condition: 'Excellent',
    tags: ['leather', 'boots', 'black', 'versatile'],
    images: [
      'https://images.unsplash.com/photo-1608256246200-53e8b47b9413?w=400&h=400&fit=crop'
    ],
    image: 'https://images.unsplash.com/photo-1608256246200-53e8b47b9413?w=400&h=400&fit=crop',
    owner: 'David W.',
    ownerId: 'user6',
    points: 55,
    status: 'available',
    createdAt: '2024-01-11',
    location: 'Uptown'
  },
  {
    id: '7',
    title: 'Cozy Knit Sweater',
    description: 'Warm and cozy knit sweater in neutral color. Perfect for cold days and pairs well with jeans or skirts.',
    category: 'Tops',
    type: 'Sweater',
    size: 'L',
    condition: 'Good',
    tags: ['knit', 'sweater', 'cozy', 'warm'],
    images: [
      'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=400&fit=crop'
    ],
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=400&fit=crop',
    owner: 'Anna P.',
    ownerId: 'user7',
    points: 30,
    status: 'available',
    createdAt: '2024-01-13',
    location: 'Downtown'
  },
  {
    id: '8',
    title: 'High-Waisted Jeans',
    description: 'Trendy high-waisted jeans with a flattering fit. Great condition with minimal signs of wear.',
    category: 'Bottoms',
    type: 'Jeans',
    size: 'S',
    condition: 'Excellent',
    tags: ['jeans', 'high-waisted', 'trendy', 'flattering'],
    images: [
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=400&fit=crop'
    ],
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=400&fit=crop',
    owner: 'Sophie R.',
    ownerId: 'user8',
    points: 40,
    status: 'available',
    createdAt: '2024-01-09',
    location: 'Midtown'
  },
  {
    id: '9',
    title: 'Silk Scarf Collection',
    description: 'Beautiful collection of silk scarves in various patterns. Can be worn as accessories or head wraps.',
    category: 'Accessories',
    type: 'Scarf',
    size: 'One Size',
    condition: 'Excellent',
    tags: ['silk', 'scarf', 'accessories', 'patterns'],
    images: [
      'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=400&fit=crop'
    ],
    image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=400&fit=crop',
    owner: 'Grace M.',
    ownerId: 'user9',
    points: 20,
    status: 'available',
    createdAt: '2024-01-07',
    location: 'Uptown'
  },
  {
    id: '10',
    title: 'Athletic Yoga Pants',
    description: 'High-performance yoga pants perfect for workouts or casual wear. Moisture-wicking fabric with great stretch.',
    category: 'Activewear',
    type: 'Yoga Pants',
    size: 'M',
    condition: 'Good',
    tags: ['yoga', 'athletic', 'stretchy', 'comfortable'],
    images: [
      'https://images.unsplash.com/photo-1506629905920-41b5c5e144c5?w=400&h=400&fit=crop'
    ],
    image: 'https://images.unsplash.com/photo-1506629905920-41b5c5e144c5?w=400&h=400&fit=crop',
    owner: 'Maya L.',
    ownerId: 'user10',
    points: 25,
    status: 'available',
    createdAt: '2024-01-06',
    location: 'Downtown'
  },
  {
    id: '11',
    title: 'Formal Blazer',
    description: 'Professional blazer in excellent condition. Perfect for office wear or formal events. Tailored fit.',
    category: 'Formal',
    type: 'Blazer',
    size: 'M',
    condition: 'Excellent',
    tags: ['blazer', 'formal', 'professional', 'tailored'],
    images: [
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=400&fit=crop'
    ],
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=400&fit=crop',
    owner: 'Rachel B.',
    ownerId: 'user11',
    points: 60,
    status: 'available',
    createdAt: '2024-01-05',
    location: 'Uptown'
  },
  {
    id: '12',
    title: 'Summer Sandals',
    description: 'Comfortable summer sandals with cushioned soles. Great for walking and casual summer outfits.',
    category: 'Shoes',
    type: 'Sandals',
    size: '7',
    condition: 'Good',
    tags: ['sandals', 'summer', 'comfortable', 'walking'],
    images: [
      'https://images.unsplash.com/photo-1562183241-b937e95585b6?w=400&h=400&fit=crop'
    ],
    image: 'https://images.unsplash.com/photo-1562183241-b937e95585b6?w=400&h=400&fit=crop',
    owner: 'Olivia S.',
    ownerId: 'user12',
    points: 18,
    status: 'available',
    createdAt: '2024-01-04',
    location: 'Midtown'
  }
];

export const mockUser: User = {
  id: 'user1',
  name: 'Sarah Mitchell',
  email: 'sarah@example.com',
  avatar: 'https://images.unsplash.com/photo-1494790108755-2616b9b6b5b8?w=100&h=100&fit=crop&crop=face',
  points: 250,
  itemsListed: 12,
  swapsCompleted: 8,
  joinedAt: '2023-09-15',
  rating: 4.9,
  bio: 'Fashion enthusiast and sustainability advocate. Love discovering unique pieces and giving clothes a second life!'
};

export const categories = [
  'All Categories',
  'Tops',
  'Bottoms', 
  'Dresses',
  'Outerwear',
  'Shoes',
  'Accessories',
  'Activewear',
  'Formal'
];

export const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL', '6', '7', '8', '9', '10', '11', 'One Size'];

export const conditions = [
  'New with Tags',
  'Excellent', 
  'Good',
  'Fair'
];
