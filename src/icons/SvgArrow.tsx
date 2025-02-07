import { SvgProps } from './type';

const SvgArrow: SvgProps = (props) => {
  return (
    <svg
      {...props}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.91016 20.42L15.4302 13.9C16.2002 13.13 16.2002 11.87 15.4302 11.1L8.91016 4.58002"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export { SvgArrow };
