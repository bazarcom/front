'use client';

import { DividingLine } from '@atoms/DividingLine';
import { useBasket } from '@hooks/useBasket';
import { BasketItem } from '@molecules/BasketItem';
import { BasketTotal } from '@molecules/BasketTotal';
import { Fragment } from 'react';
import { Button } from 'react-aria-components';

import { Basket as BasketT } from '@/types/basket';

const Basket = () => {
  const { handleRemoveProduct, handleRemoveAllProducts, handleDecrementProduct, handleIncrementProduct, getTotalProductCount, getTotalPrice, allBasketProducts } = useBasket();

  return (
    <section
      className="mt-9"
      id="basket">
      <div className="flex flex-col items-start gap-16 md:flex-row md:gap-5">
        <div className="flex max-h-[80vh] w-full max-w-[820px] flex-col gap-4 overflow-y-scroll pr-1 md:max-h-[70vh]">
          <ul className="flex flex-col gap-8 md:gap-4">
            {allBasketProducts && allBasketProducts.length > 0 ? (
              allBasketProducts.map((product: BasketT, i) => {
                return (
                  <Fragment key={product['_id']}>
                    <BasketItem
                      offerId={product.offer['_id']}
                      img={product.image}
                      name={product.name}
                      id={product['_id']}
                      price={product.offer.price}
                      quantity={product.quantity}
                      marketTag={product.offer.store_name}
                      market={product.offer.store_name}
                      handleIncrementProduct={handleIncrementProduct}
                      handleDecrementProduct={handleDecrementProduct}
                      handleRemoveProduct={handleRemoveProduct}
                    />
                    {i !== allBasketProducts.length - 1 && <DividingLine />}
                  </Fragment>
                );
              })
            ) : (
              <div className="flex flex-col items-center justify-center gap-4 py-12">
                <svg
                  className="h-24 w-24 text-gray-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
                <p className="text-lg font-medium text-gray-600">Bazarlıq siyahısı boşdur</p>
                <p className="text-sm text-gray-500">Məhsul əlavə etmək üçün məhsullar səhifəsinə keçin</p>
              </div>
            )}
          </ul>
        </div>
        <div className="flex w-full max-w-none flex-col gap-5 md:max-w-[400px]">
          <BasketTotal
            totalProductsCount={getTotalProductCount()}
            productsCount={allBasketProducts.length}
            productsTotalHighestPrice={getTotalPrice()?.totalHighestPrice || 0}
            productsTotalPrice={getTotalPrice()?.totalPrice || 0}
          />
          <Button
            onPress={handleRemoveAllProducts}
            className="max-w-[250px] rounded-md bg-search px-4 py-2 text-white transition-all duration-300 focus:outline-none md:hover:scale-105">
            Bazarlıq siyahısını boşalt
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Basket; // I have to default export due to dynamic import in page.tsx
