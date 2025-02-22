import { dmSans } from '@constants/fonts';
import { markets } from "@constants/markets";
import Image from 'next/image';

type TagProps = {
  marketName: string;
};

const Tag = ({ marketName }: TagProps) => {
  console.log('TagProps', marketName);
  const img = markets[marketName]?.logo;
  const bgColor = markets[marketName]?.bgColor;
  const textColor = markets[marketName]?.marketTextColor;
  const marketLabel = markets[marketName]?.label;


  return (
    <div
      style={{ backgroundColor: bgColor }}
      className="flex items-center w-fit gap-1.5 overflow-hidden rounded-sm px-2 py-1">
      {/* For now it will be div, but I think that we can make a Link component from that div(to enhance UX) */}
      <div className="rounded-sm bg-white p-0.5">
        <Image
          className="h-[11px] w-[11px] overflow-hidden rounded-full object-cover"
          src={img}
          alt={marketLabel}
          width={11}
          height={11}
        />
      </div>
      <span
        className={`text-xs ${dmSans.className}`}
        style={{ color: textColor }}>
        {marketLabel}
      </span>
    </div>
  );
};

export { Tag };
