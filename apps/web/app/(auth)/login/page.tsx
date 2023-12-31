'use client';

/* eslint-disable @nx/enforce-module-boundaries */
import Link from '@/components/elements/Link';
import LoginForm from '@/features/auth/components/LoginForm';

const Page = () => {
  return (
    <div className="mt-8 grid grid-cols-1 grid-rows-2 justify-center">
      <div className="col-span-1 flex justify-center">
        <LoginForm />
      </div>
      <div className="mt-4 flex flex-wrap gap-4 md:justify-center">
        <p>{`Don't have an account?`}</p>
        <Link href="/signup" className="text-primary-500 font-extrabold">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Page;
