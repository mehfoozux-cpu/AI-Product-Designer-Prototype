/** Adelphi Design Tokens — Tailwind bridge
 *  Maps the semantic CSS variables from adelphi-tokens.css into Tailwind's
 *  theme, so utility classes like `bg-primary`, `text-surface-on`, `p-inset-md`,
 *  `rounded-card` resolve to YOUR tokens. AI tools (v0, Cursor, Figma Make,
 *  Claude Code) output Tailwind/shadcn by default, so this is the plug.
 *
 *  Usage: import adelphi-tokens.css once globally, then use these classes.
 *  Theme flips via data-theme="dark" on <html>.
 */
module.exports = {
  darkMode: ['selector', '[data-theme="dark"]'],
  content: ['./src/**/*.{js,ts,jsx,tsx,html}'],
  theme: {
    extend: {
      colors: {
        bg:        { DEFAULT: 'var(--color-bg)', on: 'var(--color-bg-on)', 'on-dim': 'var(--color-bg-on-dim)' },
        surface:   {
          DEFAULT: 'var(--color-surface)',
          on: 'var(--color-surface-on)',
          'on-dim': 'var(--color-surface-on-dim)',
          variant: 'var(--color-surface-variant)',
          'variant-on': 'var(--color-surface-variant-on)',
        },
        primary:   { DEFAULT: 'var(--color-primary)', on: 'var(--color-primary-on)', container: 'var(--color-primary-container)', 'container-on': 'var(--color-primary-container-on)' },
        secondary: { DEFAULT: 'var(--color-secondary)', on: 'var(--color-secondary-on)', container: 'var(--color-secondary-container)', 'container-on': 'var(--color-secondary-container-on)' },
        tertiary:  { DEFAULT: 'var(--color-tertiary)', on: 'var(--color-tertiary-on)' },
        error:     { DEFAULT: 'var(--color-error)', on: 'var(--color-error-on)' },
        warning:   { DEFAULT: 'var(--color-warning)', on: 'var(--color-warning-on)' },
        success:   { DEFAULT: 'var(--color-success)', on: 'var(--color-success-on)' },
        info:      { DEFAULT: 'var(--color-info)', on: 'var(--color-info-on)' },
        outline:   { DEFAULT: 'var(--color-outline)', primary: 'var(--color-outline-primary)' },
      },
      fontFamily: {
        display: 'var(--font-display)',
        heading: 'var(--font-heading)',
        body:    'var(--font-body)',
        data:    'var(--font-data)',
      },
      fontSize: {
        'display-lg':  ['var(--text-display-lg-size)',  { lineHeight: 'var(--text-display-lg-leading)',  letterSpacing: 'var(--text-display-lg-track)' }],
        'display-md':  ['var(--text-display-md-size)',  { lineHeight: 'var(--text-display-md-leading)',  letterSpacing: 'var(--text-display-md-track)' }],
        'display-sm':  ['var(--text-display-sm-size)',  { lineHeight: 'var(--text-display-sm-leading)',  letterSpacing: 'var(--text-display-sm-track)' }],
        'headline-lg': ['var(--text-headline-lg-size)', { lineHeight: 'var(--text-headline-lg-leading)', letterSpacing: 'var(--text-headline-lg-track)' }],
        'headline-md': ['var(--text-headline-md-size)', { lineHeight: 'var(--text-headline-md-leading)', letterSpacing: 'var(--text-headline-md-track)' }],
        'headline-sm': ['var(--text-headline-sm-size)', { lineHeight: 'var(--text-headline-sm-leading)', letterSpacing: 'var(--text-headline-sm-track)' }],
        'title-lg':    ['var(--text-title-lg-size)',    { lineHeight: 'var(--text-title-lg-leading)' }],
        'title-md':    ['var(--text-title-md-size)',    { lineHeight: 'var(--text-title-md-leading)' }],
        'title-sm':    ['var(--text-title-sm-size)',    { lineHeight: 'var(--text-title-sm-leading)' }],
        'subhead-lg':  ['var(--text-subhead-lg-size)',  { lineHeight: 'var(--text-subhead-lg-leading)' }],
        'subhead-md':  ['var(--text-subhead-md-size)',  { lineHeight: 'var(--text-subhead-md-leading)' }],
        'subhead-sm':  ['var(--text-subhead-sm-size)',  { lineHeight: 'var(--text-subhead-sm-leading)' }],
        'body-lg':     ['var(--text-body-lg-size)',     { lineHeight: 'var(--text-body-lg-leading)' }],
        'body-md':     ['var(--text-body-md-size)',     { lineHeight: 'var(--text-body-md-leading)' }],
        'body-reg':    ['var(--text-body-reg-size)',    { lineHeight: 'var(--text-body-reg-leading)' }],
        'body-sm':     ['var(--text-body-sm-size)',     { lineHeight: 'var(--text-body-sm-leading)' }],
        'caption':     ['var(--text-caption-reg-size)', { lineHeight: 'var(--text-caption-reg-leading)' }],
        'caption-sm':  ['var(--text-caption-sm-size)',  { lineHeight: 'var(--text-caption-sm-leading)' }],
        'byline':      ['var(--text-byline-reg-size)',  { lineHeight: 'var(--text-byline-reg-leading)' }],
        'cta-lg':      ['var(--text-cta-lg-size)',      { lineHeight: 'var(--text-cta-lg-leading)' }],
        'cta':         ['var(--text-cta-reg-size)',     { lineHeight: 'var(--text-cta-reg-leading)' }],
        'cta-sm':      ['var(--text-cta-sm-size)',      { lineHeight: 'var(--text-cta-sm-leading)' }],
      },
      fontWeight: {
        light: 'var(--weight-light)', normal: 'var(--weight-regular)', medium: 'var(--weight-medium)',
        emphasis: 'var(--weight-emphasis)', bold: 'var(--weight-bold)',
      },
      spacing: {
        1: 'var(--space-1)', 2: 'var(--space-2)', 3: 'var(--space-3)', 4: 'var(--space-4)',
        5: 'var(--space-5)', 6: 'var(--space-6)', 7: 'var(--space-7)', 8: 'var(--space-8)',
        9: 'var(--space-9)', 10: 'var(--space-10)', 11: 'var(--space-11)', 12: 'var(--space-12)',
        14: 'var(--space-14)', 16: 'var(--space-16)',
        'inset-xs': 'var(--space-inset-xs)', 'inset-sm': 'var(--space-inset-sm)',
        'inset-md': 'var(--space-inset-md)', 'inset-lg': 'var(--space-inset-lg)',
        'stack-md': 'var(--space-stack-md)', 'stack-lg': 'var(--space-stack-lg)', 'stack-xl': 'var(--space-stack-xl)',
        gutter: 'var(--space-gutter)',
      },
      borderRadius: {
        none: 'var(--radius-none)', input: 'var(--radius-input)', button: 'var(--radius-button)',
        'button-sm': 'var(--radius-button-sm)', 'button-lg': 'var(--radius-button-lg)',
        card: 'var(--radius-card)', pill: 'var(--radius-pill)',
      },
      borderWidth: {
        hairline: 'var(--stroke-hairline)', strong: 'var(--stroke-strong)',
        heavy: 'var(--stroke-heavy)', max: 'var(--stroke-max)',
      },
      boxShadow: {
        'elev-1': 'var(--elevation-1)', 'elev-2': 'var(--elevation-2)',
        'elev-3': 'var(--elevation-3)', 'elev-4': 'var(--elevation-4)',
      },
      height: {
        'control-sm': 'var(--control-sm-height)', 'control-regular': 'var(--control-regular-height)',
        'control-md': 'var(--control-md-height)', 'control-lg': 'var(--control-lg-height)',
      },
    },
  },
  plugins: [],
};
