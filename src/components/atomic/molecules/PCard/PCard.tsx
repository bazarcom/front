'use client';

import { createContext, FC } from 'react';

import { Product } from "@/types/product";

import { HorizontalPCard } from './HorizontalPCard';
import { VerticalPCard } from './VerticalPCard';

export type PCardProps = {
  product: Product;
  isReverse?: boolean;
};

export const CardContext = createContext<Product>({
  _id: "someid",
  name: '',
  image: '',
  category: '',
  createdAt: '',
  updatedAt: '',
  prices: [],
});

const PCard: FC<PCardProps> = ({ product, isReverse = false }) => {
  return (
    <CardContext.Provider value={product}>
      {isReverse && <HorizontalPCard />}
      {!isReverse && <VerticalPCard />}
    </CardContext.Provider>
  );
};

export { PCard };
