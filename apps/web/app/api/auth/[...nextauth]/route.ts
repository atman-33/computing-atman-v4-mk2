import { env } from '@libs/shared/config';
import { NextAuthOptions } from 'next-auth';
import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      authorize: async (credentials, req) => {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }
        const { email, password } = credentials;
        const res = await fetch(`${env.NEXT_PUBLIC_WEB_URL}/auth/login`, {
          method: 'POST',
          body: JSON.stringify({ email, password }),
          headers: { 'Content-Type': 'application/json' }
        });
        if (res.status === 401) {
          console.log(res.statusText);

          return null;
        }
        const user = await res.json();
        return user;
      }
    })
  ]
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
