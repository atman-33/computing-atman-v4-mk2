import { ReactNode } from 'react';

interface ContainerProps {
  className?: string;
  children: ReactNode;
}

const Container = (props: ContainerProps) => {
  return (
    <div className={`container mx-auto p-8 xl:px-0 ${props.className ?? ''}`}>{props.children}</div>
  );
};

export default Container;
