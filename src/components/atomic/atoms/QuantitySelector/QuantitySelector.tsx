import { FC } from 'react';

import { Minus } from './Minus';
import { Plus } from './Plus';

export type QuantitySelectorProps = {
  value?: number;
  onInc?: () => void;
  onDec?: () => void;
};

const QuantitySelector: FC<QuantitySelectorProps> = ({ value = 1, onInc, onDec }) => {
  return (
    <>
      <div className="flex h-fit w-fit items-center gap-2 rounded bg-[#DAF9E5] px-3 py-2 shadow-[0px_4px_25px_0px_rgba(0,0,0,0.07)]">
        <Minus onPress={onDec} />
        <QuantityNumber value={value} />
        <Plus onPress={onInc} />
      </div>
    </>
  );
};

const QuantityNumber = ({ value }: { value: number }) => {
  return <div className="min-w-12 text-center text-base font-medium text-[#030712]">{value}</div>;
};

export { QuantitySelector };
