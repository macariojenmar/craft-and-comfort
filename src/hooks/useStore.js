import { create } from 'zustand'

export const useBasketStore = create((set) => ({
  cartItems: [],
  addCartItem: (cartItem) => {
    set((state) => ({ 
      cartItems: [...state.cartItems, cartItem] 
    }));
  },
  removeCartItem: (cartItem) => {
    set((state) => ({
      cartItems: state.cartItems.filter(item => item.id !== cartItem.id),
    }));
  },
}))

export const useLikeStore = create((set) => ({
  likedItems: [],
  addLikeItem: (likedItem) => {
    set((state) => ({ 
      likedItems: [...state.likedItems, likedItem] 
    }));
  },
  unlikeItem: (likedItem) => {
    set((state) => ({
      likedItems: state.likedItems.filter(item => item.id !== likedItem.id),
    }));
  },
}))