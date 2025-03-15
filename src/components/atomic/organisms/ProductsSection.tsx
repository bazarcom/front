'use client';

import { categories } from '@constants/categories';
import { useQueryString } from '@hooks/useQueryString';
import { cn } from '@lib/utils';
import { CategoryItemMobile } from '@molecules/CategoryItemMobile';
import { PCard } from '@molecules/PCard/PCard';
import { ProductsLoadingState } from '@molecules/ProductsLoadingState';
import { Pagination } from '@nextui-org/pagination';
import { CategoryFilter } from '@organisms/CategoryFilter';
import { FilterSection } from '@organisms/FilterSection';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';

import { Product } from '@/types/product';

type ProductsSectionProps = {
  pView: string | string[] | undefined;
  page: string | string[] | undefined;
  category: string | string[] | undefined;
};

const ProductsSection = ({ pView, page, category }: ProductsSectionProps) => {
  const isReversed = pView === 'list';
  const { createQueryString } = useQueryString();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get('name');
  const sortQuery = searchParams.get('sort');
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [totalPages, setTotalPages] = useState<number>(0);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    const fetchProducts = async () => {
      try {
        setProducts([]);
        setTotalPages(0);
        setLoading(true);

        const url = new URL('https://bazarcom-backend-api.onrender.com/api/v1/products');
        const params = new URLSearchParams();
        params.append('page', page as string);
        params.append('limit', '21');
        // eslint-disable-next-line no-unused-expressions,@typescript-eslint/no-unused-expressions
        category ? params.append('category', category as string) : null;
        // eslint-disable-next-line no-unused-expressions,@typescript-eslint/no-unused-expressions
        sortQuery ? params.append('sort', sortQuery as string) : null;
        // eslint-disable-next-line no-unused-expressions,@typescript-eslint/no-unused-expressions
        searchQuery ? params.append('name', searchQuery as string) : null;

        url.search = params.toString();

        const response = await fetch(url.toString(), { signal });

        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

        const data = await response.json();

        // Не обновляем состояние если запрос был отменен
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

    // Функция очистки для отмены запроса при размонтировании или новом запросе
    return () => {
      abortController.abort();
    };
  }, [page, category, sortQuery, searchQuery]);

  const onChange = (page: number) => {
    const searchParams = createQueryString('page', String(page));
    router.push(pathname + '?' + searchParams, { scroll: false });
  };

  return (
    <section className="flex flex-col gap-9 md:gap-[70px]">
      <div className="mt-9 flex flex-col md:mt-[124px] md:flex-row md:gap-[36px]">
        <div className="flex items-center gap-2.5 overflow-scroll scrollbar-hide md:hidden md:min-w-[375px]">
          {categories.map((category) => (
            <CategoryItemMobile
              key={category.label}
              icon={category.icon}
              title={category.title}
              label={category.label}
            />
          ))}
        </div>
        <Suspense fallback="Loading...">
          <CategoryFilter />
        </Suspense>
        <div className="flex w-full flex-col gap-6 md:gap-[30px]">
          <FilterSection />
          {/*For now, it's inside page, but in future it will be in his own component */}
          <div
            className={cn({
              'grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3': true,
              'grid-cols-1 md:grid-cols-1 lg:grid-cols-1': isReversed,
            })}>
            <ProductsLoadingState
              loading={loading}
              error={error}
            />
            {products &&
              products.length > 0 &&
              products.map((product) => {
                return (
                  <PCard
                    key={product['_id']}
                    product={product}
                    isReverse={isReversed}
                  />
                );
              })}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-end gap-[5px] xs:flex-row">
        {/*<button*/}
        {/*  onClick={() => onChange(+Number(page) - 1)}*/}
        {/*  disabled={+Number(page) === +MIN_PAGE}*/}
        {/*  className={cn({*/}
        {/*    'hidden rounded-md bg-white px-1 py-2.5 text-sm font-semibold transition-all duration-300 xs:block': true,*/}
        {/*    'text-[#333]': +Number(page) !== MIN_PAGE,*/}
        {/*    'text-[#ccc]': +Number(page) === MIN_PAGE,*/}
        {/*  })}>*/}
        {/*  Öncəki*/}
        {/*</button>*/}
        {totalPages > 1 && (
          <Pagination
            siblings={0}
            loop
            page={Number(page) || 1}
            total={totalPages}
            onChange={onChange}
            initialPage={1}
            color="warning"
            showControls
            classNames={{
              base: 'gap-[5px] flex justify-end',
              item: 'p-[10px] text-black bg-transparent !data-[active=true]:bg-black',
              cursor: 'text-white bg-[#F79219]',
            }}
          />
        )}
        {/*<button*/}
        {/*  onClick={() => onChange(+Number(page) + 1)}*/}
        {/*  disabled={+Number(page) === +totalPages}*/}
        {/*  className={cn({*/}
        {/*    'hidden rounded-md bg-white px-1 py-2.5 text-sm font-semibold transition-all duration-300 xs:block': true,*/}
        {/*    'text-[#333]': +Number(page) !== totalPages,*/}
        {/*    'text-[#ccc]': +Number(page) === totalPages,*/}
        {/*  })}>*/}
        {/*  Növbəti*/}
        {/*</button>*/}
      </div>
    </section>
  );
};

export { ProductsSection };
