'use client';

import { SvgClose } from '@icons/SvgClose';
import { Button } from 'react-aria-components';

import { Logo } from '@/components/atomic/atoms/Logo';
import { useSidebarStore } from '@/store/SidebarStore';

const SidebarHead = () => {
  const closeSidebar = useSidebarStore((state) => state.close);

  return (
    <div className="bg-[rgba(219,255,237,1)] py-[18px]">
      <div className="container flex items-center justify-between">
        <Logo />
        <Button
          onPress={closeSidebar}
          className="focus:outline-none">
          <SvgClose className="h-6 w-6 stroke-[rgba(41,45,50,1)]" />
        </Button>
      </div>
    </div>
  );
};

export { SidebarHead };
