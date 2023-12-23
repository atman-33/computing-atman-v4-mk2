'use client';

import { Button } from '@/components/elements/Button';
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-start gap-4">
      <Button onClick={() => router.push('/debug/dynamic-routes/1')}>Button 1</Button>
      <Button onClick={() => router.push('/debug/dynamic-routes/2')}>Button 2</Button>
      <Button onClick={() => router.push('/debug/dynamic-routes/3')}>Button 3</Button>
    </div>
  );
};

export default Page;
