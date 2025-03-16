'use client';

import { DividingLine } from '@atoms/DividingLine';

type BasketTotalProps = {
  productsCount: number;
  productsTotalPrice: number;
  productsTotalHighestPrice: number;
  totalProductsCount: number;
};

const BasketTotal = ({ productsCount, totalProductsCount, productsTotalPrice }: BasketTotalProps) => {
  return (
    <div className="w-full max-w-none overflow-hidden rounded-lg border border-solid border-basket-product-border p-5 md:max-w-[400px]">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-category-name">Məhsul:</h3>
        <span className="text-basket-total">{productsCount} Məhsul</span>
      </div>
      <DividingLine className="mt-4" />
      <div className="mt-5 flex items-center justify-between">
        <h4 className="font-semibold text-basket-main-text">Məhsul sayı</h4>
        <span className="text-sm font-semibold">{totalProductsCount} ədəd</span>
      </div>
      <div className="mt-8 flex items-center justify-between">
        <h4 className="font-semibold text-basket-main-text">Cəmi məbləğ</h4>
        <div className="flex items-center gap-3">
          <h5 className="flex items-center gap-2.5 text-xl font-bold text-basket-price">
            {productsTotalPrice} <span>₼</span>
          </h5>
          {/* <span className="text-sm font-semibold text-basket-product-highest-price line-through">{productsTotalHighestPrice}</span> */}
        </div>
      </div>
    </div>
  );
};

export { BasketTotal };
