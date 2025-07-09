import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { AppUser } from '@/types';

interface AuthState {
  user: AppUser | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  
  // Actions
  setUser: (user: AppUser | null) => void;
  setLoading: (loading: boolean) => void;
  logout: () => void;
  updateUser: (updates: Partial<AppUser>) => void;
  isAdmin: () => boolean;
  isModerator: () => boolean;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      isLoading: false,
      isAuthenticated: false,

      setUser: (user) => {
        set({
          user,
          isAuthenticated: !!user,
          isLoading: false,
        });
      },

      setLoading: (loading) => {
        set({ isLoading: loading });
      },

      logout: () => {
        set({
          user: null,
          isAuthenticated: false,
          isLoading: false,
        });
      },

      updateUser: (updates) => {
        const state = get();
        if (state.user) {
          set({
            user: { ...state.user, ...updates },
          });
        }
      },

      isAdmin: () => {
        const state = get();
        return state.user?.role === 'admin';
      },

      isModerator: () => {
        const state = get();
        return state.user?.role === 'moderator' || state.user?.role === 'admin';
      },
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
