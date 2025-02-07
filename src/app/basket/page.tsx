import { GoBack } from '@atoms/GoBack';
import dynamic from 'next/dynamic';

const DynamicBasket = dynamic(() => import('@organisms/Basket'), { ssr: false });

const BasketPage = () => {
  return (
    <main className="py-8 md:pb-[200px] md:pt-5">
      <div className="container">
        <div className="relative flex flex-col">
          <GoBack className="hidden w-fit items-center gap-3 md:flex" />
          <h1 className="mt-6 text-2xl font-semibold">Səbətim</h1>
          <DynamicBasket />
        </div>
      </div>
    </main>
  );
};

export default BasketPage;
