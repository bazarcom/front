'use client';

import { useQueryString } from "@hooks/useQueryString";
import { SvgSearch } from '@icons/SvgSearch';
import {useRouter, useSearchParams} from 'next/navigation';
import { useEffect,useState } from 'react';
import { Button, Input, TextField } from 'react-aria-components';

const ProductsFormInner = () => {
  const { createQueryString } = useQueryString();
  const searchParams = useSearchParams();
  const [searchValue, setSearchValue] = useState('');
  const router = useRouter();

  useEffect(() => {
    const nameParam = searchParams.get('name');
    if (nameParam) {
      setSearchValue(nameParam);
    }
  }, [searchParams]);

  const handleSearch = () => {
    const searchQuery = createQueryString('name', searchValue);
    router.push(`/?${searchQuery}`, {
      scroll: false,
    });
  };

  return (
    <>
      <TextField
        aria-label="search"
        className="flex items-center gap-2.5"
      >
        <Input
          placeholder="Məhsul axtar..."
          className="h-[50px] w-full rounded-md bg-white px-4 shadow-heroInput sm:w-[374px]"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              handleSearch();
            }
          }}
        />
        <Button
          className="rounded-md bg-search p-[16px]"
          onPress={handleSearch}
        >
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