export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'Skincare' | 'Haircare' | 'Personal Care';
  subCategory?: string;
  image: string;
  tag?: 'New Arrival' | 'Bestseller' | 'Limited Edition' | 'Handcrafted';
  rating: number;
  inStock: boolean;
  features?: string[];
  variants?: string[];
  variantColors?: Record<string, string>;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedVariant?: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  avatar: string;
}

export interface CategoryItem {
  id: string;
  name: string;
  icon: string;
  subCategories?: string[];
}
