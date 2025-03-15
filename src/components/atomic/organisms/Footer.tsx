import Link from 'next/link';

import { navs } from '@/constants/nav';
import { Curve } from '@/icons/Curves/Curve';
import { Curve2 } from '@/icons/Curves/Curve2';
import { FooterLogo } from '@/icons/Logo/FooterLogo';
import { Facebook } from '@/icons/SocialMedia/Facebook';
import { Instagram } from '@/icons/SocialMedia/Instagram';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#1CA87E] pb-10 pt-10 md:pt-[60px]">
      <div className="container">
        <div className="mb-[60px] flex flex-col gap-5 md:items-center md:justify-center">
          <FooterLogo className="h-10 w-8" />
          <div className="max-w-[382px] text-base font-normal text-white/50 md:text-center">Bazarkom.az - Agilli bazarliq burdan bashlayir!</div>
        </div>
        <div className="mb-[60px] flex flex-col justify-start gap-10 font-normal md:flex-row md:justify-center md:gap-[60px]">
          {navs.map((nav) => {
            return (
              <Link
                key={nav.path}
                href={nav.path}
                className="text-base text-white">
                {nav.title}
              </Link>
            );
          })}
        </div>
        <div className="flex items-center justify-start gap-10 md:justify-center md:gap-[60px]">
          <Facebook className="h-5 w-2.5 fill-white" />
          <Instagram className="h-5 w-5 fill-white" />
        </div>
      </div>
      <div className="pointer-events-none absolute bottom-0 right-0">
        <Curve />
      </div>
      <div className="pointer-events-none absolute bottom-0 left-0 hidden lg:block">
        <Curve2 />
      </div>
    </footer>
  );
};

export { Footer };
