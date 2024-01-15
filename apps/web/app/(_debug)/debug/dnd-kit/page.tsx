'use client';

import { DndContext } from '@dnd-kit/core';
import { useState } from 'react';
import { Draggable } from './_components/Draggable';
import { Droppable } from './_components/Droppable';

const Page = () => {
  // ドロップカウント
  const [dropCount, setDropCount] = useState(0);
  return (
    <div>
      <div className="flex flex-col items-center">
        <DndContext
          onDragEnd={(event) => {
            const { over } = event;
            if (over == null) {
              return;
            }
            setDropCount((x) => x + 1);
          }}
        >
          <div className="m-4 text-black">
            <Draggable id="draggableA" label="ドラッグブロック" />
          </div>
          <div className="m-4 text-black">
            <Droppable id="dropAreaA">{dropCount}回ドロップしたぜ</Droppable>
          </div>
        </DndContext>
      </div>
    </div>
  );
};

export default Page;
