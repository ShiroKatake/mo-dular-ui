interface NavLinkWithSubLinks {
  href?: string;
  text: string;
  sublinks: NavLink[];
}

interface NavLinkWithoutSubLinks {
  href: string;
  text: string;
}

type NavLink = NavLinkWithoutSubLinks | NavLinkWithSubLinks;

export const isLinkWithSubLinks = (link: any): link is NavLinkWithSubLinks => {
  return link.sublinks?.length > 0;
};

export type NavItemProps = NavLink & {
  noBehaviour?: boolean;
  index: number;
  openDropdown: number | null;
  setOpenDropdown: React.Dispatch<React.SetStateAction<number | null>>;
};

export type NavItemListProps = {
  noBehaviour?: boolean;
  ref?: React.Ref<HTMLUListElement>;
  navLinks: NavLink[];
};

export type NavMenuProps = NavItemListProps & {
  className?: string;
  isVisible?: boolean;
  slotBefore?: React.ReactNode;
  slotAfter?: React.ReactNode;
};
