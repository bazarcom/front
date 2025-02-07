'use client';

import { cn } from '@lib/utils';
import type { FC, ReactNode } from 'react';
import { Form } from 'react-aria-components';

type SearchFormProps = {
  children: ReactNode;
  className?: string;
};

const SearchForm: FC<SearchFormProps> = ({ children, className = '' }) => {
  return (
    <Form
      className={cn({
        'flex items-center': true,
        [className]: true,
      })}>
      {children}
    </Form>
  );
};

export { SearchForm };
