'use client';

import { SIDENAV_ITEMS } from '@/constants';
import Logo from '../Logo';
import MenuItemSideBar from './MenuItemSideBar';

const SideBar = () => {
  return (
    <div className="h-screen overflow-y-auto border-r border-violet-200 hidden md:flex">
      <div className="space-y-6 w-full">
        <Logo />
        <div className="space-y-2 md:px-4 ">
          {SIDENAV_ITEMS.map((item, index) => (
            <MenuItemSideBar key={index + item.path} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
