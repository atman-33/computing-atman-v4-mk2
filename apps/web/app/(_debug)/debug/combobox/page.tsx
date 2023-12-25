'use client';

import { Combobox } from '@/components/elements/Combobox';
import { useState } from 'react';

const frameworks = [
  {
    value: 'next.js',
    label: 'Next.js'
  },
  {
    value: 'sveltekit',
    label: 'SvelteKit'
  },
  {
    value: 'nuxt.js',
    label: 'Nuxt.js'
  },
  {
    value: 'remix',
    label: 'Remix'
  },
  {
    value: 'astro',
    label: 'Astro'
  }
];

const Page = () => {
  const [item, setItem] = useState({ value: 'next.js', label: 'Next.js' });

  return (
    <div className="flex flex-col gap-4">
      <Combobox items={frameworks} selectedItem={item} setSelectedItem={setItem} />
      <div>{`Value: ${item.value}`}</div>
    </div>
  );
};

export default Page;
