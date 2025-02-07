import { Button } from 'react-aria-components';

const Plus = ({ ...props }) => {
  return (
    <Button
      {...props}
      className="relative h-7 w-7 rounded-md bg-white focus:outline-none">
      <div className="absolute left-1/2 top-1/2 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-[1.4px] border-[#666666] bg-[#666666]"></div>
      <div className="absolute left-1/2 top-1/2 w-3 -translate-x-1/2 -translate-y-1/2 rotate-90 rounded-full border-[1.4px] border-[#666666] bg-[#666666]"></div>
    </Button>
  );
};

export { Plus };
