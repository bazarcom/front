import heroPic from '@public/hero/heroContactUs.webp';
import Image from 'next/image';

import styles from './contactus.module.css';
import { ContactUsForm } from './ContactUsForm';

const HeroContactUs = () => {
  return (
    <div className="relative z-10 pb-12 md:pb-20">
      <div className={`${styles.clipPath} absolute left-0 top-0 z-10 h-[378px] w-full overflow-hidden md:h-[740px]`}>
        <div className="absolute left-0 top-0 z-10 h-full w-full bg-black/25"></div>
        <Image
          src={heroPic}
          fill
          className="h-full w-full object-cover"
          alt="background image"
        />
      </div>
      <div className="container relative z-20 flex justify-center pt-[150px] md:pt-[189px]">
        <ContactUsForm />
      </div>
    </div>
  );
};

export { HeroContactUs };
