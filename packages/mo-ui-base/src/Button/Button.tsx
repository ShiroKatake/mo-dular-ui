import { ButtonResetStyled, IconAfter, IconBefore, SpanContent } from './Button.styled';
import { ButtonProps } from './Button.types';

export const Button: React.FC<ButtonProps> = ({
  tabIndex,
  children,
  iconBefore,
  iconAfter,
  ...otherProps
}) => {
  return (
    <ButtonResetStyled tabIndex={tabIndex} {...otherProps}>
      {iconBefore && <IconBefore>{iconBefore}</IconBefore>}
      <SpanContent>{children}</SpanContent>
      {iconAfter && <IconAfter>{iconAfter}</IconAfter>}
    </ButtonResetStyled>
  );
};
