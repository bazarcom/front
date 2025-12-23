'use client';

import { markets } from '@constants/markets';
import { useFetchFilters } from '@hooks/useFetchFilters';
import { useSelectCategory } from '@hooks/useSelectCategory';
import { cn } from '@lib/utils';
import Image from 'next/image';

const MarketFilter = () => {
  const { markets: availableMarkets, loading } = useFetchFilters();
  const { setCategory, isCategoryExists } = useSelectCategory();

  if (loading) {
    return (
      <div className="flex flex-wrap gap-2.5">
        <div className="h-10 w-20 animate-pulse rounded-md bg-gray-200"></div>
        <div className="h-10 w-20 animate-pulse rounded-md bg-gray-200"></div>
        <div className="h-10 w-20 animate-pulse rounded-md bg-gray-200"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-2.5">
      {availableMarkets.map((marketName) => {
        const marketInfo = markets[marketName];
        if (!marketInfo) return null;
        
        const isActive = isCategoryExists('market_name', marketName);
        
        return (
          <button
            key={marketName}
            onClick={() => setCategory('market_name', marketName)}
            className={cn(
              'flex h-10 items-center gap-2 rounded-md border px-3 py-2 transition-colors',
              {
                'border-[#549F83] bg-[#549F83]/10': isActive,
                'border-gray-300 bg-white hover:bg-gray-50': !isActive,
              }
            )}
          >
            <Image
              src={marketInfo.logo}
              alt={marketInfo.label}
              width={20}
              height={20}
              className="h-5 w-5 object-contain"
            />
            <span className={cn('text-sm font-medium', {
              'text-[#549F83]': isActive,
              'text-gray-700': !isActive,
            })}>
              {marketInfo.label}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export { MarketFilter };

