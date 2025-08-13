import { FC } from 'react';

interface AureusLogoProps {
  className?: string;
  alt?: string;
}

export const AureusLogo: FC<AureusLogoProps> = ({
  className,
  alt = 'Aureus',
}) => {
  return <img src="/aureus.svg" alt={alt} className={className} />;
};
