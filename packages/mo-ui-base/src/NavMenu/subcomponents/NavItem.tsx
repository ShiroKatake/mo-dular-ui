import React from 'react';
import { NavA, NavLi } from '../NavMenu.styled';
import { NavItemProps, isLinkWithSubLinks } from '../NavMenu.types';
import { NavItemList } from './NavItemList';

export const NavItem: React.FC<NavItemProps> = ({
  href,
  text,
  index,
  setOpenDropdown,
  openDropdown,
  noBehaviour,
  ...otherProps
}) => {
  const isExpanded = openDropdown === index;

  const handleKeyDown = (event: any, index: number) => {
    if (event.key === ' ') {
      setOpenDropdown(index);
    }
  };

  const handleBlur = (event: any) => {
    const relatedTarget = event.relatedTarget;
    if (event.relatedTarget instanceof Node && !event.currentTarget.contains(relatedTarget)) {
      setOpenDropdown(null);
    }
  };

  const handleMouseEnter = (event: any, index: number) => {
    setOpenDropdown(index);
  };

  const handleMouseLeave = (event: any) => {
    const relatedTarget = event.relatedTarget;
    if (event.relatedTarget instanceof Node && !event.target.contains(relatedTarget)) {
      setOpenDropdown(null);
    }
  };

  const navLiProps = noBehaviour
    ? {}
    : {
        onKeyDown: (event: any) => handleKeyDown(event, index),
        onBlur: (event: any) => handleBlur(event),
        onMouseEnter: (event: any) => handleMouseEnter(event, index),
        onMouseLeave: (event: any) => handleMouseLeave(event),
        ...(isLinkWithSubLinks(otherProps) && { 'aria-expanded': isExpanded }),
        $isExpanded: isExpanded,
      };

  return (
    <NavLi key={text} {...navLiProps}>
      <NavA tabIndex={0} href={href || ''} {...(!href && { as: 'span' })}>
        {text}
      </NavA>
      {/* Recurring render if there are sublinks in sublinks */}
      {isLinkWithSubLinks(otherProps) && <NavItemList noBehaviour={noBehaviour} navLinks={otherProps.sublinks} />}
    </NavLi>
  );
};
