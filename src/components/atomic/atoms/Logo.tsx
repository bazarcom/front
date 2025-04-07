import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <Link
        href="/"
        className="relative h-[60px] w-[250px] text-2xl font-normal text-black md:text-4xl md:font-medium">
        <Image
          src="/logos/logo.svg"
          alt="Logo"
          fill
          quality={100}
          className="h-full w-full object-cover"
        />
      </Link>
      <span className="mt-2 flex min-w-[50px] items-center justify-center rounded-full bg-gradient-to-r from-[#FF5D17] to-[#FF6726] px-3 py-1 text-xs font-medium text-white">Beta</span>
    </div>
  );
};

export { Logo };
