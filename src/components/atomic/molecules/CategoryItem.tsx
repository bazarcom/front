'use client';

import { CategoryItemTop } from '@atoms/CategoryItemTop';
import { getCategoryIcon } from '@constants/categoryIcons';
import { useSelectCategory } from '@hooks/useSelectCategory';
import { cn, formatCategoryName } from '@lib/utils';

const CategoryItem = ({ categoryName }: { categoryName: string }) => {
  const { setCategory, isCategoryExists } = useSelectCategory();
  const isActive = isCategoryExists('category', categoryName);
  const formattedName = formatCategoryName(categoryName);
  const icon = getCategoryIcon(categoryName);

  const handleMainClick = () => {
    setCategory('category', categoryName);
  };

  return (
    <div className={cn(
      'flex flex-col rounded-sm bg-white transition-all',
      {
        'md:flex': true,
        'bg-category-selected-bg': isActive,
      },
    )}>
      <CategoryItemTop
        onClick={handleMainClick}
        icon={icon}
        label={categoryName}
        title={formattedName}
        isActive={isActive}
        hasSubCategories={false}
        isOpen={false}
      />
    </div>
  );
};

export { CategoryItem };