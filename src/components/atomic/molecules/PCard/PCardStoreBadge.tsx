import Image from 'next/image';

const PCardStoreBadge = ({ marketName, marketBgColor, marketImage, marketTextColor, marketLabel }: { marketName: string; marketTextColor: string; marketImage: string | undefined; marketBgColor: string; marketLabel: string }) => {
  if (!marketImage) return null;

  return (
    <div
      style={{
        backgroundColor: marketBgColor,
      }}
      className="flex w-fit items-center gap-1 rounded-[3px] px-2 py-1">
      <div className="grid h-4 w-4 place-items-center rounded-sm bg-white">
        <div className="relative h-[14px] w-[14px] overflow-hidden rounded-full">
          <Image
            src={marketImage}
            className="object-cover object-center"
            alt={marketName}
            fill
            sizes="14px"
          />
        </div>
      </div>
      <span style={{
        color: marketTextColor,
      }} className="text-xs font-normal">{`${marketLabel[0].toUpperCase()}${marketLabel.slice(1)}`}</span>
    </div>
  );
};

export { PCardStoreBadge };
