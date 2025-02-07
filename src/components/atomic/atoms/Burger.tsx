'use client';

import { SvgBurger } from '@icons/SvgBurger';
import { Button } from 'react-aria-components';

import { useSidebarStore } from '@/store/SidebarStore';

const Burger = () => {
  const openSidebar = useSidebarStore((state) => state.open);
  return (
    <Button
      onPress={openSidebar}
      className="focus:outline-none md:hidden">
      <SvgBurger className="h-6 w-6 stroke-[rgba(56,70,72,1)]" />
    </Button>
  );
};

export { Burger };
