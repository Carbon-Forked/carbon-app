import { FC } from 'react';

interface Props {
  className?: string;
  strokeWidth?: string;
}

// Aureus loading animation that traces the actual outline of the geometric "A" from A_Logo.svg
// Follows the perimeter of the thick geometric shapes to create proper stroke animation
export const AureusLogoLoading: FC<Props> = ({
  className = '',
  strokeWidth = '7',
}) => {
  return (
    <>
      <style>
        {`
				@keyframes aureusVertical2000 {
					0% { stroke-dashoffset: 2000; }
					25% { stroke-dashoffset: 0; }
					75% { stroke-dashoffset: 0; }
					100% { stroke-dashoffset: 2000; }
				}

				@keyframes aureusVertical300 {
					0% { stroke-dashoffset: 300; }
					25% { stroke-dashoffset: 0; }
					75% { stroke-dashoffset: 0; }
					100% { stroke-dashoffset: 300; }
				}

				@keyframes aureusHorizontal1200 {
					0% { stroke-dashoffset: 1200; }
					25% { stroke-dashoffset: 1200; }
					50% { stroke-dashoffset: 0; }
					75% { stroke-dashoffset: 1200; }
					100% { stroke-dashoffset: 1200; }
				}

				@keyframes aureusHorizontal1300 {
					0% { stroke-dashoffset: 1300; }
					25% { stroke-dashoffset: 1300; }
					50% { stroke-dashoffset: 0; }
					75% { stroke-dashoffset: 1300; }
					100% { stroke-dashoffset: 1300; }
				}
				`}
      </style>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 424 697"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="Loading"
      >
        {/* Left side of A */}
        <path
          d="M209.34 0L1.21997 685.02L61.5729 684.739L210.25 195.567"
          style={{
            strokeDasharray: 2000,
            strokeDashoffset: 2000,
            animation: 'aureusVertical2000 6s ease-in-out infinite',
          }}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Right side of A */}
        <path
          d="M209.34 0L423.905 683.054L363.471 683.335L210.25 195.567"
          style={{
            strokeDasharray: 2000,
            strokeDashoffset: 2000,
            animation: 'aureusVertical2000 6s ease-in-out infinite',
          }}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Left bottom edge detail */}
        <path
          d="M5.58032 696.097L1.21997 685.02L61.5729 684.739L5.58032 696.097Z"
          style={{
            strokeDasharray: 300,
            strokeDashoffset: 300,
            animation: 'aureusVertical300 6s ease-in-out infinite',
          }}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Right bottom edge detail */}
        <path
          d="M423.905 683.054L419.637 694.2L363.471 683.335L423.905 683.054Z"
          style={{
            strokeDasharray: 300,
            strokeDashoffset: 300,
            animation: 'aureusVertical300 6s ease-in-out infinite',
          }}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Upper crossbar */}
        <path
          d="M53.1387 354.043L35.5879 411.788L386.997 410.153L368.91 352.574L53.1387 354.043Z"
          style={{
            strokeDasharray: 1200,
            strokeDashoffset: 1200,
            animation: 'aureusHorizontal1200 6s ease-in-out infinite',
          }}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Lower crossbar */}
        <path
          d="M17.5508 469.624L0 527.37L422.685 525.403L404.598 467.824L17.5508 469.624Z"
          style={{
            strokeDasharray: 1300,
            strokeDashoffset: 1300,
            animation: 'aureusHorizontal1300 6s ease-in-out infinite',
          }}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};
