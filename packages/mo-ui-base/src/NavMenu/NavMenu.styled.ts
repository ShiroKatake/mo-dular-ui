import Link from 'next/link';
import styled from 'styled-components';

export const NavUl = styled.ul`
  all: unset;
`;

export const NavLi = styled.li`
  all: unset;
  cursor: pointer;
`;

export const NavA = styled(Link)`
  all: unset;
`;

type NavMenuStyledProps = {
  $isVisible?: boolean;
};

export const Nav = styled.nav<NavMenuStyledProps>`
  all: unset;
  display: ${({ $isVisible: $isExpanded }) => !$isExpanded && 'none'};
`;
