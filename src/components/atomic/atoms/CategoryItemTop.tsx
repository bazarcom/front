import { cn } from '@lib/utils';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import type { HTMLAttributes, ReactNode } from 'react';

interface CategoryItemTopProps extends HTMLAttributes<HTMLButtonElement> {
  icon?: string;
  label: string;
  title?: string;
  mobileIcon?: ReactNode;
  isActive: boolean;
  hasSubCategories?: boolean;
  isOpen?: boolean;
}

const CategoryItemTop = ({
  icon,
  isActive,
  label,
  title,
  onClick,
  hasSubCategories,
  isOpen,
  className,
  ...props
}: CategoryItemTopProps) => {
  return (
    <button
      {...props}
      onClick={onClick}
      className={cn(
        'flex w-full items-center justify-between gap-14 p-2 transition-colors md:gap-3',
        {
          'bg-category-selected-bg': isActive,
          'hover:bg-gray-50': !isActive,
        },
        className,
      )}
    >
      <div className="flex items-center md:gap-[14px]">
        {icon && (
          <div className="flex h-[30px] w-[30px] items-center justify-center rounded-md bg-category-icon p-1">
            <Image
              className="h-full w-full object-contain"
              src={icon}
              alt={label}
              width={25}
              height={25}
            />
          </div>
        )}
        <p className="text-base font-semibold text-category-label">{title || label}</p>
      </div>

      {hasSubCategories && (
        <ChevronDown className={cn(
          'h-5 w-5 transition-transform',
          isOpen ? 'rotate-180' : 'rotate-0',
        )} />
      )}
    </button>
  );
};

export { CategoryItemTop };
