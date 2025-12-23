import { markets } from '@constants/markets';
import type { FC } from 'react';
import { Button } from 'react-aria-components';

import { Manat } from '@/icons/Currency/Manat';
import { SvgBag } from '@/icons/SvgBag';
import { cn } from '@/lib/utils';
import { Basket } from '@/types/basket';
import { Product } from '@/types/product';

import { PCardStoreBadge } from './PCardStoreBadge';

type badgeType = 'cheapest' | 'adv' | undefined;

export type MiniPCardProps = {
  badge?: badgeType;
  marketName: string;
  marketImage: string | undefined;
  name: string;
  price: number;
  id: string;
  offerId: string;
  handleAddProduct: (product: Basket) => void;
  quantity: number;
  marketLabel: string;
  product: Product;
};

const MiniPCard: FC<MiniPCardProps> = ({ badge, marketLabel, product, offerId, quantity, marketName, handleAddProduct, marketImage, name, price, id }) => {
  console.log(id, offerId, 'id and offerId');

  return (
    <div
      className={cn({
        'relative w-full overflow-hidden rounded bg-[#F6F6F6] p-3 transition md:bg-[#FCFCFC] md:hover:shadow-[0px_4px_9px_0px_rgba(0,0,0,0.25)]': true,
        'ps-9': badge !== undefined,
      })}>
      <CardBadge badge={badge} />

      <div className="grid grid-cols-[1fr_min-content] gap-3 md:grid-cols-[75px_1fr_min-content_min-content]">
        <div className="hidden md:block">
          <CardImage
            marketImage={marketImage}
            marketName={marketName}
          />
        </div>
        <div className="hidden md:block">
          <CardTitle name={`${name} / ${marketName[0].toUpperCase()}${marketName.slice(1)}`} />
        </div>
        <div className="hidden md:block">
          <CardPrice price={price} />
        </div>
        <div className="flex flex-col justify-between md:hidden">
          <PCardStoreBadge
            marketLabel={markets[marketLabel].label}
            marketName={markets[marketLabel].label}
            marketTextColor={markets[marketLabel].marketTextColor}
            marketImage={markets[marketLabel].logo}
            marketBgColor={markets[marketLabel].bgColor}
          />
          <div className="mb-2"></div>
          <CardTitle name={`${name} / ${marketName[0].toUpperCase()}${marketName.slice(1)}`} />
          <div className="mb-1"></div>
          <CardPrice price={price} />
        </div>
        <div className="flex items-center">
          <CardBag
            handleAddProduct={handleAddProduct}
            id={id}
            product={product}
            offerId={offerId}
            quantity={quantity}
            price={price}
            marketName={marketName}
            marketImage={marketImage}
          />
        </div>
      </div>
    </div>
  );
};

const CardTitle = ({ name }: { name: string }) => {
  return (
    <div className="flex h-full flex-col justify-center">
      <div className="text-sm font-semibold text-[#1E285F] md:text-base">{name}</div>
      {/* <div className="hidden text-sm font-medium text-[#999999] md:block">350 gr</div> */}
    </div>
  );
};

const CardImage = ({ marketImage, marketName }: { marketImage: string | undefined; marketName: string }) => {
  return (
    <div className="relative h-[47px] w-full overflow-hidden">
      <img
        src={marketImage}
        className="h-full w-full object-cover"
        alt={marketName}
      />
    </div>
  );
};

const CardPrice = ({ price }: { price: number }) => {
  const fixedPriceLength = 2;
  const fullPrice = price.toFixed(fixedPriceLength);
  return (
    <div className="flex h-full w-fit items-center gap-2">
      <div className="text-base font-bold text-[#237943] md:text-[#3E4E50]">{fullPrice}</div>
      <Manat className="h-4 w-4 fill-[#237943] md:fill-[#3E4E50]" />
    </div>
  );
};

const CardBag = ({
  offerId,
  quantity,
  marketName,
  marketImage,
  price,
  handleAddProduct,
  product,
}: {
  id: string;
  marketName: string;
  product: Product;
  marketImage: string | undefined;
  price: number;
  offerId: string;
  quantity: number;
  handleAddProduct: (product: Basket) => void;
}) => {
  const productDto: Basket = {
    _id: product._id,
    quantity: quantity,
    name: product.name,
    image: product.image_url,
    offer: {
      _id: offerId,
      logo: marketImage as string,
      price: price,
      discount_price: null,
      image: marketImage!,
      store_name: marketName,
    },
  };

  return (
    <Button
      onPress={() => {
        handleAddProduct(productDto);
      }}
      className="group relative h-9 w-9 cursor-pointer rounded border border-[#199771] bg-[#EFFFFA] p-1.5 focus:outline-none md:h-7 md:w-7">
      <SvgBag className="h-full w-full stroke-[#199771]" />
      <span className="invisible absolute -left-32 top-1/2 z-[9999] -translate-y-1/2 whitespace-nowrap rounded bg-gray-800 px-2 py-1 text-xs text-white opacity-0 transition-all group-hover:visible group-hover:opacity-100">
        Bazarlıq siyahısı
      </span>
    </Button>
  );
};

const CardBadge = ({ badge }: { badge: badgeType }) => {
  if (badge === 'cheapest' || badge === 'adv') {
    return (
      <div
        style={{ writingMode: 'vertical-lr', textOrientation: 'mixed' }}
        className={cn({
          'absolute left-0 top-0 h-full rotate-180 px-0 md:px-1': true,
          'bg-[#FEE4E4] text-[#E66457]': badge === 'cheapest',
          'bg-[#CDF5FE] text-[#00C1E8]': badge === 'adv',
        })}>
        <div className="whitespace-nowrap text-center text-[15px]">{badge === 'cheapest' ? <>Ən ucuz</> : <>Reklam</>}</div>
      </div>
    );
  }
  return <></>;
};

export { MiniPCard };
