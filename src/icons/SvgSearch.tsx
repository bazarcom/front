import { SvgProps } from './type';

const SvgSearch: SvgProps = (props) => {
  return (
    <svg
      {...props}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_159_515)">
        <path
          d="M16.6496 16.65L12.6927 12.6931M1.34961 7.9448C1.34961 4.30258 4.30221 1.34998 7.94444 1.34998C11.5867 1.34998 14.5393 4.30258 14.5393 7.9448C14.5393 11.587 11.5867 14.5396 7.94444 14.5396C4.30221 14.5396 1.34961 11.587 1.34961 7.9448Z"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_159_515">
          <rect
            width="18"
            height="18"
            fill="white"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export { SvgSearch };
