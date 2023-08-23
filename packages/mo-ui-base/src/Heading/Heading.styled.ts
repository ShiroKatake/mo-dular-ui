import styled from 'styled-components';
import { StyledHeadingProps } from './Heading.types';

export const StyledHeading = styled.h1<StyledHeadingProps>`
  all: unset;
  ${(props) => props.$dynamicHeadingStyle?.(props.$styledLevel)}
`;
