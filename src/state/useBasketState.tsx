import { create } from 'zustand';

import { Basket } from "@/types/basket";

interface UseBasketState {
  products: Basket[];
  addProduct: (product: Basket) => void;
  getProduct: (id: number) => Basket | undefined;
  removeProduct: (id: number) => void;
  incrementProduct: (id: number) => void;
  decrementProduct: (id: number) => void;
  clearBasket: () => void;
  getBasketFromLocalStorage: () => void;
  getTotalPrice: () => number;
  getTotalProductCount: () => number;
}

export const useBasketState = create<UseBasketState>()((set, get) => ({
  products: [],
  addProduct: (product) => set((state) => ({ products: [...state.products, product] })),
  removeProduct: (id) => set((state) => ({ products: state.products.filter((product) => product["_id"] !== id) })),
  incrementProduct: (id) =>
    set((state) => ({
      products: state.products.map((product) => (product["_id"] === id ? { ...product, quantity: product.quantity + 1 } : product)),
    })),
  decrementProduct: (id) => {
    set((state) => ({
      products: state.products.map((product) => (product["_id"] === id ? { ...product, quantity: product.quantity - 1 } : product)),
    }));
  },
  clearBasket: () => set({ products: [] }),
  getBasketFromLocalStorage: () => {
    const basket = localStorage.getItem('basket');
    if (basket) {
      set({ products: JSON.parse(basket) });
    }
  },
  getProduct: (id) =>
    // Используем get для доступа к состоянию
    get().products.find((product) => product["_id"] === id),

  getTotalPrice: () =>
    // Используем get для доступа к состоянию
    get().products.reduce((acc, product) => acc + product.offer.price * product.quantity, 0),

  getTotalProductCount: () => {
    const products = get().products;
    return products.reduce((acc, product) => acc + product.quantity, 0);
  },
}));
