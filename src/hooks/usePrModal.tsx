import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import { API_ENDPOINTS } from '@/constants/api';
import { logger } from '@/lib/logger';
import { Product } from '@/types/product';

import { useProductQuantity } from './useProductQuantity';

const usePrModal = () => {
  const searchParams = useSearchParams();
  const productId = searchParams.get('product');
  const { handleInc, handleDec, quantity, handleAddProductToBasket, handleEmpty } = useProductQuantity();
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if (productId === null) {
      setProduct(undefined);
      setLoading(false);
      return;
    }

    const abortController = new AbortController();
    const signal = abortController.signal;

    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch(API_ENDPOINTS.PRODUCT_BY_ID(productId), {
          signal,
          cache: 'no-store',
          headers: {
            'Accept': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: Product = await response.json();
        
        if (!signal.aborted) {
          setProduct(data);
        }
      } catch (err: unknown) {
        if (signal.aborted) return;
        
        const errorMessage =
          err instanceof Error
            ? err.message
            : 'Something went wrong.. Please try again later.';
        
        logger.error('Fetch product error:', err);
        setProduct(undefined);
        setError(errorMessage);
      } finally {
        if (!signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchProduct();

    return () => {
      abortController.abort();
    };
  }, [productId]);

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
