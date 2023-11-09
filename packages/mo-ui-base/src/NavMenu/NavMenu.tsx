import React, { useRef } from 'react';
import { Nav } from './NavMenu.styled';
import { NavMenuProps } from './NavMenu.types';
import { NavItemList } from './subcomponents/NavItemList';

/**
 * Creates a navigation menu component.
 *
 * @param className   - Use this to style the component.
 * @param isVisible   - Show/hide the nav menu (hamburger toggles may find this useful).
 * @param slotBefore  - The content to render before the navigation items.
 * @param slotAfter   - The content to render after the navigation items.
 * @param navLinks    - The array of navigation links to render.
 */
export const NavMenu: React.FC<NavMenuProps> = ({
  noBehaviour,
  className,
  isVisible,
  slotBefore,
  slotAfter,
  navLinks,
}) => {
  const navRef = useRef<HTMLUListElement>(null);

  return (
    <Nav ref={navRef} className={className} $isExpanded={isVisible}>
      {slotBefore}
      <NavItemList noBehaviour={noBehaviour} navLinks={navLinks} />
      {slotAfter}
    </Nav>
  );
};
