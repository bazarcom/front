'use client';

import { SvgGrid } from '@icons/SvgGrid';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { useQueryString } from '@/hooks/useQueryString';
import { cn } from '@/lib/utils';

const FilterGrid = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const isGrid = searchParams.get('pview') !== 'list';

  const { createQueryString } = useQueryString();

  const handleClick = () => {
    router.push(pathname + '?' + createQueryString('pview', 'grid'), { scroll: false });
  };

  return (
    <div
      onClick={handleClick}
      className={cn({
        'grid h-11 w-11 cursor-pointer place-items-center rounded-sm border-[0.5px] border-solid border-[rgba(195,200,201,1)] bg-white': true,
        'rounded border-[rgba(229,104,35,1)] bg-[rgba(242,173,151,0.13)]': isGrid,
      })}>
      <SvgGrid
        className={cn({
          'h-6 w-6 stroke-[rgba(62,78,80,1)]': true,
          'stroke-[rgba(229,104,35,1)]': isGrid,
        })}
      />
    </div>
  );
};

export { FilterGrid };
