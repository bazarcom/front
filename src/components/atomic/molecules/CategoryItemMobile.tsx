'use client';

import { CategoryItemTop } from '@atoms/CategoryItemTop';
import { useSelectCategory } from '@hooks/useSelectCategory';
import { SvgArrowDown } from '@icons/SvgArrowDown';
import { SvgPlus } from '@icons/SvgPlus';
import { CategoryListItem } from '@molecules/CategoryListItem';
import { Button, Dropdown } from 'antd';
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
  isOpen?: boolean;
  title?: string;
  onClick: () => void;
  iconComponent?: ReactNode;
  mobileIcon?: ReactNode;
  categoryGroup: string;
}

const CategoryItemMobile = ({ icon, categoryGroup, iconComponent = <SvgPlus />, mobileIcon = <SvgArrowDown />, subMenu, label }: CategoryItemMobileProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { setCategory, isCategoryExists } = useSelectCategory();

  const menuItems = subMenu.map((category) => ({
    key: category.id,
    label: (
      <CategoryListItem
        key={category.id}
        categoryGroup={categoryGroup}
        isCategoryExists={isCategoryExists}
        setCategory={setCategory}
        item={category}
      />
    ),
  }));

  return (
    <Dropdown
      className="rounded-sm border border-solid border-category-border hover:border-category-border"
      menu={{ items: menuItems }}
      trigger={['click']}
      onOpenChange={setIsOpen}>
      <Button
        style={{
          boxShadow: 'none', // Убирает тень
          transition: 'none', // Убирает переходы и анимации
          backgroundColor: 'white', // Устанавливает постоянный цвет фона
        }}
        type="text"
        className="w-full px-[5px] py-[20px] hover:border-category-border md:hidden">
        <CategoryItemTop
          isOpen={isOpen}
          icon={icon}
          label={label}
          mobileIcon={mobileIcon}
          iconComponent={iconComponent}
          onClick={() => {
            return;
          }}
        />
      </Button>
    </Dropdown>
  );
};

export { CategoryItemMobile };
