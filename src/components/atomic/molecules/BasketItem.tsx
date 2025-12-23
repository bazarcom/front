import { BasketTag } from '@atoms/Tags/BasketTag';
import { SvgClose } from '@icons/SvgClose';
import { BasketProductQuantityController } from '@molecules/BasketProductQuantityController';
import Image from 'next/image';
import type { ReactNode } from 'react';
import { Button } from 'react-aria-components';

import { logger } from '@/lib/logger';

type BasketItemProps = {
  img: string;
  name: string;
  price: number;
  quantity: number;
  marketTag: ReactNode;
  market: string; // Temporary will use just static wolt block. Later will be dynamic, when we will add all market tags.
  handleIncrementProduct: (id: string, offerId: string) => void;
  handleDecrementProduct: (id: string, offerId: string) => void;
  handleRemoveProduct: (id: string, offerId: string) => void;
  id: string;
  offerId: string;
};

const MOBILE_WIDTH = 768;

const BasketItem = ({
  img,
  id,
  offerId,
  name,
  price,
  quantity,
  market,
  handleIncrementProduct,
  handleDecrementProduct,
  handleRemoveProduct,
}: BasketItemProps) => {
  logger.log("Basket Item", market);

  return (
    <li className="flex min-h-fit justify-between overflow-hidden rounded-lg p-5 md:border md:border-solid md:border-basket-product-border md:bg-white">
      <div className="flex w-full items-center gap-4">
        <div className="border-product-img-border relative h-[80px] w-full max-w-[80px] overflow-hidden rounded-lg border-2 border-solid md:h-[100px] md:max-w-[100px]">
          <div className="absolute left-0 right-0 top-0 block md:hidden">
            <BasketTag
              marketName={market}
              isMobile={window.innerWidth <= MOBILE_WIDTH}
            />
          </div>
          <Image
            src={img}
            alt={name}
            className="object-cover"
            fill
            sizes="(max-width: 768px) 80px, 100px"
          />
        </div>
        <div className="flex max-w-[350px] flex-col gap-1.5">
          <div className="hidden md:block">
            <BasketTag marketName={`${market[0].toUpperCase()}${market.slice(1)}`} isMobile={false} />
          </div>
          <h3 className="text-sm font-semibold text-basket-product-name md:text-base">{name}</h3>
          <span className="text-product-unit text-xs md:text-base">500 qram</span>
          <div className="flex items-center gap-2">
            <span className="text-base font-bold md:text-xl">{price}</span>
            <span className="text-base font-bold md:text-xl">₼</span>
            {/*<span className="text-product-highest-price text-xs line-through md:text-sm">{highestPrice}</span>*/}
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <Button
          onPress={() => handleRemoveProduct(id, offerId)}
          className="ml-auto h-5 w-5">
          <SvgClose
            stroke="#838383"
            fill="#838383"
            width={20}
            height={20}
          />
        </Button>
        <BasketProductQuantityController
          id={id}
          offerId={offerId}
          handleDecrementProduct={handleDecrementProduct}
          quantity={quantity}
          handleIncrementProduct={handleIncrementProduct}
        />
      </div>
    </li>
  );
};

export { BasketItem };
