import React from 'react'
import { TbLayoutDashboard, TbBellRinging2 } from 'react-icons/tb'
import { HiOutlineUsers, HiOutlinePencilAlt } from 'react-icons/hi'
import { FiFileText, FiLogOut } from 'react-icons/fi'
import { BsWindowSidebar, BsStars } from 'react-icons/bs'
import { RiCoinsLine } from 'react-icons/ri'
import { FaRegHandshake } from 'react-icons/fa'
import { VscGear } from 'react-icons/vsc'

const menuLinks = [
  { id: 1, name: 'Dashboard' },
  { id: 2, name: 'Clients' },
  { id: 3, name: 'Programme Modules' },
  { id: 4, name: 'Activities' },
  { id: 5, name: 'Tips & Articles' },
  { id: 6, name: 'Points' },
  { id: 7, name: 'Coins' },
  { id: 8, name: 'Partners' },
  { id: 9, name: 'Notifications' },
  { id: 10, name: 'Account Administration' }
]

export const Logout = () => {
  return (
        <div className='absolute bottom-0 left-0 pl-10 p-5 w-3/12 bg-[#002245] flex items-center'>
            <div className='mr-3'>
                <FiLogOut />
            </div>
            <div>
                Logout
            </div>
        </div>
  )
}

const Sidebar = () => {
  return (
        <div className='hidden h-screen overflow-y-scroll scrollbar-hide bg-[#002245] text-white pl-10 pt-5 pb-[120px] md:block md:w-3/12'>
            <Logout />
            <div className='mb-10 flex items-center'>
                <div className='mr-3'>
                    <TbLayoutDashboard />
                </div>
                <div>
                    {menuLinks[0].name}
                </div>
            </div>

            <div className='mb-10 flex items-center'>
                <div className='mr-3'>
                    <HiOutlineUsers />
                </div>
                <div>
                    {menuLinks[1].name}
                </div>
            </div>

            <div className='mb-10 flex items-center'>
                <div className='mr-3'>
                    <HiOutlinePencilAlt />
                </div>
                <div>
                    {menuLinks[2].name}
                </div>
            </div>

            <div className='mb-10 flex items-center'>
                <div className='mr-3'>
                    <FiFileText />
                </div>
                <div>
                    {menuLinks[3].name}
                </div>
            </div>

            <div className='mb-10 flex items-center'>
                <div className='mr-3'>
                    <BsWindowSidebar />
                </div>
                <div>
                    {menuLinks[4].name}
                </div>
            </div>

            <div className='mb-10 flex items-center'>
                <div className='mr-3'>
                    <BsStars />
                </div>
                <div>
                    {menuLinks[5].name}
                </div>
            </div>

            <div className='mb-10 flex items-center'>
                <div className='mr-3'>
                    <RiCoinsLine />
                </div>
                <div>
                    {menuLinks[6].name}
                </div>
            </div>

            <div className='mb-10 flex items-center'>
                <div className='mr-3'>
                    <FaRegHandshake />
                </div>
                <div>
                    {menuLinks[7].name}
                </div>
            </div>

            <div className='mb-10 flex items-center'>
                <div className='mr-3'>
                    <TbBellRinging2 />
                </div>
                <div>
                    {menuLinks[8].name}
                </div>
            </div>

            <div className='mb-10 flex items-center'>
                <div className='mr-3'>
                    <VscGear />
                </div>
                <div>
                    {menuLinks[9].name}
                </div>
            </div>

        </div>
  )
}

export default Sidebar
