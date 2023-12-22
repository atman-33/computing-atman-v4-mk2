/* eslint-disable @nx/enforce-module-boundaries */
'use client';

import { NEXT_PUBLIC_API_ENDPOINT } from '@/config/index';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState('test-user1@gmail.com');
  const [password, setPassword] = useState('test1234');

  const handleLogin = async () => {
    try {
      const response = await fetch(NEXT_PUBLIC_API_ENDPOINT + '/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({ email, password })
      });

      if (response.ok) {
        const responseBody = await response.json();
        console.log(responseBody);
        // router.push('/');
      } else {
        // Handle login error
        const responseBody = await response.json();
        console.log(responseBody);
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Login failed', error);
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
        // router.push('/');
      } else {
        // Handle login error
        const responseBody = await response.json();
        console.log(responseBody);
        console.error('Logout failed');
      }
    } catch (error) {
      console.error('Logout failed', error);
    }
  };

  return (
    <div className="mt-8">
      <h1>Login test</h1>
      <div className="mt-4">
        <label>
          Email:
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mx-2"
          />
        </label>
      </div>
      <div className="mt-4">
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mx-2"
          />
        </label>
      </div>
      <div className="mt-4">
        <button onClick={handleLogin}>Login Button</button>
      </div>
      <div className="mt-4">
        <button onClick={handleLogout}>Logout Button</button>
      </div>
    </div>
  );
};

export default Login;
