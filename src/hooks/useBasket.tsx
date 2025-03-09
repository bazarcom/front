import { useCallback, useLayoutEffect } from 'react';
import { toast } from 'react-hot-toast';

import { useBasketState } from '@/state/useBasketState';
import { Basket } from "@/types/basket";

type UseBasket = {
  handleIncrementProduct: (id: string, offerId: string) => void;
  handleAddProduct: (product: Basket) => void;
  handleDecrementProduct: (id: string, offerId: string) => void;
  handleRemoveProduct: (id: string, offerId: string) => void;
  getTotalPrice: () => { totalPrice: number; totalHighestPrice: number } | undefined;
  getTotalProductCount: () => number;
  allBasketProducts: Basket[];
  handleRemoveAllProducts: () => void;
};

const useBasket = (): UseBasket => {
  const allBasketProducts = useBasketState((state) => state.products);
  const addProduct = useBasketState((state) => state.addProduct);
  const clearBasket = useBasketState((state) => state.clearBasket);
  const totalProductCount = useBasketState((state) => state.getTotalProductCount);
  const totalPrice = useBasketState((state) => state.getTotalPrice);

  const handleIncrementProduct = (id: string, offerId: string) => {
    const updatedProducts = allBasketProducts.map((product: Basket) => {
      if (product["_id"] === id && product.offer["_id"] === offerId) {
        return { ...product, quantity: product.quantity + 1 };
      }

      return product;
    });

    syncStateAndLocalStorage(updatedProducts);

    toast.success('Artdı.');
  };

  const handleAddProduct = (newProduct: Basket) => {
    let isInBasket = false;

    const updatedProducts = allBasketProducts.map((product: Basket) => {
      if (product["_id"] === newProduct["_id"] && product.offer["_id"] === newProduct.offer["_id"]) {
        isInBasket = true;
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });

    if (!isInBasket) {
      updatedProducts.push(newProduct);
    }

    toast.success('Əlavə edildi.');

    syncStateAndLocalStorage(updatedProducts);
  };

  const handleDecrementProduct = (id: string, offerId: string) => {
    // Update the product, but if it's quantity is 1, remove it from the list
    const updatedProducts = allBasketProducts.reduce((acc: Basket[], product: Basket) => {
      if (product["_id"] === id && product.offer["_id"] === offerId) {
        if (product.quantity === 1) {
          return acc;
        }
        return [...acc, { ...product, quantity: product.quantity - 1 }];
      }
      return [...acc, product];
    }, []);

    toast.success('Azaldı.');

    syncStateAndLocalStorage(updatedProducts);
  };

  const handleRemoveProduct = (id: string, offerId: string) => {
    const updatedProducts = allBasketProducts.filter((product: Basket) => product["_id"] !== id && product.offer["_id"] !== offerId);

    syncStateAndLocalStorage(updatedProducts);
  };

  const handleRemoveAllProducts = () => {
    clearBasket();
    localStorage.removeItem('basket');
  };

  const syncStateAndLocalStorage = useCallback(
    (products: Basket[]) => {
      clearBasket();
      products.forEach((product) => {
        addProduct(product);
      });

      localStorage.setItem('basket', JSON.stringify(products));
    },
    [clearBasket, addProduct],
  );

  const getTotalPrice = (): { totalPrice: number; totalHighestPrice: number } | undefined => {
    return { totalHighestPrice: +totalPrice()?.toFixed(2) || 0, totalPrice: +totalPrice()?.toFixed(2) || 0 };
  };

  const getTotalProductCount = () => {
    return totalProductCount();
  };

  // const productHighestPrice = (id: string) => {
  //   const product = products.find((product) => product.id === id);
  //
  //   if (!product) {
  //     return 0;
  //   }
  //
  //   let highestPrice = 0;
  //   for (const offerPrice in product.all_offers) {
  //     if (product.all_offers[offerPrice].product_price > highestPrice) {
  //       highestPrice = product.all_offers[offerPrice].product_price;
  //     }
  //   }
  //
  //   return +highestPrice?.toFixed();
  // };

  useLayoutEffect(() => {
    const products = localStorage.getItem('basket');

    if (!products) {
      return;
    }

    syncStateAndLocalStorage(JSON.parse(products));
  }, [syncStateAndLocalStorage]);

  return {
    allBasketProducts,
    handleIncrementProduct,
    handleRemoveAllProducts,
    handleAddProduct,
    handleDecrementProduct,
    handleRemoveProduct,
    getTotalPrice,
    getTotalProductCount,
  };
};

export { useBasket };
