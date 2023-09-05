import { StyledHeading } from './Heading.styled';
import { HeadingProps } from './Heading.types';

export const Heading: React.FC<HeadingProps> = ({
  level = 1,
  fakeHeading = false,
  children,
  className,
}) => {
  const htmlTag = fakeHeading ? 'span' : `h${level}`;
  return (
    <StyledHeading as={htmlTag} className={className}>
      {children}
    </StyledHeading>
  );
};
