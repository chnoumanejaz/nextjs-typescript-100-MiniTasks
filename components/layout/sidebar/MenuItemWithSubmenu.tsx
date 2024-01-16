'use client';
import { MenuItemWithSubmenuProps } from '@/types';
import { Icon } from '@iconify/react/dist/iconify.js';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import MenuItem from './MenuItem';

const MenuItemWithSubmenu: React.FC<MenuItemWithSubmenuProps> = ({
  item,
  toggleOpen,
}) => {
  const pathname = usePathname();
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  return (
    <>
      <MenuItem>
        <button
          className="w-full text-xl"
          onClick={() => setSubMenuOpen(!subMenuOpen)}>
          <div className="flex flex-row justify-between w-full items-center">
            <div className="flex gap-4 items-center">
              {item.icon}
              <span
                className={`${
                  pathname.includes(item.path) ? 'font-bold' : ''
                }`}>
                {item.title}
              </span>
            </div>
            <div
              className={`${
                subMenuOpen && 'rotate-180'
              } transition-all duration-500`}>
              <Icon icon="lucide:chevron-down" width="20" height="20" />
            </div>
          </div>
        </button>
      </MenuItem>
      <div className="mt-2 ml-2 flex flex-col space-y-2">
        {subMenuOpen && (
          <>
            {item.submenuItems?.map((subItem, subIndex) => {
              return (
                <MenuItem key={subIndex}>
                  <Link
                    href={subItem.path}
                    onClick={toggleOpen}
                    className={` ${
                      subItem.path === pathname ? 'font-bold' : ''
                    } ml-8 flex gap-3 items-center`}>
                    {subItem.icon}
                    {subItem.title}
                  </Link>
                </MenuItem>
              );
            })}
          </>
        )}
      </div>
    </>
  );
};

export default MenuItemWithSubmenu;
