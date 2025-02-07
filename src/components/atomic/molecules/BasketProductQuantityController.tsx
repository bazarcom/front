'use client';

import Image from 'next/image';

type BasketProductQuantityControllerProps = {
  handleIncrementProduct: (id: string, offerId: string) => void;
  handleDecrementProduct: (id: string, offerId: string) => void;
  quantity: number;
  id: string;
  offerId: string;
};

const BasketProductQuantityController = ({ quantity, offerId, handleDecrementProduct, handleIncrementProduct, id }: BasketProductQuantityControllerProps) => {
  return (
    <div className="flex items-center gap-5">
      <button
        onClick={() => handleDecrementProduct(id, offerId)}
        className="h-6 w-6">
        <Image
          src="/icons/decrement.svg"
          alt="Decrement"
          width={24}
          height={24}
        />
      </button>
      <span className="min-w-[22px] text-center text-xl font-semibold text-black">{quantity}</span>
      <button
        onClick={() => handleIncrementProduct(id, offerId)}
        className="h-6 w-6">
        <Image
          src="/icons/increment.svg"
          alt="Increment"
          width={24}
          height={24}
        />
      </button>
    </div>
  );
};

export { BasketProductQuantityController };
