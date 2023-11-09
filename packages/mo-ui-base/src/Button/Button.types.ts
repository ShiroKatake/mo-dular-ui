type BaseButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = BaseButtonProps & {
  children: React.ReactNode;
  iconBefore?: React.ReactElement<typeof SVGElement>;
  iconAfter?: React.ReactElement<typeof SVGElement>;
};
