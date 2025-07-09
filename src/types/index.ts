export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  categoryId?: string;
  imageUrls: string[];
  isHot: boolean;
  isNew: boolean;
  onSale: boolean;
  salePrice?: number;
  createdAt: Date;
  age?: string;
  stock?: number;
  rating?: number;
  reviews?: Review[];
}

export interface Category {
  id: string;
  name: string;
  imageUrl?: string;
  icon?: string;
  description?: string;
  productCount?: number;
}

export interface Order {
  id: string;
  userId: string;
  items: OrderItem[];
  total: number;
  status: OrderStatus;
  createdAt: Date;
  name: string;
  phone: string;
  address: string;
  paymentMethod?: string;
  trackingNumber?: string;
  estimatedDelivery?: Date;
}

export interface OrderItem {
  productId: string;
  productName: string;
  quantity: number;
  price: number;
  imageUrl?: string;
}

export interface AppUser {
  id: string;
  email: string;
  name?: string;
  photoUrl?: string;
  role: UserRole;
  createdAt: Date;
  isActive: boolean;
  phone?: string;
  address?: string;
}

export interface Review {
  id: string;
  userId: string;
  productId: string;
  rating: number;
  comment: string;
  createdAt: Date;
  userName: string;
  userPhoto?: string;
}

export interface CartItem {
  id: string;
  productId: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl?: string;
  selectedColor?: string;
  selectedSize?: string;
}

export interface WishlistItem {
  id: string;
  productId: string;
  name: string;
  price: number;
  imageUrl?: string;
  addedAt: Date;
}

export interface AppSettings {
  id: string;
  appName: string;
  appDescription: string;
  appVersion: string;
  androidAppUrl: string;
  adminPanelUrl: string;
  contactEmail: string;
  contactPhone: string;
  contactAddress: string;
  socialLinks: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
  };
  maintenanceMode: boolean;
  featuredCategories: string[];
  bannerImages: string[];
  currency: string;
  theme: {
    primaryColor: string;
    secondaryColor: string;
    accentColor: string;
  };
}

export interface Analytics {
  totalUsers: number;
  totalOrders: number;
  totalProducts: number;
  totalRevenue: number;
  monthlyRevenue: number[];
  topProducts: Product[];
  recentOrders: Order[];
  userGrowth: number;
  conversionRate: number;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: NotificationType;
  read: boolean;
  createdAt: Date;
  actionUrl?: string;
}

export type UserRole = 'customer' | 'admin' | 'moderator';

export type OrderStatus = 
  | 'pending'
  | 'confirmed'
  | 'processing'
  | 'shipped'
  | 'delivered'
  | 'cancelled'
  | 'returned';

export type NotificationType = 
  | 'order_update'
  | 'promotion'
  | 'system'
  | 'product_restock'
  | 'review_request';

export type PaymentMethod = 
  | 'cash_on_delivery'
  | 'credit_card'
  | 'debit_card'
  | 'paypal'
  | 'bank_transfer';

export interface FilterOptions {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  sortBy?: 'name' | 'price' | 'rating' | 'newest';
  sortOrder?: 'asc' | 'desc';
  search?: string;
  isHot?: boolean;
  isNew?: boolean;
  onSale?: boolean;
}

export interface PaginationInfo {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
  pagination?: PaginationInfo;
}
