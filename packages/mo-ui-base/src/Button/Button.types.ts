export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  startIcon?: React.ReactElement<typeof SVGElement>;
  endIcon?: React.ReactElement<typeof SVGElement>;
}