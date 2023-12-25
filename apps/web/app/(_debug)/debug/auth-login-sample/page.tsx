'use client';

/* eslint-disable @nx/enforce-module-boundaries */
import { Button } from '@/components/elements/Button';
import authApi from '@/features/auth/api/auth-api';
import LoginForm from '@/features/auth/components/LoginForm';
import SignUpForm from '@/features/auth/components/SignUpForm';
import { useApolloClient, useQuery } from '@apollo/client';
import { GetCurrentUserDocument } from '@libs/web/data-access-graphql';

const Page = () => {
  const { data, refetch, loading, error } = useQuery(GetCurrentUserDocument);
  const client = useApolloClient();
  const handleLogout = async () => {
    const response = await authApi.logout();
    await client.clearStore();
    console.log(response);
  };

  const handleIsAuthenticated = async () => {
    const response = await authApi.isAuthenticated();
    console.log(response);
  };

  const handleGetCurrentUser = async () => {
    refetch().then((data) => {
      console.log(data);
    });
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
