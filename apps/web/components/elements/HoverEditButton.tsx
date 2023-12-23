'use client';

import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

type Props = {
  children: React.ReactNode;
  clickHandler: () => void;
  className?: string;
};

const HoverEditButton = (props: Props) => {
  const { children, clickHandler, className } = props;

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
          {children}
          <div>
            {isHovered && (
              <button className={`absolute ${className}`} onClick={clickHandler}>
                <FontAwesomeIcon icon={faEdit} size="xl" />
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default HoverEditButton;
