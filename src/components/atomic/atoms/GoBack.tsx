'use client';

import { SvgShortArrow } from '@icons/SvgShortArrow';
import { cn } from '@lib/utils';
import { useRouter } from 'next/navigation';
import type { HTMLAttributes } from 'react';

const GoBack = ({ className, ...props }: HTMLAttributes<HTMLButtonElement>) => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <button
      {...props}
      onClick={handleGoBack}
      className={cn(`flex items-center gap-3`, className)}>
      <SvgShortArrow
        width={24}
        height={24}
        fill="#9198A2"
      />
      <span className="text-base-lg font-semibold text-go-back">Geri</span>
    </button>
  );
};

export { GoBack };
