'use client';

import { Children, useState } from 'react';

const HoverButton2 = ({ children }: { children: React.ReactNode[] }) => {
  const childrenArray = Children.toArray(children);

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
        <div className="relative">
          {childrenArray[0]}
          <div>{isHovered && <div>{childrenArray[1]}</div>}</div>
        </div>
      </div>
    </>
  );
};

export default HoverButton2;
