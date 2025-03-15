import { SearchForm } from '@atoms/SearchForm';
import type { FC, ReactNode } from 'react';

type SearchWidgetProps = {
  // I will pass there an endpoint of the search. It can be changed based on the requirements.
  // For example, it can be a search endpoint for products, blogs, etc.
  searchEndpoint?: string;
  formContent: ReactNode;
  className?: string;
};

const SearchWidget: FC<SearchWidgetProps> = ({ formContent, className }) => {
  // Here will be placed custom hook(or just handler. This approach
  // is even better, cuz we will not use the useEffect hook) for handling
  // the search form submission.

  return <SearchForm  className={className}>{formContent}</SearchForm>;
};

export { SearchWidget };
