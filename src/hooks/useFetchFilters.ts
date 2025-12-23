import { useEffect, useState } from 'react';

import { API_ENDPOINTS } from '@/constants/api';
import { logger } from '@/lib/logger';

interface FiltersResponse {
  markets: string[];
  categories: string[];
}

export const useFetchFilters = () => {
  const [markets, setMarkets] = useState<string[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    const fetchFilters = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(API_ENDPOINTS.FILTERS, {
          signal,
          cache: 'no-store',
          headers: {
            Accept: 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: FiltersResponse = await response.json();

        if (!signal.aborted) {
          setMarkets(data.markets);
          setCategories(data.categories);
        }
      } catch (err: unknown) {
        if (signal.aborted) return;

        const errorMessage = err instanceof Error ? err.message : 'Error fetching filters. Please try again later.';

        logger.error('Fetch filters error:', err);
        setError(errorMessage);
      } finally {
        if (!signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchFilters();

    return () => {
      abortController.abort();
    };
  }, []);

  return { markets, categories, loading, error };
};
