import { memo, SVGProps } from 'react';

const GroupIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 101 40' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M81 0H20C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40H81C92.0457 40 101 31.0457 101 20C101 8.9543 92.0457 0 81 0Z'
      fill='white'
    />
  </svg>
);

const Memo = memo(GroupIcon);
export { Memo as GroupIcon };
