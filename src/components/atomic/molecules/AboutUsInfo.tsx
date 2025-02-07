import { AboutUsTag } from '@atoms/AboutUsTag';
import { poppins } from '@constants/fonts';
import { cn } from '@lib/utils';
import Image from 'next/image';
import { HTMLAttributes, ReactNode } from 'react';

interface AboutUsInfoProps extends HTMLAttributes<HTMLDivElement> {
  infoTitle: ReactNode;
  content: string;
  img: string;
  isReverse?: boolean;
  tag: string;
}

const AboutUsInfo = ({ img, content, infoTitle, tag, isReverse = false, ...props }: AboutUsInfoProps) => {
  return (
    <div
      {...props}
      // style={{ justifyContent: isReverse ? 'start' : 'space-between' }}
      className={cn({
        'flex w-full flex-col items-center gap-8': true,
        'md:flex-row-reverse md:justify-end md:gap-[65px]': isReverse,
        'md:flex-row md:justify-between': !isReverse,
      })}>
      <div className="flex max-w-[542px] flex-col gap-6">
        <AboutUsTag>{tag}</AboutUsTag>
        {infoTitle}
        <p className={`${poppins.className} text-black`}>{content}</p>
      </div>
      <div className="relative h-[285px] w-full max-w-none md:h-[455px] md:max-w-[493px]">
        <Image
          className="object-cover"
          src={img}
          alt={tag}
          fill
        />
      </div>
    </div>
  );
};

export { AboutUsInfo };
