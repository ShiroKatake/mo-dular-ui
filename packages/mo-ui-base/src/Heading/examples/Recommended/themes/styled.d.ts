//...

type BreakpointSpecificStyles = {
  desktop: {
    sm?: string;
    md?: string;
    lg?: string;
  };
  mobile: {
    sm?: string;
    md?: string;
    lg?: string;
  };
};

export interface HeadingStyles {
  h1: {
    fontSize: BreakpointSpecificStyles;
    lineHeight: BreakpointSpecificStyles;
  };
  h2: {
    fontSize: BreakpointSpecificStyles;
    lineHeight: BreakpointSpecificStyles;
  };
  h3: {
    fontSize: BreakpointSpecificStyles;
    lineHeight: BreakpointSpecificStyles;
  };
  h4: {
    fontSize: BreakpointSpecificStyles;
    lineHeight: BreakpointSpecificStyles;
  };
}

//...
