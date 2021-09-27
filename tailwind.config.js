module.exports = {
  purge: {
    enabled: true,
    content: ['./**/*.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      spartan: ['Spartan', 'sans-serif'],
    },
    letterSpacing: {
      xwide: '0.6rem',
      xswide: '0.4rem',
    },
    fontSize: {
      xs: '.75rem',
      sm: '.875rem',
      tiny: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      ct: '1.7rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    maxHeight: {
      custom: '850px',
    },
    height: {
      small: '1102px',
      medium: '813px',
      large: '813px',
      xlarge: '1085px',
      '2xlarge': '461px',
      '3xlarge': '583px',
      28: '7rem',
      full: '100%',
    },
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      gridTemplateColumns: {
        xlhero: '725px auto',
        hero: '917px auto',
        section: ' auto 650px auto',
      },
      gridTemplateRows: {
        hero: '3fr 2fr',
      },
    },
  },
  variants: {
    extend: {},
    fill: ['hover', 'focus'],
  },
  plugins: [],
};
