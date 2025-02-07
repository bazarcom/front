import { dmSans } from '@constants/fonts';
import Image from 'next/image';

type TagProps = {
  img: string;
  bgColor: string;
  textColor?: string;
  marketName: string;
};

const Tag = ({ img, bgColor, textColor = '#FFF', marketName }: TagProps) => {
  return (
    <div
      style={{ backgroundColor: bgColor }}
      className="flex items-center gap-1.5 overflow-hidden rounded-sm px-2 py-1">
      {' '}
      {/* For now it will be div, but I think that we can make a Link component from that div(to enhance UX) */}
      <div className="rounded-sm bg-white p-0.5">
        <Image
          className="h-[11px] w-[11px] overflow-hidden rounded-full object-cover"
          src={img}
          alt={marketName}
          width={11}
          height={11}
        />
      </div>
      <span
        className={`text-xs ${dmSans.className}`}
        style={{ color: textColor }}>
        {marketName}
      </span>
    </div>
  );
};

export { Tag };
