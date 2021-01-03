import { createStyled } from '@stitches/react';

export const rgb = {
  black: '13, 13, 13',
  grey100: '212, 213, 216',
  grey200: '180, 182, 187',
  grey300: '97, 99, 107',
  yellow: '230, 156, 32',
  blue: '32, 106, 230',
};

const theme = {
  fonts: {
    $primary: "'Inter', sans-serif",
  },
  colors: {
    // Values
    $black: `rgb(${rgb.black})`,
    $black20: `rgba(${rgb.black}, 0.2)`,
    $grey100: `rgb(${rgb.grey100})`,
    $grey10020: `rgba(${rgb.grey100}, 0.2)`,
    $grey200: `rgb(${rgb.grey200})`,
    $grey20030: `rgba(${rgb.grey200}, 0.3)`,
    $grey300: `rgb(${rgb.grey300})`,
    $grey30030: `rgba(${rgb.grey300}, 0.3)`,
    $yellow: `rgb(${rgb.yellow})`,
    $blue: `rgb(${rgb.blue})`,
    $blue20: `rgba(${rgb.blue}, 20)`,

    // Tokens
    $uiBackground: `rgb(${rgb.grey100})`,
    $surface1: `rgb(${rgb.black})`,
    $surface2: `rgba(${rgb.grey100}, 0.2)`,
    $surface3: `rgba(${rgb.grey200}, 0.3)`,
    $text1: `rgb(${rgb.black})`,
    $text2: `rgb(${rgb.grey100})`,
    $text3: `rgb(${rgb.grey300})`,
    $action: `rgb(${rgb.blue})`,
    $action20: `rgba(${rgb.blue}, 0.2)`,
  },
  fontSizes: {
    $1: '8px',
    $2: '12px',
    $3: '17px',
    $4: '24px',
    $5: '34px',
    $6: '48px',
    $7: '68px',
    $8: '96px',
    $9: '136px',
  },
  fontWeights: {
    $bold: '700',
    $regular: '400',
  },
  space: {
    $0: '0',
    $1: '5px',
    $2: '8px',
    $3: '10px',
    $4: '15px',
    $5: '25px',
    $6: '40px',
    $7: '65px',
    $8: '105px',
    $9: '170px',
  },
  sizes: {
    $site: '1103px',
    $content: '689px',
    $full: '100%',
  },
  radii: {
    $1: '10px',
    $round: '50%',
    $pill: '9999px',
  },
  zIndices: {
    $0: '0',
    $1: '10',
    $2: '20',
    $3: '30',
    $4: '40',
    $max: '999',
  },
  lineHeights: {
    $primary: '1.33',
    $tight: '1',
    $loose: '1.5',
  },
  // * Commenting out due to bug (is being tracked)
  // TODO: Add once fixed
  // transitions: {
  //   $default: 'all 225ms cubic-bezier(0.4, 0, 0.2, 1)',
  // },
};
const darkTheme = {
  // Dark theme tokens
  $uiBackground: `rgb(${rgb.black})`,
  $surface1: `rgb(${rgb.grey100})`,
  $surface2: `rgba(${rgb.black}), 0.2`,
  $surface3: `rgba(${rgb.grey300}, 0.3)`,
  $text1: `rgb(${rgb.grey100})`,
  $text2: `rgb(${rgb.black})`,
  $text3: `rgb(${rgb.grey100})`,
  $action: `rgb(${rgb.yellow})`,
  $action20: `rgba(${rgb.yellow}, 0.2)`,
};

const utils = {
  // Margin
  ma: (_config: any) => (
    value: keyof typeof theme['space'] | (string & {}),
  ) => ({
    marginLeft: value,
    marginRight: value,
    marginTop: value,
    marginBottom: value,
  }),
  mt: (_config: any) => (
    value: keyof typeof theme['space'] | (string & {}),
  ) => ({
    marginTop: value,
  }),
  mb: (_config: any) => (
    value: keyof typeof theme['space'] | (string & {}),
  ) => ({
    marginBottom: value,
  }),
  ml: (_config: any) => (
    value: keyof typeof theme['space'] | (string & {}),
  ) => ({
    marginLeft: value,
  }),
  mr: (_config: any) => (
    value: keyof typeof theme['space'] | (string & {}),
  ) => ({
    marginRight: value,
  }),
  mx: (_config: any) => (
    value: keyof typeof theme['space'] | (string & {}),
  ) => ({
    marginLeft: value,
    marginRight: value,
  }),
  my: (_config: any) => (
    value: keyof typeof theme['space'] | (string & {}),
  ) => ({
    marginTop: value,
    marginBottom: value,
  }),
  // Padding
  pa: (_config: any) => (
    value: keyof typeof theme['space'] | (string & {}),
  ) => ({
    paddingLeft: value,
    paddingRight: value,
    paddingTop: value,
    paddingBottom: value,
  }),
  pt: (_config: any) => (
    value: keyof typeof theme['space'] | (string & {}),
  ) => ({
    paddingTop: value,
  }),
  pb: (_config: any) => (
    value: keyof typeof theme['space'] | (string & {}),
  ) => ({
    paddingBottom: value,
  }),
  pl: (_config: any) => (
    value: keyof typeof theme['space'] | (string & {}),
  ) => ({
    paddingLeft: value,
  }),
  pr: (_config: any) => (
    value: keyof typeof theme['space'] | (string & {}),
  ) => ({
    paddingRight: value,
  }),
  px: (_config: any) => (
    value: keyof typeof theme['space'] | (string & {}),
  ) => ({
    paddingLeft: value,
    paddingRight: value,
  }),
  py: (_config: any) => (
    value: keyof typeof theme['space'] | (string & {}),
  ) => ({
    paddingTop: value,
    paddingBottom: value,
  }),
  spaceY: (_config: any) => (
    value: keyof typeof theme['space'] | (string & {}),
  ) => ({
    '> :not(template)': {
      marginBottom: value,
    },
    '> :last-child': {
      marginBottom: 0,
    },
  }),
  spaceX: (_config: any) => (
    value: keyof typeof theme['space'] | (string & {}),
  ) => ({
    '> :not(template)': {
      marginRight: value,
    },
    '> :last-child': {
      marginRight: 0,
    },
  }),

  ta: (_config: any) => (value: any) => ({ textAlign: value }),

  // Flexbox
  fd: (_config: any) => (value: any) => ({ flexDirection: value }),
  fw: (_config: any) => (value: any) => ({ flexWrap: value }),
  ai: (_config: any) => (value: any) => ({ alignItems: value }),
  ac: (_config: any) => (value: any) => ({ alignContent: value }),
  jc: (_config: any) => (value: any) => ({ justifyContent: value }),
  as: (_config: any) => (value: any) => ({ alignSelf: value }),
  fg: (_config: any) => (value: any) => ({ flexGrow: value }),
  fs: (_config: any) => (value: any) => ({ flexShrink: value }),
  fb: (_config: any) => (value: any) => ({ flexBasis: value }),

  // Gap
  g: (_config: any) => (
    value: keyof typeof theme['space'] | (string & {}),
  ) => ({
    gap: value,
  }),
  cg: (_config: any) => (
    value: keyof typeof theme['space'] | (string & {}),
  ) => ({
    columnGap: value,
  }),
  rg: (_config: any) => (
    value: keyof typeof theme['space'] | (string & {}),
  ) => ({
    rowGap: value,
  }),

  bc: (_config: any) => (
    value: keyof typeof theme['colors'] | (string & {}),
  ) => ({
    backgroundColor: value,
  }),

  br: (_config: any) => (
    value: keyof typeof theme['radii'] | (string & {}),
  ) => ({
    borderRadius: value,
  }),

  fz: (_config: any) => (
    value: keyof typeof theme['fontSizes'] | (string & {}),
  ) => ({
    fontSize: value,
  }),
  lh: (_config: any) => (
    value: keyof typeof theme['lineHeights'] | (string & {}),
  ) => ({
    lineHeight: value,
  }),

  pe: (_config: any) => (value: any) => ({ pointerEvents: value }),
};

export const { styled, css } = createStyled({
  tokens: theme,
  utils,
  breakpoints: {
    bp1: (rule) => `@media (max-width: 640px) { ${rule} }`,
    bp2: (rule) => `@media (max-width: 768px) { ${rule} }`,
    bp3: (rule) => `@media (max-width: 1024px) { ${rule} }`,
    bp4: (rule) => `@media (max-width: 1280px) { ${rule} }`,
    bp5: (rule) => `@media (max-width: 1440px) { ${rule} }`,
  },
});

export const darkThemeClass = css.theme({ colors: darkTheme });

// TODO: Add self hosted font (will be a feature in alpha)

// * CSS RESET
css.global({
  'html, body, p, ol, ul, li, dl, dt, dd, blockquote, figure, fieldset, legend, textarea, pre, iframe, hr, h1, h2, h3, h4, h5, h6': {
    margin: 0,
    padding: 0,
    textAlign: 'left',
  },
  'h1, h2, h3, h4, h5, h6': {
    fontSize: '100%',
    fontWeight: 'normal',
  },
  ul: {
    listStyle: 'none',
  },
  'button, input, select, textarea': {
    margin: 0,
  },
  html: {
    boxSizing: 'border-box',
    fontFamily: '$primary',
    backgroundColor: '$uiBackground',
    color: '$text1',
  },
  ' *, *:before, *:after': {
    boxSizing: 'inherit',
  },
  'img, embed, iframe, object, audio, video': {
    height: 'auto',
    maxWidth: '100%',
  },
  iframe: {
    border: 0,
  },
  table: {
    borderCollapse: 'collapse',
    borderSpacing: 0,
  },
  'th, td': {
    padding: 0,
    textAlign: 'left',
  },
  button: {
    backgroundColor: 'transparent',
    border: 'none',
    outline: 'none',
    padding: 0,
    margin: 0,
    color: 'inherit',
    cursor: 'pointer',
  },
  a: {
    textDecoration: 'none',
    color: 'inherit',
  },
});
