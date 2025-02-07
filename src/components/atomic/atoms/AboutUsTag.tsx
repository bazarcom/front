import { cn } from '@lib/utils';
import type { HTMLAttributes } from 'react';

const AboutUsTag = ({ children, className, ...props }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      {...props}
      className={cn('text-about-us-tag-text w-fit rounded-[33px] bg-about-us-tag-bg px-3 py-2', className)}>
      <span className="bg-gradient-text bg-clip-text text-transparent">{children}</span>
    </div>
  );
};

export { AboutUsTag };
