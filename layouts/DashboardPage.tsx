import React from 'react';

interface Props {
  children: React.ReactElement;
}

function DashboardPage({ children }: Props) {
  return (
    <div className='content-page md:w-9/12 bg-[#E5E5E5] h-screen overflow-y-scroll'>
      <div className='p-5'>{children}</div>
    </div>
  );
}

export default DashboardPage;
