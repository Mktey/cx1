import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 375 812' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M375 0H0V812H375V0Z' fill='#FAFAFA' />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
