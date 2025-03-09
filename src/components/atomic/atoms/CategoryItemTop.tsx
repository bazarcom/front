import { cn } from '@lib/utils';
import Image from 'next/image';
import type { HTMLAttributes, ReactNode } from 'react';

interface CategoryItemTopProps extends HTMLAttributes<HTMLButtonElement> {
  icon: string;
  label: string;
  title?: string;
  mobileIcon?: ReactNode;
  isActive: boolean;
}

const CategoryItemTop = ({ icon, isActive, label, title, onClick, ...props }: CategoryItemTopProps) => {
  return (
    <button
      {...props}
      onClick={onClick}
      className={cn({
        'flex w-full items-center justify-between gap-14 md:gap-3 p-2': true,
        'cursor-default': title,
        'cursor-pointer': !title,
        'bg-category-selected-bg': isActive,
      })}>
      {/*Just simple image component cuz we needn't change colors of these svgs*/}
      <div className="flex items-center md:gap-[14px]">
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

export { CategoryItemTop };
