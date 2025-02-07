import { cn } from '@lib/utils';
import type { FC } from 'react';

interface CategoryListItemProps {
  item: {
    id: number;
    title: string;
    urlKey: string;
  };
  categoryGroup: string;
  isCategoryExists: (categoryGroup: string, category: string) => boolean;
  setCategory: (categoryGroup: string, category: string) => void;
}

const CategoryListItem: FC<CategoryListItemProps> = ({ item, categoryGroup, isCategoryExists, setCategory }) => {
  const isCategoryActive = isCategoryExists(categoryGroup, item.urlKey);

  return (
    <div
      key={item.id}
      className={cn({
        'flex w-full items-center gap-2 overflow-hidden rounded-md transition-all duration-300': true,
        'bg-category-selected-bg': isCategoryActive,
        'bg-transparent': !isCategoryActive,
      })}>
      <div
        onClick={() => setCategory(categoryGroup, item.urlKey)}
        className={`w-full px-2 py-3 text-left text-base font-medium text-category-label transition-all duration-300 ${isCategoryActive ? 'text-category-selected-text' : 'text-category-text'} cursor-pointer`}>
        {item.title}
      </div>
    </div>
  );
};

export { CategoryListItem };
