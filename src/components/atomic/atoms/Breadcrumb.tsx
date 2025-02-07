import { cn } from '@lib/utils';
import Link from 'next/link';
import { HTMLAttributes } from 'react';

interface BreadcrumbProps extends HTMLAttributes<HTMLDivElement> {
  items: {
    name: string;
    href: string;
  }[];
  current: string;
}

const Breadcrumb = ({ current, items, className, ...props }: BreadcrumbProps) => {
  return (
    <div
      {...props}
      className={cn('flex items-center gap-1 text-sm text-breadcrumb-text', className)}>
      {items.map((item) => (
        <>
          <Link
            key={item.href}
            href={item.href}>
            {item.name}
          </Link>
          <span className="mx-1">/</span>
        </>
      ))}
      <span className="text-sm font-semibold text-breadcrumb-text">{current}</span>
    </div>
  );
};

export { Breadcrumb };
