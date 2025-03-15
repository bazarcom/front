'use client';

import { useSelectCategory } from '@hooks/useSelectCategory';
import { cn } from '@lib/utils';
import Image from 'next/image';

interface CategoryIconProps {
  icon: string;
  label: string;
}

interface CategoryItemMobileProps extends CategoryIconProps {
  title?: string;
}

const CategoryItemMobile = ({ label, title, icon }: CategoryItemMobileProps) => {
  const { setCategory, isCategoryExists } = useSelectCategory();

  return (
    <button
      onClick={() => setCategory('category', label)}
      className={cn({
        'min-w-[fit-content] rounded-sm bg-white px-5 py-3': true,
        'bg-category-selected-bg': isCategoryExists('category', label),
      })}>
      <div className="flex items-center gap-2.5">
        <div className={`flex h-[30px] w-[30px] items-center justify-center rounded-md bg-category-icon p-1`}>
          <Image
            className="h-full w-full object-cover"
            src={icon}
            alt={label}
            width={21}
            height={21}
          />
        </div>
        <p className="text-base font-semibold text-category-label">{title}</p>
      </div>
    </button>
  );
};

export { CategoryItemMobile };
