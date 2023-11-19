import { memo, SVGProps } from 'react';

const GroupIcon3 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 221 54' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M195 0H26C11.6406 0 0 11.6406 0 26V28C0 42.3594 11.6406 54 26 54H195C209.359 54 221 42.3594 221 28V26C221 11.6406 209.359 0 195 0Z'
      fill='#31709B'
    />
  </svg>
);

const Memo = memo(GroupIcon3);
export { Memo as GroupIcon3 };
