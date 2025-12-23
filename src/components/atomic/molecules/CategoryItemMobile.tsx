'use client';

import { getCategoryIcon } from '@constants/categoryIcons';
import { useSelectCategory } from '@hooks/useSelectCategory';
import { cn, formatCategoryName } from '@lib/utils';
import Image from 'next/image';

const CategoryItemMobile = ({ categoryName }: { categoryName: string }) => {
  const { setCategory, isCategoryExists } = useSelectCategory();
  const isActive = isCategoryExists('category', categoryName);
  const formattedName = formatCategoryName(categoryName);
  const icon = getCategoryIcon(categoryName);

  const handleCategoryClick = () => {
    setCategory('category', categoryName);
  };

  return (
    <button
      onClick={handleCategoryClick}
      className={cn(
        'min-w-[fit-content] rounded-sm bg-white px-5 py-3 transition-colors',
        {
          'bg-category-selected-bg': isActive,
          'hover:bg-gray-50': !isActive,
        },
      )}
    >
      <div className="flex items-center gap-2.5">
        {icon && (
          <div className="flex h-[30px] w-[30px] items-center justify-center rounded-md bg-category-icon p-1">
            <Image
              className="h-full w-full object-contain"
              src={icon}
              alt={categoryName}
              width={21}
              height={21}
            />
          </div>
        )}
        <p className="text-base font-semibold text-category-label">
          {formattedName}
        </p>
      </div>
    </button>
  );
};

export { CategoryItemMobile };
