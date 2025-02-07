'use client';

import { motion } from 'framer-motion';
import { useContext } from 'react';

import { useParamPath } from '@/hooks/useParamPath';
import { Manat } from '@/icons/Currency/Manat';

import { CardContext } from './PCard';
import { PCardStoreBadge } from './PCardStoreBadge';
import { PCardStores } from './PCardStores';

const VerticalPCard = () => {
  const product = useContext(CardContext);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden rounded border border-solid border-[#C3C8C9]">
        <PCardImage />
        <div className="bg-white px-3 py-4">
          <PCardTitle />
          <PCardPrice />
          <div className="mb-4 h-px bg-[#ECEDEE]"></div>
          <PCardStores
            id={product["_id"]}
            allMarkets={product.prices}
          />
        </div>
      </motion.div>
    </>
  );
};

const PCardImage = () => {
  const product = useContext(CardContext);
  const sortedOffers = product.prices.sort((a, b) => a.price - b.price);
  const bestOffer = sortedOffers[0];

  return (
    <div className="relative h-[128px] bg-[#F6F6F6] md:h-[175px]">
      <div className="absolute left-3 top-3 z-20">
        <PCardStoreBadge
          marketLabel={bestOffer.store_name}
          marketName={bestOffer.store_name}
          marketImage="https://placehold.jp/3d4070/ffffff/150x150.png"
        />
      </div>
      <img
        src={product.image}
        className="h-full w-full object-contain"
        alt={product.name}
      />
    </div>
  );
};

const PCardTitle = () => {
  const product = useContext(CardContext);

  const paramPath = useParamPath();

  const handleClick = () => {
    paramPath({ name: 'product', key: String(product["_id"]) });
    return;
  };

  return (
    <div
      role="a"
      onClick={handleClick}
      className="mb-5 cursor-pointer text-sm font-semibold text-[#1E285F] hover:underline md:text-base">
      {product.name} <span className="text-sm font-medium text-[#9198A2] md:text-base"> / eded</span>
    </div>
  );
};

const PCardPrice = () => {
  const product = useContext(CardContext);
  const sortedOffers = product.prices.sort((a, b) => a.price - b.price);
  const bestOffer = sortedOffers[0];

  const price = bestOffer.price;
  const discountPrice = bestOffer.discount_price;

  return (
    <div className="mb-4 flex flex-col items-start justify-start gap-2.5 md:flex-row md:items-center md:justify-between">
      <div className="flex flex-col">
        {discountPrice && <div className="text-xs font-medium text-[#9198A2] line-through">{price.toFixed(2)}</div>}
        <div className="flex w-fit items-center gap-1 md:gap-2">
          {discountPrice && <div className="text-lg font-bold text-[#549F83]">{discountPrice.toFixed(2)}</div>}
          {!discountPrice && <div className="text-lg font-bold text-[#549F83]">{price.toFixed(2)}</div>}
          <Manat className="h-5 w-5 fill-[#549F83]" />
        </div>
      </div>
      <PCardBadge />
    </div>
  );
};

const PCardBadge = () => {
  return <div className="w-fit rounded bg-[#FFB887]/10 px-2 py-px text-center text-xs font-medium text-[#E66457] md:py-1">ən ucuz</div>;
};

export { VerticalPCard };
