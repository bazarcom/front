'use client';

import { SvgSearch } from '@icons/SvgSearch';
import { Button, Input, TextField } from 'react-aria-components';

const ProductsFormInner = () => {
  return (
    <>
      <TextField
        aria-label="search"
        className="flex items-center gap-2.5">
        <Input
          placeholder="Məhsul axtar..."
          className="h-[50px] w-full rounded-md bg-white px-4 shadow-heroInput sm:w-[374px]"
        />
        <Button className="rounded-md bg-search p-[16px]">
          <SvgSearch
            width={20}
            height={20}
            className="stroke-[#F7FFFA]"
          />
        </Button>
      </TextField>
    </>
  );
};

export { ProductsFormInner };
