import { Tag } from '@atoms/Tags/Tag';
import { TagMobile } from '@atoms/Tags/TagMobile';

type WoltTagProps = {
  isMobile: boolean;
  marketName: string;
};

const WoltTag = ({ isMobile, marketName }: WoltTagProps) => {
  return isMobile ? (
    <TagMobile
      bgColor="#00C1E8"
      img="/companies/wolt.svg"
      marketName={marketName || "Wolt Market"}
    />
  ) : (
    <Tag
      bgColor="#00C1E8"
      img="/companies/wolt.svg"
      marketName={marketName || "Wolt Market"}
    />
  );
};

export { WoltTag };
