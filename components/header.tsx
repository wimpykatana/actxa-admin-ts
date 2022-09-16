import React from 'react';
import Image from 'next/image';
import { VscQuestion } from 'react-icons/vsc';
import { FaUserCircle, FaBell } from 'react-icons/fa';
import { BsChevronCompactDown } from 'react-icons/bs';

const Header = () => {
  return (
    <div className='w-screen py-3 wshadow z-[1] relative'>
      <div className='relative flex justify-start md:w-3/12 md:float-left pl-5'>
        <Image
          src='/logo-2.png'
          layout='intrinsic'
          objectFit='contain'
          width='135px'
          height='59px'
          alt='Logo'
        />
      </div>
      <div className='relative hidden md:w-9/12 md:flex md:float-left md:h-[60px] items-center justify-end'>
        <div className='flex'>
          <div className='px-4'>
            <VscQuestion color='#59585A' size='24px' />
          </div>
          <div className='px-4'>
            <FaBell color='#59585A' size='24px' />
          </div>
        </div>
        <div className='flex items-center px-4 mx-2 border-l'>
          <div className='px-4'>
            <FaUserCircle color='#59585A' size='36px' />
          </div>
          <div className='px-4'>
            <span>Sweety Lu</span>
          </div>
        </div>
        <div>
          <div className='m-5'>
            <BsChevronCompactDown color='#59585A' size='36px' />
          </div>
        </div>
      </div>
      <div className='hidden clear-both md:block'></div>
    </div>
  );
};

export default Header;
