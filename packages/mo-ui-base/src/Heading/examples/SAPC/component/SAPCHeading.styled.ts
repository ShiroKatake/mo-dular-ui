import {
  Heading,
  HeadingProps as MU_HeadingProps,
} from '@modular-ui/base/Heading';
import styled, { css } from 'styled-components';
import { breakpoints } from '../themes/breakpoints';
import { Headings, Sizes } from '../themes/styled';
import { headingTheme } from '../themes/typography';

const dynamicHeadingStyle = (level: Headings, size: Sizes = 'md') => {
  return css`
    font-size: ${headingTheme[level]?.fontSize.mobile[size]};
    line-height: ${headingTheme[level]?.lineHeight.mobile[size]};

    @media screen and (min-width: ${breakpoints.md}) {
      font-size: ${headingTheme[level]?.fontSize.desktop[size]};
      line-height: ${headingTheme[level]?.lineHeight.desktop[size]};
    }
  `;
};

export interface HeadingProps extends MU_HeadingProps {
  size?: Sizes;
}

export const StyledHeading = styled(Heading)<HeadingProps>`
  ${({ level, size }) => dynamicHeadingStyle(`h${level}`, size)};
`;
