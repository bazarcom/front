'use client';

import { categories } from "@constants/categories";
import { useSelectCategory } from '@hooks/useSelectCategory';
import { cn } from '@lib/utils';
import { Dropdown, Menu } from "antd";
import Image from 'next/image';

const CategoryItemMobile = ({ item }: { item: typeof categories[number] }) => {
  const { setCategory, isCategoryExists } = useSelectCategory();

  const hasSubCategories = !!item.subCategories;

  const handleCategoryClick = () => {
    if (!hasSubCategories && item.label) {
      setCategory('category', item.label);
    }
  };

  const isActive = hasSubCategories
    ? item.subCategories?.some(sub => isCategoryExists('category', sub.label))
    : isCategoryExists('category', item.label!);

  const menu = hasSubCategories ? (
    <Menu>
      {item.subCategories?.map((sub) => (
        <Menu.Item
          key={sub.label}
          onClick={() => setCategory('category', sub.label)}
          className={cn("flex items-center gap-3 px-4 py-2", {
            'bg-category-selected-bg': isCategoryExists('category', sub.label),
            'hover:bg-gray-50': !isCategoryExists('category', sub.label),
          })}
        >
          <Image
            src={sub.icon}
            alt={sub.label}
            width={20}
            height={20}
            className="h-5 w-5 object-contain"
          />
          <span className="text-sm font-medium">{sub.title}</span>
        </Menu.Item>
      ))}
    </Menu>
  ) : null;

  if(!hasSubCategories) {
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
          <div className="flex h-[30px] w-[30px] items-center justify-center rounded-md bg-category-icon p-1">
            <Image
              className="h-full w-full object-cover"
              src={item.icon}
              alt={item.label || item.title}
              width={21}
              height={21}
            />
          </div>
          <p className="text-base font-semibold text-category-label">
            {item.title}
          </p>
        </div>
      </button>
    );
  }

  return (
    <Dropdown
      // @ts-expect-error Overlay is deprecated in antd v5
      overlay={menu}
      placement="bottomLeft"
      trigger={['hover', 'click']}
      disabled={!hasSubCategories}
    >
      <button
        className={cn(
          'min-w-[fit-content] rounded-sm bg-white px-5 py-3 transition-colors',
          {
            'bg-category-selected-bg': isActive,
            'hover:bg-gray-50': !isActive,
          },
        )}
      >
        <div className="flex items-center gap-2.5">
          <div className="flex h-[30px] w-[30px] items-center justify-center rounded-md bg-category-icon p-1">
            <Image
              className="h-full w-full object-cover"
              src={item.icon}
              alt={item.label || item.title}
              width={21}
              height={21}
            />
          </div>
          <p className="text-base font-semibold text-category-label">
            {item.title}
          </p>
        </div>
      </button>
    </Dropdown>
  );
};

export { CategoryItemMobile };
