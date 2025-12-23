'use client';

import { markets } from '@constants/markets';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useContext } from 'react';
import { Button } from 'react-aria-components';

import { useBasket } from '@/hooks/useBasket';
import { Manat } from '@/icons/Currency/Manat';
import { SvgBag } from '@/icons/SvgBag';
import { productToBasket } from '@/lib/utils';

import { CardContext } from './PCard';
import { PCardStoreBadge } from './PCardStoreBadge';

const VerticalPCard = () => {
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
        </div>
      </motion.div>
    </>
  );
};

const PCardImage = () => {
  const product = useContext(CardContext);
  const marketInfo = markets[product.market_name];

  return (
    <div className="relative h-[128px] bg-[#F6F6F6] md:h-[175px]">
      {marketInfo && (
        <div className="absolute left-3 top-3 z-20">
          <PCardStoreBadge
            marketLabel={marketInfo.label}
            marketName={product.market_name}
            marketImage={marketInfo.logo}
            marketBgColor={marketInfo.bgColor}
            marketTextColor={marketInfo.marketTextColor}
          />
        </div>
      )}
      <Image
        src={product.image_url.startsWith('https://consumer-static-assets.wolt.com/') ? '/no-order.png' : product.image_url}
        className="object-contain"
        alt={product.name}
        fill
        sizes="(max-width: 768px) 100vw, 300px"
      />
    </div>
  );
};

const PCardTitle = () => {
  const product = useContext(CardContext);

  return (
    <div className="mb-5 text-sm font-semibold text-[#1E285F] hover:underline md:text-base">
      {product.name}
    </div>
  );
};

const PCardPrice = () => {
  const product = useContext(CardContext);
  const price = product.price ?? 0;
  const oldPrice = product.old_price;
  const { handleAddProduct } = useBasket();

  const handleAddToBasket = () => {
    const basketProduct = productToBasket(product, 1);
    handleAddProduct(basketProduct);
  };

  return (
    <div className="mb-4 flex items-center justify-between gap-2.5">
      <div className="flex flex-col gap-1">
        {oldPrice && (
          <div className="flex items-center gap-1">
            <div className="text-sm font-medium text-[#9198A2] line-through md:text-base">{oldPrice.toFixed(2)}</div>
            <Manat className="h-4 w-4 fill-[#9198A2] md:h-5 md:w-5" />
          </div>
        )}
        <div className="flex items-center gap-1 md:gap-2">
          <div className="text-lg font-bold text-[#549F83] md:text-xl">{price.toFixed(2)}</div>
          <Manat className="h-5 w-5 fill-[#549F83] md:h-6 md:w-6" />
        </div>
      </div>
      <Button
        onPress={handleAddToBasket}
        className="group relative h-9 w-9 shrink-0 cursor-pointer rounded border border-[#199771] bg-[#EFFFFA] p-1.5 focus:outline-none md:h-8 md:w-8">
        <SvgBag className="h-full w-full stroke-[#199771]" />
        <span className="invisible absolute -left-32 top-1/2 z-[9999] -translate-y-1/2 whitespace-nowrap rounded bg-gray-800 px-2 py-1 text-xs text-white opacity-0 transition-all group-hover:visible group-hover:opacity-100">
          Bazarlıq siyahısı
        </span>
      </Button>
    </div>
  );
};

export { VerticalPCard };
