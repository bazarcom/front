import { useRouter, useSearchParams } from 'next/navigation';

import { logger } from '@/lib/logger';

const useSelectCategory = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const setCategory = (categoryGroup: string, category: string): void => {
    const params = new URLSearchParams(searchParams?.toString());

    params.set('page', '1');

    const existingCategories = params.get(categoryGroup)?.split(',').filter(Boolean) || [];
    const categoryIndex = existingCategories.indexOf(category);

    if (categoryIndex !== -1) {
      existingCategories.splice(categoryIndex, 1);
    } else {
      existingCategories.push(category);
    }

    if (existingCategories.length > 0) {
      params.set(categoryGroup, existingCategories.join(','));
    } else {
      params.delete(categoryGroup);
    }

    logger.log('Setting category:', categoryGroup, '=', category);
    logger.log('Final URL params:', params.toString());

    router.push(`?${params.toString()}`, {
      scroll: false,
    });
  };

  const isCategoryExists = (categoryGroup: string, category: string): boolean => {
    const params = new URLSearchParams(searchParams?.toString());
    const existingCategories = params.get(categoryGroup)?.split(',').filter(Boolean) || [];

    return existingCategories.includes(category);
  };

  return { setCategory, isCategoryExists };
};

export { useSelectCategory };
