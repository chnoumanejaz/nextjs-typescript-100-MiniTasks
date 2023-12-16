import { Icon } from '@iconify/react/dist/iconify.js';
import { SideNavItem } from './types';

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: 'Home',
    path: '/',
    icon: <Icon icon="iconoir:home" width="20" height="20" />,
  },
  {
    title: 'Components',
    path: '/functionalities',
    icon: <Icon icon="fluent-mdl2:web-components" width="20" height="20" />,
    submenu: true,
    submenuItems: [
      {
        title: 'All',
        path: '/functionalities',
        icon: <Icon icon="ic:round-border-all" width="17" height="17" />,
      },
      {
        title: 'Search',
        path: '/functionalities/search-functionality',
        icon: <Icon icon="ic:baseline-search" width="17" height="17" />,
      },
      {
        title: 'Filters',
        path: '/functionalities/search-functionality',
        icon: <Icon icon="mi:filter" width="17" height="17" />,
      },
    ],
  },
  {
    title: 'About',
    path: '/about',
    icon: <Icon icon="mdi:about-circle-outline" width="20" height="20" />,
  },
  {
    title: 'Contact',
    path: '/contact',
    icon: <Icon icon="fluent-mdl2:contact" width="20" height="20" />,
  },
  {
    title: 'Settings',
    path: '/settings',
    icon: <Icon icon="lets-icons:setting-line-light" width="20" height="20" />,
    submenu: true,
    submenuItems: [
      {
        title: 'Account',
        path: '/settings/account',
        icon: <Icon icon="mdi:account-cog-outline" width="17" height="17" />,
      },
      {
        title: 'Appearence',
        path: '/settings/appearence',
        icon: <Icon icon="gridicons:customize" width="17" height="17" />,
      },
    ],
  },
];
