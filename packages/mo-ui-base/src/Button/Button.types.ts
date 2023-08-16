type BaseButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export interface ButtonProps extends BaseButtonProps {
  children: React.ReactNode;
  startIcon?: React.ReactElement<typeof SVGElement>;
  endIcon?: React.ReactElement<typeof SVGElement>;
}