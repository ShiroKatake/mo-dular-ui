//...

export type Headings = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export type Sizes = 'xs' | 'sm' | 'md' | 'lg';

export type HeadingTheme = {
  [key in Headings]?: {
    fontSize: {
      mobile: {
        [key in Sizes]?: string;
      };
      desktop: {
        [key in Sizes]?: string;
      };
    };
    lineHeight: {
      mobile: {
        [key in Sizes]?: string;
      };
      desktop: {
        [key in Sizes]?: string;
      };
    };
  };
};

//...
