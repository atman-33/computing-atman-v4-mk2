'use client';

/* eslint-disable @nx/enforce-module-boundaries */
import Link from '@/components/elements/Link';
import authApi from '@/features/auth/api/auth-api';
import userApi from '@/features/auth/api/user-api';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [mobileNavShow, setMobileNavShow] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    userApi.getCurrentUser().then((response) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const { email } = response as any;
      setEmail(email);
    });
  }, []);

  const handleShow = () => {
    setMobileNavShow(!mobileNavShow);
  };

  const handleLogout = async () => {
    authApi.logout().then(() => {
      window.location.reload();
    });
  };
  return (
    <nav className="mt-2 flex flex-wrap items-center justify-between rounded-2xl bg-cyan-800 py-2 px-4">
      <div className="mr-6 flex flex-shrink-0 items-center text-white">
        <Link href="/sites/booker" className="text-xl font-semibold tracking-tight">
          Booker
        </Link>
      </div>
      <div className="block lg:hidden">
        <button
          className="flex items-center rounded border border-teal-400 px-3 py-2 text-teal-200 hover:border-white hover:text-white"
          onClick={handleShow}
        >
          <svg
            className="h-3 w-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`block w-full flex-grow lg:flex lg:w-auto lg:items-center ${
          mobileNavShow ? 'block' : 'hidden'
        }`}
      >
        <div className="text-sm lg:flex-grow">
          {/* <a
            href="#responsive-header"
            className="mt-4 mr-4 block text-teal-200 hover:text-white lg:mt-0 lg:inline-block"
          >
            Examples
          </a> */}
        </div>
        <div className="flex flex-wrap items-center gap-2 text-white">
          <div>{email}</div>
          <button
            className="m-2 inline-block rounded border border-white px-4 py-2 text-sm leading-none text-white hover:border-transparent hover:bg-white hover:text-teal-500"
            onClick={handleLogout}
          >
            Log out
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
