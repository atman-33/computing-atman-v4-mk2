'use client';

/* eslint-disable @nx/enforce-module-boundaries */
import Link from '@/components/elements/Link';
import LoginForm from '@/features/auth/components/LoginForm';

const Page = () => {
  return (
    <div className="mt-8">
      <LoginForm />
      <div className="flex flex-wrap gap-4">
        <p>{`Don't have an account?`}</p>
        <Link href="/signup" className="text-primary-500 font-extrabold">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Page;
