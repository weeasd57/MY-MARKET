import { 
  collection, 
  query, 
  where, 
  orderBy, 
  limit, 
  getDocs, 
  doc, 
  getDoc, 
  addDoc, 
  updateDoc, 
  deleteDoc,
  startAfter,
  QueryConstraint,
  DocumentSnapshot
} from 'firebase/firestore';
import { db } from '@/config/firebase';
import { Product, FilterOptions, PaginationInfo, ApiResponse } from '@/types';

const PRODUCTS_COLLECTION = 'products';

export class ProductsService {
  // Get all products with filters and pagination
  static async getProducts(
    options: FilterOptions = {},
    page: number = 1,
    itemsPerPage: number = 12,
    lastVisible?: DocumentSnapshot
  ): Promise<ApiResponse<Product[]>> {
    try {
      const constraints: QueryConstraint[] = [];

      // Apply filters
      if (options.category) {
        constraints.push(where('categoryId', '==', options.category));
      }

      if (options.isHot) {
        constraints.push(where('isHot', '==', true));
      }

      if (options.isNew) {
        constraints.push(where('isNew', '==', true));
      }

      if (options.onSale) {
        constraints.push(where('onSale', '==', true));
      }

      if (options.minPrice !== undefined) {
        constraints.push(where('price', '>=', options.minPrice));
      }

      if (options.maxPrice !== undefined) {
        constraints.push(where('price', '<=', options.maxPrice));
      }

      // Apply sorting
      if (options.sortBy) {
        const direction = options.sortOrder === 'desc' ? 'desc' : 'asc';
        constraints.push(orderBy(options.sortBy, direction));
      } else {
        constraints.push(orderBy('createdAt', 'desc'));
      }

      // Apply pagination
      if (lastVisible) {
        constraints.push(startAfter(lastVisible));
      }

      constraints.push(limit(itemsPerPage));

      const q = query(collection(db, PRODUCTS_COLLECTION), ...constraints);
      const querySnapshot = await getDocs(q);

      const products: Product[] = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        products.push({
          id: doc.id,
          ...data,
          createdAt: data.createdAt?.toDate() || new Date(),
        } as Product);
      });

      // Get total count for pagination (this is a simplified approach)
      const totalQuery = query(collection(db, PRODUCTS_COLLECTION));
      const totalSnapshot = await getDocs(totalQuery);
      const totalItems = totalSnapshot.size;

      const pagination: PaginationInfo = {
        currentPage: page,
        totalPages: Math.ceil(totalItems / itemsPerPage),
        totalItems,
        itemsPerPage,
      };

      return {
        success: true,
        data: products,
        pagination,
      };
    } catch (error) {
      console.error('Error fetching products:', error);
      return {
        success: false,
        error: 'Failed to fetch products',
      };
    }
  }

  // Get product by ID
  static async getProductById(id: string): Promise<ApiResponse<Product>> {
    try {
      const docRef = doc(db, PRODUCTS_COLLECTION, id);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        return {
          success: false,
          error: 'Product not found',
        };
      }

      const data = docSnap.data();
      const product: Product = {
        id: docSnap.id,
        ...data,
        createdAt: data.createdAt?.toDate() || new Date(),
      } as Product;

      return {
        success: true,
        data: product,
      };
    } catch (error) {
      console.error('Error fetching product:', error);
      return {
        success: false,
        error: 'Failed to fetch product',
      };
    }
  }

  // Search products
  static async searchProducts(
    searchTerm: string,
    page: number = 1,
    itemsPerPage: number = 12
  ): Promise<ApiResponse<Product[]>> {
    try {
      // Firebase doesn't have native text search, so we'll use a simple approach
      // In production, you might want to use Algolia or similar service
      const q = query(
        collection(db, PRODUCTS_COLLECTION),
        orderBy('name'),
        limit(itemsPerPage)
      );

      const querySnapshot = await getDocs(q);
      const products: Product[] = [];

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        const product = {
          id: doc.id,
          ...data,
          createdAt: data.createdAt?.toDate() || new Date(),
        } as Product;

        // Filter by search term
        if (
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          products.push(product);
        }
      });

      return {
        success: true,
        data: products,
        pagination: {
          currentPage: page,
          totalPages: 1, // Simplified for demo
          totalItems: products.length,
          itemsPerPage,
        },
      };
    } catch (error) {
      console.error('Error searching products:', error);
      return {
        success: false,
        error: 'Failed to search products',
      };
    }
  }

  // Get featured products
  static async getFeaturedProducts(): Promise<ApiResponse<Product[]>> {
    try {
      const q = query(
        collection(db, PRODUCTS_COLLECTION),
        where('isHot', '==', true),
        orderBy('createdAt', 'desc'),
        limit(8)
      );

      const querySnapshot = await getDocs(q);
      const products: Product[] = [];

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        products.push({
          id: doc.id,
          ...data,
          createdAt: data.createdAt?.toDate() || new Date(),
        } as Product);
      });

      return {
        success: true,
        data: products,
      };
    } catch (error) {
      console.error('Error fetching featured products:', error);
      return {
        success: false,
        error: 'Failed to fetch featured products',
      };
    }
  }

  // Get products by category
  static async getProductsByCategory(
    categoryId: string,
    page: number = 1,
    itemsPerPage: number = 12
  ): Promise<ApiResponse<Product[]>> {
    return this.getProducts(
      { category: categoryId },
      page,
      itemsPerPage
    );
  }

  // Get new products
  static async getNewProducts(): Promise<ApiResponse<Product[]>> {
    try {
      const q = query(
        collection(db, PRODUCTS_COLLECTION),
        where('isNew', '==', true),
        orderBy('createdAt', 'desc'),
        limit(8)
      );

      const querySnapshot = await getDocs(q);
      const products: Product[] = [];

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        products.push({
          id: doc.id,
          ...data,
          createdAt: data.createdAt?.toDate() || new Date(),
        } as Product);
      });

      return {
        success: true,
        data: products,
      };
    } catch (error) {
      console.error('Error fetching new products:', error);
      return {
        success: false,
        error: 'Failed to fetch new products',
      };
    }
  }

  // Get sale products
  static async getSaleProducts(): Promise<ApiResponse<Product[]>> {
    try {
      const q = query(
        collection(db, PRODUCTS_COLLECTION),
        where('onSale', '==', true),
        orderBy('createdAt', 'desc'),
        limit(8)
      );

      const querySnapshot = await getDocs(q);
      const products: Product[] = [];

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        products.push({
          id: doc.id,
          ...data,
          createdAt: data.createdAt?.toDate() || new Date(),
        } as Product);
      });

      return {
        success: true,
        data: products,
      };
    } catch (error) {
      console.error('Error fetching sale products:', error);
      return {
        success: false,
        error: 'Failed to fetch sale products',
      };
    }
  }

  // Get related products
  static async getRelatedProducts(
    productId: string,
    categoryId?: string
  ): Promise<ApiResponse<Product[]>> {
    try {
      const constraints: QueryConstraint[] = [];

      if (categoryId) {
        constraints.push(where('categoryId', '==', categoryId));
      }

      constraints.push(orderBy('createdAt', 'desc'));
      constraints.push(limit(4));

      const q = query(collection(db, PRODUCTS_COLLECTION), ...constraints);
      const querySnapshot = await getDocs(q);

      const products: Product[] = [];
      querySnapshot.forEach((doc) => {
        if (doc.id !== productId) {
          const data = doc.data();
          products.push({
            id: doc.id,
            ...data,
            createdAt: data.createdAt?.toDate() || new Date(),
          } as Product);
        }
      });

      return {
        success: true,
        data: products.slice(0, 4),
      };
    } catch (error) {
      console.error('Error fetching related products:', error);
      return {
        success: false,
        error: 'Failed to fetch related products',
      };
    }
  }
}
