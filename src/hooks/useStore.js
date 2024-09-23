import { create } from 'zustand'

export const useBasketStore = create((set) => ({
  cartItems: [],
  addCartItem: (cartItem) => {
    set((state) => ({
      cartItems: [...state.cartItems, cartItem]
    }));
  },
  removeCartItem: (cartItem) => {
    set((state) => {
      const list = [...state.cartItems]
      const index = list?.findIndex(item => item.id === cartItem?.id);
      if (index !== -1) list.splice(index, 1);
      return ({
        cartItems: list,
      });
    });
  },
  removeAllItem: (cartItem) => {
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