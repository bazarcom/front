import { pacifico, poppins } from '@constants/fonts';

export const aboutInfo = [
  {
    id: 1,
    tag: 'Haqqımızda',
    infoTitle: (
      <h1 className={`${poppins.className} text-[2rem] font-semibold`}>
        Niyə Biz <span className={`${pacifico.className} text-4xl font-semibold text-about-hero-important-text`}>Varıq?</span>
      </h1>
    ),
    img: '/about-us-info/info-1.png',
    content:
      'Pula qənaət etmək üçün bir neçə mağazaya baş çəkməyin, və ya endirim kataloqlarını bir-bir araşdırmağın nə qədər əsəbi ola biləcəyini bilirik. Buna görə də biz bazarlığı asanlaşdırmaq, daha ağıllı və sərfəli etmək üçün Bazarkom.az-ı yaratdıq. Bir neçə kliklə siz marketlərdəki qiymətləri müqayisə edə, alış-veriş siyahınızı yarada və alışlarınızı daha səmərəli şəkildə planlaşdıra bilərsiniz.',
    isReverse: true,
  },
  {
    id: 2,
    tag: 'Haqqımızda',
    infoTitle: (
      <h1 className={`${poppins.className} text-[2rem] font-semibold`}>
        Missiyamız
      </h1>
    ),
    img: '/about-us-info/info-2.png',
    content:
      'Digər platformalardan fərqli olaraq, biz məhsul satmırıq – biz sizə məlumatların gücünü veririk. Məqsədimiz hər bir alıcıya qiymət şəffaflığını çatdırmaq, vaxtına və puluna qənaət etməklə sərfəli qərarlar verməyə kömək etməkdir.',
    isReverse: false,
  },
];
