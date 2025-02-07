'use client';

import { Button } from 'react-aria-components';

import { SvgSearch } from '@/icons/SvgSearch';

const Search = () => {
  return (
    <Button className="focus:outline-none">
      <SvgSearch className="h-4 w-4 stroke-[rgba(109,117,143,1)] md:hidden" />
    </Button>
  );
};

export { Search };
