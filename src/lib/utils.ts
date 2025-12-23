import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

import { markets } from '@/constants/markets';
import { Basket } from '@/types/basket';
import { Product } from '@/types/product';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCategoryName(categoryName: string): string {
  // _ simvollarını boşluqla əvəz et və hər sözün baş hərfini böyük et
  return categoryName
    .split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export function productToBasket(product: Product, quantity: number = 1): Basket {
  const marketInfo = markets[product.market_name];
  
  return {
    _id: product._id,
    quantity: quantity,
    name: product.name,
    image: product.image_url,
    offer: {
      _id: product._id, // offer ID kimi product ID istifadə edirik
      logo: marketInfo?.logo || '',
      price: product.price ?? 0,
      discount_price: product.old_price,
      image: marketInfo?.logo || '',
      store_name: product.market_name,
    },
  };
}
