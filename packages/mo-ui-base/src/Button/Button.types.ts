type BaseButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export interface ButtonProps extends BaseButtonProps {
  children: React.ReactNode;
  iconBefore?: React.ReactElement<typeof SVGElement>;
  iconAfter?: React.ReactElement<typeof SVGElement>;
}
