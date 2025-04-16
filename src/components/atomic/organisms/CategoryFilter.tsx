'use client';

import { categories } from '@constants/categories';

// import { useCategoryState } from '@hooks/useCategoryState';
import { CategoryItem } from '@/components/atomic/molecules/CategoryItem';

const CategoryFilter = () => {
  return (
    <aside className="hidden gap-2.5 md:min-w-[321px] md:flex md:flex-col">
      {categories.map((category) => (
        <CategoryItem
          key={category.label}
          item={category}
        />
      ))}
    </aside>
  );
};

export { CategoryFilter };
