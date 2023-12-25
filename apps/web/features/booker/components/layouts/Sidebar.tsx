import { ScrollArea } from '@/components/elements/ScrollArea';
import { ReactNode } from 'react';

const Sidebar = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <ScrollArea className="h-[70vh]">{children}</ScrollArea>
    </div>
  );
};

export default Sidebar;
