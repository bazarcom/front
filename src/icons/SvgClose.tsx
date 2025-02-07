import { SvgProps } from './type';

const SvgClose: SvgProps = (props) => {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18.75 5.25L5.25 18.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.75 18.75L5.25 5.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export { SvgClose };
