import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  UniqueIdentifier,
  closestCenter,
  useSensor,
  useSensors
} from '@dnd-kit/core';
import {
  SortableContext,
  horizontalListSortingStrategy,
  rectSortingStrategy,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { ComponentProps, FC, ReactNode, useMemo } from 'react';

export interface HasId {
  id: UniqueIdentifier;
}

type Props<T extends HasId> = {
  items: T[];
  onDragStart: ComponentProps<typeof DndContext>['onDragStart'];
  onDragEnd: ComponentProps<typeof DndContext>['onDragEnd'];
  layout: 'horizontal' | 'vertical' | 'grid';
  children: ReactNode;
};
// ドラッグ&ドロップ可能なリストアイテム
export const DraggableList: FC<Props<HasId>> = ({
  items,
  onDragStart,
  onDragEnd,
  layout,
  children
}) => {
  // ドラッグ&ドロップする時に許可する入力
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates
    })
  );

  // リストの種類
  const strategy = useMemo(() => {
    switch (layout) {
      case 'horizontal':
        return horizontalListSortingStrategy;
      case 'vertical':
        return verticalListSortingStrategy;
      case 'grid':
      default:
        return rectSortingStrategy;
    }
  }, [layout]);

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    >
      <SortableContext items={items} strategy={strategy}>
        <ul>{children}</ul>
      </SortableContext>
    </DndContext>
  );
};

// ドラッグ&ドロップ可能なリストアイテム
export const DraggableItem: FC<{
  id: HasId['id'];
  children: ReactNode;
}> = ({ id, children }) => {
  const { setNodeRef, transform, transition } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  };

  return (
    <li ref={setNodeRef} style={style}>
      {children}
    </li>
  );
};

// MyDraggableItemをドラッグ&ドロップするためのハンドル
export const DraggableHandle: FC<{
  id: HasId['id'];
  children: ReactNode;
}> = ({ id, children }) => {
  const { attributes, listeners } = useSortable({ id });

  return (
    <div {...attributes} {...listeners}>
      {children}
    </div>
  );
};
