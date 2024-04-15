import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "Login",
    description: "Login page",
};

const Layout = ({ children }: any) => {
  return (
    <>
      {children}
    </>
  );
};

export default Layout;