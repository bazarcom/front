import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link
      href="/"
      className="relative h-[60px] w-[177.8px] text-2xl font-normal text-black md:text-4xl md:font-medium">
      <Image
        src="/logos/logo.svg"
        alt="Logo"
        fill
        quality={100}
        className="h-full w-full object-cover"
      />
    </Link>
  );
};

export { Logo };
