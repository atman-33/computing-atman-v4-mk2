import { useDroppable } from '@dnd-kit/core';
import { FC, ReactNode } from 'react';

type DroppableProp = {
  children: ReactNode;
  id: string;
};

export const Droppable: FC<DroppableProp> = ({ children, id }) => {
  const { setNodeRef, isOver } = useDroppable({
    id
  });

  return (
    <div
      ref={setNodeRef}
      className="h-[300px] w-48 border border-black p-2"
      style={{ backgroundColor: isOver ? 'lightgreen' : 'white' }}
    >
      <div className="">
        <div className="font-bold text-black">ドロップエリア</div>
        {children}
      </div>
    </div>
  );
};
