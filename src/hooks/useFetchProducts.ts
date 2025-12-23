// hooks/useFetchProducts.ts
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import { API_ENDPOINTS } from '@/constants/api';
import { logger } from '@/lib/logger';
import { Product } from '@/types/product';

interface FetchProductsProps {
  page: number;
  category?: string;
  sortQueryProp?: string | null;
  searchQueryProp?: string | null;
  marketName?: string | null;
  limit?: number;
}

interface ProductsResponse {
  products: Product[];
  currentPage: number;
  totalPages: number;
  totalProducts: number;
}

export const useFetchProducts = ({ page, category, limit = 21, searchQueryProp, sortQueryProp, marketName }: FetchProductsProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalProducts, setTotalProducts] = useState<number>(0);

  const searchParams = useSearchParams();
  const searchQuery = searchQueryProp || searchParams.get('name');
  const sortQuery = sortQueryProp || searchParams.get('sort');
  const marketQuery = marketName || searchParams.get('market_name');

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    const fetchProducts = async () => {
      try {
        setProducts([]);
        setTotalPages(0);
        setLoading(true);

        // URL-i manual olaraq qururuq ki, encoding problemi olmasın
        let urlString = `${API_ENDPOINTS.PRODUCTS}?`;
        const queryParts: string[] = [];

        queryParts.push(`page=${page}`);
        queryParts.push(`limit=${limit}`);

        if (category) {
          queryParts.push(`category=${encodeURIComponent(category)}`);
        }

        if (sortQuery) {
          queryParts.push(`sort=${encodeURIComponent(sortQuery)}`);
        }

        if (searchQuery) {
          queryParts.push(`name=${encodeURIComponent(searchQuery)}`);
        }

        // Market filter-i əlavə et
        if (marketQuery && marketQuery.trim() !== '') {
          const marketValue = marketQuery.trim();
          queryParts.push(`market_name=${encodeURIComponent(marketValue)}`);
        }

        urlString += queryParts.join('&');

        logger.log('Fetching products:', { url: urlString, marketQuery });

        const response = await fetch(urlString, {
          signal,
          cache: 'no-store',
          method: 'GET',
          headers: {
            Accept: 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: ProductsResponse = await response.json();

        if (!signal.aborted) {
          setTotalPages(data.totalPages);
          setCurrentPage(data.currentPage);
          setTotalProducts(data.totalProducts);
          setProducts(data.products);
          setError(null);
        }
      } catch (err: unknown) {
        if (signal.aborted) return;

        const errorMessage = err instanceof Error ? err.message : 'Error fetching data. Please try again later.';

        logger.error('Fetch products error:', err);
        setProducts([]);
        setError(errorMessage);
      } finally {
        if (!signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchProducts();

    return () => abortController.abort();
  }, [page, category, sortQuery, searchQuery, marketQuery, limit]);

  return { products, error, loading, totalPages, currentPage, totalProducts };
};
