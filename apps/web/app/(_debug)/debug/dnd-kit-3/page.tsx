'use client';

import { DragEndEvent, DragStartEvent } from '@dnd-kit/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC, useCallback, useState } from 'react';
import { DraggableHandle, DraggableItem, DraggableList } from './_components/DraggableList';

// リソース:商品の型
type Product = {
  id: string;
  name: string;
  price: number;
};

const Products = [
  {
    id: '1',
    name: '商品1',
    price: 100
  },
  {
    id: '2',
    name: '商品2',
    price: 200
  },
  {
    id: '3',
    name: '商品3',
    price: 300
  }
];

// 商品を表示するリストアイテム
const ProductItem: FC<{
  product: Product;
}> = ({ product }) => (
  <DraggableItem id={product.id}>
    <div className="m-4 h-[100px] w-[200px] items-center rounded-md border-2 p-2 shadow-sm">
      <div className="flex space-x-4">
        <DraggableHandle id={product.id}>
          <FontAwesomeIcon icon={faBars} className="m-4" size="lg" />
        </DraggableHandle>
        <p>{product.name}</p>
        <p>¥ {product.price}</p>
      </div>
    </div>
  </DraggableItem>
);

// ドラッグ&ドロップ可能な商品リスト
const Page = () => {
  // 一覧表示する商品群
  const [products, setProducts] = useState<Product[]>(Products);

  const onDragStart = useCallback((e: DragStartEvent) => {
    console.log('onDragStart', e);
  }, []);

  const onDragEnd = useCallback((e: DragEndEvent) => {
    console.log('onDragEnd', e);
  }, []);

  return (
    <DraggableList
      items={products}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      layout={'vertical'}
    >
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </DraggableList>
  );
};

export default Page;
