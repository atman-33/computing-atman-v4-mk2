'use client';

import { useSession } from 'next-auth/react';
import Link from 'next/link';

const SignInButton = () => {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <div className="ml-auto flex gap-4">
        <p className="text-sky-600">{session.user.email}</p>
        <Link href={'/api/auth/logout'} className="ml-auto flex gap-4 text-red-600">
          Logout
        </Link>
      </div>
    );
  }
  return (
    <div className="ml-auto flex items-center gap-4">
      <Link href={'/api/auth/login'} className="ml-auto flex gap-4 text-green-600">
        Login
      </Link>
      <Link href={'/signup'} className="ml-auto flex gap-4 rounded bg-green-600 p-2 text-green-200">
        Sign Up
      </Link>
    </div>
  );
};

export default SignInButton;
