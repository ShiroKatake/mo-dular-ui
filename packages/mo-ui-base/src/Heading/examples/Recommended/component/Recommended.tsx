import { Heading } from '../../../Heading';
import { dynamicHeadingStyle } from './Recommended.styled';

interface HeadingProps {
  children: React.ReactNode;
}
export const Recommended: React.FC<HeadingProps> = ({ children }) => {
  return (
    <Heading level={1} dynamicHeadingStyle={dynamicHeadingStyle}>
      {children}
    </Heading>
  );
};
