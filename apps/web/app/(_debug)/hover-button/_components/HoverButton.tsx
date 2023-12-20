'use client';

import { Button } from '@/components/elements/Button';
import { useState } from 'react';

type Props = {
  children: React.ReactNode;
  clickHandler: () => void;
};

const HoverButton = (props: Props) => {
  const { children, clickHandler } = props;

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="relative flex items-center">
          {children}
          <div>
            {isHovered && (
              <Button className="absolute right-10 top-5" onClick={clickHandler}>
                Button
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default HoverButton;
