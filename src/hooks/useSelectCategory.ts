import { useRouter, useSearchParams } from 'next/navigation';

const useSelectCategory = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const setCategory = (categoryGroup: string, category: string): void => {
    // Создаем объект URLSearchParams из текущих параметров URL
    const params = new URLSearchParams(searchParams?.toString());

    params.set('page', '1');
    params.set('name', '');

    // Получаем текущее значение параметра для выбранной группы
    const currentCategory = params.get(categoryGroup);

    // Если выбранная категория уже установлена, удаляем параметр (снимаем выбор)
    if (currentCategory === category) {
      params.delete(categoryGroup);
    } else {
      // Иначе устанавливаем выбранную категорию, перезаписывая существующее значение
      params.set(categoryGroup, category);
    }

    // Перенаправляем на новый URL с обновлёнными параметрами, без скроллинга
    router.push(`?${params.toString()}`, {
      scroll: false,
    });
  };

  /**
   * Функция для проверки, установлена ли выбранная категория для группы.
   *
   * @param categoryGroup - Название группы категорий (ключ параметра)
   * @param category - Категория для проверки
   * @returns true, если выбранная категория соответствует установленной, иначе false.
   */
  const isCategoryExists = (categoryGroup: string, category: string): boolean => {
    // Создаем объект URLSearchParams из текущих параметров URL
    const params = new URLSearchParams(searchParams?.toString());

    // Сравниваем текущее значение параметра с выбранной категорией
    return params.get(categoryGroup) === category;
  };

  // const setCategory = (categoryGroup: string, category: string): void => {
  //   const params = new URLSearchParams(searchParams?.toString());
  //
  //   // Get existing categories from the selected group
  //   const existingCategories = params.get(categoryGroup)?.split(',') || [];
  //
  //   // Check if the category already exists
  //   const categoryIndex = existingCategories.indexOf(category);
  //
  //   if (categoryIndex !== -1) {
  //     // If it exists, remove the category
  //     existingCategories.splice(categoryIndex, 1);
  //   } else {
  //     // If it doesn't exist, add the category
  //     existingCategories.push(category);
  //   }
  //
  //   // If the group is empty after removing, delete the param entirely
  //   if (existingCategories.length > 0) {
  //     params.set(categoryGroup, existingCategories.join(','));
  //   } else {
  //     params.delete(categoryGroup);
  //   }
  //
  //   // Navigate to the updated URL with the new search params
  //   router.push(`?${params.toString()}`, {
  //     scroll: false,
  //   });
  // };
  //
  // const isCategoryExists = (categoryGroup: string, category: string): boolean => {
  //   const params = new URLSearchParams(searchParams?.toString());
  //   const existingCategories = params.get(categoryGroup)?.split(',') || [];
  //
  //   return existingCategories.includes(category);
  // };

  return { setCategory, isCategoryExists };
};

export { useSelectCategory };
