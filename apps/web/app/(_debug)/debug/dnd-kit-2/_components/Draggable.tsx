import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { FC } from 'react';

type Props = {
  id: string;
};

const Draggable: FC<Props> = ({ id }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: id
  });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  };
  return (
    <button
      className="my-2 flex h-[40px] w-[400px] items-center rounded border-2 p-2 shadow-md"
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
    >
      <p>{id}</p>
    </button>
  );
};

export default Draggable;
