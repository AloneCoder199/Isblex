// data/productData.ts
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  images?: string[];
  category: string;
  tags?: string[];
  isBestSeller?: boolean;
  isNew?: boolean;
  inStock?: boolean;
  discount?: number;
}

export const products: Product[] = [
  {
    id: "prod-001",
    name: "Premium Cotton T-Shirt",
    description: "High-quality cotton t-shirt with perfect fit",
    price: 29.99,
    originalPrice: 49.99,
    rating: 4.8,
    reviewCount: 128,
    image: "/products/tshirt-1.jpg",
    category: "Men",
    isBestSeller: true,
    isNew: false,
    inStock: true,
    discount: 40,
  },
  {
    id: "prod-002",
    name: "Wireless Bluetooth Headphones",
    description: "Premium sound quality with noise cancellation",
    price: 79.99,
    rating: 4.9,
    reviewCount: 256,
    image: "/products/headphones-1.jpg",
    category: "Electronics",
    isBestSeller: true,
    isNew: true,
    inStock: true,
  },
  {
    id: "prod-003",
    name: "Minimalist Leather Watch",
    description: "Elegant design with genuine leather strap",
    price: 129.99,
    originalPrice: 199.99,
    rating: 4.7,
    reviewCount: 89,
    image: "/products/watch-1.jpg",
    category: "Accessories",
    isBestSeller: true,
    inStock: true,
    discount: 35,
  },
  {
    id: "prod-004",
    name: "Women's Summer Dress",
    description: "Light and comfortable summer collection",
    price: 59.99,
    rating: 4.6,
    reviewCount: 167,
    image: "/products/dress-1.jpg",
    category: "Women",
    isBestSeller: true,
    isNew: false,
    inStock: true,
  },
  // ... aur products
];