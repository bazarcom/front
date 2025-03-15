'use client';

import { SvgSort } from '@icons/SvgSort';
import { Button } from 'antd';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { FocusEvent, Key, useState } from 'react';

import { useQueryString } from '@/hooks/useQueryString';
import { SvgArrow } from '@/icons/SvgArrow';
import { cn } from '@/lib/utils';

const items = [
  {
    label: 'Artan',
    key: 'asc',
  },
  {
    label: 'Azalan',
    key: 'desc',
  },
];

const MiniSort = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const sortType = searchParams.get('sortMarkets') || undefined;

  const { createQueryString } = useQueryString();

  const handleMenuClick = ({ key }: { key: Key }) => {
    router.push(pathname + '?' + createQueryString('sortMarkets', String(key)), { scroll: false });
    setIsOpen(false);
  };

  const handleBlur = (e: FocusEvent<HTMLDivElement, Element>) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setIsOpen(false);
    }
  };

  return (
    <div
      className="relative"
      tabIndex={-1}
      onBlur={handleBlur}>
      <Button
        onClick={() => setIsOpen((prev) => !prev)}
        className={cn({
          'flex h-fit w-fit items-center gap-3 rounded-md border border-solid border-[rgba(195,200,201,1)] bg-white px-[11px] py-1.5 hover:bg-white focus:bg-white focus:outline-none active:bg-white':
            true,
        })}
        style={{
          outline: 'none',
          border: '1px solid rgba(195, 200, 201, 1) !important',
          boxShadow: 'none',
        }}>
        <SvgSort className="h-4 w-4 stroke-[rgba(41,45,50,1)]" />
        <div className="text-[13px] font-medium text-[rgba(102,102,102,1)]">{sortType === 'desc' ? 'Azalan' : sortType === 'asc' ? 'Artan' : 'Sırala'}</div>
        <SvgArrow
          className={cn({
            'block h-4 w-4 rotate-90 stroke-[rgba(41,45,50,1)] transition duration-300': true,
            '-rotate-90': isOpen,
          })}
        />
      </Button>
      {isOpen && (
        <div className="absolute left-0 top-full flex w-full translate-y-2 flex-col gap-0.5 rounded border border-slate-200 bg-white p-1">
          {items.map((item) => {
            return (
              <div
                onClick={() => {
                  handleMenuClick({ key: item.key });
                  setIsOpen(false);
                }}
                key={item.key}
                className="cursor-pointer rounded border-none px-2 py-1 text-sm shadow-none hover:bg-slate-50 focus:outline-none">
                {item.label}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export { MiniSort };
