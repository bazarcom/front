import Link from 'next/link';

import { SvgBag } from '@/icons/SvgBag';

const Nav = () => {
  return (
    <div className="hidden items-center justify-end gap-10 md:flex">
      <Link
        className="flex items-center gap-1.5 text-lg font-semibold text-[rgba(62,78,80,1)]"
        href="/basket">
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

export { Nav };
