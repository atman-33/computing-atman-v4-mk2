'use client';

import { NEXT_PUBLIC_API_ENDPOINT } from '@/config/index';
import { useState } from 'react';

const AuthTest = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = async () => {
    try {
      const response = await fetch(NEXT_PUBLIC_API_ENDPOINT + '/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: 'test-user1@gmail.com',
          password: 'test1234'
        }),
        credentials: 'include'
      });

      if (response.ok) {
        const responseBody = await response.json();
        console.log(responseBody);
        setIsLoggedIn(true);
        console.log('Login successful!');
      } else {
        const responseBody = await response.json();
        console.log(responseBody);
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  const handleLogout = async () => {
    try {
      const response = await fetch(NEXT_PUBLIC_API_ENDPOINT + '/api/auth/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include'
      });

      if (response.ok) {
        const responseBody = await response.json();
        console.log(responseBody);
        setIsLoggedIn(false);
        console.log('Logout successful!');
      } else {
        console.error('Logout failed');
      }
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <div className="mt-8">
      <h1>Authentication Test</h1>
      <p className="m-8">Status: {isLoggedIn ? 'Logged In' : 'Logged Out'}</p>
      <button onClick={handleLogin} className="m-8">
        Login
      </button>
      <button onClick={handleLogout} className="m-8">
        Logout
      </button>
    </div>
  );
};

export default AuthTest;
