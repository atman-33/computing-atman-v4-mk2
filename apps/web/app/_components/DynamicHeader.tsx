'use client';

import Header from '@/components/layouts/Header';
import { useIsHeaderVisible } from '@/hooks/useIsHeaderVisible';

const DynamicHeader = () => {
  const { isHeaderVisible } = useIsHeaderVisible();

  return (
    <div className={`${isHeaderVisible ? 'block' : 'hidden'}`}>
      <Header />
    </div>
  );
};

export default DynamicHeader;
