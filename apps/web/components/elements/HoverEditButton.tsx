'use client';

import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

type Props = {
  children: React.ReactNode;
  clickHandler: () => void;
};

const HoverEditButton = (props: Props) => {
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
        <div className="relative">
          {children}
          <div>
            {isHovered && (
              <button className="absolute right-10 top-2" onClick={clickHandler}>
                <FontAwesomeIcon icon={faEdit} size="2xl" />
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default HoverEditButton;
