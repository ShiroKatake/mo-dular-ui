import Link from 'next/link';
import styled from 'styled-components';

export const NavUl = styled.ul`
  all: unset;
`;

type NavLiStyledProps = {
  $isExpanded?: boolean;
};

export const NavLi = styled.li<NavLiStyledProps>`
  all: unset;
  cursor: pointer;
  ${NavUl} {
    display: ${({ $isExpanded = true }) => !$isExpanded && 'none'};
  }
`;

export const NavA = styled(Link)`
  all: unset;
`;

type NavMenuStyledProps = {
  $isExpanded?: boolean;
};

export const Nav = styled.nav<NavMenuStyledProps>`
  all: unset;
  display: ${({ $isExpanded }) => !$isExpanded && 'none'};
`;
