import { FAQCard } from '@molecules/FAQCard';

import { poppins } from '@/constants/fonts';

const FAQs = () => {
  return (
    <div className={`${poppins.className} container`}>
      <FAQTitle title="Ən çox verilən suallar" />
      <div className="grid grid-cols-1 grid-rows-1 gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
        <FAQCard
          icon={<></>}
          iconBgColor="#FFF4EC"
          title={`Lorem ipsum lorem lorem, Lorem ipsum lorem lorem?`}
          text={`Yes, Including training sessions, tutorials, documentation, and customer support channels, to assist users in maximizing the platform's capabilities.`}
        />
        <FAQCard
          icon={<></>}
          iconBgColor="rgba(0,168,116,0.1)"
          title={`Lorem ipsum lorem lorem, Lorem ipsum lorem lorem?`}
          text={`Yes, Including training sessions, tutorials, documentation, and customer support channels, to assist users in maximizing the platform's capabilities.`}
        />
        <FAQCard
          icon={<></>}
          iconBgColor="rgba(246,156,246,0.1)"
          title={`Lorem ipsum lorem lorem, Lorem ipsum lorem lorem?`}
          text={`Yes, Including training sessions, tutorials, documentation, and customer support channels, to assist users in maximizing the platform's capabilities.`}
        />
        <FAQCard
          icon={<></>}
          iconBgColor="rgba(0,168,116,0.1)"
          title={`Lorem ipsum lorem lorem, Lorem ipsum lorem lorem?`}
          text={`Yes, Including training sessions, tutorials, documentation, and customer support channels, to assist users in maximizing the platform's capabilities.`}
        />
        <FAQCard
          icon={<></>}
          iconBgColor="rgba(157,122,255,0.1)"
          title={`Lorem ipsum lorem lorem, Lorem ipsum lorem lorem?`}
          text={`Yes, Including training sessions, tutorials, documentation, and customer support channels, to assist users in maximizing the platform's capabilities.`}
        />
        <FAQCard
          icon={<></>}
          iconBgColor="rgba(255,137,61,0.1)"
          title={`Lorem ipsum lorem lorem, Lorem ipsum lorem lorem?`}
          text={`Yes, Including training sessions, tutorials, documentation, and customer support channels, to assist users in maximizing the platform's capabilities.`}
        />
      </div>
    </div>
  );
};

const FAQTitle = ({ title }: { title: string }) => {
  return <div className="mb-7 text-center text-[32px] font-semibold text-[#000A38] md:mb-9">{title}</div>;
};

export { FAQs };
