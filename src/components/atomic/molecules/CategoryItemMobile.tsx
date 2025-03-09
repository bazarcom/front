'use client';

import { CategoryItemTop } from '@atoms/CategoryItemTop';
import { useSelectCategory } from '@hooks/useSelectCategory';
import { SvgArrowDown } from '@icons/SvgArrowDown';
import { SvgPlus } from '@icons/SvgPlus';
import { cn } from "@lib/utils";
import { CategoryListItem } from '@molecules/CategoryListItem';
import { Button, Dropdown } from 'antd';
import Image from "next/image";
import { ReactNode, useState } from 'react';

// Temporary creating here. After adding API, we can remove type from here.
type SubMenu = {
  title: string;
  id: number;
  urlKey: string;
};

interface SubMenuProps {
  subMenu: SubMenu[];
}

interface CategoryIconProps {
  icon: string;
  label: string;
}

interface CategoryItemMobileProps extends SubMenuProps, CategoryIconProps {
  title?: string;
}

const CategoryItemMobile = ({ label, title, icon }: CategoryItemMobileProps) => {
  const { setCategory, isCategoryExists } = useSelectCategory();

  return <button
    onClick={() => setCategory('category', label)}
    className={cn({
      'rounded-sm px-5 py-3 bg-white': true,
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
  </button>;

};

export { CategoryItemMobile };
