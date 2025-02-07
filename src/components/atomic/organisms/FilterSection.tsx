import { FilterGrid } from '@/components/atomic/atoms/Filter/FilterGrid';
import { FilterList } from '@/components/atomic/atoms/Filter/FilterList';
import { Sort } from '@/components/atomic/atoms/Filter/Sort';

const FilterSection = () => {
  return (
    <div className="mt-9 flex items-center justify-between gap-4 md:mt-0 md:justify-end">
      <div className="block text-2xl font-semibold text-[#323E40] md:hidden">Məhsullar</div>
      <div className="hidden md:block">
        <FilterGrid />
      </div>
      <div className="hidden md:block">
        <FilterList />
      </div>
      <Sort />
    </div>
  );
};

export { FilterSection };
