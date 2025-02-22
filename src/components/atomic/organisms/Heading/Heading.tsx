import { Burger } from '@/components/atomic/atoms/Burger';
import { Logo } from '@/components/atomic/atoms/Logo';

const DynamicNav = dynamic(() => import('@/components/atomic/molecules/Nav'), { ssr: false });

import dynamic from "next/dynamic";

import { Search } from './Search';

const Heading = () => {
  return (
    <div className="sticky left-0 top-0 z-[9998] bg-white py-4 md:py-3">
      <div className="container flex items-center justify-between md:grid md:grid-cols-2">
        <Burger />
        <Logo />
        <DynamicNav />
        <Search />
      </div>
    </div>
  );
};

export { Heading };
