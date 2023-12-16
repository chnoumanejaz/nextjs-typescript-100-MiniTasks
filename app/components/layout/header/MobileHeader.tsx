'use client';
import { SIDENAV_ITEMS } from '@/constants';
import { useDimensions } from '@/hooks/useDimensions';
import { sidebar, ulVariants } from '@/lib/framer-variants';
import { motion, useCycle } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRef } from 'react';
import MenuItem from '../sidebar/MenuItem';
import MenuItemWithSubmenu from '../sidebar/MenuItemWithSubmenu';
import MenuToggle from '../sidebar/MenuToggle';

const MobileHeader = () => {
  const pathname = usePathname();
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      custom={height}
      className={`z-50 w-full md:hidden ${
        isOpen ? '' : 'pointer-events-none '
      }`}
      ref={containerRef}>
      <motion.div
        className="absolute inset-0 right-0 w-full bg-white"
        variants={sidebar}
      />

      <motion.ul
        className="absolute grid w-full gap-3 px-6 py-10"
        variants={ulVariants}>
        {SIDENAV_ITEMS.map((item, index) => {
          const isLastItem = index === SIDENAV_ITEMS.length - 1;

          return (
            <div key={index}>
              {item.submenu ? (
                <MenuItemWithSubmenu item={item} toggleOpen={toggleOpen} />
              ) : (
                <MenuItem>
                  <Link
                    href={item.path}
                    // @ts-ignore
                    onClick={toggleOpen}
                    className={`flex w-full text-xl ${
                      item.path === pathname ? 'font-bold' : ''
                    }`}>
                    <div className="flex gap-4 items-center">
                      {item.icon}
                      {item.title}
                    </div>
                  </Link>
                </MenuItem>
              )}

              {!isLastItem && (
                <MenuItem className="my-3 h-px w-full bg-gray-300" />
              )}
            </div>
          );
        })}
      </motion.ul>
      <MenuToggle toggle={toggleOpen} />
    </motion.nav>
  );
};

export default MobileHeader;
