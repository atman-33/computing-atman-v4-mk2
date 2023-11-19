'use client';

import { SessionProvider as NextAuthProvider } from 'next-auth/react';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

const SessionProvider = ({ children }: Props) => {
  return <NextAuthProvider>{children}</NextAuthProvider>;
};

export default SessionProvider;
