// hooks/useFetchProducts.ts
import { useSearchParams } from "next/navigation"; // Убедитесь в правильном пути
import { useEffect,useState } from 'react';

import { Product } from '@/types/product';

interface FetchProductsProps {
    page: number;
    category?: string;
    sortQueryProp?: string | null;
    searchQueryProp?: string | null;
    limit?: number;
}

export const useFetchProducts = ({
  page,
  category,
  limit = 21,
  searchQueryProp,
  sortQueryProp,
}: FetchProductsProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [totalPages, setTotalPages] = useState<number>(0);
  const searchParams = useSearchParams();
  const searchQuery = searchQueryProp || searchParams.get('name');
  const sortQuery = sortQueryProp || searchParams.get('sortMarkets');

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    const fetchProducts = async () => {
      try {
        setProducts([]);
        setTotalPages(0);
        setLoading(true);

        const url = new URL('https://backend-y21i.onrender.com/api/v1/products');
        const params = new URLSearchParams({
          page: page.toString(),
          limit: limit.toString(),
          ...(category && { category }),
          ...(sortQuery && { sort: sortQuery }),
          ...(searchQuery && { name: searchQuery }),
        });

        url.search = params.toString();

        const response = await fetch(url.toString(), { signal });

        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

        const data = await response.json();

        if (!signal.aborted) {
          setTotalPages(data.totalPages);
          setProducts(data.products);
          setError(null);
        }
      } catch (error) {
        console.error('Fetch error:', error);
        setProducts([]);
        if (!signal.aborted) {
          setError('Error fetching data. Please try again later.');
        }
      } finally {
        if (!signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchProducts();

    return () => abortController.abort();
  }, [page, category, sortQuery, searchQuery, limit]);

  return { products, error, loading, totalPages };
};