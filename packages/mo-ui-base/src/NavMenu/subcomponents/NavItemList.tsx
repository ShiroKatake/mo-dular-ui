import React, { useState } from 'react';
import { NavUl } from '../NavMenu.styled';
import { NavItemListProps } from '../NavMenu.types';
import { NavItem } from './NavItem';

export const NavItemList: React.FC<NavItemListProps> = React.forwardRef(({ navLinks, noBehaviour }, ref) => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  return (
    <NavUl ref={ref}>
      {navLinks.map((link, index) => (
        <NavItem
          noBehaviour={noBehaviour}
          key={link.text}
          {...link}
          index={index}
          openDropdown={openDropdown}
          setOpenDropdown={setOpenDropdown}
        />
      ))}
    </NavUl>
  );
});
NavItemList.displayName = 'NavItemList';
