import { cn } from '@lib/utils';
import type { HTMLAttributes } from 'react';

const DividingLine = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      {...props}
      className={cn(`h-[1px] w-full bg-divider`, className)}></div>
  );
};

export { DividingLine };
