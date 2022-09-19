import React from 'react';
import { TbLayoutDashboard, TbBellRinging2 } from 'react-icons/tb';
import { HiOutlineUsers, HiOutlinePencilAlt } from 'react-icons/hi';
import { FiFileText, FiLogOut } from 'react-icons/fi';
import { BsWindowSidebar, BsStars } from 'react-icons/bs';
import { RiCoinsLine } from 'react-icons/ri';
import { FaRegHandshake } from 'react-icons/fa';
import { VscGear } from 'react-icons/vsc';

const menuLinks = [
  { id: 1, name: 'Dashboard', icon: <TbLayoutDashboard /> },
  { id: 2, name: 'Clients', icon: <HiOutlineUsers /> },
  { id: 3, name: 'Programme Modules', icon: <HiOutlinePencilAlt /> },
  { id: 4, name: 'Activities', icon: <FiFileText /> },
  { id: 5, name: 'Tips & Articles', icon: <BsWindowSidebar /> },
  { id: 6, name: 'Points', icon: <BsStars /> },
  { id: 7, name: 'Coins', icon: <RiCoinsLine /> },
  { id: 8, name: 'Partners', icon: <FaRegHandshake /> },
  { id: 9, name: 'Notifications', icon: <TbBellRinging2 /> },
  { id: 10, name: 'Account Administration', icon: <VscGear /> },
  // { id: 11, name: 'Account Administration', icon: <VscGear /> },
  // { id: 12, name: 'Account Administration', icon: <VscGear /> },
  // { id: 13, name: 'Account Administration', icon: <VscGear /> },
  // { id: 14, name: 'Account Administration', icon: <VscGear /> },
  // { id: 15, name: 'Account Administration', icon: <VscGear /> },
  // { id: 16, name: 'Account Administration', icon: <VscGear /> },
  // { id: 17, name: 'Account Administration', icon: <VscGear /> },
  // { id: 18, name: 'Account Administration', icon: <VscGear /> },
  // { id: 19, name: 'Account Administration', icon: <VscGear /> },
  // { id: 20, name: 'Account Administration', icon: <VscGear /> },
  // { id: 21, name: 'Account Administration', icon: <VscGear /> },
  // { id: 22, name: 'Account Administration', icon: <VscGear /> },
  // { id: 23, name: 'Account Administration', icon: <VscGear /> },
  // { id: 24, name: 'Account Administration', icon: <VscGear /> },
  // { id: 25, name: 'Account Administration', icon: <VscGear /> },
  // { id: 26, name: 'Account Administration', icon: <VscGear /> },
  // { id: 27, name: 'Account Administration', icon: <VscGear /> },
  // { id: 28, name: 'Account Administration', icon: <VscGear /> },
  // { id: 29, name: 'Account Administration', icon: <VscGear /> },
  // { id: 30, name: 'Account Administration', icon: <VscGear /> },
  // { id: 31, name: 'Account Administration', icon: <VscGear /> },
  // { id: 32, name: 'Account Administration', icon: <VscGear /> },
  // { id: 33, name: 'Account Administration', icon: <VscGear /> },
  // { id: 34, name: 'Account Administration', icon: <VscGear /> },
  // { id: 35, name: 'Account Administration', icon: <VscGear /> },
];

export const Logout = () => {
  return (
    <div className='absolute bottom-0 left-0 pl-10 p-5 w-3/12 bg-[#002245] flex items-center'>
      <div className='mr-3'>
        <FiLogOut />
      </div>
      <div>Logout</div>
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className='hidden h-screen overflow-y-scroll scrollbar-hide bg-[#002245] text-white pl-10 pt-5 pb-[120px] md:block md:w-3/12'>
      {menuLinks.map((item) => (
        <div key={item.id} className='mb-10 flex items-center'>
          <div className='mr-3'>{item.icon}</div>
          <div>{item.name}</div>
        </div>
      ))}
      <Logout />
    </div>
  );
};

export default Sidebar;
