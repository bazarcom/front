import { FC, ReactNode } from 'react';

type FAQCardProps = {
  icon: ReactNode;
  iconBgColor: string;
  title: string;
  text: string;
};

const FAQCard: FC<FAQCardProps> = ({ icon, iconBgColor, title, text }) => {
  return (
    <div className="flex flex-col gap-6 rounded-lg border border-black/10 bg-white p-6">
      <div
        style={{
          backgroundColor: iconBgColor,
        }}
        className="grid h-10 w-10 place-items-center rounded-md">
        {icon}
      </div>
      <div className="text-base font-semibold text-[#131313]">{title}</div>
      <div className="font-regular text-sm text-[#131313]/50">{text}</div>
    </div>
  );
};

export { FAQCard };
