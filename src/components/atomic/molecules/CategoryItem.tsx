'use client';

import { CategoryItemTop } from '@atoms/CategoryItemTop';
import { useSelectCategory } from '@hooks/useSelectCategory';
import { SvgArrowDown } from '@icons/SvgArrowDown';
import { SvgPlus } from '@icons/SvgPlus';
import { CategoryListItem } from '@molecules/CategoryListItem';
import { ReactNode } from 'react';

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

interface CategoryItemProps extends SubMenuProps, CategoryIconProps {
  isOpen?: boolean;
  title?: string;
  onClick: () => void;
  iconComponent?: ReactNode;
  mobileIcon?: ReactNode;
  categoryGroup: string;
}

const CATEGORY_MAX_HEIGHT = 'max-h-[500px] mt-[7px]';
const CATEGORY_MIN_HEIGHT = 'max-h-[0px]';

const CategoryItem = ({ icon, title, isOpen, categoryGroup, iconComponent = <SvgPlus />, mobileIcon = <SvgArrowDown />, onClick, subMenu, label }: CategoryItemProps) => {
  const { setCategory, isCategoryExists } = useSelectCategory();

  return (
    <div className={`hidden flex-col rounded-sm bg-white p-4 transition-all duration-300 md:flex`}>
      {title && <h3 className="color-category-name mb-[23px] text-lg font-semibold">{title}</h3>}
      <CategoryItemTop
        icon={icon}
        label={label}
        title={title}
        isOpen={isOpen}
        mobileIcon={mobileIcon}
        iconComponent={iconComponent}
        onClick={onClick}
      />
      <div className={`ml-[14px] hidden gap-5 transition-all duration-300 md:flex ${isOpen ? CATEGORY_MAX_HEIGHT : CATEGORY_MIN_HEIGHT} overflow-hidden`}>
        <span className="w-[1px] border border-solid border-category-divider"></span>
        <ul className="flex w-full flex-col gap-2">
          {subMenu.map((item) => (
            <li key={item.id}>
              <CategoryListItem
                key={item.id}
                item={item}
                categoryGroup={categoryGroup}
                isCategoryExists={isCategoryExists}
                setCategory={setCategory}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export { CategoryItem };
