'use client';

import { MiniSort } from '@atoms/Filter/MiniSort';
import { QuantitySelector } from '@atoms/QuantitySelector/QuantitySelector';
import { markets } from "@constants/markets";
import { MiniPCard } from '@molecules/PCard/MiniPCard';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

import { usePrModal } from '@/hooks/usePrModal';
import { Basket } from "@/types/basket";
import { Price } from "@/types/price";
import { Product } from "@/types/product";

import { ModalHeading } from './ModalHeading';

const PrDetailModal = () => {
  const { product, loading, error, isOpen, setOpen, quantity, handleInc, handleDec, handleAddProductToBasket, productId } = usePrModal();
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleClose = () => {
    setOpen(false);
    router.push('/', {
      scroll: false,
    });
    document.documentElement.style.overflow = 'auto';
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    // if product field in URL is empty, close the modal
    const productId = searchParams.get('product');
    if (!productId) {
      setOpen(false);
      document.documentElement.style.overflow = 'auto';
      document.body.style.overflow = 'auto';
    } else {
      setOpen(true);
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    }
  }, [searchParams]);

  // Закрытие по нажатию на клавишу Esc
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <div className={`fixed inset-0 z-[999] flex items-center justify-center ${isOpen ? 'visible' : 'invisible'}`}>
      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-black transition-opacity duration-300 ease-out ${isOpen ? 'visible opacity-50' : 'invisible opacity-0'}`}
        onClick={handleClose}></div>

      {/* Modal Content */}
      <div
        className={`relative z-[999] h-[100dvh] w-full max-w-[100vw] transform rounded-lg bg-white p-6 shadow-lg transition-all duration-500 md:h-[565px] md:max-w-[90vw] lg:max-w-[75vw] ${isOpen ? 'opacity-100' : 'opacity-0'} ${isOpen ? 'translate-y-[10dvh] md:translate-y-0' : 'translate-y-[100vh]'}`}>
        <ModalHeading
          title="Мəhsul haqqında"
          handleClose={handleClose}
        />
        {loading && <div className="text-lg font-semibold">Loading...</div>}
        {error && <div className="text-lg font-semibold text-red-500">{error}</div>}
        {product && (
          <div className="mt-4 grid grid-cols-1 grid-rows-[150px_1fr] gap-5 md:grid-cols-[300px_1fr] md:grid-rows-1">
            {product && (
              <MainProduct
                product={product}
                value={quantity}
                handleInc={handleInc}
                handleDec={handleDec}
              />
            )}
            <OtherMarkets
              product={product}
              quantity={quantity}
              products={product?.prices || []}
              handleAddProduct={handleAddProductToBasket}
              productId={productId}
            />
          </div>
        )}
      </div>
    </div>
  );
};

const MainProduct = ({ product, handleInc, handleDec, value }: { product: Product; value: number; handleInc: () => void; handleDec: () => void }) => {
  return (
    <div className="grid w-full grid-cols-2 gap-4 rounded-lg border bg-white p-4 md:grid-cols-1 md:border">
      <div className="overflow-hidden rounded-lg border bg-gray-100 p-2">
        <img
          src={product.image}
          className="h-full w-full object-cover"
          alt={product.name}
        />
      </div>
      <div>
        <h3 className="mb-4 text-xl font-semibold text-[#1E285F]">{product.name}</h3>
        <QuantitySelector
          value={value}
          onInc={handleInc}
          onDec={handleDec}
        />
      </div>
    </div>
  );
};

const OtherMarkets = ({ productId, product, products, handleAddProduct, quantity }: { productId: string | null; products: Price[], product: Product, quantity: number; handleAddProduct: (product: Basket) => void }) => {
  if (products && productId) {
    const sortedOffers = products.sort((a, b) => a.price - b.price);
    const bestOffer = sortedOffers[0];
    // and delete this product from the product list
    const otherOffers = sortedOffers
      .filter((offer) => offer["_id"] !== bestOffer["_id"]);

    return (
      <div>
        <div className="relative z-10 mb-4 flex items-center justify-between">
          <h4 className="text-base font-semibold text-[#1E285F]">Digər marketlər</h4>
          <MiniSort />
        </div>
        <div className="max-h-[400px] overflow-y-auto pb-4 md:max-h-[430px]">
          <div className="flex flex-col gap-4">
            <MiniPCard
              product={product}
              marketLabel={bestOffer.store_name}
              offerId={bestOffer["_id"]}
              quantity={quantity}
              handleAddProduct={handleAddProduct}
              badge="cheapest"
              name={product.name}
              marketName={bestOffer.store_name}
              marketImage={markets[bestOffer.store_name].logo}
              price={bestOffer.price}
              id={product["_id"]}
            />
            {/*{product.adv_offers?.map((store, index) => (*/}
            {/*  <MiniPCard*/}
            {/*    marketLabel={store.market_label}*/}
            {/*    offerId={store.id}*/}
            {/*    quantity={quantity}*/}
            {/*    handleAddProduct={handleAddProduct}*/}
            {/*    key={index}*/}
            {/*    name={product.name}*/}
            {/*    marketName={store.market_name}*/}
            {/*    marketImage={store.logo}*/}
            {/*    price={store.product_price}*/}
            {/*    badge="adv"*/}
            {/*    id={product.id}*/}
            {/*  />*/}
            {/*))}*/}
            {otherOffers.map((store, index) => (
              <MiniPCard
                product={product}
                marketLabel={store.store_name}
                offerId={store["_id"]}
                quantity={quantity}
                handleAddProduct={handleAddProduct}
                key={index}
                name={product.name}
                marketName={store.store_name}
                marketImage={markets[store.store_name].logo}
                price={store.price}
                id={product["_id"]}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
};

export default PrDetailModal;
