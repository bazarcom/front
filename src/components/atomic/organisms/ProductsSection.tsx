'use client';

import { categories } from '@constants/categories';
import { useFetchProducts } from '@hooks/useFetchProducts';
import { useQueryString } from '@hooks/useQueryString';
import { cn } from '@lib/utils';
import { CategoryItemMobile } from '@molecules/CategoryItemMobile';
import { PCard } from '@molecules/PCard/PCard';
import { ProductsLoadingState } from '@molecules/ProductsLoadingState';
import { Pagination } from '@nextui-org/pagination';
import { CategoryFilter } from '@organisms/CategoryFilter';
import { FilterSection } from '@organisms/FilterSection';
import { usePathname, useRouter } from 'next/navigation';
import { Suspense } from 'react';

type ProductsSectionProps = {
  pView: string | string[] | undefined;
  page: string | string[] | undefined;
  category: string | undefined;
};

const ProductsSection = ({ pView, page, category }: ProductsSectionProps) => {
  const isReversed = pView === 'list';
  const { createQueryString } = useQueryString();
  const router = useRouter();
  const pathname = usePathname();

  const { products, error, loading, totalPages } = useFetchProducts({
    page: page ? +page : 1,
    category: category,
  });

  const onChange = (page: number) => {
    const searchParams = createQueryString('page', String(page));
    router.push(pathname + '?' + searchParams, { scroll: false });
    // Scroll to the top of the products section
    const productsSection = document.querySelector('.products-section');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="products-section flex flex-col gap-9 md:gap-[70px]">
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
            {!loading && products && products.length === 0 && (
              <div className="col-span-full flex flex-col items-center justify-center space-y-6 rounded-xl bg-white py-12">
                <svg
                  className="h-32 w-32 text-gray-300/80"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <div className="space-y-2 text-center">
                  <h3 className="text-2xl font-bold tracking-tight text-gray-900">Məhsul tapılmadı</h3>
                  <p className="mx-auto max-w-md text-gray-500">Axtarışınıza uyğun heç bir məhsul tapılmadı. Zəhmət olmasa, filtr parametrlərini dəyişdirin və ya başqa kateqoriya seçin.</p>
                </div>
                <button
                  onClick={() => {
                    const params = new URLSearchParams();
                    params.set('page', '1');
                    router.push(`${pathname}?${params.toString()}`, { scroll: false });
                  }}
                  className="mt-4 flex items-center gap-2 rounded-lg bg-[#F79219] px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-[#E68317]">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                  Filtrləri sıfırla
                </button>
              </div>
            )}
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
