import { usePathname, useRouter } from 'next/navigation';

import { useQueryString } from './useQueryString';

type handleClickType = {
  name: string;
  key: string;
};

const useParamPath = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { createQueryString } = useQueryString();

  const handleClick = ({ name, key }: handleClickType) => {
    router.push(pathname + '?' + createQueryString(name, key), { scroll: false });
  };

  return handleClick;
};

export { useParamPath };
