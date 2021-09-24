module.exports = {
  purge: {
    enabled: false,
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
    extend: {
      gridTemplateColumns: {
        xlhero: '725px auto',
        hero: '965px auto',
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
