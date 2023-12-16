export type SideNavItem = {
  title: string;
  path: string;
  icon?: JSX.Element;
  submenu?: boolean;
  submenuItems?: SideNavItem[];
};

export type MenuItemWithSubmenuProps = {
  item: SideNavItem;
  toggleOpen: () => void;
};
