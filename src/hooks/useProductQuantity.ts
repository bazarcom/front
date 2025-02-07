import { useState } from 'react';

import { Basket } from "@/types/basket";

import { useBasket } from './useBasket';

const useProductQuantity = () => {
  const { handleAddProduct } = useBasket();

  const [quantity, setQuantity] = useState<number>(1);

  function handleInc() {
    setQuantity(quantity + 1);
  }

  function handleAddProductToBasket(product: Basket) {
    handleAddProduct(product);
  }

  function handleDec() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  return { handleInc, handleDec, handleAddProductToBasket, quantity };
};

export { useProductQuantity };
