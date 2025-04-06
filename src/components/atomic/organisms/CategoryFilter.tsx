'use client';

import { categories } from '@constants/categories';

// import { useCategoryState } from '@hooks/useCategoryState';
import { CategoryItem } from '@/components/atomic/molecules/CategoryItem';

const CategoryFilter = () => {
  return (
    <aside className="flex gap-2.5 max-h-[680px] scrollbar-hide overflow-auto md:min-w-[321px] md:flex-col">
      {categories.map((category) => (
        <CategoryItem
          key={category.label}
          icon={category.icon}
          title={category.title}
          label={category.label}
        />
      ))}
    </aside>
  );
};

export { CategoryFilter };
