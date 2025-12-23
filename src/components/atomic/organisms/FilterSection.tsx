// import { FilterGrid } from '@/components/atomic/atoms/Filter/FilterGrid';
// import { FilterList } from '@/components/atomic/atoms/Filter/FilterList';
import { Sort } from '@/components/atomic/atoms/Filter/Sort';
import { MarketFilter } from './MarketFilter';

const FilterSection = () => {
  return (
    <div className="mt-9 flex flex-col gap-4 md:mt-0">
      <div className="block text-2xl font-semibold text-[#323E40] md:hidden">Məhsullar</div>
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex-1">
          <MarketFilter />
        </div>
        <div className="flex items-center gap-2.5">
          {/* <div className="hidden md:block">
            <FilterGrid />
          </div>
          <div className="hidden md:block">
            <FilterList />
          </div> */}
          <Sort />
        </div>
      </div>
    </div>
  );
};

export { FilterSection };
