import { aboutInfo } from '@constants/about-info';
import { AboutUsInfo } from '@molecules/AboutUsInfo';

const AboutInfo = () => {
  return (
    <section className="py-[64px]">
      <div className="container">
        <ul className="flex flex-col gap-20 md:gap-[128px]">
          {aboutInfo.map((info) => (
            <li key={info.id}>
              <AboutUsInfo
                img={info.img}
                content={info.content}
                infoTitle={info.infoTitle}
                tag={info.tag}
                isReverse={info.isReverse}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export { AboutInfo };
