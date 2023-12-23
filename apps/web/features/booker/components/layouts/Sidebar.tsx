import { ScrollArea } from '@/components/elements/ScrollArea';
import { ReactNode } from 'react';

const Sidebar = ({ children }: { children: ReactNode }) => {
  return (
    <div className="border-r-2">
      <ScrollArea className="h-[60vh]">{children}</ScrollArea>
    </div>
  );
};

export default Sidebar;
