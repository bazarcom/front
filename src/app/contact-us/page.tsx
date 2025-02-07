import { FAQs } from '@/components/atomic/organisms/ContactUs/FAQs';
import { HeroContactUs } from '@/components/atomic/organisms/ContactUs/HeroContactUs';

const Page = () => {
  return (
    <div className="bg-[#FEF8F5] pb-16 md:pb-[120px]">
      <HeroContactUs />
      <div className="relative z-20">
        <FAQs />
      </div>
    </div>
  );
};

export default Page;
