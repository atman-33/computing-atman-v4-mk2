'use client';

/* eslint-disable @nx/enforce-module-boundaries */
import { Button } from '@/components/elements/Button';
import authApi from '@/features/auth/api/auth-api';
import userApi from '@/features/auth/api/user-api';
import LoginForm from '@/features/auth/components/LoginForm';
import SignUpForm from '@/features/auth/components/SignUpForm';

const Page = () => {
  const handleLogout = async () => {
    const response = await authApi.logout();
    console.log(response);
  };

  const handleIsAuthenticated = async () => {
    const response = await authApi.isAuthenticated();
    console.log(response);
  };

  const handleGetCurrentUser = async () => {
    const response = await userApi.getCurrentUser();
    console.log(response);
  };

  return (
    <>
      <div className="mt-8">
        <SignUpForm />
      </div>
      <div className="mt-8">
        <LoginForm />
      </div>
      <Button onClick={handleLogout} className="m-8">
        Logout
      </Button>

      <Button onClick={handleIsAuthenticated} className="m-8">
        Is Authenticated?
      </Button>

      <Button onClick={handleGetCurrentUser} className="m-8">
        Get current user
      </Button>
    </>
  );
};

export default Page;
