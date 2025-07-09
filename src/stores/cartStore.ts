import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { CartItem } from '@/types';

interface CartState {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
  
  // Actions
  addItem: (item: Omit<CartItem, 'id'>) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getItemQuantity: (productId: string) => number;
  isItemInCart: (productId: string) => boolean;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      totalItems: 0,
      totalPrice: 0,

      addItem: (item) => {
        const state = get();
        const existingItem = state.items.find(i => i.productId === item.productId);

        if (existingItem) {
          // If item already exists, update quantity
          set({
            items: state.items.map(i =>
              i.productId === item.productId
                ? { ...i, quantity: i.quantity + item.quantity }
                : i
            ),
          });
        } else {
          // Add new item
          const newItem: CartItem = {
            id: `${item.productId}_${Date.now()}`,
            ...item,
          };
          set({
            items: [...state.items, newItem],
          });
        }

        // Update totals
        const newState = get();
        const totalItems = newState.items.reduce((sum, item) => sum + item.quantity, 0);
        const totalPrice = newState.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        
        set({ totalItems, totalPrice });
      },

      removeItem: (productId) => {
        const state = get();
        set({
          items: state.items.filter(item => item.productId !== productId),
        });

        // Update totals
        const newState = get();
        const totalItems = newState.items.reduce((sum, item) => sum + item.quantity, 0);
        const totalPrice = newState.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        
        set({ totalItems, totalPrice });
      },

      updateQuantity: (productId, quantity) => {
        if (quantity <= 0) {
          get().removeItem(productId);
          return;
        }

        const state = get();
        set({
          items: state.items.map(item =>
            item.productId === productId
              ? { ...item, quantity }
              : item
          ),
        });

        // Update totals
        const newState = get();
        const totalItems = newState.items.reduce((sum, item) => sum + item.quantity, 0);
        const totalPrice = newState.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        
        set({ totalItems, totalPrice });
      },

      clearCart: () => {
        set({
          items: [],
          totalItems: 0,
          totalPrice: 0,
        });
      },

      getItemQuantity: (productId) => {
        const state = get();
        const item = state.items.find(i => i.productId === productId);
        return item ? item.quantity : 0;
      },

      isItemInCart: (productId) => {
        const state = get();
        return state.items.some(item => item.productId === productId);
      },
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
