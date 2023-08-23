import { css } from 'styled-components';
import { breakpoints } from '../themes/breakpoints';
import { headings } from '../themes/headings';

export const dynamicHeadingStyle = (styledLevel: number) => {
  // Explicitly declare variable as keyof headings obj
  const headingLevel = `h${styledLevel}` as keyof typeof headings;

  return css`
    font-size: ${headings[headingLevel].fontSize.mobile.sm};
    line-height: ${headings[headingLevel].lineHeight.mobile.sm};

    @media screen and (min-width: ${breakpoints.md}) {
      font-size: ${headings[headingLevel].fontSize.desktop.sm};
      line-height: ${headings[headingLevel].lineHeight.desktop.md};
    }
  `;
};
