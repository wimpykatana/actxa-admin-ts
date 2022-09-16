import React from 'react';
import Header from '../components/header';
import Sidebar from '../components/sidebar';

interface Props {
  children: React.ReactElement;
}

const Admin = ({ children }: Props) => {
  return (
    <div className="h-screen" style={{ overflow: 'hidden' }}>
      <Header />
      <div className="flex">
        <Sidebar />
        {children}
      </div>
    </div>
  );
};

export default Admin;
