'use client';

import { DndContext, DragOverEvent } from '@dnd-kit/core';
import { SortableContext } from '@dnd-kit/sortable';
import { useState } from 'react';
import Draggable from './_components/Draggable';

const Page = () => {
  const [items, setItems] = useState(['1', '2', '3', '4']);

  const reorderArray = (array: string[], active: string, over: string) => {
    const activeIndex = array.indexOf(active);
    const overIndex = array.indexOf(over);

    if (activeIndex === -1 || overIndex === -1) {
      throw new Error('要素が配列内に存在しません。');
    }

    const newArray = [...array];
    newArray.splice(activeIndex, 1);
    newArray.splice(overIndex, 0, active);

    return newArray;
  };

  const handleDragOver = (event: DragOverEvent) => {
    const { over, active } = event;

    if (over && active && over.id !== active.id) {
      setItems(reorderArray(items, active.id as string, over.id as string));
    }
  };

  return (
    <DndContext onDragOver={handleDragOver}>
      <div>
        <SortableContext items={items}>
          {items.map((item) => (
            <Draggable key={item} id={item} />
          ))}
        </SortableContext>
      </div>
    </DndContext>
  );
};

export default Page;
