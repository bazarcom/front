import { nextui } from '@nextui-org/theme';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/atomic/**/*.{js,ts,jsx,tsx,mdx}',
    './src/icons/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/components/(button|pagination|code|input).js',
  ],
  theme: {
    container: {
      center: true,
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1240px',
      },
      padding: '1.25rem',
    },
    extend: {
      colors: {
        hero: '#DBFFED',
        search: '#F79219',
        category: {
          name: '#030712',
          icon: '#F8FCFB',
          label: '#384648',
          divider: '#F2F0FF',
          'selected-bg': '#EEFFFA',
          'selected-text': '#1CA87E',
          text: '#3E4E50',
          border: '#F6F6F6',
        },
        basket: {
          'product-border': '#E6E6E6',
          'product-img-border': '#C3C8C9',
          'product-name': '#1B1B1B',
          'product-unit': '#838383',
          'product-highest-price': '#9198A2',
          total: '#475569',
          'main-text': '#121212',
          price: '#FF6726',
        },
        'go-back': '#626973',
        divider: '#E2E4E5',
        breadcrumb: {
          text: '#237943',
          bg: '#F7FFFA',
        },
        'about-us-tag': {
          bg: '#FFE9E7',
        },
        'about-hero': {
          'important-text': '#FF5D17',
        },
      },
      fontSize: {
        'base-lg': '1.125rem', // 18 px
        lg: '1.5rem', // 24 px
        '3xl': '2.25rem', // 36 px
      },
      boxShadow: {
        heroInput: '0px 1px 4px 0px rgba(25, 33, 61, 0.08)',
      },
      screens: {
        xs: '375px',
      },
      backgroundImage: {
        'gradient-text': 'linear-gradient(87deg, #EF7816 -9.51%, #E56823 40.64%, #D10028 127.45%)',
      },
    },
  },
  plugins: [nextui()],
};

export default config;
