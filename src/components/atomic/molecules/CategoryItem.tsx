'use client';

import { CategoryItemTop } from '@atoms/CategoryItemTop';
import { categories } from "@constants/categories";
import { useSelectCategory } from '@hooks/useSelectCategory';
import { cn } from '@lib/utils';
import { useState } from 'react';

const CategoryItem = ({ item }: { item: typeof categories[number] }) => {
  const { setCategory, isCategoryExists } = useSelectCategory();
  const [isOpen, setIsOpen] = useState(false);

  const hasSubCategories = !!item.subCategories;
  const isActive = hasSubCategories
    ? item.subCategories.some(sub => isCategoryExists('category', sub.label))
    : isCategoryExists('category', item.label!);

  const handleMainClick = () => {
    if (hasSubCategories) {
      setIsOpen(!isOpen);
    } else if (item.label) {
      setCategory('category', item.label);
    }
  };

  return (
    <div className={cn(
      'flex flex-col rounded-sm bg-white transition-all',
      {
        'md:flex': true,
        'bg-category-selected-bg': isActive && !hasSubCategories,
      },
    )}>
      <CategoryItemTop
        onClick={handleMainClick}
        icon={item.icon}
        label={item.label || ''}
        title={item.title}
        isActive={isActive}
        hasSubCategories={hasSubCategories}
        isOpen={isOpen}
      />

      {hasSubCategories && (
        <div className={cn(
          'overflow-hidden transition-all duration-300',
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0',
        )}>
          {item.subCategories.map((sub) => (
            <CategoryItemTop
              key={sub.label}
              onClick={() => setCategory('category', sub.label)}
              icon={sub.icon}
              label={sub.label}
              title={sub.title}
              isActive={isCategoryExists('category', sub.label)}
              className="pl-14"
            />
          ))}
        </div>
      )}
    </div>
  );
};

export { CategoryItem };