import { StyledNbButton } from "./NbButton.styled";
import { Overpass } from 'next/font/google';

const overpass = Overpass({ subsets: ['latin'] })

interface ButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
}

export const NbButton: React.FC<ButtonProps> = ({ children, disabled }) => {
  return (
    <StyledNbButton disabled={disabled} className={overpass.className}>
      {children}
    </StyledNbButton>
  );
}
