import { dmSans } from '@constants/fonts';
import Image from 'next/image';

type TagMobileProps = {
  img: string;
  bgColor: string;
  textColor?: string;
  marketName: string;
};

const TagMobile = ({ img, bgColor, textColor = '#FFF', marketName }: TagMobileProps) => {
  return (
    <div
      style={{ backgroundColor: bgColor }}
      className="flex items-center justify-center gap-1 overflow-hidden rounded-b-lg rounded-t-sm px-1 py-[3px]">
      {' '}
      {/* For now it will be div, but I think that we can make a Link component from that div(to enhance UX) */}
      <div className="rounded-sm bg-white p-[1px]">
        <Image
          className="h-[10px] w-[10px] overflow-hidden rounded-full object-cover"
          src={img}
          alt={marketName}
          width={11}
          height={11}
        />
      </div>
      <span
        className={`${dmSans.className} whitespace-nowrap font-light`}
        style={{ color: textColor, fontSize: '10px' }}>
        {marketName}
      </span>
    </div>
  );
};

export { TagMobile };
