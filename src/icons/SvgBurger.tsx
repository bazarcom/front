import { SvgProps } from './type';

const SvgBurger: SvgProps = (props) => {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3 7H21"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M3 12H21"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M3 17H21"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export { SvgBurger };
