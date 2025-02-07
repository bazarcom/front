import { useCallback, useState } from 'react';

const useCategoryState = (initialState: string) => {
  const [isOpen, setIsOpen] = useState<string>(initialState);

  const toggleCategory = useCallback((label: string) => {
    setIsOpen((prev) => (prev === label ? '' : label));
  }, []);

  return { isOpen, toggleCategory };
};

export { useCategoryState };
