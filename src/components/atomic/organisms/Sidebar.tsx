'use client';

import { SidebarHead } from '@molecules/SidebarHead';
import Link from 'next/link';

import { navs } from '@/constants/nav';
import { SvgArrow } from '@/icons/SvgArrow';
import { cn } from '@/lib/utils';
import { useSidebarStore } from '@/store/SidebarStore';

const Sidebar = () => {
  const isOpen = useSidebarStore((state) => state.isOpen);
  const closeSidebar = useSidebarStore((state) => state.close);

  return (
    <div
      className={cn({
        'fixed left-0 top-0 z-[9999] h-screen w-full -translate-x-full bg-white transition duration-200 will-change-transform': true,
        'translate-x-0': isOpen,
      })}>
      <SidebarHead />
      {navs.map((nav) => {
        return (
          <Link
            key={nav.path}
            href={nav.path}
            onClick={closeSidebar}
            className="container block">
            <div className="flex items-center justify-between border-b border-[rgba(244,244,244,1)] py-[18px]">
              <div className="text-2xl font-medium text-[rgba(31,35,68,1)]">{nav.title}</div>
              <SvgArrow className="h-6 w-6 stroke-[rgba(41,45,50,1)]" />
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export { Sidebar };
