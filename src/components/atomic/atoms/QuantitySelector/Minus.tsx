import { Button } from 'react-aria-components';

const Minus = ({ ...props }) => {
  return (
    <Button
      {...props}
      className="grid h-7 w-7 place-items-center rounded-md bg-white focus:outline-none">
      <div className="w-3 rounded-full border-[1.4px] border-[#666666] bg-[#666666]"></div>
    </Button>
  );
};

export { Minus };
