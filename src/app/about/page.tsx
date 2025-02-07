import { Breadcrumb } from '@atoms/Breadcrumb';
import { AboutHero } from '@organisms/AboutHero';
import { AboutInfo } from '@organisms/AboutInfo';

const AboutUsPage = () => {
  return (
    <main>
      <div className="hidden w-full bg-breadcrumb-bg md:flex lg:py-2">
        <div className="container">
          <Breadcrumb
            current="Haqqımızda"
            items={[{ href: '/', name: 'Ana səhifə' }]}
          />
        </div>
      </div>
      <AboutHero />
      <AboutInfo />
    </main>
  );
};

export default AboutUsPage;
