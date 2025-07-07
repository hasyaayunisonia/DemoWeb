import React from 'react';
import Header from '../components/organisms/Header';
import { Outlet } from 'react-router-dom';

type LayoutProps = {
  children?: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="p-4">{children || <Outlet />}</main>
    </div>
  );
};

export default Layout;
