'use client';

import { markets } from '@constants/markets';
import { motion } from 'framer-motion';
import { useContext } from 'react';

import { useParamPath } from '@/hooks/useParamPath';
import { Manat } from '@/icons/Currency/Manat';

import { CardContext } from './PCard';
import { PCardStoreBadge } from './PCardStoreBadge';
import { PCardStores } from './PCardStores';

const HorizontalPCard = () => {
  const paramPath = useParamPath();
  const product = useContext(CardContext);

  const sortedOffers = product.prices.sort((a, b) => a.price - b.price);

  const handleClick = () => {
    paramPath({ name: 'product', key: String(product['_id']) });
    return;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={handleClick}
      transition={{ duration: 0.3 }}
      className="relative grid cursor-pointer grid-cols-[1fr_min-content] gap-6 overflow-hidden rounded bg-white py-2 ps-8 md:grid-cols-[min-content_1fr_min-content] md:py-4 md:ps-14">
      <div className="relative hidden h-[118px] w-[148px] rounded-md bg-[#F6F6F6] p-1 md:block">
        <div className="absolute left-3 top-3 z-20">
          <PCardStoreBadge
            marketLabel={markets[sortedOffers[0].store_name].label}
            marketName={markets[sortedOffers[0].store_name].label}
            marketImage={markets[sortedOffers[0].store_name].logo}
            marketBgColor={markets[sortedOffers[0].store_name].bgColor}
            marketTextColor={markets[sortedOffers[0].store_name].marketTextColor}
          />
        </div>
        <img
          src={product.image.startsWith('https://consumer-static-assets.wolt.com/') ? '/no-order.png' : product.image}
          className="h-full w-full object-contain"
          alt={product.name}
        />
      </div>
      <PCardBadge />
      <div className="flex flex-col justify-between gap-2">
        <div className="block md:hidden">
          <PCardStoreBadge
            marketLabel={markets[sortedOffers[0].store_name].label}
            marketName={markets[sortedOffers[0].store_name].label}
            marketImage={markets[sortedOffers[0].store_name].logo}
            marketBgColor={markets[sortedOffers[0].store_name].bgColor}
            marketTextColor={markets[sortedOffers[0].store_name].marketTextColor}
          />
        </div>
        <PCardTitle />
        <PCardStores
          id={product['_id']}
          allMarkets={product.prices}
        />
      </div>
      <PCardPrice />
    </motion.div>
  );
};

const PCardTitle = () => {
  const product = useContext(CardContext);

  return (
    <div className="line-clamp-1 max-w-[400px] text-sm font-semibold text-[#1E285F] hover:underline md:line-clamp-3 md:text-2xl">
      {product.name} <span className="text-sm font-medium text-[#9198A2] md:text-2xl"> / eded</span>
    </div>
  );
};

const PCardPrice = () => {
  const product = useContext(CardContext);

  const sortedOffers = product.prices.sort((a, b) => a.price - b.price);

  const price = sortedOffers[0].price;
  const discountPrice = sortedOffers[0].discount_price;

  return (
    <div className="flex flex-col justify-center pe-2 md:pe-7">
      {discountPrice && (
        <div className="relative flex w-fit items-center gap-1 text-sm font-medium text-[#9198A2] md:gap-2 md:text-lg">
          {price.toFixed(2)}
          <Manat className="h-4 w-4 fill-[#9198A2]" />
          <div className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-[#9198A2]"></div>
        </div>
      )}
      <div className="flex w-fit items-center gap-1 md:gap-2">
        {discountPrice && <div className="text-xl font-bold text-[#549F83] md:text-[26px]">{discountPrice.toFixed(2)}</div>}
        {!discountPrice && <div className="text-xl font-bold text-[#549F83] md:text-[26px]">{price.toFixed(2)}</div>}
        <Manat className="h-5 w-5 fill-[#549F83]" />
      </div>
    </div>
  );
};

const PCardBadge = () => {
  return (
    <div
      style={{ writingMode: 'vertical-lr', textOrientation: 'mixed' }}
      className="absolute left-0 top-0 h-full rotate-180 bg-[#FEE4E4] px-0 text-center text-sm text-[#E66457] md:bg-[#FFB887]/15 md:px-2 md:text-base">
      <div>Ən ucuz</div>
    </div>
  );
};

export { HorizontalPCard };
