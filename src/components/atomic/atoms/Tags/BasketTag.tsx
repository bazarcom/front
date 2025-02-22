import { Tag } from '@atoms/Tags/Tag';
import { TagMobile } from '@atoms/Tags/TagMobile';
import { markets } from "@constants/markets";

type WoltTagProps = {
  isMobile: boolean;
  marketName: string;
};

const BasketTag = ({ isMobile, marketName }: WoltTagProps) => {
  return isMobile ? (
    <TagMobile
      bgColor={markets[marketName.toLowerCase()]?.bgColor}
      img={markets[marketName.toLowerCase()]?.logo}
      marketName={marketName.toLowerCase() || "Wolt Market"}
      textColor={markets[marketName.toLowerCase()]?.marketTextColor}
    />
  ) : (
    <Tag
      marketName={marketName.toLowerCase()}
    />
  );
};

export { BasketTag };
