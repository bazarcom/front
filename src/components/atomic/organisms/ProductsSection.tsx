'use client';

import { categories } from '@constants/categories';
import { useCategoryState } from '@hooks/useCategoryState';
import { useQueryString } from '@hooks/useQueryString';
import { cn } from '@lib/utils';
import { CategoryItemMobile } from '@molecules/CategoryItemMobile';
import { PCard } from '@molecules/PCard/PCard';
import { Pagination } from '@nextui-org/pagination';
import { CategoryFilter } from '@organisms/CategoryFilter';
import { FilterSection } from '@organisms/FilterSection';
import { usePathname, useRouter } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';

import { Product } from "@/types/product";

type ProductsSectionProps = {
  pView: string | string[] | undefined;
  page: string | string[] | undefined;
  category: string | string[] | undefined;
};

const MIN_PAGE = 1;

const ProductsSection = ({ pView, page, category }: ProductsSectionProps) => {
  const isReversed = pView === 'list';
  const { createQueryString } = useQueryString();
  const router = useRouter();
  const pathname = usePathname();
  const { toggleCategory, isOpen } = useCategoryState('');
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [totalPages, setTotalPages] = useState<number>(0);

  useEffect(() => {
    (async () => {
      try {
        setProducts(() => []);
        setTotalPages(() => 0);
        setLoading(() => true);
        const res = await fetch(`https://bazarcom-backend-api.onrender.com/api/v1/products?page=${page}${category ? `&category=${category}` : ''}`)
          .then((res) => res.json());

        setTotalPages(() => res.totalPages);
        setProducts(() => res.products);
        setError(null);
      } catch(e:unknown) {
        console.error(e);
        setProducts([]);
        setError('Something went wrong.. Please try again later.');
      }
      finally {
        setLoading(() => false);
      }
    })();
  }, [page, category]);

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
            {loading && <div className="text-lg font-semibold">Loading...</div>}
            {error && <div className="text-red-500 text-lg font-semibold">{error}</div>}
            {products && products.length > 0 && products.map((product) => {
              return (
                <PCard
                  key={product["_id"]}
                  product={product}
                  isReverse={isReversed}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-end gap-[5px] xs:flex-row">
        <button
          onClick={() => onChange(+Number(page) - 1)}
          disabled={+Number(page) === +MIN_PAGE}
          className={cn({
            'hidden rounded-md bg-white px-1 py-2.5 text-sm font-semibold transition-all duration-300 xs:block': true,
            'text-[#333]': +Number(page) !== MIN_PAGE,
            'text-[#ccc]': +Number(page) === MIN_PAGE,
          })}>
          Öncəki
        </button>
        <Pagination
          siblings={0}
          loop
          page={Number(page) || 1}
          total={totalPages}
          onChange={onChange}
          color="warning"
          initialPage={1}
          classNames={{
            base: 'gap-[5px] flex justify-end',
            item: 'p-[10px] text-black bg-transparent',
            cursor: 'text-white bg-[#F79219]',
          }}
        />
        <button
          onClick={() => onChange(+Number(page) + 1)}
          disabled={+Number(page) === +totalPages}
          className={cn({
            'hidden rounded-md bg-white px-1 py-2.5 text-sm font-semibold transition-all duration-300 xs:block': true,
            'text-[#333]': +Number(page) !== totalPages,
            'text-[#ccc]': +Number(page) === totalPages,
          })}>
          Növbəti
        </button>
      </div>
    </section>
  );
};

export { ProductsSection };
