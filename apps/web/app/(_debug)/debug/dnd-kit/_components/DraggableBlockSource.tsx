import { FC } from 'react';

type DraggableBlockSourceType = {
  isDragging?: boolean;
  label: string;
};

export const DraggableBlockSource: FC<DraggableBlockSourceType> = ({ isDragging, label }) => {
  return (
    <div
      style={{
        textAlign: 'center',
        padding: 20,
        border: 'solid 1px black',
        backgroundColor: '#fff',
        userSelect: 'none',
        cursor: isDragging ? 'grabbing' : 'grab',
        opacity: isDragging ? 0.5 : undefined,
        width: 'fit-content'
      }}
    >
      {label}
    </div>
  );
};
