'use client';

import { useBasket } from "@hooks/useBasket";
import Link from 'next/link';

import { SvgBag } from '@/icons/SvgBag';

const Nav = () => {
  const { allBasketProducts } = useBasket();

  return (
    <div className="hidden items-center justify-end gap-10 md:flex">
      <Link
        className="relative flex items-center gap-1.5 text-lg font-semibold text-[rgba(62,78,80,1)]"
        href="/basket">
        {allBasketProducts.length > 0 && <span className="absolute left-[-10px] top-[-2px] rounded-full bg-search px-[9px] py-[4px] text-xs text-white">{allBasketProducts.length}</span>}
        <SvgBag className="h-6 w-6 stroke-[rgba(62,78,80,1)]" />
        Səbətim
      </Link>
      <Link
        className="text-lg font-semibold text-[rgba(62,78,80,1)]"
        href="/about">
        Haqqımızda
      </Link>
    </div>
  );
};

export default Nav;
