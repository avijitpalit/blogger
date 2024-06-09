import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "My account",
    description: "My account page",
};

const Layout = ({ children }: any) => {
  return (
    <>
      {children}
    </>
  );
};

export default Layout;