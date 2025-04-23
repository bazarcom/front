import { AboutUsTag } from '@atoms/AboutUsTag';
import { pacifico, poppins } from '@constants/fonts';
import Image from 'next/image';

const AboutHero = () => {
  return (
    <section className="relative pt-[54px] lg:py-2 lg:pb-10">
      <div className="container relative z-10">
        <div className="w-full overflow-hidden rounded-[3px] lg:bg-white lg:px-[110px] lg:py-[70px]">
          <div className="flex flex-col items-center gap-[56px] lg:flex-row lg:gap-14">
            <div className="flex w-full max-w-[492px] flex-col gap-6">
              <AboutUsTag>Haqqımızda</AboutUsTag>
              <h1 className={`${poppins.className} text-[2rem] font-semibold`}>
                Biz <span className={`${pacifico.className} text-4xl font-semibold text-about-hero-important-text`}>Kimik?</span>
              </h1>
              <p className={`${poppins.className} text-black`}>
                Bazarkom.az-da hesab edirik ki, ağıllı alış-veriş düzgün məlumatla başlayır. Platformamız sizə supermarket şəbəkələri üzrə qiymətləri müqayisə etmək üçün yaradılmışdır. Bizimlə siz hər zaman məhsullar üzrə ən yaxşı qiymətləri tapa bilərsiniz.
              </p>
            </div>
            <div className="flex h-[330px] w-full items-center justify-center lg:max-w-[400px]">
              <Image
                src="/about-us-hero/double-basket-pc.png"
                alt="hero image"
                className="hidden lg:block"
                width={440}
                height={436}
              />
              <Image
                src="/about-us-hero/double-basket-mobile.png"
                alt="hero image"
                className="block lg:hidden"
                width={336}
                height={330}
              />
            </div>
          </div>
        </div>
      </div>
      <Image
        className={'-z-1 absolute bottom-0 left-0 right-0 hidden w-[100vw] lg:block'}
        src="/about-us-hero/hero-bg.svg"
        alt="hero bg"
        width={1440}
        height={408}
      />
      <Image
        className={'-z-1 absolute bottom-0 left-0 right-0 block w-[100vw] lg:hidden'}
        src="/about-us-hero/hero-bg-mobile.svg"
        alt="hero bg"
        width={668}
        height={634}
      />
    </section>
  );
};

export { AboutHero };
