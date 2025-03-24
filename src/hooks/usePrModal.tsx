import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import { Product } from '@/types/product';

import { useProductQuantity } from './useProductQuantity';

const usePrModal = () => {
  const searchParams = useSearchParams();
  const productId = searchParams.get('product');
  const { handleInc, handleDec, quantity, handleAddProductToBasket, handleEmpty } = useProductQuantity();
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (productId !== null) {
      (async () => {
        try {
          setLoading(() => true);
          const res = await fetch(`https://backend-y21i.onrender.com/api/v1/products/${productId}`).then((res) => res.json());

          setProduct(res);
          setError(null);
        } catch (e: unknown) {
          console.error(e);
          setProduct(undefined);
          setError('Something went wrong.. Please try again later.');
        } finally {
          setLoading(() => false);
        }
      })();
    }
  }, [productId]);

  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if (productId !== null) {
      setOpen(true);
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    } else {
      setProduct(undefined);
    }
  }, [productId]);

  // useEffect(() => {
  //   if (!isOpen) {
  //     const params = new URLSearchParams(searchParams.toString());
  //     params.delete('product');
  //     params.delete('sortMarkets');
  //
  //     router.replace(pathname + '?' + params.toString(), { scroll: false });
  //     document.documentElement.style.overflow = 'hidden';
  //     document.body.style.overflow = 'hidden';
  //   }
  // }, [isOpen]);

  return { product, loading, handleEmpty, error, isOpen, setOpen, handleInc, handleDec, quantity, handleAddProductToBasket, productId };
};

export { usePrModal };
