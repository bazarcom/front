'use client';

import { CategoryItemTop } from '@atoms/CategoryItemTop';
import { useSelectCategory } from '@hooks/useSelectCategory';

interface CategoryIconProps {
  icon: string;
  label: string;
}

interface CategoryItemProps extends CategoryIconProps {
  title?: string;
}

// const CATEGORY_MAX_HEIGHT = 'max-h-[500px] mt-[7px]';
// const CATEGORY_MIN_HEIGHT = 'max-h-[0px]';

const CategoryItem = ({ icon, title, label }: CategoryItemProps) => {
  const { setCategory, isCategoryExists } = useSelectCategory();

  return (
    <div className={`hidden flex-col rounded-sm bg-white p-4 transition-all duration-300 md:flex`}>
      {/*{title && <h3 className="color-category-name mb-[23px] text-lg font-semibold">{title}</h3>}*/}
      <CategoryItemTop
        onClick={() => setCategory('category', label)}
        icon={icon}
        label={label}
        title={title}
        isActive={isCategoryExists('category', label)}
      />
    </div>
  );
};

export { CategoryItem };
