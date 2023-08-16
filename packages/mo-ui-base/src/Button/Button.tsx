import { ButtonResetStyled, SpanContent, SpanEndIcon, SpanStartIcon } from "./Button.styled";
import { ButtonProps } from "./Button.types";

export const Button: React.FC<ButtonProps> = ({
  tabIndex,
  children,
  startIcon,
  endIcon,
  ...otherProps
}) => {
  return (
    <ButtonResetStyled tabIndex={tabIndex} {...otherProps}>
      {startIcon && <SpanStartIcon>{startIcon}</SpanStartIcon>}
      <SpanContent>{children}</SpanContent>
      {endIcon && <SpanEndIcon>{endIcon}</SpanEndIcon>}
    </ButtonResetStyled>
  );
}
