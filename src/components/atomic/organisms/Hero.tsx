import { ProductsFormInner } from '@atoms/ProductsFormInner';
import { SearchWidget } from '@molecules/SearchWidget';
import Image from 'next/image';

import { dmSans } from '@/constants/fonts';

const Hero = () => {
  return (
    <div className="md:container">
      <section className="relative h-[232px] w-full bg-hero px-[30px] sm:h-[285px] sm:p-0 md:mt-[50px] md:rounded-md">
        <div className="relative z-50 flex h-full flex-col justify-center">
          <h1 className={`${dmSans.className} text-center text-2xl font-semibold md:text-4xl`}>
            Market qiymətlərini müqayisə et, <br/> Ən sərfəli təklifləri tap!
          </h1>
          <SearchWidget
            className="mt-[18px] flex items-center justify-center md:mt-4"
            formContent={<ProductsFormInner />}
          />
        </div>
        <Image
          className="hidden md:block md:rounded-md"
          src="/hero/hero.png"
          alt="Hero"
          fill
        />
      </section>
    </div>
  );
};

export { Hero };
