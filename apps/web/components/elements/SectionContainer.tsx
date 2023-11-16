import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function SectionContainer({ children }: Props) {
  return (
    <section className="mx-auto max-w-full px-4 sm:px-6 md:max-w-3xl xl:max-w-5xl xl:px-0">
      {children}
    </section>
  );
}
