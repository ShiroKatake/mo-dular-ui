import React from 'react';
import { NavA, NavLi } from '../NavMenu.styled';
import { NavItemProps, isLinkWithSubLinks } from '../NavMenu.types';
import { NavItemList } from './NavItemList';

export const NavItem: React.FC<NavItemProps> = (props) => {
  const { href, text, index, setOpenDropdown, openDropdown } = props;
  const isExpanded = openDropdown === index;

  const handleKeyDown = (event: any, index: number) => {
    if (event.key === ' ') {
      setOpenDropdown(index);
    }
  };

  const handleBlur = (event: any) => {
    const relatedTarget = event.relatedTarget;
    if (event.currentTarget instanceof Node && !event.currentTarget.contains(relatedTarget)) {
      setOpenDropdown(null);
    }
  };

  const handleMouseLeave = (event: any) => {
    const relatedTarget = event.relatedTarget;
    if (event.target instanceof Node && !event.target.contains(relatedTarget)) {
      setOpenDropdown(null);
    }
  };

  return (
    <NavLi
      onKeyDown={(event) => handleKeyDown(event, index)}
      onBlur={(event) => handleBlur(event)}
      onMouseEnter={() => setOpenDropdown(index)}
      onMouseLeave={(event) => handleMouseLeave(event)}
      key={text}
    >
      <NavA
        tabIndex={0}
        href={href || '#'}
        // Dynamic attribute assignments
        {...(!href && { as: 'span' })}
        {...(isLinkWithSubLinks(props) && { 'aria-expanded': isExpanded })}
      >
        {text}
      </NavA>
      {/* Recurring render if there are sublinks in sublinks */}
      {isLinkWithSubLinks(props) && isExpanded && <NavItemList navLinks={props.sublinks} />}
    </NavLi>
  );
};
