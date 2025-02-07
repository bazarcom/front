import { FC } from 'react';
import { Button } from 'react-aria-components';

import { SvgClose } from '@/icons/SvgClose';

export type ModalHeadingProps = {
  title: string;
  handleClose: () => void;
};

const ModalHeading: FC<ModalHeadingProps> = ({ title, handleClose }) => {
  return (
    <>
      <div className="flex w-full items-center justify-between">
        <div className="text-xl font-semibold text-[#1E285F]">{title}</div>
        <Button
          className="rounded p-1 transition hover:bg-[#292D32]/10 focus:outline-none"
          onPress={handleClose}>
          <SvgClose className="h-4 w-4 stroke-[#292D32] stroke-[3px]" />
        </Button>
      </div>
    </>
  );
};

export { ModalHeading };
