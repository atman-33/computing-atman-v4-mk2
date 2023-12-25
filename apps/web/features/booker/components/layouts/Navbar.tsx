'use client';

/* eslint-disable @nx/enforce-module-boundaries */
import Link from '@/components/elements/Link';
import authApi from '@/features/auth/api/auth-api';
import { useIsAuthenticated } from '@/features/auth/hooks/useIsAuthenticated';
import { useIsHeaderVisible } from '@/hooks/useIsHeaderVisible';
import { useQuery } from '@apollo/client';
import { faBackward } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GetCurrentUserDocument } from '@libs/web/data-access-graphql';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [mobileNavShow, setMobileNavShow] = useState(false);
  const [email, setEmail] = useState('');
  const { data, loading, error } = useQuery(GetCurrentUserDocument);
  const { setIsAuthenticated } = useIsAuthenticated();
  const { setIsHeaderVisible } = useIsHeaderVisible();

  useEffect(() => {
    setEmail(data?.currentUser.email || '');
  }, [data?.currentUser.email]);

  if (loading) {
    return <div></div>;
  }

  if (error) {
    console.error(error);
    return <div></div>;
  }

  const handleGoToTop = () => {
    setIsHeaderVisible(true);
    // use window.location.href because router.push is not working reloading the page
    window.location.href = '/';
  };

  const handleShow = () => {
    setMobileNavShow(!mobileNavShow);
  };

  const handleLogout = async () => {
    authApi.logout().then(() => {
      setIsAuthenticated(false);
      // window.location.reload(); => this is not needed because using the useAuth hook
    });
  };
  return (
    <nav className="mt-2 flex flex-wrap items-center justify-between rounded-xl bg-cyan-800 py-2 px-4">
      <div className="mr-6 flex flex-shrink-0 items-center gap-x-4 text-white">
        <button onClick={handleGoToTop}>
          <FontAwesomeIcon icon={faBackward} size="xl" />
        </button>
        <Link href="/sites/booker" className="text-xl font-semibold tracking-tight">
          Booker
        </Link>
      </div>
      <div className="block md:hidden">
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
        className={`block w-full flex-grow md:flex md:w-auto md:items-center ${
          mobileNavShow ? 'block' : 'hidden'
        }`}
      >
        <div className="text-sm md:flex-grow">
          {/* <a
            href="#responsive-header"
            className="mt-4 mr-4 block text-teal-200 hover:text-white md:mt-0 md:inline-block"
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
