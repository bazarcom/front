import { getColorByMarket } from '@/helper';

const PCardStoreBadge = ({ marketName, marketImage, marketLabel }: { marketName: string; marketImage: string | undefined; marketLabel: string }) => {
  const color = getColorByMarket(marketName);

  return (
    <div
      style={{
        backgroundColor: color,
      }}
      className="flex w-fit items-center gap-1 rounded-[3px] px-2 py-1">
      <div className="grid h-4 w-4 place-items-center rounded-sm bg-white">
        <div className="relative h-3 w-3 overflow-hidden rounded-full">
          <img
            src={marketImage}
            className="h-full w-full object-cover object-center"
            alt={marketName}
          />
        </div>
      </div>
      <div className="text-xs font-normal text-white">{`${marketLabel[0].toUpperCase()}${marketLabel.slice(1)}`}</div>
    </div>
  );
};

export { PCardStoreBadge };
