import { RuleSet } from 'styled-components';

export type Simplify<T> = T extends Function ? T : { [K in keyof T]: T[K] };

export type StyledHeadingProps = Simplify<{
  $styledLevel: 1 | 2 | 3 | 4 | 5 | 6;
  // Approach 1: Passing a function that returns the style object
  $dynamicHeadingStyle?: (level: number) => RuleSet<object>;
}>;

export type HeadingProps = Simplify<{
  level: 1 | 2 | 3 | 4 | 5 | 6;
  fakeHeading?: boolean;
  dynamicHeadingStyle?: (level: number) => RuleSet<object>;
  children: React.ReactNode;
  className?: string;
}>;
