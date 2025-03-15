'use client';

import { DividingLine } from '@atoms/DividingLine';
import { useBasket } from '@hooks/useBasket';
import { BasketItem } from '@molecules/BasketItem';
import { BasketTotal } from '@molecules/BasketTotal';
import { Fragment } from 'react';
import { Button } from "react-aria-components";

import { Basket as BasketT } from "@/types/basket";

const Basket = () => {
  const { handleRemoveProduct, handleRemoveAllProducts, handleDecrementProduct, handleIncrementProduct, getTotalProductCount, getTotalPrice, allBasketProducts } = useBasket();

  return (
    <section
      className="mt-9"
      id="basket">
      <div className="flex flex-col items-start gap-16 md:flex-row md:gap-5">
        <div className="flex flex-col gap-4 w-full pr-1 max-w-[820px] max-h-[80vh] md:max-h-[70vh] overflow-y-scroll">
          <ul className="flex flex-col gap-8 md:gap-4">
            {allBasketProducts && allBasketProducts.length > 0 ? (
              allBasketProducts.map((product: BasketT, i) => {
                return (
                  <Fragment key={product["_id"]}>
                    <BasketItem
                      offerId={product.offer["_id"]}
                      img={product.image}
                      name={product.name}
                      id={product["_id"]}
                      price={product.offer.price}
                      quantity={product.quantity}
                      marketTag={product.offer.store_name}
                      market={product.offer.store_name}
                      handleIncrementProduct={handleIncrementProduct}
                      handleDecrementProduct={handleDecrementProduct}
                      handleRemoveProduct={handleRemoveProduct}
                    />
                    {i !== allBasketProducts.length - 1 && <DividingLine/>}
                  </Fragment>
                );
              })
            ) : (
              <p className="text-center">Səbət boşdur</p>
            )}
          </ul>
        </div>
        <div className="w-full max-w-none md:max-w-[400px] flex flex-col gap-5">
          <BasketTotal
            totalProductsCount={getTotalProductCount()}
            productsCount={allBasketProducts.length}
            productsTotalHighestPrice={getTotalPrice()?.totalHighestPrice || 0}
            productsTotalPrice={getTotalPrice()?.totalPrice || 0}
          />
          <Button onPress={handleRemoveAllProducts} className="bg-search focus:outline-none md:hover:scale-105 transition-all duration-300 text-white py-2 px-4 max-w-[200px] rounded-md">
            Səbəti boşalt
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Basket; // I have to default export due to dynamic import in page.tsx
