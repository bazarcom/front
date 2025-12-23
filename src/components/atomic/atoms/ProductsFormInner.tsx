'use client';

import { useFetchProducts } from "@hooks/useFetchProducts";
import { SvgSearch } from '@icons/SvgSearch';
import debounce from 'debounce';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useRef,useState } from 'react';
import { Button, Input, TextField } from 'react-aria-components';

const ProductsFormInner = () => {
  const searchParams = useSearchParams();
  const initialSearchValue = searchParams.get('name') || '';
  const [searchValue, setSearchValue] = useState('');
  const [debauncedSearchValue, setDebouncedSearchValue] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (initialSearchValue) {
      setSearchValue(initialSearchValue);
      setDebouncedSearchValue(initialSearchValue);
    }
  }, [initialSearchValue]);

  const { products: suggestions, loading } = useFetchProducts({
    page: 1,
    searchQueryProp: debauncedSearchValue,
    limit: 15,
  });

  const debouncedSearch = useRef(
    debounce((value: string) => {
      setDebouncedSearchValue(value);
    }, 750),
  ).current;

  const handleSearchValueChange = (value: string) => {
    setSearchValue(value);
    debouncedSearch(value);
  };

  // Click outside handler
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Initial search param setup
  useEffect(() => {
    const nameParam = searchParams.get('name');
    if (nameParam) {
      setSearchValue(nameParam);
    }
  }, [searchParams]);

  const handleSearch = useCallback(() => {
    const searchQuery = `name=${searchValue}`;
    setShowSuggestions(false);
    router.push(`/?${searchQuery}`, { scroll: false });
  }, [searchValue, router]);

  const handleInputChange = (value: string) => {
    handleSearchValueChange(value);
    setShowSuggestions(value.length > 0);
  };


  const handleSeeAllProducts = useCallback(() => {
    const searchQuery = `name=${debauncedSearchValue}`;
    setShowSuggestions(false);
    router.push(`/?${searchQuery}`, { scroll: false });
  }, [debauncedSearchValue, router]);

  return (
    <div className="relative z-[99999999999]" ref={wrapperRef}>
      <TextField
        aria-label="search"
        className="flex items-center gap-2.5"
      >
        <Input
          placeholder="Məhsul axtar..."
          className="h-[50px] w-full rounded-md bg-white px-4 shadow-heroInput sm:w-[374px]"
          value={searchValue}
          onChange={(e) => handleInputChange(e.target.value)}
          onFocus={() => suggestions.length > 0 && setShowSuggestions(true)}
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

      {showSuggestions && (
        <div className="absolute top-[60px] z-[99999999999] w-full bg-white shadow-lg rounded-md max-h-60 overflow-y-auto">
          {loading ? (
            <div className="p-2 text-gray-500">Yüklənir...</div>
          ) : suggestions.length > 0 ? (
            suggestions.map((product) => {
              return (
                <div
                  key={product._id}
                  className="flex items-center gap-4 p-3 hover:bg-gray-100 cursor-pointer transition-colors"
                  onClick={() => {
                    setShowSuggestions(false);
                    const searchQuery = `name=${product.name}`;
                    router.push(`/?${searchQuery}`, { scroll: false });
                  }}
                >
                  {/* Изображение продукта */}
                  <div className="relative shrink-0 h-12 w-12">
                    <Image
                      src={product.image_url.startsWith('https://consumer-static-assets.wolt.com/') ? '/no-order.png' : product.image_url}
                      alt={product.name}
                      className="object-cover rounded-md border"
                      fill
                      sizes="48px"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/no-order.png';
                      }}
                    />
                  </div>

                  {/* Название и цена */}
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-sm truncate">{product.name}</div>

                    {/* Цена со скидкой */}
                    {product.old_price ? (
                      <div className="flex items-center gap-2">
                        <span className="text-red-600 font-semibold">
                          {(product.price ?? 0).toFixed(2)} ₼
                        </span>
                        <span className="text-gray-400 line-through text-sm">
                          {product.old_price.toFixed(2)} ₼
                        </span>
                      </div>
                    ) : (
                      /* Обычная цена */
                      <div className="text-gray-500 text-xs font-semibold">
                        {(product.price ?? 0).toFixed(2)} ₼
                      </div>
                    )}
                  </div>
                </div>
              );
            })
          ) : (
            <div className="p-2 text-gray-500">Nəticə tapılmadı</div>
          )}
          {!loading && debauncedSearchValue && (
            <button
              onClick={handleSeeAllProducts}
              className="w-full p-2 text-center border-t border-gray-200 hover:bg-gray-100 transition-colors font-medium text-blue-600"
            >
              Bütün məhsulları gör
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export { ProductsFormInner };