'use client';

import { categories } from '@constants/categories';
import { useCategoryState } from '@hooks/useCategoryState';

import { CategoryItem } from '@/components/atomic/molecules/CategoryItem';

const CategoryFilter = () => {
  const { toggleCategory, isOpen } = useCategoryState('');

  return (
    <aside className="flex gap-2.5 overflow-auto md:min-w-[321px] md:flex-col">
      {categories.map((category) => (
        <CategoryItem
          categoryGroup={category.categoryGroup}
          key={category.label}
          icon={category.icon}
          title={category.title}
          label={category.label}
          subMenu={category.subMenu}
          isOpen={category.title ? true : category.label === isOpen}
          onClick={() => toggleCategory(category.label)}
        />
      ))}
    </aside>
  );
};

export { CategoryFilter };
