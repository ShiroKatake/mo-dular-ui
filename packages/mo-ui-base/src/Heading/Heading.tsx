import { StyledHeading } from './Heading.styled';
import { HeadingProps } from './Heading.types';

export const Heading: React.FC<HeadingProps> = ({
  level = 1,
  fake = false,
  children,
  className,
}) => {
  const htmlTag = fake ? 'span' : `h${level}`;
  return (
    <StyledHeading as={htmlTag} className={className}>
      {children}
    </StyledHeading>
  );
};
