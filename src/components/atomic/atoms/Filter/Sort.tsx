'use client';

import { SvgSort } from '@icons/SvgSort';
import { Button, Dropdown, MenuProps } from 'antd';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Key, useState } from 'react';

import { useQueryString } from '@/hooks/useQueryString';
import { SvgArrow } from '@/icons/SvgArrow';
import { cn } from '@/lib/utils';

const Sort = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const sortType = searchParams.get('sort') || undefined;

  const { createQueryString } = useQueryString();

  const handleMenuClick = ({ key }: { key: Key }) => {
    router.push(pathname + '?' + createQueryString('sort', String(key)), { scroll: false });
    setIsOpen(false);
  };

  const items: MenuProps['items'] = [
    {
      label: 'Artan',
      onClick: () => handleMenuClick({ key: 'desc' }),
      key: 'desc',
    },
    {
      label: 'Azalan',
      onClick: () => handleMenuClick({ key: 'asc' }),
      key: 'asc',
    },
  ];

  return (
    <Dropdown
      menu={{ items }}
      trigger={['click']}
      onOpenChange={setIsOpen}
      open={isOpen}>
      <Button
        className={cn({
          'flex h-[44px] w-fit min-w-[97px] items-center gap-3 rounded border border-solid border-[rgba(195,200,201,1)] bg-white px-3 py-3.5 hover:bg-white focus:bg-white focus:outline-none active:bg-white md:min-w-[145px] md:px-2.5 md:py-2.5':
            true,
        })}
        style={{
          outline: 'none',
          border: '1px solid rgba(195, 200, 201, 1)',
          boxShadow: 'none',
        }}>
        <SvgSort className="h-5 w-5 stroke-[rgba(41,45,50,1)] md:h-6 md:w-6" />
        <div className="text-base font-medium text-[rgba(102,102,102,1)]">{sortType === 'desc' ? 'Artan' : sortType === 'asc' ? 'Azalan' : 'Sırala'}</div>
        <SvgArrow
          className={cn({
            'hidden h-6 w-6 rotate-90 stroke-[rgba(41,45,50,1)] transition duration-300 md:block': true,
            '-rotate-90': isOpen,
          })}
        />
      </Button>
    </Dropdown>
  );
};

export { Sort };
