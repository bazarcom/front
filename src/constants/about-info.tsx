import { pacifico, poppins } from '@constants/fonts';

export const aboutInfo = [
  {
    id: 1,
    tag: 'Haqqımızda',
    infoTitle: (
      <h1 className={`${poppins.className} text-[2rem] font-semibold`}>
        Ən Ucuz Qiymətləri Tap, Ağıllı Alış-Veriş Et! <span className={`${pacifico.className} text-4xl font-semibold text-about-hero-important-text`}>Müqayisə Et, Qənaət Et</span>
      </h1>
    ),
    img: '/about-us-info/info-1.png',
    content:
      'Bizim əsas məqsədimiz alış-veriş təcrübəsini daha sadə və effektiv edərək, hər kəsin ən yaxşı qiymətləri tapmasını təmin etməkdir. Biz, gündəlik təzələnən məlumatlar və dəqiq müqayisələr təqdim edərək, sizin alış-verişinizi daha ağıllı və qənaətcil etməyi hədəfləyirik.',
    isReverse: true,
  },
  {
    id: 2,
    tag: 'Lorem ipsum',
    infoTitle: (
      <h1 className={`${poppins.className} text-[2rem] font-semibold`}>
        Ən Ucuz Qiymətləri Tap, Ağıllı Alış-Veriş Et! <span className={`${pacifico.className} text-4xl font-semibold text-about-hero-important-text`}>Müqayisə Et, Qənaət Et</span>
      </h1>
    ),
    img: '/about-us-info/info-2.png',
    content:
      'Bizim əsas məqsədimiz alış-veriş təcrübəsini daha sadə və effektiv edərək, hər kəsin ən yaxşı qiymətləri tapmasını təmin etməkdir. Biz, gündəlik təzələnən məlumatlar və dəqiq müqayisələr təqdim edərək, sizin alış-verişinizi daha ağıllı və qənaətcil etməyi hədəfləyirik.',
    isReverse: false,
  },
];
