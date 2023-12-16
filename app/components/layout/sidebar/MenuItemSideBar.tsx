'use client';
import { SideNavItem } from '@/types';
import { Icon } from '@iconify/react/dist/iconify.js';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const MenuItemSideBar = ({ item }: { item: SideNavItem }) => {
  const pathname = usePathname();
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen);
  };

  return (
    <div>
      {item.submenu ? (
        <>
          <button
            onClick={toggleSubMenu}
            className={`flex flex-row items-center p-2 rounded-md w-full justify-between hover:bg-zinc-100 transition-all duration-200 group ${
              pathname.includes(item.path)
                ? 'bg-zinc-100 border-zinc-300/75'
                : 'border-transparent'
            } border`}>
            <div className="flex flex-row space-x-4 items-center">
              <span className="transition-all duration-200 group-hover:animate-pulse">
                {item.icon}
              </span>
              <span className="text-lg">{item.title}</span>
            </div>
            <div
              className={`${
                subMenuOpen ? 'rotate-180' : ''
              } transition-all duration-300`}>
              <Icon icon="lucide:chevron-down" width="20" height="20" />
            </div>
          </button>

          {subMenuOpen && (
            <div className="my-2 ml-6 flex flex-col space-y-1">
              {item.submenuItems?.map((subItem, index) => {
                return (
                  <Link
                    key={index}
                    href={subItem.path}
                    className={`${
                      subItem.path === pathname
                        ? 'bg-zinc-100'
                        : 'hover:opacity-75 hover:bg-zinc-100'
                    } py-1 px-4 rounded-md`}>
                    <span className="flex gap-2 items-center">
                      {subItem.icon}
                      {subItem.title}
                    </span>
                  </Link>
                );
              })}
            </div>
          )}
        </>
      ) : (
        <Link
          href={item.path}
          className={`flex flex-row space-x-4 items-center p-2 rounded-lg hover:bg-zinc-100 transition-all duration-200 group ${
            item.path === pathname
              ? 'bg-zinc-100 border-zinc-300/75'
              : 'border-transparent'
          } border`}>
          <span className="transition-all duration-200 group-hover:animate-pulse">
            {item.icon}
          </span>
          <span className="text-lg">{item.title}</span>
        </Link>
      )}
    </div>
  );
};

export default MenuItemSideBar;
