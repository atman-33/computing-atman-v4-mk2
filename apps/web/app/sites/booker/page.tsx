'use client';

/* eslint-disable @nx/enforce-module-boundaries */
import authApi from '@/features/auth/api/auth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const Page = () => {
  const router = useRouter();

  // TODO: ログイン後にこのページに戻ってくる処理を追加（recoil を利用）

  useEffect(() => {
    authApi.isAuthenticated().then((data) => {
      // console.log(data);
      if (data === true) {
        console.log('authenticated');
      } else {
        console.log('not authenticated');
        router.push('/login');
      }
    });
  }, [router]);

  return <div>Page</div>;
};

export default Page;
