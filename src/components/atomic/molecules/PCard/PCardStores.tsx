'use client';

import { markets } from "@constants/markets";
import { MOBILE_SCREEN } from '@constants/screens';
import { useEffect, useState } from 'react';
import { useWindowSize } from 'usehooks-ts';

import { useParamPath } from '@/hooks/useParamPath';
import { Price } from "@/types/price";

const SMALL_SCREEN_CARD_WIDTH = 24;
const LARGE_SCREEN_CARD_WIDTH = 28;
const TRANSLATE_X = 8;

const PCardStores = ({ id, allMarkets }: { id: string; allMarkets: Price[] }) => {
  const paramPath = useParamPath();

  const handleClick = () => {
    paramPath({ name: 'product', key: String(id) });
    return;
  };

  const storesLength = allMarkets.length;
  const { width: windowWidth = 0 } = useWindowSize();

  const [width, setWidth] = useState(storesLength * LARGE_SCREEN_CARD_WIDTH - (storesLength - 1) * TRANSLATE_X + 'px');

  useEffect(() => {
    if (windowWidth < MOBILE_SCREEN) {
      setWidth(storesLength * SMALL_SCREEN_CARD_WIDTH - (storesLength - 1) * TRANSLATE_X + 'px');
    } else {
      setWidth(storesLength * LARGE_SCREEN_CARD_WIDTH - (storesLength - 1) * TRANSLATE_X + 'px');
    }
  }, [windowWidth, storesLength]);

  return (
    <div
      role="a"
      onClick={handleClick}
      className="relative z-10 flex cursor-pointer items-center gap-2">
      <div
        style={{
          width,
        }}
        className="flex gap-0 transition-all">
        {allMarkets.map((store, index) => {
          return (
            <div
              key={index}
              style={{
                transform: `translateX(-${index * TRANSLATE_X}px)`,
                zIndex: `-${index}`,
              }}
              className="grid max-h-6 min-h-6 min-w-6 max-w-6 place-items-center rounded bg-[#F5F5F5] shadow-[2px_2px_4px_0px_rgba(0,0,0,0.13)] md:max-h-7 md:min-h-7 md:min-w-7 md:max-w-7">
              <div className="relative h-4 w-4 overflow-hidden rounded-full md:h-5 md:w-5">
                <img
                  src={markets[store.store_name].logo}
                  className="h-full w-full object-cover object-center"
                  alt={store.store_name}
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="text-[10px] font-normal text-[#11654C] underline md:text-xs">+ daha {storesLength} təklif</div>
    </div>
  );
};

export { PCardStores };
