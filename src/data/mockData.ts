
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

export const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

export const conditions = [
  'New with Tags',
  'Excellent', 
  'Good',
  'Fair'
];
