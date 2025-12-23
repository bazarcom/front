'use client';

import { CategoryItem } from '@/components/atomic/molecules/CategoryItem';
import { useFetchFilters } from '@hooks/useFetchFilters';

const CategoryFilter = () => {
  const { categories, loading, error } = useFetchFilters();

  if (loading) {
    return (
      <aside className="hidden gap-2.5 md:flex md:min-w-[321px] md:flex-col">
        {Array(10)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className="flex flex-col rounded-sm bg-white transition-all">
              <div className="flex w-full items-center justify-between gap-14 p-2 transition-colors md:gap-3">
                <div className="flex items-center md:gap-[14px]">
                  {/* Icon skeleton */}
                  <div className="flex h-[30px] w-[30px] animate-pulse items-center justify-center rounded-md bg-gray-200 p-1" />
                  {/* Title skeleton */}
                  <div className="h-5 w-32 animate-pulse rounded-md bg-gray-200" />
                </div>
              </div>
            </div>
          ))}
      </aside>
    );
  }

  if (error || !categories || categories.length === 0) {
    return (
      <aside className="hidden gap-2.5 md:flex md:min-w-[321px] md:flex-col">
        <div className="text-sm text-red-500">{error || 'Kateqoriyalar tapılmadı'}</div>
      </aside>
    );
  }

  return (
    <aside className="hidden gap-2.5 md:flex md:min-w-[321px] md:flex-col">
      {categories.map((category) => (
        <CategoryItem
          key={category}
          categoryName={category}
        />
      ))}
    </aside>
  );
};

export { CategoryFilter };
