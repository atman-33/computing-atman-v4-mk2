import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function SectionContainer({ children }: Props) {
  return (
    <section className="mx-auto max-w-full px-4 sm:px-6 md:max-w-5xl md:px-8 xl:max-w-7xl">
      {children}
    </section>
  );
}
