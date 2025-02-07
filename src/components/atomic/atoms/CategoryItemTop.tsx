import { cn } from '@lib/utils';
import Image from 'next/image';
import type { HTMLAttributes, ReactNode } from 'react';

interface CategoryItemTopProps extends HTMLAttributes<HTMLDivElement> {
  icon: string;
  label: string;
  title?: string;
  isOpen?: boolean;
  iconComponent?: ReactNode;
  mobileIcon?: ReactNode;
}

const CategoryItemTop = ({ icon, iconComponent, label, title, isOpen, onClick, mobileIcon, ...props }: CategoryItemTopProps) => {
  return (
    <div
      {...props}
      onClick={onClick}
      className={cn({
        'flex w-full items-center justify-between gap-14 md:gap-3': true,
        'cursor-default': title,
        'cursor-pointer': !title,
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
        <p className="text-base font-semibold text-category-label">{label}</p>
      </div>
      {!title && (
        <>
          <div className="hidden h-[22px] w-[22px] md:block">{iconComponent}</div>
          <div className={`block h-[20px] w-[20px] transition-all duration-300 md:hidden ${isOpen ? '-rotate-180' : 'rotate-0'}`}>{mobileIcon}</div>
        </>
      )}
    </div>
  );
};

export { CategoryItemTop };
